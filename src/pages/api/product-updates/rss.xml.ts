import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import strip from 'strip-markdown';

interface VersionData {
  version: string;
  date: string;
  hasFeatures: boolean;
  id: number;
  note?: string;
}

// Helper to convert markdown to HTML
async function markdownToHTML(markdown: string): Promise<string> {
  // Remove YouTube components and convert to links
  let processed = markdown.replace(/<YouTube videoId="([^"]+)" \/>/g, 
    '\n\n[Watch video](https://www.youtube.com/watch?v=$1)\n\n');
  
  // Convert markdown to HTML using remark
  const { remark } = await import('remark');
  const { default: html } = await import('remark-html');
  
  const result = await remark()
    .use(html)
    .process(processed);
  
  return result.toString();
}

// Helper to extract description from content
async function extractDescription(content: string, note?: string): Promise<string> {
  if (note) {
    return note;
  }
  
  // Convert to plain text for description
  const plainText = await remark()
    .use(strip)
    .process(content);
  
  const text = plainText.toString().trim();
  const firstParagraph = text.split('\n\n')[0];
  
  return firstParagraph.length > 300 
    ? firstParagraph.substring(0, 297) + '...' 
    : firstParagraph;
}

// Helper to parse date string
function parseDate(dateStr: string): Date {
  // Remove "Released on " prefix if present
  const cleanDate = dateStr.replace('Released on ', '');
  
  // Parse date formats like "15th April 2025"
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                  'July', 'August', 'September', 'October', 'November', 'December'];
  
  const match = cleanDate.match(/(\d+)\w*\s+(\w+)\s+(\d{4})/);
  if (match) {
    const day = parseInt(match[1]);
    const monthIndex = months.findIndex(m => m === match[2]);
    const year = parseInt(match[3]);
    
    if (monthIndex !== -1) {
      return new Date(year, monthIndex, day);
    }
  }
  
  // Fallback to default date parsing
  return new Date(cleanDate);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const contentDirectory = path.join(process.cwd(), 'content', 'product-updates');
    
    // Read versions.json
    const versionsFile = path.join(contentDirectory, 'versions.json');
    const versions: VersionData[] = JSON.parse(fs.readFileSync(versionsFile, 'utf8'));
    
    // Sort versions by date (newest first)
    const sortedVersions = versions.sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return dateB.getTime() - dateA.getTime();
    });
    
    // Generate RSS items
    const rssItems = await Promise.all(
      sortedVersions.slice(0, 20).map(async (version) => {
        const filename = path.join(contentDirectory, `${version.version}.md`);
        
        if (fs.existsSync(filename)) {
          const fileContent = fs.readFileSync(filename, 'utf8');
          const { data, content } = matter(fileContent);
          
          // Get description
          const description = await extractDescription(content, data.note);
          
          // Convert full content to HTML
          const htmlContent = await markdownToHTML(content);
          
          const pubDate = parseDate(version.date);
          const link = `https://openmetadata.org/product-updates#${version.version}`;
          
          return `
    <item>
      <title>OpenMetadata ${version.version}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description><![CDATA[${description}]]></description>
      <content:encoded><![CDATA[${htmlContent}]]></content:encoded>
      <pubDate>${pubDate.toUTCString()}</pubDate>
      <category>${version.hasFeatures ? 'Major Release' : 'Minor Release'}</category>
    </item>`;
        }
        return '';
      })
    );
    
    // Generate RSS feed
    const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>OpenMetadata Product Updates</title>
    <link>https://openmetadata.org/product-updates</link>
    <description>Stay updated with the latest features, improvements, and releases from OpenMetadata</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://openmetadata.org/api/product-updates/rss.xml" rel="self" type="application/rss+xml"/>
    ${rssItems.filter(item => item).join('')}
  </channel>
</rss>`;
    
    // Set proper headers
    res.setHeader('Content-Type', 'application/rss+xml; charset=UTF-8');
    res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=3600');
    res.status(200).send(rssFeed);
    
  } catch (error) {
    console.error('Error generating RSS feed:', error);
    res.status(500).json({ error: 'Failed to generate RSS feed' });
  }
}
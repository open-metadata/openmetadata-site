import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import NavbarDev from '../components/NavbarDev/NavbarDev.component';
import NavbarStrip from '../components/NavbarDev/NavbarStrip.component';
import FooterDev from '../components/FooterDev/FooterDev';
import { mdxComponents } from '../components/MDXComponents';

interface VersionInfo {
  version: string;
  date: string;
  hasFeatures: boolean;
  note?: string;
}

interface VersionData {
  frontMatter: {
    id: number;
    version: string;
    date: string;
    note?: string;
  };
  mdxSource: MDXRemoteSerializeResult;
  hasFeatures: boolean;
  hasChangelog: boolean;
  hasBreaking: boolean;
}

interface ProductUpdatesProps {
  versions: VersionInfo[];
  versionData: { [key: string]: VersionData };
}

const ProductUpdates = ({ versions, versionData }: ProductUpdatesProps) => {
  const router = useRouter();
  const [selectedVersion, setSelectedVersion] = useState(versions[0].version);
  const [activeTab, setActiveTab] = useState<'features' | 'breaking' | 'changelog' | null>(null);

  const selectedData = versionData[selectedVersion];
  const contentRef = useRef<HTMLDivElement>(null);

  // Determine available tabs based on content
  const hasFeatures = selectedData?.hasFeatures || false;
  const hasBreaking = selectedData?.hasBreaking || false;
  const hasChangelog = selectedData?.hasChangelog || false;

  // Handle URL hash on initial load and changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove #
      if (!hash) return;

      // Parse hash format: v1.5.5 or v1.5.5-breaking
      const parts = hash.split('-');
      const version = parts[0];
      const section = parts[1];

      // Check if version exists
      if (versions.some(v => v.version === version)) {
        setSelectedVersion(version);
        
        // Set tab based on section if specified
        if (section === 'features' && versionData[version]?.hasFeatures) {
          setActiveTab('features');
        } else if (section === 'breaking' && versionData[version]?.hasBreaking) {
          setActiveTab('breaking');
        } else if (section === 'changelog' && versionData[version]?.hasChangelog) {
          setActiveTab('changelog');
        }
      }
    };

    // Handle initial load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [versions, versionData]);

  // Set initial active tab based on available content
  useEffect(() => {
    if (activeTab === null || 
        (activeTab === 'features' && !hasFeatures) || 
        (activeTab === 'breaking' && !hasBreaking) || 
        (activeTab === 'changelog' && !hasChangelog)) {
      if (hasFeatures) {
        setActiveTab('features');
      } else if (hasBreaking) {
        setActiveTab('breaking');
      } else if (hasChangelog) {
        setActiveTab('changelog');
      }
    }
  }, [selectedVersion, hasFeatures, hasBreaking, hasChangelog]);

  // Update URL when version or tab changes
  useEffect(() => {
    if (activeTab) {
      const hash = activeTab === 'features' ? selectedVersion : `${selectedVersion}-${activeTab}`;
      window.history.replaceState(null, '', `#${hash}`);
    }
  }, [selectedVersion, activeTab]);

  // Handle version change
  const handleVersionChange = (version: string) => {
    setSelectedVersion(version);
    setActiveTab(null); // Reset tab to trigger automatic selection of first available tab
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle tab content visibility
  useEffect(() => {
    if (!contentRef.current || activeTab === null) return;

    const content = contentRef.current;
    const allElements = content.querySelectorAll('*');
    
    let currentSection = '';
    let currentSubsection = '';
    let shouldShowElement = false;
    let inBreakingSection = false;

    allElements.forEach(el => {
      const element = el as HTMLElement;
      
      // Track current section based on H2
      if (el.tagName === 'H2') {
        const text = el.textContent || '';
        if (text.includes('Features')) {
          currentSection = 'features';
          currentSubsection = '';
          inBreakingSection = false;
        } else if (text.includes('Breaking')) {
          currentSection = 'breaking';
          currentSubsection = '';
          inBreakingSection = true;
        } else if (text.includes('Changelog')) {
          currentSection = 'changelog';
          currentSubsection = '';
          inBreakingSection = false;
        }
        
        // For section headers, determine if they should be shown
        if (activeTab === 'features') {
          // Hide the Features H2 header when on Features tab
          shouldShowElement = false;
        } else if (activeTab === 'breaking') {
          // Hide the Breaking changes H2 header when on Breaking tab
          shouldShowElement = false;
        } else if (activeTab === 'changelog') {
          // Hide the Changelog H2 header when on Changelog tab
          shouldShowElement = false;
        }
      }
      
      // Track subsection based on H3
      else if (el.tagName === 'H3') {
        const text = el.textContent || '';
        if (currentSection === 'changelog' && 
            (text.includes('Breaking') || text.includes('Incompatible') || text.includes('Backward'))) {
          currentSubsection = 'breaking';
          inBreakingSection = true;
        } else {
          currentSubsection = 'other';
          inBreakingSection = false;
        }
        
        // For H3 headers, determine if they should be shown
        if (activeTab === 'features') {
          shouldShowElement = currentSection === 'features';
        } else if (activeTab === 'breaking') {
          // Show H3 headers when in breaking section or when it's a breaking subsection
          shouldShowElement = currentSection === 'breaking' || currentSubsection === 'breaking';
        } else if (activeTab === 'changelog') {
          shouldShowElement = currentSection === 'changelog';
        }
      }
      
      // For all other elements
      else {
        if (activeTab === 'features') {
          shouldShowElement = currentSection === 'features';
        } else if (activeTab === 'breaking') {
          // Show content when in breaking section (H2) or breaking subsection (H3)
          shouldShowElement = currentSection === 'breaking' || inBreakingSection;
        } else if (activeTab === 'changelog') {
          shouldShowElement = currentSection === 'changelog';
        }
      }

      // Apply visibility
      element.style.display = shouldShowElement ? '' : 'none';
    });
  }, [activeTab, selectedData]);

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Product Updates | OpenMetadata</title>
        <meta name="description" content="Stay updated with the latest features, improvements, and changes in OpenMetadata" />
        <meta property="og:title" content="Product Updates | OpenMetadata" />
        <meta property="og:description" content="Stay updated with the latest features, improvements, and changes in OpenMetadata" />
        <link rel="canonical" href="https://open-metadata.org/product-updates" />
        <link rel="alternate" type="application/rss+xml" title="OpenMetadata Product Updates RSS" href="/api/product-updates/rss.xml" />
        <style>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 3px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #D0C2F7;
            border-radius: 3px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #7147E8;
          }
          .product-updates h2 {
            @apply text-xl md:text-2xl font-semibold text-[#292929] mb-6 mt-10 first:mt-0 flex items-center;
          }
          .product-updates h3 {
            @apply text-lg md:text-xl font-semibold text-[#292929] mb-4 mt-8 first:mt-0;
          }
          .product-updates h3.collate {
            @apply flex items-start justify-between gap-4;
          }
          .product-updates p {
            @apply text-[#767676] text-sm md:text-base leading-relaxed mb-4;
          }
          .product-updates p:last-child {
            @apply mb-0;
          }
          .product-updates ul {
            @apply list-none space-y-2 mb-6 ml-0 pl-0;
          }
          .product-updates ol {
            @apply list-decimal space-y-2 mb-6 ml-6 pl-2;
          }
          .product-updates ol li {
            @apply text-[#767676] text-sm md:text-base leading-relaxed pl-2 marker:text-[#7147E8];
          }
          .product-updates ul li {
            @apply text-[#767676] text-sm md:text-base leading-relaxed pl-7 relative;
          }
          .product-updates ul li::before {
            content: "•";
            @apply text-[#7147E8] absolute left-2 top-0;
          }
          .product-updates li p {
            @apply mb-0;
          }
          .product-updates h3 + ul,
          .product-updates h3 + p,
          .product-updates p + ul {
            @apply mt-2;
          }
          .product-updates ul + h3 {
            @apply mt-8;
          }
          .feature-section {
            @apply bg-[#F1EDFD] rounded-lg p-6 mb-6;
          }
          .feature-section.collate {
            @apply bg-gradient-to-r from-[#F1EDFD] to-[#E8E0FC] border-2 border-[#D0C2F7];
          }
          
        `}</style>
      </Head>

      <div className="mx-auto fixed top-0 w-full z-[1030]">
        <NavbarDev onClick={() => {}} />
        <NavbarStrip />
      </div>

      <main className="mt-20 md:mt-24 lg:mt-32 bg-white min-h-screen">
        <div className="max-w-[1440px] mx-auto px-4 md:px-10 xl:px-20 py-8 md:py-12">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3">
              <h1 className="text-4xl md:text-5xl font-medium tracking-[-0.02em] text-[#292929]">
                Product Updates
              </h1>
              <a 
                href="/api/product-updates/rss.xml" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F1EDFD] hover:bg-[#E2DAFA] transition-colors"
                title="Subscribe to RSS Feed"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 text-[#7147E8]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.429 5.1v2.4c7.248 0 13.114 5.886 13.114 13.142h2.4C18.943 12.066 12 5.1 3.429 5.1zm0 4.8v2.4a4.351 4.351 0 014.343 4.342h2.4c0-3.72-3.023-6.742-6.743-6.742zM6.171 16.485a1.714 1.714 0 11-3.428 0 1.714 1.714 0 013.428 0z"/>
                </svg>
              </a>
            </div>
            <p className="text-lg md:text-xl text-[#767676] mt-4 max-w-3xl mx-auto">
              Stay updated with the latest features, improvements, and changes in OpenMetadata
            </p>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Sidebar - Version List */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="lg:sticky lg:top-32">
                <h2 className="text-lg font-semibold text-[#292929] mb-4">Versions</h2>
                <div className="lg:hidden mb-4">
                  <select
                    value={selectedVersion}
                    onChange={(e) => handleVersionChange(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-[#E2DAFA] text-[#292929] bg-white focus:outline-none focus:border-[#7147E8]"
                  >
                    {versions.map((version) => (
                      <option key={version.version} value={version.version}>
                        {version.version} - {version.date.replace('Released on ', '')}
                      </option>
                    ))}
                  </select>
                </div>
                <nav className="space-y-2 hidden lg:block overflow-y-auto pr-2 custom-scrollbar" style={{ maxHeight: 'calc(100vh - 16rem)' }}>
                  {versions.map((version) => (
                    <button
                      key={version.version}
                      onClick={() => handleVersionChange(version.version)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                        selectedVersion === version.version
                          ? 'bg-[#F1EDFD] text-[#7147E8] font-medium border-l-4 border-[#7147E8]'
                          : 'text-[#767676] hover:bg-gray-50 hover:text-[#292929]'
                      }`}
                    >
                      <div className="flex flex-col">
                        <span className="text-base">{version.version}</span>
                        <span className="text-sm opacity-75">{version.date.replace('Released on ', '')}</span>
                      </div>
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Panel */}
            <div className="flex-1">
              {selectedData && (
                <div className="bg-white rounded-xl border border-[#E2DAFA] p-8 md:p-10">
                  {/* Version Header */}
                  <div className="mb-8 pb-8 border-b border-[#E2DAFA]">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div className="flex items-center gap-3">
                        <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] text-[#292929]">
                          {selectedData.frontMatter.version}
                        </h2>
                        <button
                          onClick={() => {
                            const url = window.location.href;
                            navigator.clipboard.writeText(url);
                            // Optional: Add a toast notification here
                          }}
                          className="p-2 rounded-lg hover:bg-[#F1EDFD] transition-colors group"
                          title="Copy link to this version"
                        >
                          <svg className="w-5 h-5 text-[#767676] group-hover:text-[#7147E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                          </svg>
                        </button>
                      </div>
                      <span className="text-[#767676] text-lg">{selectedData.frontMatter.date}</span>
                    </div>
                    {selectedData.frontMatter.note && (
                      <p className="mt-4 text-[#767676] text-lg">{selectedData.frontMatter.note}</p>
                    )}
                  </div>

                  {/* Tabs */}
                  <div className="mb-8">
                    <div className="flex flex-wrap gap-2 border-b border-[#E2DAFA]">
                      {hasFeatures && (
                        <button
                          onClick={() => setActiveTab('features')}
                          className={`px-6 py-3 text-sm md:text-base font-medium border-b-2 transition-colors ${
                            activeTab === 'features'
                              ? 'text-[#7147E8] border-[#7147E8]'
                              : 'text-[#767676] border-transparent hover:text-[#292929]'
                          }`}
                        >
                          ✨ Features
                        </button>
                      )}
                      {hasBreaking && (
                        <button
                          onClick={() => setActiveTab('breaking')}
                          className={`px-6 py-3 text-sm md:text-base font-medium border-b-2 transition-colors ${
                            activeTab === 'breaking'
                              ? 'text-[#7147E8] border-[#7147E8]'
                              : 'text-[#767676] border-transparent hover:text-[#292929]'
                          }`}
                        >
                          ⚠️ Breaking Changes
                        </button>
                      )}
                      {hasChangelog && (
                        <button
                          onClick={() => setActiveTab('changelog')}
                          className={`px-6 py-3 text-sm md:text-base font-medium border-b-2 transition-colors ${
                            activeTab === 'changelog'
                              ? 'text-[#7147E8] border-[#7147E8]'
                              : 'text-[#767676] border-transparent hover:text-[#292929]'
                          }`}
                        >
                          📋 Changelog
                        </button>
                      )}
                    </div>
                  </div>

                  {/* MDX Content */}
                  <div className="product-updates" ref={contentRef}>
                    <MDXRemote {...selectedData.mdxSource} components={mdxComponents} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <FooterDev />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const contentDirectory = path.join(process.cwd(), 'content', 'product-updates');
  
  // Read versions.json
  const versionsFile = path.join(contentDirectory, 'versions.json');
  const versionsData = JSON.parse(fs.readFileSync(versionsFile, 'utf8'));
  
  // Sort versions in descending order (latest first)
  const versions = versionsData.sort((a: any, b: any) => {
    const versionA = a.version.replace('v', '').split('.').map(Number);
    const versionB = b.version.replace('v', '').split('.').map(Number);
    
    for (let i = 0; i < 3; i++) {
      if (versionA[i] !== versionB[i]) {
        return versionB[i] - versionA[i];
      }
    }
    return 0;
  });

  // Read and process markdown files
  const versionData: { [key: string]: VersionData } = {};

  for (const version of versions) {
    const fileName = `${version.version}.md`;
    const filePath = path.join(contentDirectory, fileName);
    
    // Check if file exists
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContent);
      
      // Check for sections in the raw markdown content
      const hasFeatures = content.includes('## Features');
      const hasChangelog = content.includes('## Changelog');
      
      // Check for breaking changes in section headers (H2 or H3 level)
      const lines = content.split('\n');
      const hasBreaking = lines.some(line => 
        (line.startsWith('##') || line.startsWith('###')) && 
        (line.includes('Breaking') || 
         line.includes('Incompatible') || 
         line.includes('Backward'))
      );
      
      const mdxSource = await serialize(content);
      
      versionData[version.version] = {
        frontMatter: {
          id: data.id,
          version: data.version,
          date: data.date,
          note: data.note || null,
        },
        mdxSource,
        hasFeatures,
        hasChangelog,
        hasBreaking,
      };
    }
  }

  return {
    props: {
      versions,
      versionData,
    },
  };
};

export default ProductUpdates;
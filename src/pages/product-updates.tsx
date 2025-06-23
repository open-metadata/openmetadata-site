import React, { useState } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
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
}

interface ProductUpdatesProps {
  versions: VersionInfo[];
  versionData: { [key: string]: VersionData };
}

const ProductUpdates = ({ versions, versionData }: ProductUpdatesProps) => {
  const [selectedVersion, setSelectedVersion] = useState(versions[0].version);

  const selectedData = versionData[selectedVersion];

  // Scroll to top when version changes
  const handleVersionChange = (version: string) => {
    setSelectedVersion(version);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Product Updates | OpenMetadata</title>
        <meta name="description" content="Stay updated with the latest features, improvements, and changes in OpenMetadata" />
        <meta property="og:title" content="Product Updates | OpenMetadata" />
        <meta property="og:description" content="Stay updated with the latest features, improvements, and changes in OpenMetadata" />
        <link rel="canonical" href="https://open-metadata.org/product-updates" />
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
            <h1 className="text-4xl md:text-5xl font-medium tracking-[-0.02em] text-[#292929]">
              Product Updates
            </h1>
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
                      <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] text-[#292929]">
                        {selectedData.frontMatter.version}
                      </h2>
                      <span className="text-[#767676] text-lg">{selectedData.frontMatter.date}</span>
                    </div>
                    {selectedData.frontMatter.note && (
                      <p className="mt-4 text-[#767676] text-lg">{selectedData.frontMatter.note}</p>
                    )}
                  </div>

                  {/* MDX Content */}
                  <div className="product-updates">
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
      
      const mdxSource = await serialize(content);
      
      versionData[version.version] = {
        frontMatter: {
          id: data.id,
          version: data.version,
          date: data.date,
          note: data.note || null,
        },
        mdxSource,
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
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://open-metadata.org',
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  additionalPaths: async (config) => [
    {
      loc: '/api/product-updates/rss.xml',
      changefreq: 'weekly',
      priority: 0.8,
    },
  ],
};

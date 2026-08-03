export interface PageMetadata {
  title: string;
  description?: string;
}

// Keyed by router.pathname (the file-based route, e.g. "/case-study/gorgias").
// Pages not listed here fall back to the site-wide default title/description in _app.tsx.
export const PAGE_METADATA: Record<string, PageMetadata> = {
  "/community": {
    title: "Meet & Greet on Slack | OpenMetadata",
  },
  "/datacontracts": {
    title: "Build Collaborative Data Contracts in Open-Source with OpenMetadata",
  },
  "/events": {
    title: "OpenMetadata Community Events Calendar",
  },
  "/mcp": {
    title: "OpenMetadata: Now with MCP Server",
  },
  "/case-studies": {
    title: "Success Stories & Case Studies | OpenMetadata",
  },
  "/cve-list": {
    title: "OpenMetadata Security Vulnerabilities | Changelog",
  },
  "/learning-center": {
    title: "Learning Center | OpenMetadata",
  },
  "/learning-center/[...params]": {
    title: "Learning Center | OpenMetadata",
  },
  "/resources/webinar/carrefour-brasil-spotlight": {
    title: "Carrefour Brasil's Data Journey with OpenMetadata | Access",
  },
  "/resources/webinar/carrefour-brasil-spotlight/ty-video": {
    title: "Carrefour Brasil's Data Journey with OpenMetadata",
  },
  "/resources/webinar/data-culture/ty-video": {
    title: "Data Culture with Uber's Former Chief Architect | Access",
  },
  "/resources/webinar/gorgias-spotlight/ty-video": {
    title: "Gorgias Data Management Journey with OpenMetadata | Access",
  },
  "/case-study/aspire": {
    title: "Aspire Builds a Trusted Metadata Foundation With OpenMetadata",
    description: "Learn how Aspire unified metadata across its finance platform using OpenMetadata, replacing manual documentation with a trusted system of record, standardizing data quality, and enabling faster, self-serve analytics across 1,700+ tables and 6,100+ quality checks.",
  },
  "/case-study/carrefour-brazil": {
    title: "Carrefour Brazil: Data Governance Success with OpenMetadata",
  },
  "/case-study/ednon": {
    title: "Ednon Eliminated Data Silos for 80+ Municipalities with OpenMetadata",
    description: "See how Ednon deployed OpenMetadata to help Deputación da Coruña catalog 1,400+ assets, improve documentation 40+ PP, and implement governance for millions of citizens.",
  },
  "/case-study/forter": {
    title: "Forter Scaled Metadata for Enterprise Fraud Prevention",
    description: "Discover how Forter built a centralized metadata foundation to manage sensitive, high-volume data while deterring malicious behavior for enterprise merchants.",
  },
  "/case-study/freenow": {
    title: "FREENOW: OpenMetadata powered Data Announcement Engine",
    description: "Discover how FREENOW built an OpenMetadata-powered system to automate data communications across 17k assets and 300+ downstream dependencies",
  },
  "/case-study/gorgias": {
    title: "Gorgias: Data Discovery Automation with OpenMetadata",
  },
  "/case-study/indrive": {
    title: "inDrive Scales Global Data Governance with OpenMetadata",
    description: "See how inDrive tracks and governs 100+ AWS-hosted databases for global teams, enabling faster analytics, automated compliance, and trusted data at scale.",
  },
  "/case-study/kansai-airports": {
    title: "Kansai Airports Streamlines Aviation Operations with OpenMetadata",
    description: "Discover how Kansai Airports modernized its aviation data operations, breaking down silos across dashboards and systems, reducing metadata management effort by 67%, and enabling faster, trusted insights for 50M+ passengers annually.",
  },
  "/case-study/loggi": {
    title: "Loggi’s data delivers 30% faster with OpenMetadata",
    description: "Loggi saves $24K annually with OpenMetadata. Cut dashboards from 18K to 2K with streamlined data governance",
  },
  "/case-study/nw": {
    title: "NW: Driving Clean Energy With Data Governance Powered By OpenMetadata",
    description: "See how NW implemented OpenMetadata to centralize governance: automating lineage, enriching metadata, and scaling insights across 90+ connectors.",
  },
  "/case-study/openai": {
    title: "How OpenAI Built a Self-Service AI Data Agent on OpenMetadata",
    description: "See how OpenAI's Data Productivity team built Kepler, an internal AI data agent serving 3,500+ employees, on OpenMetadata as the open context layer. Repeat queries dropped from 22 minutes to under 90 seconds.",
  },
  "/case-study/solocal": {
    title: "Solocal Delivers Trusted Analytics to 260K+ Local Businesses with OpenMetadata",
    description: "Learn how Solocal, operator of PagesJaunes, uses OpenMetadata to deliver trusted analytics for France’s most-visited local business platform.",
  },
  "/case-study/thndr": {
    title: "Thndr: Protects 3M+ Accounts with OpenMetadata Governance",
    description: "See how fintech Thndr's 6-person data team scales governance for 3M+ investor accounts with OpenMetadata's automated PII detection and real-time quality monitoring",
  },
  "/case-study/vrt": {
    title: "Enabling real data ownership at VRT with OpenMetadata",
    description: "Discover how Belgian public media broadcaster VRT established true ownership of data quality fixes at scale through their data transformation partners at Dataroots and OpenMetadata!",
  },
  "/case-study/wix": {
    title: "Wix Builds an AI-Ready Data Foundation with OpenMetadata",
    description: "Discover how Wix leverages OpenMetadata to deliver real-time insights, streamline analyst work, and power AI agents that drive faster product decisions for 200M+ users.",
  },
  "/case-study/woop": {
    title: "Woop Enables Self-Service Data Discovery with OpenMetadata",
    description: "See how logistics platform Woop's 2-person data team manages 1,600+ assets for 100+ users with OpenMetadata's automated governance and self-service discovery.",
  },
  "/case-study/yelp": {
    title: "Yelp Builds a Trust-First Discovery Layer on OpenMetadata",
    description: "See how Yelp's Analytics Engineering team scaled OpenMetadata to ~100,000 assets and built a trust-first, persona-aware discovery layer with a custom search algorithm and a token-efficient in-house MCP server, turning OpenMetadata into an open context layer that people and AI agents can trust.",
  },
};

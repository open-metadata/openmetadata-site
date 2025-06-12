const HEADER_IMAGE_ROUTE = '/assets/customer-gallery/header';
const GALLERY_IMAGE_ROUTE = '/assets/testimonials';

export const HEADER_CUSTOMERS = [
    {
        backgroundImage: `${HEADER_IMAGE_ROUTE}/mango-bg.svg`,
        logo: `${HEADER_IMAGE_ROUTE}/mango-logo.svg`,
        title: 'Mango increases productivity of data teams up to 20%',
        buttonText: 'Read More',
        url: 'https://www.getcollate.io/customers/mango'
    },
    {
        backgroundImage: `${HEADER_IMAGE_ROUTE}/carrefour-bg.svg`,
        logo: `${HEADER_IMAGE_ROUTE}/carrefour-logo.svg`,
        title: 'Carrefour Brazil Automates Data Governance For 500+ Active Users',
        buttonText: 'Read More',
        url: '/case-study/carrefour-brazil'
    },
    {
        backgroundImage: `${HEADER_IMAGE_ROUTE}/loggi-bg.svg`,
        logo: `${HEADER_IMAGE_ROUTE}/loggi-logo.svg`,
        title: 'Loggi 16,000 dashboards removed for huge cost savings',
        buttonText: 'Watch Now',
        url: 'https://youtu.be/cc9ID6jh5NM?si=y06QXNAi_dEPYXLl',
    },
    {
        backgroundImage: `${HEADER_IMAGE_ROUTE}/gorgias-bg.svg`,
        logo: `${HEADER_IMAGE_ROUTE}/gorgias-logo.svg`,
        title: 'Gorgias 45K+ Data assets cataloged',
        buttonText: 'Read More',
        url: '/case-study/gorgias',
    },
    {
        backgroundImage: `${HEADER_IMAGE_ROUTE}/freenow-bg.svg`,
        logo: `${HEADER_IMAGE_ROUTE}/freenow-logo.svg`,
        title: '7 business domains, managedwith 30+ analytics process per domain',
        buttonText: 'Read More',
        url: 'https://medium.com/breaking-data-silos-lineage-for-cross-domain/data-management-at-freenow-the-lineage-and-announcements-approach-177f387a9180',
    },
]

export const INDUSTRY_LIST = [
    'All',
    'Financial',
    'Technology',
    'Retail',
    'Transportation',
    'Other',
]

export const CUSTOMER_GALLERY = [
    {
        logo: `${GALLERY_IMAGE_ROUTE}/beeline-logo.webp`,
        industry: 'Technology',
        testimonial: 'We came across OpenMetadata as an alternative to heavy, expensive, and rigid proprietary products without proper customer support and little chance of adapting to the ever changing market needs. OpenMetadata offers some of the easiest, versatile methods for data-handling and data-consumption as well as the most supportive community.',
        customerName: 'Rinat Abdurakhmanov',
        customerDesignation: 'Chief Data Officer',
        company: 'Beeline',
        imgSize: {
            width: 60,
            height: 50
        },
    },
    {
        logo: `${GALLERY_IMAGE_ROUTE}/moove-logo.webp`,
        industry: 'Financial',
        testimonial: 'Overall, OpenMetadata has exceeded our expectations and has become an integral part of our data governance strategy. We highly recommend it to any organization seeking to enhance their data management, governance, and data-driven decision-making processes.',
        customerName: 'Laila Patel',
        customerDesignation: 'Data Governance Specialist',
        company: 'Moove',
        imgSize: {
            width: 170,
            height: 50
        },
    },
    {
        logo: `${GALLERY_IMAGE_ROUTE}/zen-business.webp`,
        industry: 'Technology',
        testimonial: 'As a data scientist working in a large organization, I can confidently say that OpenMetadata has been a game-changer for us.  Overall, I highly recommend OpenMetadata to any organization looking to streamline their data management processes and improve collaboration across teams.',
        customerName: 'Cade Parker',
        customerDesignation: 'Senior Engineering Manager',
        company: 'Zen Business',
        imgSize: {
            width: 80,
            height: 50
        },
    },
    {
        logo: `${GALLERY_IMAGE_ROUTE}/payu-finance.webp`,
        industry: 'Financial',
        testimonial: "We truly rely on OpenMetadata. It doesn't only help us quickly solve for discovery, data quality, and observability, but also on collaboration between teams and data assets. The OpenMetadata team supported us at each step to move to our production environment.",
        customerName: 'Praveen Singh',
        customerDesignation: 'Director of Data Engineering',
        company: 'PayU Finance',
        imgSize: {
            width: 188,
            height: 50
        },
    },
    {
        logo: `${GALLERY_IMAGE_ROUTE}/inDrive.webp`,
        industry: 'Transportation',
        testimonial: "OpenMetadata helps us to reduce the gap between business users and technical users. It's crucial for us to have a tool with powerful advanced search to filter search results, detailed data lineage, and integrated business glossary module.",
        customerName: 'Liubov Pasechnik',
        customerDesignation: 'Senior Data Steward (Data Governance Analyst)',
        company: 'inDrive',
        imgSize: {
            width: 212,
            height: 50
        },
    },
    {
        logo: `${GALLERY_IMAGE_ROUTE}/senzai.webp`,
        industry: 'Technology',
        testimonial: 'We build SaaS solutions for customers with incredibly varied data. OpenMetadata is a key component for understanding and standardizing this data so that it can be used in our processing and model pipelines, and has saved us a tremendous effort.',
        customerName: 'Mark McAvoy',
        customerDesignation: 'Lead R&D Engineer',
        company: 'Senzai AI',
        imgSize: {
            width: 66,
            height: 50
        },
    },
    {
        logo: `${GALLERY_IMAGE_ROUTE}/woop-logo.webp`,
        industry: 'Transportation',
        testimonial: 'The integration of OpenMetadata with DBT and Metabase endowed us with abundant data and metadata insights. OpenMetadata further offers a visually comprehensive data lineage, depicting the origins, modifications, and destinations.',
        customerName: 'Haithem Souala',
        customerDesignation: 'Head of Data',
        company: 'Woop',
        imgSize: {
            width: 140,
            height: 50
        },
    },
    {
        logo: `${GALLERY_IMAGE_ROUTE}/savii-logo.webp`,
        industry: 'Technology',
        testimonial: 'We conducted a comprehensive proof of concept process, evaluating all the leading commercial data governance and quality tools. We chose OpenMetadata as an open-source system, and the best choice for our organization.',
        customerName: 'Ton Sumawang',
        customerDesignation: 'Head of Data Governance and Quality',
        company: 'Savii',
        imgSize: {
            width: 120,
            height: 50
        }
    },
    {
        logo: `${GALLERY_IMAGE_ROUTE}/intelligaia-logo.webp`,
        industry: 'Technology',
        testimonial: "OpenMetadata helped us in democratizing the data which was kept in silos, and now we are more analytically productive.  It's helping our data lake to be more accessible to the general audience. For the community, by the community.",
        customerName: 'Abhijit Singh',
        customerDesignation: 'Product Manager - Data',
        company: 'Intelligaia',
        imgSize: {
            width: 247,
            height: 50
        },
    },
    {
        logo: `${GALLERY_IMAGE_ROUTE}/hoodie-analytics-logo.webp`,
        industry: 'Technology',
        testimonial: 'OpenMetadata has given Hoodie Analytics a comprehensive 360-degree view of our data ecosystem, from ETL jobs to storage and data warehouses. This tool has significantly enhanced our data management and operational efficiency.',
        customerName: 'Florian Giroud',
        customerDesignation: 'Head of Data Engineering',
        company: 'Hoodie Analytics',
        imgSize: {
            width: 155,
            height: 50
        },
    },
    {
        logo: `${GALLERY_IMAGE_ROUTE}/physicsWallah-logo.webp`,
        industry: 'Other',
        testimonial: 'OpenMetadata played a pivotal role in Data Centralization. The metadata management helped multiple teams in understanding the nitty-gritty details at a column level. The overall support and documentation was super quick and helpful.',
        customerName: 'Sandeep Penmetsa',
        customerDesignation: 'Associate Director',
        company: 'Physics Wallah',
        imgSize: {
            width: 60,
            height: 50
        },
    },
    {
        logo: `${GALLERY_IMAGE_ROUTE}/kb-logo.webp`,
        industry: 'Financial',
        testimonial: 'One of the best solutions for metadata management. Solves some of the tough problems for data teams such as: asset documentation, collaboration, discovery, & quality. Super thankful to the community for prompt support',
        customerName: 'Akash Nawani',
        customerDesignation: 'Lead - Data Platform',
        company: 'Khatabook',
        imgSize: {
            width: 257,
            height: 50
        },
    },
    {
        logo: `${GALLERY_IMAGE_ROUTE}/bucketplace-logo.webp`,
        industry: 'Retail',
        testimonial: 'It is an excellent tool to help create a data-centric culture by providing metadata management, metadata-based communication, and data lineage management functions.',
        customerName: 'Seungwan Jo',
        customerDesignation: 'Data Engineer',
        company: 'Bucketplace',
        imgSize: {
            width: 60,
            height: 50
        },
    }
]
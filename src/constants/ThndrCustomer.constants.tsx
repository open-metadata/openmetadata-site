export const THNDR_CUSTOMER_HEADER = {
    title: "Thndr Scales Governance Across Millions of Investor Accounts with OpenMetadata",
    description: "Thndr is an award-winning investment platform with over 3 million users. The app serves as the entry point for 82% of all new registered investors in Egypt, adding more than 190,000 new investors to the market. In 2023, Thndr was named one of Forbes’ top 30 fintech companies, awarded Most Innovative Brokerage Firm by the Egyptian Exchange, and won the Entrepreneur's Award. This rapid growth put increasing pressure on its small data team to maintain data quality, security, and discoverability across expanding pipelines and dashboards. Manual checks for data freshness, schema changes, and PII detection were slowing the team down. OpenMetadata provided a collaborative, open source platform for unified metadata management, automated PII classification, enhanced data lineage, and robust data quality testing. The result: streamlined governance, faster discovery, and stronger trust in the data that powers investment decisions.",
    industry: "Financial Services",
    technologies: "AWS (EC2, EKS), Docker Swarm, Apache Airflow, Elasticsearch, MySQL, Slack, OpenMetadata",
    image: '/assets/thndr-customer/thndr-header.png'
}


export const THNDR_CUSTOMER_HIGHLIGHTS = [
    {
        id: 1,
        count: '3M+',
        description: "user accounts protected with automated PII detection and classification"
    },
    {
        id: 2,
        count: '6',
        description: "fdata team members seamlessly managing enterprise-scale governance"
    }
];

export const THNDR_CUSTOMER_TESTIMONIAL = {
    content: "We chose OpenMetadata because it’s open source and you can easily deploy it. It’s a single solution for all your data cataloging, data governance, and data quality needs. And the community support is instant. If you reach out to them on Slack, they instantly solve your problem.",
    name: "Fizza Abid",
    title: "Data Platform Engineer at Thndr",
    logo: "/assets/thndr-customer/thndr.png"
}

export const THNDR_CUSTOMER_CHALLENGES = [
    {
        image: '/assets/thndr-customer/metadata-challenges.png',
        title: 'Manual checks slowed a lean, already-strapped data team',
        description: `Thndr’s six-person data team—two engineers, one data platform engineer, and three analysts—supports a fast-scaling investment platform that powers millions of investor accounts and processes critical financial data. As adoption surged, so did the volume and variety of data flowing through warehouses, pipelines, and dashboards. But without a centralized metadata system, the team had no easy way to trace end-to-end data lineage. Batch ETL workflows, central to Thndr’s operations, required timely, duplicate-free updates, yet quality checks for these jobs had to be performed manually.
        
Essential governance tasks were slow, fragmented, and prone to error. The team relied on manual processes to monitor freshness, detect schema changes, identify PII, and document business terms—tasks that became increasingly unsustainable at scale. Thndr needed an open source platform that could unify metadata management, automate quality checks, and make data assets easier to find, trust, and govern across the organization.`,
        challenges: [
            {
                header: 'No automated data quality alerts',
                description: 'Freshness, volume, and schema changes had to be checked manually, slowing batch ETL monitoring and resolution.',
            },
            {
                header: 'Poor lineage',
                description: 'No single view of where data originated, how it was transformed, or its downstream usage.',
            },
            {
                header: 'Inefficient PII detection',
                description: 'Regex-based scanning often missed sensitive values not reflected in column names.',
            },
            {
                header: 'No centralized business or technical glossary',
                description: 'Definitions and context were scattered across tools, making discovery and understanding time-consuming.',
            },
            {
                header: 'Siloed metadata across systems',
                description: 'Warehouse tables, pipeline assets, and dashboards had to be checked separately.',
            },
            {
                header: 'Limited collaboration workflows',
                description: 'Assigning ownership, managing incidents, and coordinating between data engineers and analysts required manual coordination.',
            }
        ]
    },
    {
        image: '/assets/thndr-customer/om-architecture.png',
        title: 'Open source metadata governance powers faster discovery',
        description: `For Thndr, the appeal of OpenMetadata went beyond features; it was about control, flexibility, and community. With OpenMetadata, the small data team at Thndr was able to build a centralized platform for metadata that works the way their team works. The team self-hosted the platform on AWS EC2, orchestrated with Docker Swarm, and connected it to Apache Airflow for workflow automation, Elasticsearch for fast search, and MySQL for storing internal metadata. Data from warehouses, pipelines, and dashboards is ingested directly into OpenMetadata, creating a single source of truth.
        
Alerts flow directly into Slack, keeping incident response in the same channels where the team already collaborates. For production, Thndr rotated JWT tokens and implemented SSO for secure, streamlined access management.`,
        challenges: [
            {
                header: 'Unified data discovery',
                description: 'Search and filter columns, tables, stored procedures, and views in seconds, eliminating the need to check multiple systems separately.',
            },
            {
                header: 'Centralized data cataloging',
                description: "Consolidated all metadata—warehouse tables, pipelines, and dashboards—into one accessible platform.",
            },
            {
                header: 'Automated data classification',
                description: 'Used machine learning to identify sensitive PII values even when column names don’t match standard patterns.',
            },
            {
                header: 'End-to-end data lineage',
                description: 'Automatically mapped column- and table-level lineage to show data origins, transformations, and downstream usage to support transparency and troubleshooting.',
            },
            {
                header: 'Integrated quality checks',
                description: "Ran custom SQL-based tests for freshness, duplication, and schema changes, with alerts routed instantly to Slack.",
            },
            {
                header: 'Glossary for shared context',
                description: "Built a business and technical glossary to standardize definitions and improve data literacy across the organization.",
            }
        ]
    },
    {
        image: '/assets/thndr-customer/why-choose-om.png',
        title: 'Faster, more trusted data to strengthen investor confidence',
        description: `In a fintech environment where data accuracy, security, and speed directly influence customer trust, OpenMetadata has become an operational backbone for Thndr’s data team. By deploying on their own infrastructure, Thndr ensured full control over performance, security, and customization—while the open source model meant they could quickly iterate on new needs with guidance from a responsive global community. Today, OpenMetadata underpins everything from tracing data lineage for regulatory transparency to catching stale or duplicate data in critical batch ETL workflows. What once took hours of manual checking now happens automatically, freeing the team to focus on higher-value analysis and product innovation.
        
With OpenMetadata, Thndr has transformed governance from a reactive safeguard into a strategic advantage. Automated PII detection, real-time quality alerts, and clear lineage give their lean team complete visibility into data flows, ensuring compliance while enabling faster, more confident decision-making. Every dashboard, pipeline, and warehouse table is now part of a connected ecosystem that the team can monitor and improve continuously. The result is a data foundation that not only meets the demands of regulatory oversight but also fuels the trusted insights behind millions of investment decisions every day, building lasting investor confidence at scale.`,
        challenges: [
            {
                header: 'Higher data trust',
                description: 'Automated quality checks reduce manual error risk, ensuring more reliable insights for investment decision-making. Built-in PII classification detects sensitive values beyond column names, reducing compliance risk and strengthening data security.',
            },
            {
                header: 'Granular access control',
                description: 'Attribute- and role-based permissions ensure the right people have the right level of access to sensitive data assets.',
            },
            {
                header: 'Faster operational response',
                description: 'Slack-based alerts allow the team to respond to data incidents in real time, minimizing downtime and service disruption.',
            },
            {
                header: 'Greater team productivity',
                description: 'Freed from repetitive checks, the six-person data team can focus on analytics, feature delivery, and improving the investor experience.',
            },
            {
                header: 'Improved cross-team collaboration',
                description: 'Data engineers, analysts, and interns use the same platform to assign tasks, resolve incidents, and access a shared glossary and centralized catalog—eliminating ambiguity and speeding up data discovery across teams.',
            },
            {
                header: 'Scalable governance',
                description: 'Supports growth to 3M+ users and 82% of new investors in Egypt, while maintaining governance standards at scale. Automated lineage mapping gives internal teams instant visibility into data origins, transformations, and usage.',
            }
        ]
    }
]
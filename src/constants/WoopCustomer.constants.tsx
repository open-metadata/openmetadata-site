export const WOOP_CUSTOMER_HEADER = {
    title: "Woop Elevates Data Discovery and Governance with OpenMetadata",
    description: "Woop is a leading SaaS and mobile-based delivery orchestration platform, enabling 400+ European retailers to coordinate over 2.5 million sustainable last-mile deliveries each year. As their data platform expanded to 1,600+ assets across BigQuery, dbt, and Metabase, their two-person data team faced increasing pressure to support both internal teams and customers with timely, trusted insights. By adopting OpenMetadata, Woop gained a unified, open source metadata platform that automated documentation, provided end-to-end lineage, and enabled company-wide self-service discovery. This resulted in faster incident resolution, reduced engineering bottlenecks, and a stronger, governance-driven data culture built on an open source foundation.",
    industry: "Logistics / Delivery Management",
    technologies: "Google Cloud Platform, BigQuery, dbt, Metabase, GitLab, Kubernetes",
    image: '/assets/woop-customer/woop-header.png'
}


export const WOOP_CUSTOMER_HIGHLIGHTS = [
    {
        id: 1,
        count: '1600+',
        description: "Data assets documented across warehouse, transformation, and BI layers"
    },
    {
        id: 2,
        count: '100+',
        description: "Internal users self-servicing from a unified metadata platform"
    },
    {
        id: 3,
        count: '27',
        description: "Teams of defined ownership, glossary terms, and governance rules"
    }
];

export const WOOP_CUSTOMER_TESTIMONIAL = {
    content: "OpenMetadata gives us a 360° view of every asset in our stack—lineage, usage, quality, ownership—without manual overhead. We can scale self-service, enforce governance, and keep documentation in lockstep with code changes.",
    name: "Haithem Souala",
    title: "Head of Data at Woop",
    logo: "/assets/testimonials/woop-logo.webp"
}

export const WOOP_CUSTOMER_CHALLENGES = [
    {
        image: '/assets/woop-customer/rapid-growth.png',
        title: 'Rapid growth, static headcount, and a scaling metadata challenge',
        description: "Woop is a last-mile delivery orchestration platform serving 400+ European retailers and powered by 600+ transport partners, coordinating over 2.5 million deliveries annually. As the business scaled, their two-person data team oversaw a rapidly expanding analytics environment, now exceeding 1,600 assets across BigQuery tables, dbt models, and Metabase dashboards. With data flowing in from diverse operational systems and APIs, the two-person data team struggled to keep pace with growing demands from both internal stakeholders and customers. These assets were critical for optimizing delivery operations and meeting regulatory requirements, but without a centralized metadata layer, it became increasingly difficult to locate data, understand its lineage, enforce governance, and ensure it could be trusted. As their data estate ballooned to 1,600+ assets, the team faced enterprise-level challenges:",
        description2: 'Woop needed an enterprise-grade metadata backbone that could unify their stack, automate documentation, and enable governance without adding headcount or expensive per-user licensing.',
        challenges: [
            {
                header: 'Bottlenecks in discovery',
                description: 'Analysts depended on engineering to locate and validate data models.',
            },
            {
                header: 'Fragmented metadata',
                description: 'Documentation and lineage lived in disconnected tools and were often stale.',
            },
            {
                header: 'Limited governance enforcement',
                description: 'No consistent way to apply glossary terms, ownership, or usage tracking across systems.',
            },
            {
                header: 'Slower incident resolution',
                description: 'Tracing data issues through ingestion, transformation, and BI layers was manual and time-intensive.',
            }
        ]
    },
    {
        image: '/assets/woop-customer/why-om.png',
        image2: '/assets/woop-customer/choose-open-source.png',
        title: 'Choosing Open Source for Scale, Flexibility, and Full Control',
        description: "Woop’s two-person data team needed a metadata management solution that could handle an enterprise-scale data estate without adding licensing costs or operational bottlenecks. After evaluating multiple platforms, they selected OpenMetadata for its open, API-first architecture, ability to run entirely within their GCP/Kubernetes environment, and native integrations with BigQuery, dbt, and Metabase. The platform now serves as the metadata backbone for over 1,600 assets, embedded directly into Woop’s CI/CD pipelines to automate documentation, enforce governance, and provide self-service discovery to 100+ internal users.",
        challenges: [
            {
                header: 'Full-stack lineage',
                description: 'Automated ingestion from BigQuery, dbt, and Metabase delivers end-to-end visibility from raw tables to BI dashboards.',
            },
            {
                header: 'CI/CD governance enforcement',
                description: "dbt pipelines output manifest.json, catalog.json, and run_results.json to GCS; OpenMetadata ingests and validates tags, owners, and glossary terms before merge.",
            },
            {
                header: 'API-first extensibility',
                description: 'Customized ingestion pipelines and tagging logic to align with Woop’s domain model.',
            },
            {
                header: 'Faster incident resolution',
                description: 'Engineers trace issues across ingestion, transformation, and BI layers in minutes.',
            },
            {
                header: 'Optimized platform usage',
                description: "Usage analytics identified and retired unused models, reducing warehouse bloat and compute costs.",
            },
            {
                header: 'Scalable self-service',
                description: "Over 100 users query and preview metadata without relying on engineering.",
            }
        ]
    },
    {
        image: '/assets/woop-customer/insights.png',
        title: 'Cleaner Data, Faster Insights, and a Stronger Data Culture',
        description: `With OpenMetadata embedded into their data workflows, Woop transformed how their teams discover, understand, and govern data. Automated ingestion from dbt, BigQuery, and Metabase ensures documentation, lineage, and quality indicators are always current, removing manual overhead for engineers and empowering analysts to work independently. What was once a reactive, ticket-driven process is now a scalable, self-service model that supports business growth without expanding headcount.
        
For data engineers, OpenMetadata provides a single, trusted view of the entire data estate, streamlining incident resolution and enabling governance enforcement as part of CI/CD. For analysts and business users, it means faster access to accurate, well-documented assets, leading to quicker insights and better decision-making.`,
        description2: 'OpenMetadata has become the operational backbone of Woop’s data platform, supporting everything from enforcing governance in CI/CD pipelines to enabling analysts to self-serve insights without engineering bottlenecks. By embedding metadata management directly into their workflows, Woop ensures every asset is documented, discoverable, and trusted at scale. What was once a manual, reactive process is now a proactive, automated system that accelerates decision-making, strengthens governance, and builds greater confidence in the data that powers customer delivery experiences. With this foundation in place, Woop is equipped to scale its network and meet the growing demands of European retailers with speed, accuracy, and trust.',
        challenges: [
            {
                header: 'Streamlined metadata management',
                description: 'Centralized 1,600+ assets across warehouse, transformation, and BI layers with clear ownership, glossary terms, and lineage.',
            },
            {
                header: 'Self-service discovery at scale',
                description: '100+ internal users can search, filter, and preview assets without engineering intervention.',
            },
            {
                header: 'Faster debugging and impact analysis',
                description: 'End-to-end lineage reduces time to trace issues across ingestion, transformation, and BI.',
            },
            {
                header: 'Reduced platform costs',
                description: 'Identification and deprecation of unused models minimized warehouse bloat and compute spend.',
            },
            {
                header: 'Embedded governance',
                description: 'Automated enforcement of descriptions, tags, and owners at the PR stage ensures compliance before deployment.',
            }
        ]
    }
]
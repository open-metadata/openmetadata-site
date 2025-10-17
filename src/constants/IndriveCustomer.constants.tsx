export const INDRIVE_CUSTOMER_HEADER = {
    title: "inDrive Scales Global Data Governance with OpenMetadata",
    description: "inDrive is the second most downloaded ride-hailing app globally, offering services from passenger transport to freight delivery. As its platform expanded, data multiplied across 100+ AWS-hosted databases and multiple regions, with analytics teams creating critical assets without centralized governance. To gain control, the data observability and governance team implemented OpenMetadata, creating a unified, automated, and trusted metadata foundation. This enabled faster discovery, stronger compliance, and improved analytics for global teams.",
    industry: "Transportation",
    technologies: "AWS, BigQuery, dbt, Tableau, Kafka, Airflow",
    image: '/assets/indrive-customer/indrive-header.png'
}


export const INDRIVE_CUSTOMER_HIGHLIGHTS = [
    {
        id: 1,
        count: '100+',
        description: "AWS-hosted databases tracked and governed"
    },
    {
        id: 2,
        count: '50+',
        description: "Analytics teams empowered to self-serve from a unified metadata platform"
    }
];

export const INDRIVE_CUSTOMER_TESTIMONIAL = {
    content: "OpenMetadata gives us the unified visibility into data governance we need today, giving us a clear path to automate and innovate for tomorrow.",
    name: "Liubov Pasechnik",
    title: "Senior Data Steward (Data Governance) at inDrive",
    logo: "/assets/testimonials/inDrive.webp"
}

export const INDRIVE_CUSTOMER_CHALLENGES = [
    {
        image: '/assets/indrive-customer/growing-complexity.png',
        image2: '/assets/indrive-customer/pain-points.png',
        title: 'Growing Data Complexity Created Urgent Governance Needs',
        description: `As inDrive’s platform scaled, so did the sprawl of data sources, tools, and teams producing new assets. The microservices architecture introduced flexibility but also fragmented visibility, making it harder to find, trust, and govern data at the pace the business required.
        
The governance and observability team faced challenges including:`,
        description2: 'The team needed a solution to centralize metadata, automate governance, and reduce operational bottlenecks while supporting rapid global growth.',
        challenges: [
            {
                header: 'Distributed and siloed data',
                description: 'Data was spread across services, departments, and geographies, making discovery slow and error-prone.',
            },
            {
                header: 'Limited lineage visibility',
                description: 'Tracing flows from source systems to Tableau dashboards was complex and often manual.',
            },
            {
                header: 'Glossary inconsistency',
                description: 'No single source of truth for hundreds of critical business metrics.',
            },
            {
                header: 'Reactive QA and incident management',
                description: 'Ingestion issues were discovered manually via Airflow checks.',
            },
            {
                header: 'Compliance risk',
                description: 'Personally identifiable information needed consistent tagging to meet GDPR and other privacy requirements.',
            }
        ]
    },
    {
        image: '/assets/indrive-customer/lineage.png',
        title: 'An Open Source Foundation for Unified Discovery, Observability, and Governance',
        description: "inDrive chose OpenMetadata to serve as the single metadata layer. Its open source architecture allowed full customization and integration with existing infrastructure.",
        challenges: [
            {
                header: 'Full metadata coverage',
                description: 'Automated ingestion from dbt, BigQuery, raw SQL, and Tableau, unifying lineage into a single view.',
            },
            {
                header: 'Sensitive data tagging',
                description: "Internal taxonomy automatically identifies combinations of sensitive attributes (e.g., email + passport ID).",
            },
            {
                header: 'Business glossary',
                description: 'Centralized source of truth linking metrics to technical lineage for BI, product analytics, and ESG reporting.',
            },
            {
                header: 'Scalable deployment',
                description: 'Three OpenMetadata instances support production and testing environments.',
            }
        ]
    },
    {
        image: '/assets/indrive-customer/metric-product.png',
        title: 'Cleaner Data, Stronger Governance, and Faster Decision-Making',
        description: `The adoption of OpenMetadata has transformed inDrive’s metadata from a scattered, inconsistent set of records into a living, trusted resource. Discovery is faster, governance is proactive, and compliance processes are embedded into daily workflows rather than handled as afterthoughts.
        
With OpenMetadata in place, inDrive has:`,
        description2: 'With a unified metadata foundation in place, inDrive can now manage sensitive data with confidence while empowering teams to innovate faster. The ability to quickly discover, classify, and trust their data is helping inDrive accelerate product development, meet compliance requirements across markets, and deliver better, safer experiences for millions of riders and drivers worldwide. As the company continues to expand into new geographies and services, this strong data governance backbone ensures they can scale responsibly to keep trust, transparency, and agility at the heart of their global operations.',
        challenges: [
            {
                header: 'Streamlined metadata management',
                description: 'Centralized metadata for 100+ AWS-hosted databases, creating a trusted foundation for discovery and governance.',
            },
            {
                header: 'Accelerated analysis',
                description: 'Accelerated analysis by enabling analysts to quickly find and trust the right datasets.',
            },
            {
                header: 'Lower Risk',
                description: 'Reduced compliance risk through automated personal data tagging.',
            },
            {
                header: 'More reach',
                description: 'Extended governance reach with plans to add lineage for ETL and streaming data, including Kafka.',
            }
        ]
    }
]
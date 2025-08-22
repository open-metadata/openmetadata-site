export const GORGIAS_CUSTOMER_HEADER = {
    title: "Gorgias Automates Data Discovery and Governance with OpenMetadata",
    description: "Gorgias is a conversational AI platform for ecommerce that drives sales and resolves support inquiries. Trusted by over 15,000 ecommerce brands, Gorgias supports growing independent shops to globally recognizable brands powering over one billion conversations for 275 million shoppers globally. As their internal data environment scaled to over 1,400 dbt models and five petabytes of daily warehouse processing, their data team faced growing challenges with discoverability, clarity, and governance. By adopting OpenMetadata, Gorgias gained an open source platform that automates their metadata management. This simplified infrastructure, enabled Slack-based AI discovery agents, and helped analysts quickly find and trust the data they need. The result? More collaboration, more productivity, and a cleaner, more efficient data landscape.",
    industry: "E-commerce / Retail",
    technologies: "Google Cloud Platform, BigQuery, DBT, Kafka, Kestra, Airbyte, Kubernetes, Metaplane, Datadog, Slack",
    image: "/assets/gorgias-customer/gorgias-header.webp"
}


export const GORGIAS_CUSTOMER_HIGHLIGHTS = [
    {
        id: 1,
        count: '1400+',
        description: "dbt models built daily, across 5 projects with different applications"
    },
    {
        id: 2,
        count: '5+',
        description: "petabytes of data processed daily"
    },
    {
        id: 3,
        count: '45K+',
        description: "Data assets cataloged across diverse tools and sources"
    }
];

export const GORGIAS_CUSTOMER_TESTIMONIAL = {
    content: "OpenMetadata offers us a strong layer of discovery. It saves our data analysts a lot of time and has helped us clean up our warehouse by identifying unused models and tables. Overall, it’s been a very successful year.",
    name: "Antoine Balliet",
    title: "Senior Data Engineer at Gorgias",
    logo: "/assets/gorgias-customer/gorgias-logo.webp"
}

export const GORGIAS_CUSTOMER_CHALLENGES = [
    {
        image: '/assets/gorgias-customer/growing-data-complexity.png',
        title: 'Growing data complexity outpaced discoverability and governance',
        description: 'As Gorgias scaled its internal data platform to support over five petabytes of daily data warehouse data, 1,400+ dbt models, and 100 million+ daily streaming records, managing asset tracking and data discovery became increasingly difficult. The data team had nearly doubled in size, with more teams across the company launching analytics projects and producing new data assets. These models were critical for downstream decision-making, but without a central metadata layer, it became harder to track where data was coming from, how it was being used, and whether it could be trusted.',
        challenges: [
            {
                header: 'Lack of centralized metadata',
                description: 'With thousands of models across many projects, analysts struggled to find, understand, and trust the data they needed for reporting and decision-making.',
            },
            {
                header: 'Limited lineage visibility',
                description: 'Understanding dependencies and column-level lineage was time-consuming and manual, especially as new internal data analytics projects were added.',
            },
            {
                header: 'Difficult model prioritization',
                description: 'Without usage tracking, the team couldn’t easily identify critical data models or flag high-priority assets for governance and monitoring.',
            }
        ]
    },
    {
        image: '/assets/gorgias-customer/open-source-deployment.png',
        title: 'An open source foundation for the entire data estate',
        description: 'After evaluating a number of different solutions, Gorgias adopted OpenMetadata as the centralized platform to track, document, and maintain data across their stack. The open source nature of OpenMetadata empowered Gorgias to fully self-host, customize, and extend the platform—building out AI discovery agents in Slack, QA automation for dbt models, and a clearer understanding of their data estate. Now, metadata is a scalable, intelligent foundation for data discovery and collaboration.',
        challenges: [
            {
                header: 'Superior ecosystem and community',
                description: 'OpenMetadata won over alternatives like DataHub during internal benchmarking thanks to its responsive community support, built-in testing framework, intuitive UI, and streamlined deployment footprint. The team particularly valued the active Slack community and how frequently their feature requests were incorporated.',
            },
            {
                header: 'Self-hosted and fully customizable',
                description: "Deployed OpenMetadata on Kubernetes using Terraform, GCP Cloud SQL, and Elastic Cloud—tailored to Gorgias' internal infrastructure and security needs.",
            },
            {
                header: 'Unified catalog of 45K+ assets',
                description: 'Ingested metadata from BigQuery, Postgres, Clickhouse, dbt, Airbyte, Apache Kafka, and more for centralized visibility.',
            },
            {
                header: 'Automated QA enforcement',
                description: 'Enforced column descriptions, tags, and tiering via tests integrated into the dbt pipeline—no merge allowed without compliance.',
            },
            {
                header: 'Faster onboarding and adoption',
                description: "Easier UI and workflows enabled analysts to tag and define data assets without relying on engineering’s configuration efforts.",
            }
        ]
    },
    {
        image: '/assets/gorgias-customer/confident-decision-making.png',
        title: 'Cleaner data, stronger discovery, and more confident decision-making',
        description: 'With OpenMetadata in place, Gorgias significantly improved data discoverability, collaboration, and governance across their internal analytics landscape. By automating documentation and surfacing lineage, usage, and quality signals, the data engineering team now supports more teams with less friction. Analysts are empowered to self-serve while engineering can focus on building. OpenMetadata has become the trusted foundation for managing their fast-growing data estate, with new use cases emerging across RevOps and engineering.',
        challenges: [
            {
                header: 'Streamlined metadata management',
                description: 'Centralized and documented over 45,000 assets across streaming and warehouse data with clear lineage and usage insights.',
            },
            {
                header: 'Increased analyst productivity',
                description: 'Reduced time spent searching for or validating data, freeing analysts to focus on insights instead of infrastructure.',
            },
            {
                header: 'Faster issue detection and cleanup',
                description: 'Identified and deprecated unused models and tables, reducing warehouse bloat and simplifying maintenance.',
            },
            {
                header: 'Accelerated innovation',
                description: 'Built a custom Slack bot using OpenMetadata’s API to make metadata more accessible and useful for the entire organization.',
            },
            {
                header: 'Expanded adoption across teams',
                description: 'Sparked new integrations with tools like Hightouch and Cargo for RevOps, with plans to extend metadata support for Kafka schema tracking.',
            }
        ]
    }
]
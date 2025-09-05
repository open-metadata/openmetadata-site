export const LOGGI_CUSTOMER_HEADER = {
    title: "Loggi transforms data for more efficient and reliable deliveries",
    description: "Loggi is one of Brazil’s largest logistics companies, delivering over 300,000 packages per day across all 27 states—including hard-to-reach regions like Manaus in the Amazon. With more than 2,000 employees producing and consuming data across a sprawling operation, the company faced mounting challenges in data discoverability, trust, and reporting accuracy. OpenMetadata provided the open-source foundation Loggi needed to organize ownership, surface data lineage, and clean up their environment. Loggi streamlined their data infrastructure by reducing Looker dashboards from 18,000 to 2,000 and eliminating 7,000 Redshift tables, which significantly lowered the human costs associated with discovery, maintenance, and the analysis of outdated information. Today, OpenMetadata powers a more transparent and governable data practice at Loggi—one built for scale, community, and long-term clarity.",
    industry: "Logistics / Supply Chain",
    technologies: "Redshift, dbt, Looker, OpenMetadata",
    videoUrl: 'A_RFjnjPOjk?si=86yJjGt4y4sJwh9e'
}


export const LOGGI_CUSTOMER_HIGHLIGHTS = [
    {
        id: 1,
        count: '30%',
        description: "faster ETL pipeline to optimize route mapping"
    },
    {
        id: 2,
        count: '89%',
        description: "fewer Looker dashboards to mitigate data sprawl"
    },
    {
        id: 3,
        count: '7,000',
        description: "Unneeded Redshift tables eliminated"
    }
];

export const LOGGI_CUSTOMER_TESTIMONIAL = {
    content: "OpenMetadata’s data quality feature helps us proactively monitor key data sources, enabling faster incident response and improving data reliability—critical for maintaining efficient operations and accurate delivery schedules.",
    name: "Erica Bertan",
    title: "Analytics Engineering Manager at Loggi",
    logo: "/assets/testimonials/loggi-logo.webp"
}

export const LOGGI_CUSTOMER_CHALLENGES = [
    {
        image: '/assets/loggi-customer/loggi-challenge.png',
        title: 'Challenges: Dashboard sprawl leads to inconsistent data, impacting operational efficiency',
        description: 'With nearly 100 ETL jobs running each day and daily ingestion reaching 200GB of data and 9 million package tracking records, coordinating data governance across Loggi’s 100TB Redshift warehouse quickly became unscalable. Their most critical ETL pipeline, the “midnight job,” ran every night for eight hours, updating nearly 500 tables to power next-day operations. As new data assets and models flooded the system, discoverability and trust began to erode, leading to duplicated work, inefficiencies, and delayed decision-making. This directly impacted their ability to optimize delivery routes and schedules, potentially causing delays in the logistics chain.',
        challenges: [
            {
                header: 'Undefined ownership',
                description: 'With nearly 500 dbt models and 10,000 warehouse tables, identifying who could explain the business logic behind a dataset often required multiple team members, slowing down problem resolution and decision-making.',
            },
            {
                header: 'Inconsistent reporting',
                description: 'Looker contained 18,000 dashboards with overlapping or conflicting metrics, making it hard for teams to trust and align on a single source of truth, causing delays in route planning and logistics decisions.',
            },
            {
                header: 'Low discoverability',
                description: 'Analysts struggled to find the correct tables to use, leading to duplicated work, inefficiencies, and repeated questions across teams—slowing down the logistics optimization process.',
            },
            {
                header: 'Technical complexity',
                description: 'Similar-sounding tables like package_events and package_register created confusion even among experienced users, slowing time to insight and hindering the optimization of delivery routes.',
            },
            {
                header: 'Lack of observability',
                description: 'Without proactive alerts or data quality checks, errors often went unnoticed until downstream teams were already impacted, potentially affecting delivery timelines and operational reliability.',
            }
        ]
    },
    {
        image: '/assets/loggi-customer/loggi-solution.png',
        title: 'Solutions: A shared, open source layer for smarter data governance',
        description: 'Loggi turned to OpenMetadata to help bring structure, ownership, and observability to their complex, fast-growing ecosystem. As a centralized metadata management layer, OpenMetadata gave Loggi the flexibility to tailor the platform to their unique data landscape, allowing their internal teams to move quickly without being locked into a rigid commercial solution. From cataloging and lineage to proactive data quality checks and alerts, OpenMetadata became the connective tissue powering better collaboration, observability, and decision-making across the company.',
        challenges: [
            {
                header: 'Ownership-driven modeling',
                description: 'Assigned clear owners to their dbt models, making it easier to triage incidents and understand business logic behind datasets, which improved the speed of operational decisions and reduced routing delays.',
            },
            {
                header: 'End-to-end lineage tracking',
                description: "Visualized downstream dependencies and retired outdated models safely, reducing risk and helping teams evolve with confidence in their data, improving the accuracy of logistics data.",
            },
            {
                header: 'Streamlined dashboard governance',
                description: 'Identified outdated dashboards in Looker and facilitated a company-wide cleanup effort to remove redundant reports. This cleanup reduced reporting inefficiencies, making it easier for teams to access relevant metrics that supported timely logistics decisions.',
            },
            {
                header: 'Metadata-driven cataloging',
                description: 'Cataloged hundreds of tables with multilingual (Portuguese and English) column and table descriptions, helping teams discover and understand assets faster, allowing for quicker adaptation to changing logistics needs.',
            },
            {
                header: 'Proactive data quality modeling',
                description: "Enabled tests on critical models and triggered alerts when data behaved unexpectedly, boosting observability and trust in data, which directly improved logistics planning and delivery accuracy.",
            }
        ]
    },
    {
        image: '/assets/loggi-customer/loggi-result.png',
        title: 'Results: Faster pipelines and leaner infrastructure leads to optimized logistics',
        description: 'With OpenMetadata, Loggi turned a scattered, hard-to-navigate data environment into a governed, trusted, and streamlined foundation for decision-making. By surfacing ownership, enabling data quality checks, and cleaning up outdated dashboards and warehouse assets, the team now spends less time chasing down issues—and more time improving performance. What began as an open-source metadata platform quickly became a critical enabler of scale, savings, and trust across the organization.',
        challenges: [
            {
                header: 'Faster ETL performance',
                description: 'Loggi’s most critical job—the nightly pipeline that updates nearly 500 tables—now runs 30% faster, enabling more timely updates to delivery schedules and route optimization.',
            },
            {
                header: 'Reduced infrastructure costs',
                description: 'After deleting 7,000 unused Redshift tables, the company saved $2,000 a month in infrastructure costs and freed up resources to better align with business priorities.',
            },
            {
                header: 'Lighter analytics layer',
                description: 'Reduced Looker dashboards from 18,000 to just 2,000 by deprecating unused or duplicative reports—eliminating unnecessary overhead and making critical metrics more accessible to decision-makers.',
            },
            {
                header: 'Stronger trust in data',
                description: 'Monitored key models with automated data quality checks and alerts, ensuring that logistics operations are always running on accurate and reliable data.',
            },
            {
                header: 'More scalable governance',
                description: 'Established a centralized, metadata-driven foundation for ownership, cataloging, and observability—without vendor lock-in.',
            }
        ]
    }
]
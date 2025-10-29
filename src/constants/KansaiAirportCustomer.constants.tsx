export const KANSAI_CUSTOMER_HEADER = {
    title: "Kansai Airports Eliminate Data Silos in Days with OpenMetadata",
    description: 'Kansai Airports operates three major airports in Japan’s Kansai region, serving over 50 million passengers a year. As a former public sector company undergoing a digital transformation, Kansai Airports needed to modernize its data culture but faced unique challenges. Employees struggled to understand where dashboard data originated, how key metrics were defined, and who was responsible for critical data assets. By implementing OpenMetadata, Kansai Airports built a business-friendly platform for data discovery and collaboration, providing employees with clear visibility into their data: where it originates, what it represents, who owns it, and how frequently it’s updated.',
    industry: "Transportation / Aviation",
    technologies: "Google Cloud Platform, BigQuery, DBT, Power BI, Docker, Slack",
    image: "/assets/kansai-airport/kansai-header.png"
}

export const KANSAI_CUSTOMER_HIGHLIGHTS = [
    {
        id: 1,
        count: '50M+',
        description: "Passengers served annually through data-driven operations"
    },
    {
        id: 2,
        count: '50+',
        description: "Power BI dashboards catalogued with minimal resources"
    },
    {
        id: 3,
        count: '67%',
        description: "Less FTE effort to manage metadata roadmap for entire organization"
    }
];

export const KANSAI_CUSTOMER_TESTIMONIAL = {
    content: "OpenMetadata is really easy to spin up, a true plug-and-play solution. Business value is visible to stakeholders within weeks, making onboarding straightforward even for non-technical users.",
    name: "Antoine Glacet",
    title: "Data and Innovation Manager at Kansai Airports",
    logo: "/assets/testimonials/kansai-airport-logo.png"
}

export const KANSAI_CUSTOMER_CHALLENGES = [
    {
        title: 'Fragmented systems eroded trust in data and slowed productivity',
        description: `Kansai Airports shifted from public to private ownership only a decade ago. With operations spanning airport services, infrastructure, commercial partnerships, and real estate, the private company launched an ambitious digital transformation initiative.

To modernize its data architecture, the data team at Kansai Airports implemented a platform on Google Cloud (GCP), utilizing BigQuery for data warehousing, DBT for data transformations, and Power BI for operational dashboards. The dashboards delivered insights but were disconnected from GCP, where all the data lived. Trust in analytics remained elusive, and the fragmented systems created obstacles for employees that led to frustration and bottlenecks:`,
        challenges: [
            {
                header: 'No data quality visibility',
                description: 'Employees couldn’t trace dashboard data to its source, making it difficult to verify whether the data was fresh or stale, and risking trust in the insights generated.',
            },
            {
                header: 'Barriers to high-quality data assets',
                description: 'Inconsistent business definitions undermined data quality. Key metrics, such as “passenger count,” had multiple conflicting definitions across departments. Some teams included crew and infants, while others excluded transfers, and some counted only adult passengers.',
            },
            {
                header: 'Unclear data ownership',
                description: 'When someone had a data lineage question, they didn’t know who could help or provide context.',
            },
            {
                header: 'Difficult access control management',
                description: 'Every access request went through the data team, slowing analytics work across the organization.',
            }
        ]
    },
    {
        title: 'A unified platform for discovery, observability, and governance',
        description: `Kansai Airports required an open source solution that could unify metadata across their tech stack, while remaining accessible to non-technical users. OpenMetadata fit the requirements: a unified platform for data discovery, observability, and governance that was easy to deploy, user-friendly, and offered strong community support.

The implementation proved remarkably efficient. Within days, the data team spun up Docker containers, connected their primary data sources, and cataloged hundreds of BigQuery tables and more than 50 Power BI dashboards in OpenMetadata.`,
        challenges: [
            {
                header: 'Rapid deployment with minimal resources',
                description: 'The Docker-based setup connected GCP and Power BI in days, not months. One person dedicates a third of their time to managing the OpenMetadata roadmap, resulting in a 67% reduction in FTE effort.',
            },
            {
                header: 'Single source of truth across systems',
                description: "Unified metadata from data warehouse tables and BI dashboards is discoverable in one location, ending the disconnect between platforms.",
            },
            {
                header: 'User-friendly for non-technical employees',
                description: 'The interface shows what users need without overwhelming them with technical details, making onboarding straightforward.',
            },
            {
                header: 'Built-in observability and governance',
                description: 'Native support for data quality monitoring, lineage tracking, and access control through domain-based ownership structures.',
            },
            {
                header: 'Responsive community and clear documentation',
                description: 'Comprehensive guides and an active Slack community streamlined implementation and quickly resolved questions.',
            },
            {
                header: 'Low-risk, high-value adoption',
                description: 'Open source meant a minimal upfront investment, making it easy to demonstrate value and secure executive buy-in.',
            }
        ]
    },
    {
        title: 'Improved productivity, reduced costs, and proactive governance',
        description: 'With OpenMetadata, Kansai Airports transformed how employees work with and trust their data, powering self-service analytics while maintaining governance. With just one person dedicating a third of their time to the platform, the data team achieved significant improvements in productivity and collaboration within weeks of implementation.',
        challenges: [
            {
                header: 'Unified data discovery',
                description: 'Employees can now trace Power BI visualizations back through GCP, understanding exactly where data originates and how it’s transformed.',
            },
            {
                header: 'High-quality data assets',
                description: 'Teams aligned on standardized definitions for key metrics like “passenger count,” eliminating conflicting interpretations and driving consistent, reliable analytics across departments.',
            },
            {
                header: 'Faster time to insight',
                description: 'Business owners and data owners can manage access through domain structures, freeing the data team from approval bottlenecks and accelerating time-to-insight for data practitioners.',
            },
            {
                header: 'Lower data management costs',
                description: 'By consolidating discovery, observability, and governance into a single unified platform, the data team eliminated the need for multiple point solutions and streamlined practitioner workflows.',
            },
            {
                header: 'Proactive governance and risk reduction',
                description: 'Built-in observability enables employees to verify data quality and confirm data freshness before making business decisions, building trust and reducing the risk of poor decisions based on stale data.',
            },
            {
                header: 'Foundation for AI innovation',
                description: 'With clean, well-governed metadata in place, Kansai Airports plans to introduce an AI agent interface in 2026.',
            },
            {
                header: 'A data-driven culture',
                description: 'By unifying discovery, observability, and governance in one platform, Kansai Airports accelerated its transformation into a data-driven enterprise. The OpenMetadata foundation empowers employees to collaborate on data, make confident decisions backed by trusted insights, and drive innovation across the company.',
            }
        ]
    }
]
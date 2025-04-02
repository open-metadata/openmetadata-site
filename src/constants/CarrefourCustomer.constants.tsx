export const CARREFOUR_CUSTOMER_HEADER = {
    title: "Unlocking the Power of Data at Carrefour Brazil: OpenMetadata Transforms Data Governance, Quality, and Discovery into Actionable Insights",
    description: "Carrefour Brazil is Brazil's largest retail company. They have over 130,000 employees across more than 1,180 stores serving over 60 million customers monthly, with brands including Carrefour, Atacadão, and Sam's Club. With a large and complex data environment, Carrefour Brazil’s data platform and governance team received CDO executive sponsorship to transform how they engaged with the many different data teams they supported throughout the company, through both technical and business changes.  By implementing OpenMetadata (internally white-labeled as C4Data), they created a unified metadata platform for managing data discovery, observability, and governance at an enterprise scale, to improve data trust and drive data democratization.",
    industry: "Retail",
    technologies: "Google Cloud Platform, BigQuery, Tableau, Kubernetes, JIRA",
    image: "/assets/carrefour-customer/carrefour-header.png"
}


export const CARREFOUR_CUSTOMER_HIGHLIGHTS = [
    {
        id: 1,
        count: 500,
        description: "active platform users achieved within first year on OpenMetadata"
    },
    {
        id: 2,
        count: 20,
        description: "domains and 30+ data owners assigned for data governance"
    },
    {
        id: 3,
        count: 300,
        description: "glossary terms defined and standardized across 700+ tables"
    }
];

export const CARREFOUR_CUSTOMER_TESTIMONIAL = {
    content: "Our mission is to democratize data throughout our company. We partner with all our data teams, and have achieved incredible engagement with creating more trust across our data governance lifecycle with OpenMetadata, with even more to come.",
    name: "Ronnie Santos",
    title: "Data Platform Manager at Carrefour Brazil",
    logo: "/assets/carrefour-customer/carrefour-logo.svg"
}

export const CARREFOUR_CUSTOMER_CHALLENGES = [
    {
        image: '/assets/carrefour-customer/fragmented-visibility.png',
        title: 'Fragmented visibility and processes across the data estate',
        description: 'Carrefour Brazil has a sophisticated data environment processing over 133 PB of data daily across 33K+ tables, 600+ Tableau dashboards, and 500+ data pipelines. The data governance team held a number of workshops with their supporting data teams, and identified a number of overlapping areas for improvement:',
        challenges: [
            {
                header: 'Lack of data discovery and catalog',
                description: 'Data practitioners didn’t have any visibility into what data was available, or what the “official” data source was across multiple sources. Even in a data source, it was unclear which columns could be used.',
            },
            {
                header: 'Poor data quality standardization',
                description: 'Data teams needed a better understanding of the quality of the data they were working with and processes for addressing quality issues. Stakeholders were being notified of issues late in the process, eroding trust.',
            },
            {
                header: 'Unclear data ownership',
                description: 'There was difficulty identifying who was responsible for different data assets, leading to delays in notifications and unclear accountability.',
            },
            {
                header: 'Lack of data lineage',
                description: 'With no clear way to track data flow and dependencies across systems, it was difficult to understand common data between domains or understand how data transformations affected downstream processes across their 40+ GCP projects.',
            },
            {
                header: 'No common language and documentation on data',
                description: 'Lack of standardized glossary and inconsistent data definitions hindered effective communication and collaboration. There was no systematic way to share and maintain data knowledge of the business rules in the data across ingestion and consumption.',
            }
        ]
    },
    {
        image: '/assets/carrefour-customer/open-source-platform.png',
        title: 'A unified, open source metadata platform',
        description: 'To address these challenges, Carrefour Brazil implemented OpenMetadata in multiple waves to establish a single source of truth for data across the entire organization. A “Datathon” Hackathon held was to catalog tables and dashboards, with additional workshops with data engineering and business teams.',
        challenges: [
            {
                header: 'Comprehensive metadata cataloging',
                description: 'Unified cataloging of tables, dashboards, and data assets with automated ingestion.',
            },
            {
                header: 'Data quality framework',
                description: 'Implemented multiple quality dimensions including update frequency, uniqueness, nullity, consistency, and accuracy checks.',
            },
            {
                header: 'Quality certification seals',
                description: 'Implemented Bronze, Silver, and Gold certification levels for data assets, with standardized criteria upon ingest to certify quality.',
            },
            {
                header: 'Data governance structure',
                description: 'Established 20+ domains and 30+ data owners with clear responsibilities and improved organization.',
            },
            {
                header: 'Automated notification workflows',
                description: 'Integration with JIRA for issue tracking and email notifications for data owners.',
            },
            {
                header: 'Knowledge management and glossary',
                description: 'Created 300+ glossary terms defining business concepts and rules to align how data was used across teams.',
            }
        ]
    },
    {
        image: '/assets/carrefour-customer/roadmap.png',
        title: 'A roadmap for further investment and improvements',
        description: 'The success that Carrefour Brasil has achieved with their implementation was showcased at Carrefour’s world meeting with other global subsidiaries from Poland, France, Argentina and more. Additional investment into cataloging further assets including DAGs, ML Models & APIs, further data lifecycle governance, and expanded API integrations & automations.',
        challenges: [
            {
                header: 'Deepened Data Democratization & Trust',
                description: 'Created a single source of truth for data assets across 650+ tables and 500+ dashboards, enabling 500+ users to confidently find the right data sources and use them correctly.',
            },
            {
                header: 'Improved Risk Management & Governance',
                description: 'Defined ownership and accountability across the organization with assigned data owners and business domains improved data stewardship of data and ensured the right people were notified for any issues.',
            },
            {
                header: 'Standardized Knowledge Management',
                description: 'The data dictionary standardized business concepts and rules across the organization and reduced confusion between teams.',
            },
            {
                header: 'Enhanced Operational Productivity',
                description: 'Implemented automated data quality monitoring with custom tests and JIRA integration, allowing teams to proactively detect and address data issues before they impact business operations.',
            },
            {
                header: 'Data Quality Assurance',
                description: 'Centralized data documentation and quality seals across different data teams ensure high standards for data quality and understanding. Lineage helped to map this quality across upstream and downstream data sources.',
            }
        ]
    }
]
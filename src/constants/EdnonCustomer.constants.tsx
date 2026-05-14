export const EDNON_CUSTOMER_HEADER = {
    title: "Ednon turns data bottlenecks into better citizen services with OpenMetadata",
    description: "Ednon is a technology consultancy that helps public and private organizations achieve operational efficiency and modernize legacy infrastructure through digital transformation. Deputación Provincial da Coruña, a Spanish provincial government entity supporting 80+ municipalities, approached Ednon to modernize data management across their mission-critical Oracle and PostgreSQL systems. Ultimately, Deputación built a unified metadata infrastructure on OpenMetadata to improve data quality and traceability, establish standardized definitions across departments, and create sustainable governance processes aligned with regulatory compliance.",
    industry: "Public Administration / Government",
    technologies: "Oracle, PostgreSQL, Qlik Sense, Python",
    image: "/assets/ednon-customer/ednon-header.png"
}

export const EDNON_CUSTOMER_HIGHLIGHTS = [
    {
        id: 1,
        count: '1,412',
        description: "assets cataloged across databases and BI tools"
    },
    {
        id: 2,
        count: '41%',
        description: "documentation coverage, up from less than 1%"
    },
    {
        id: 3,
        count: '2 days',
        description: "to deploy from development to production"
    }
];

export const EDNON_CUSTOMER_TESTIMONIAL = {
    content: "OpenMetadata delivered beyond our expectations, giving us complete control through APIs and Python while remaining accessible to non-technical users. In two years, we took a provincial government from virtually zero documentation to a fully governed, AI-ready data infrastructure.",
    name: "Nicolás Gutiérrez García",
    title: "Project Manager, Data Governance at Ednon",
    logo: "/assets/testimonials/ednon-logo.png"
}

export const EDNON_CUSTOMER_CHALLENGES = [
    {
        image: '/assets/ednon-customer/ednon1.png',
        title: 'A critical data infrastructure with virtually no documentation',
        description: `When Ednon began working with Deputación Provincial da Coruña, the organization faced common obstacles that had long plagued legacy public sector organizations. Deputación operated two mission-critical platforms serving millions of citizens: SUBTEL, an Oracle-based grants and aid processing system with 8 schemas and 620 tables, and the Provincial Electronic Registry, a PostgreSQL-based 24/7 document submission platform with 4 schemas and 411 tables.

Despite the critical nature of these systems, the data infrastructure remained opaque. "We knew where the data was, but we didn't know where it came from," explained Nicolás Gutiérrez García, Project Manager, Data Governance at Ednon, who was working directly with Deputación on the digital transformation project. "The knowledge of the data model was limited to just a few people in the organization." Since knowledge was tribal, processes were undocumented, and trust in data-driven decisions was rapidly eroding across the government entity.`,
        challenges: [
            {
                header: 'Informational silos with almost no documentation',
                description: 'Less than 1% of the 1,031 cataloged database tables had any documentation. Employees couldn’t understand the purposes of tables, the meanings of fields, or data lineage.',
            },
            {
                header: 'Zero data traceability',
                description: 'Teams had no visibility into the origin, transformation history, or downstream usage of data. No business glossaries or standardized terminology existed, making cross-departmental collaboration difficult.',
            },
            {
                header: 'Eroding trust in data',
                description: 'Reference tables for countries, villages, organizations, and events were duplicated across different schemas with inconsistent data quality, undermining confidence in reporting and decision making.',
            },
            {
                header: 'Critical technical dependency',
                description: 'Knowledge of data models was concentrated in a few individuals and led to operational risk for development and analysis work.',
            },
        ]
    },
    {
        image: '/assets/ednon-customer/ednon2.png',
        title: 'A flexible, open source foundation for sustainable governance',
        description: `Ednon recommended OpenMetadata, an open and unified metadata platform for data discovery, observability, and governance. The technical consultancy knew its client would benefit from a platform that could handle complex integrations across multiple databases, support both technical and business users, encourage automation at scale, and align with public sector values of transparency and vendor independence.

"OpenMetadata was the clear choice," explained Gutiérrez García. "It's flexible, adaptable to the changing reality of the organization, and has powerful APIs that give you high control without depending solely on the web UI. For a public sector organization, the open source foundation was also very critical, because it meant no vendor lock-in, full transparency, and a strong community behind it."`,
        challenges: [
            {
                header: 'OpenMetadata deployed in 2 days',
                description: 'Ednon deployed OpenMetadata in just 2 days. The setup connected seamlessly to Oracle (SUBTEL) and PostgreSQL (Registry) databases without disrupting existing systems.',
            },
            {
                header: 'Future-proof integration capability',
                description: 'OpenMetadata’s extensible architecture enables easy integration with existing data sources, including Oracle, PostgreSQL, Qlik Sense, and Superset, while providing flexibility to connect to future platforms as Deputación’s technology stack evolves.',
            },
            {
                header: 'Automation through powerful APIs and a Python SDK',
                description: 'OpenMetadata’s REST APIs and Python SDK automate metadata collection, inject documentation into source databases, and orchestrate workflows. This approach helped build scalable governance without proportional resource increases.',
            },
            {
                header: 'Support for both technical and business metadata and users',
                description: 'OpenMetadata enabled Ednon to document technical schemas and tables, as well as business context through glossaries, business terms, ownership structures, and data quality rules, bridging the gap between IT and business users to fuel cross-functional collaboration.',
            },
            {
                header: 'Governance policies embedded from day one',
                description: 'OpenMetadata’s native support for approval workflows, data steward assignments, task management, and monthly notifications made implementing data governance policies straightforward with no custom development.',
            },
            {
                header: 'User-oriented design for rapid adoption',
                description: 'The platform’s intuitive interface facilitated adoption across technical and non-technical staff, supporting a cultural shift toward data-driven decision making in government operations.',
            },
        ]
    },
    {
        image: '/assets/ednon-customer/ednon3.png',
        title: 'From information chaos to trusted, governed data',
        description: `Ednon's implementation of OpenMetadata transformed Deputación Provincial da Coruña's data landscape into a trusted governance foundation that continues to expand. Within two years, the organization moved from data chaos to a mature governance practice with documented assets, standardized business terminology, quality controls, and automated workflows.`,
        challenges: [
            {
                header: 'Dramatic documentation improvement',
                description: 'Documentation coverage increased from less than 1% to 41% of all cataloged tables, a 41x improvement in just two years. The organization now maintains 1,412 cataloged assets with ongoing growth.',
            },
            {
                header: 'Comprehensive business context',
                description: 'Deputación established 18 glossaries containing 457 business terms, with 238 approved terms providing standardized definitions across departments.',
            },
            {
                header: 'Democratized BI with quality controls',
                description: '41 dashboards are now cataloged with full lineage tracking, ensuring only high-quality, validated reports are democratized across the organization.',
            },
            {
                header: 'Reduced technical dependency',
                description: 'Automated metadata injection into source databases creates living documentation accessible to developers, analysts, and auditors directly in their tools while reducing reliance on institutional knowledge held by a few individuals.',
            },
            {
                header: 'Improved data quality and trust',
                description: 'Quality rules between master and reference tables proactively identify data inconsistencies, with automated alerts to data modelers and project managers prioritizing remediation work.',
            },
            {
                header: 'Foundation for AI-driven innovation',
                description: 'With governed metadata in place, Deputación is implementing AI to automate documentation for multi-tenant databases (500+ schemas, 150-600 tables per schema) that would have been impractical to document manually.',
            },
        ]
    }
]

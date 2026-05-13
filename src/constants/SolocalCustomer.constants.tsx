export const SOLOCAL_CUSTOMER_HEADER = {
    title: "Solocal turns cloud data into trusted insights for France’s local businesses with OpenMetadata",
    description: "Solocal, operator of PagesJaunes, powers one of France’s most-visited local business platforms, serving more than 260,000 small and medium-sized businesses and attracting over 15 million monthly users. As Solocal migrated its large-scale analytics ecosystem to Google Cloud, its data footprint expanded rapidly. Tens of thousands of tables improved analytical depth—but also created complexity. By implementing OpenMetadata as an open, self-hosted governance layer, Solocal transformed a fragmented technical environment into a curated portfolio of trusted, business-ready data products—strengthening governance while dramatically simplifying access for business users.",
    industry: "Digital Advertising and Marketing",
    technologies: "Google Cloud Platform (GCP), BigQuery, Kubernetes (GKE), Helm, Apache Airflow, dbt, MySQL, Elasticsearch, Power BI",
    image: "/assets/solocal-customer/solocal-header.png"
}

export const SOLOCAL_CUSTOMER_HIGHLIGHTS = [
    {
        id: 1,
        count: '50–100',
        description: "well-defined data products simplified from 50,000 tables"
    },
    {
        id: 2,
        count: '97%',
        description: "fewer GCP projects to manage for business analytics (35 to 1)"
    },
    {
        id: 3,
        count: '260K+',
        description: "businesses supported through trusted analytics"
    }
];

export const SOLOCAL_CUSTOMER_TESTIMONIAL = {
    content: "The biggest benefit of OpenMetadata is simplification. We’ve significantly improved the dialogue with the business by helping everyone understand which data products and tables really matter.",
    name: "Gaétan Soulas",
    title: "SAS and Certified Google Cloud Data Architect at Solocal",
    logo: "/assets/testimonials/solocal-logo.svg"
}

export const SOLOCAL_CUSTOMER_CHALLENGES = [
    {
        image: '/assets/solocal-customer/solocal1.png',
        title: 'Rapid cloud migration created scale—and complexity',
        description: `As Solocal migrated its analytics ecosystem from on-premise systems to Google Cloud and BigQuery, the scale and complexity of its data environment grew quickly. High website traffic, diverse digital products, and deep coverage of small and medium-sized businesses across France generated massive volumes of data. While this data was critical to sales performance and customer intelligence, it became difficult for teams to safely govern and share it with the rest of the business. Solocal needed a way to simplify access without sacrificing control, while creating a shared understanding between data teams and business users.`,
        challenges: [
            {
                header: 'Exploding table counts',
                description: 'The BigQuery environment grew to nearly 50,000 tables spread across dozens of projects. Discovery, cleanup, and prioritization were extremely difficult for both data teams and analysts.',
            },
            {
                header: 'Limited business usability',
                description: 'Business users were exposed to too many raw technical assets, with little guidance on which datasets were trusted or relevant for analysis. Confirming data quality was becoming harder to scale.',
            },
            {
                header: 'Governance at scale',
                description: 'Managing access control and authorization of sensitive data across multiple datasets and teams became increasingly complex as usage expanded.',
            },
            {
                header: 'Fragmented data context',
                description: 'While dbt handled transformations and Power BI delivered insights, there was no central place to document ownership or definitions, obscuring how data products connected to business concepts.',
            },
            {
                header: 'Onboarding friction',
                description: 'New analysts struggled to understand which tables mattered and how they fit into Solocal’s core use cases, slowing productivity and increasing reliance on informal tribal knowledge.',
            },
        ]
    },
    {
        image: '/assets/solocal-customer/solocal2.png',
        title: 'A metadata layer built for enterprise-scale clarity',
        description: `To bring clarity and structure to its rapidly growing data ecosystem, Solocal adopted OpenMetadata as an open source, self-hosted metadata and governance layer. The open source model gave Solocal full control to deploy, operate, and extend the platform within its existing cloud architecture, while benefiting from a community-driven project shaped by real-world production use. Rather than introducing another closed system, OpenMetadata became a unifying reference layer that connects technical assets to business-facing data products, improving dialogue between data teams and the business.

OpenMetadata is deployed in production on Google Kubernetes Engine (GKE) using Helm, aligning seamlessly with Solocal’s cloud-native strategy. Metadata ingestion is orchestrated through Apache Airflow, stored in MySQL, and indexed in Elasticsearch to power fast search and discovery in the UI. Authentication is handled through Azure SSO, with automated user and team synchronization via LDAP using the OpenMetadata Python SDK. This architecture allows Solocal to scale governance reliably while keeping operations flexible and transparent.`,
        challenges: [
            {
                header: 'Data product-centric governance',
                description: 'OpenMetadata provides a structured way to expose curated data products to business users, abstracting away raw tables while preserving traceability to underlying BigQuery assets.',
            },
            {
                header: 'Centralized discovery layer',
                description: 'Analysts and other business stakeholders can search for datasets, dashboards, and reports in one place.',
            },
            {
                header: 'Business context through glossaries',
                description: 'Shared business glossaries link definitions directly to data products and tables, helping align technical metadata with real business concepts.',
            },
            {
                header: 'Seamless integration with existing tools',
                description: 'Native ingestion for BigQuery, dbt, and Power BI allows OpenMetadata to act as a reference layer rather than a replacement. Analytics, transformation, and reporting workflows are fully connected.',
            },
        ]
    },
    {
        image: '/assets/solocal-customer/solocal3.png',
        title: 'Simplified governance powering local business growth',
        description: `Data is only valuable if it can be understood, trusted, and safely used by the business. By introducing OpenMetadata as a shared governance and discovery layer, Solocal shifted from managing raw infrastructure complexity to enabling business-ready analytics. OpenMetadata helped bridge the gap between high-volume cloud data and everyday decision-making, allowing teams to move faster while maintaining control over access, quality, and context.

Rather than overwhelming users with thousands of technical tables, Solocal now presents a simplified, curated view of its data estate. This has strengthened collaboration with business stakeholders, enabling better insights for sales, customer success, and operations.`,
        challenges: [
            {
                header: 'From data sprawl to business-ready products',
                description: 'Reduced tens of thousands of BigQuery tables into a focused set of ~50–100 well-defined data products. Analytics is accessible and actionable for non-technical users.',
            },
            {
                header: 'Improved business onboarding',
                description: 'Data analysts can quickly identify which data products matter, who owns them, and how they should be used—shortening ramp-up time and reducing reliance on informal knowledge sharing.',
            },
            {
                header: 'Clearer ownership and accountability',
                description: 'Ownership, descriptions, and usage context are documented directly in OpenMetadata, improving stewardship and long-term maintainability of critical datasets.',
            },
            {
                header: 'Stronger governance without slowing access',
                description: 'Centralized metadata and authorization visibility enable Solocal to safely expose data to the business while maintaining control over sensitive information and access rights.',
            },
            {
                header: 'Better communication between data and business teams',
                description: 'Shared glossaries and product-level documentation create a common language, reducing misinterpretation and improving trust in reports and dashboards.',
            },
            {
                header: 'Scalable, future-proof governance',
                description: 'Running OpenMetadata in production on Kubernetes provides a stable foundation that can evolve alongside Solocal’s growing data platform and expanding analytics use cases.',
            },
        ]
    }
]

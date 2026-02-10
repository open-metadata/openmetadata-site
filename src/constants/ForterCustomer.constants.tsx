export const FORTER_CUSTOMER_HEADER = {
    title: "Forter Protects Businesses With Secure, Frictionless Commerce",
    description: "Forter is a fraud prevention company that works with large enterprise merchants, where accurate, well-governed data is essential for detecting and preventing malicious behavior at scale. As Forter operated across a wide range of data systems — including Snowflake, Amazon S3, and relational databases — understanding what data existed and how it should be modeled and governed became difficult to manage consistently, exposing limitations in traditional approaches to metadata management within high-volume, multi-system environments.",
    industry: "B2B SaaS / Ecommerce",
    technologies: "Amazon S3, Kubernetes, Snowflake",
    image: '/assets/forter-customer/forter-header.png'
}

export const FORTER_CUSTOMER_HIGHLIGHTS = [
    {
        id: 1,
        count: 'Billions',
        description: "of objects managed across large S3 environments"
    }
];

export const FORTER_CUSTOMER_TESTIMONIAL = {
    content: "We looked at other alternatives, but OpenMetadata stood out for its flexibility and maturity. The solution allowed us to address our S3 metadata requirements in a way that actually works for the size of our data environment.",
    name: "Christian Calugaru",
    title: "Software Engineer at Aspire",
    logo: "/assets/testimonials/forter.png"
}

export const FORTER_CUSTOMER_CHALLENGES = [
    {
        title: 'Traditional data lake metadata models Struggled at scale',
        description: `As Forter scaled its fraud prevention platform, the volume of data stored in Amazon S3 grew rapidly alongside data in Snowflake and relational databases. This data, often highly sensitive because of its ties to customer transactions, became increasingly difficult to catalog and govern, as traditional metadata approaches were not designed to handle S3 environments containing billions of objects.
        
“In practice, many of our data lake metadata models relied on file-level ingestion and attempted to enumerate and represent every individual object as a table,” shared Christian Calugaru, Software Engineer at Forter. Given the size and complexity of Forter’s data footprint, this approach quickly broke down and made comprehensive metadata ingestion impractical while introducing operational and cost constraints.

This introduced several critical challenges:`,
        challenges: [
            {
                header: 'Scalability limitations in S3 metadata management',
                description: 'Modeling every object as a table did not scale to buckets with extremely high file counts and prevented full visibility into stored data.',
            },
            {
                header: 'Performance and cost bottlenecks',
                description: 'Enumerating objects to compute counts and storage sizes risked timeouts and excessive infrastructure costs.',
            },
            {
                header: 'Lack of clarity between structured and unstructured data',
                description: 'Teams struggled to distinguish which S3 paths contained structured datasets requiring schemas versus unstructured data, which complicated discovery and governance.',
            },
            {
                header: 'Fragmented data understanding across systems',
                description: 'Without a scalable way to connect metadata across warehouses, databases, and object storage, teams lacked a unified view of Forter’s data landscape.',
            }
        ]
    },
    {
        title: 'Building a scalable metadata foundation for efficient data operations',
        description: `To address these challenges, Forter selected OpenMetadata as its  platform for data discovery, observability, and governance. The team was drawn to OpenMetadata’s flexibility, open-source model, and ability to contribute directly to the product, as well as its maturity relative to other solutions they evaluated.
        
Using OpenMetadata, Forter centralized its metadata cataloging across systems, including Snowflake, Amazon S3, and relational databases. The solution was deployed in a Kubernetes environment and used in production, as the team continued to build out its metadata platform over time. “We worked closely with the OpenMetadata team to define S3 metadata requirements, provide feedback based on community needs, and contribute to the implementation of new storage service capabilities,” explained Calugaru.

The company-wide effort focused on improving how large-scale object storage was represented, selectively discovered, and measured, without relying on exhaustive file-level ingestion. As a result, Forter was able to support:`,
        challenges: [
            {
                header: 'Scalable representation of object storage',
                description: 'S3 buckets and paths were modeled as logical hierarchies, enabling metadata discovery without enumerating every object.',
            },
            {
                header: 'Targeted metadata ingestion',
                description: "Metadata ingestion was limited to relevant paths and datasets, which reduced operational overhead and preserved visibility into critical data assets.",
            },
            {
                header: 'Efficient visibility into storage metrics',
                description: 'Object counts and storage size were surfaced without the need to scan billions of files.',
            },
            {
                header: 'Schema inference without full dataset scans',
                description: 'Schemas for supported file formats were inferred without requiring expensive, full-bucket analysis.',
            }
        ]
    },
    {
        title: 'Centralizing metadata for increased visibility and governance',
        description: `By adopting OpenMetadata and contributing to the evolution of its storage services, Forter established a more scalable and practical approach to managing metadata across its diverse data environment. “OpenMetadata has become our centralized place for understanding data across Snowflake, relational databases, and S3. It gives us much better visibility and control in an environment where the data is both high-volume and sensitive,” concluded Calugaru.
        
As a result, Forter achieved several meaningful outcomes:`,
        challenges: [
            {
                header: 'Centralized metadata across systems',
                description: 'OpenMetadata became a single, centralized location for connecting metadata from Snowflake, S3, and relational databases, making it easier for teams to understand how data assets relate across the broader data ecosystem.',
            },
            {
                header: 'Production-ready metadata operations',
                description: 'The platform was deployed on Kubernetes and used in production. This enabled Forter to build and expand its metadata platform actively over time.',
            },
            {
                header: 'Governance for large-scale, unstructured data',
                description: 'By ingesting S3 buckets as first-class entities, Forter was able to apply tags and descriptions even to unstructured data, extending governance far beyond traditional warehouse tables.',
            },
            {
                header: 'More cost-effective visibility into storage metrics',
                description: 'Moving away from naive file-by-file enumeration allowed Forter to track object counts and storage size for massive S3 buckets in a significantly more efficient and cost-conscious way.',
            },
            {
                header: 'Lasting impact on the OpenMetadata community',
                description: 'Forter’s requirements directly informed the design of Collate’s new Storage Services functionality, as the team helped shape a more scalable approach to S3 metadata that benefits the broader OpenMetadata community.',
            }
        ]
    }
]
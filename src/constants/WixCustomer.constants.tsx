export const WIX_CUSTOMER_HEADER = {
    title: "Wix Powers AI-Driven Product Decisions in Minutes with OpenMetadata",
    description: "Wix is a website builder that supports more than 200 million users worldwide, where speed and accuracy directly shape product decisions. As AI agents began playing a larger role across analytics, business intelligence (BI), and internal decision workflows, Wix faced a critical challenge. These agents needed fast, trusted, and highly contextual metadata to operate effectively at scale. Wix adopted OpenMetadata as an open-source foundation for powering AI-ready data. What began as a metadata catalog evolved into a central system that feeds their AI agents through APIs and MCPs that enable agents to discover tables, understand schemas, apply the right queries, and return answers in minutes rather than hours. Now, this metadata foundation underpins in-production AI systems like AirBot. This internal AI-powered on-call assistant relies on OpenMetadata to understand ownership, lineage, schemas, and data quality when investigating incidents and answering complex questions to save Wix hundreds of Engineering Hours every month. By combining real-time ingestion, governed data warehouse tiers, and community-built extensibility, OpenMetadata helps teams move faster and scale AI-driven decision-making across the organization.",
    industry: "Technology, Website Builder",
    technologies: "Google Cloud Platform, Trino, OpenMetadata, Apache Kafka, Great Expectations, AI agents (MCP-based)",
    image: '/assets/wix-customer/wix-header.png'
}


export const WIX_CUSTOMER_HIGHLIGHTS = [
    {
        id: 1,
        count: '25k+',
        description: "Data assets ingested and updated daily across tables, pipelines, and dashboards"
    },
    {
        id: 2,
        count: '130,000+',
        description: "Lineage connections powering governed analytics and AI agents"
    },
    {
        id: 3,
        count: '6,000',
        description: "Great Expectations data quality tests executed and surfaced in metadata"
    }
];

export const WIX_CUSTOMER_TESTIMONIAL = {
    content: "OpenMetadata gives us a trusted foundation for AI-driven decision-making, letting our teams innovate faster and more confidently across the business.",
    name: "Sapir Hirshberg",
    title: "Senior Data Product Manager at Wix",
    logo: "/assets/testimonials/wix.png"
}

export const WIX_CUSTOMER_CHALLENGES = [
    {
        image: '/assets/wix-customer/traditional-documentation.png',
        title: 'Traditional documentation slowed decision making',
        description: `As Wix continued to scale its data platform, metadata became foundational to how teams worked. Wix operates a large, fast-moving analytics environment supporting business analysts, data engineers, data scientists, BI tools, and, increasingly, AI agents that need immediate access to trusted context. Wix’s cloud platform generates billions of HTTP transactions every day, feeding a 7-petabyte data lake, making ad hoc context gathering increasingly unsustainable. Existing internal tools struggled to keep up with the pace or scale of change. Documentation lagged behind reality, lineage was incomplete, and metadata updates were too slow for teams that relied on real-time accuracy. 
        
This meant engineers often had to act as “human error parsers”, manually digging through alerts, logs, schemas, and upstream dependencies just to understand what went wrong. This manual effort significantly increased time to understand issues before they could even begin fixing them. To support both users and AI agents, Wix needed an open, extensible metadata system that could ingest at scale, stay continuously fresh, and serve as a reliable source of truth across the organization.`,
        challenges: [
            {
                header: 'Metadata sprawl at massive scale',
                description: 'Wix manages roughly 25,000 tables, 8,000 pipelines, and 5,000 dashboards, all of which change frequently and must remain discoverable and well-documented.',
            },
            {
                header: 'Inconsistent documentation',
                description: 'As more people became involved with data, documenting data assets became a bottleneck for decision-making.',
            },
            {
                header: 'Delayed and outdated metadata',
                description: 'Batch-based ingestion meant schema changes, new columns, or deleted assets could take hours or days to appear.',
            },
            {
                header: 'Disconnected lineage and context',
                description: 'Understanding how data flowed across tables, jobs, and dashboards was difficult as dependencies grew.',
            },
            {
                header: 'AI agents without reliable context',
                description: 'As Wix began experimenting with AI agents for analytics and querying, those agents lacked the structured metadata needed to reliably find the right tables and generate accurate queries.',
            }
        ]
    },
    {
        image: '/assets/wix-customer/ai-powered.png',
        title: 'Powering AI-ready data through an open, extensible metadata foundation',
        description: "To support faster, data-driven decisions across their business, Wix adopted OpenMetadata as the system of record for metadata in order to build on an open-source foundation that their team could extend and operationalize over time. What began as a search for a better way to document assets quickly grew into a full production platform that sits in the middle of Wix’s data ecosystem. OpenMetadata ingests metadata continuously, enriches it with governance and quality signals, and serves it back to internal BI tools and AI agents.",
        challenges: [
            {
                header: 'Always-on, production deployment',
                description: 'OpenMetadata operates as a mission-critical platform used continuously across the organization, supporting both UI access and programmatic access.',
            },
            {
                header: 'Real-time metadata ingestion for tables',
                description: "Schema changes are captured via Kafka-driven ingestion so metadata stays current as systems evolve.",
            },
            {
                header: 'Continuous enrichment for relationships and context',
                description: 'Lineage and related metadata connections are recalculated on a frequent cadence to reflect current dependencies.',
            },
            {
                header: 'Integrated data quality signals',
                description: 'Great Expectations (GX) test results are ingested into OpenMetadata so users can see data quality failures and validation context alongside each asset.',
            },
            {
                header: 'Governed, certified datasets as a shared standard',
                description: "Ownership, domains, documentation requirements, naming conventions, freshness checks, and certification tiers create consistent signals of what is safe to use.",
            },
            {
                header: 'API-first access for internal tools',
                description: "A wrapped proxy API makes OpenMetadata the fastest path for BI tools and internal systems to retrieve schema and catalog context.",
            },
            {
                header: 'MCP-enabled delivery to AI agents',
                description: "Wix uses [OpenMetadata's MCP Server](https://open-metadata.org/mcp) to provide agents the specific slices of metadata they need (descriptions, columns, queries, etc.) without over-fetching irrelevant context.",
            },
            {
                header: 'Open-source extensibility without lock-in',
                description: "The community-driven model gives Wix the flexibility to implement internal standards and workflows while building on a shared, evolving platform.",
            }
        ]
    },
    {
        image: '/assets/wix-customer/faster-decisions.png',
        title: 'Faster product decisions and AI-driven insights at scale',
        description: `For a digital platform serving hundreds of millions of users, speed and accuracy are competitive advantages. By operationalizing OpenMetadata as a production-grade foundation for both analytics and AI agents, Wix transformed metadata from a passive catalog into an active driver of business outcomes. Teams no longer spend time hunting for the right tables or validating freshness.
        
Instead, trusted metadata flows directly into BI tools and AI agents, enabling faster answers and quicker iteration on products that impact Wix’s global user base.`,
        challenges: [
            {
                header: 'AI-powered answers in real-time',
                description: 'AI agents can identify the right tables, understand schemas, apply queries, and return answers end-to-end in about one minute, without manual searching or query writing.',
            },
            {
                header: 'Confidence in rapidly changing data',
                description: 'With metadata ingestion capturing schema changes as they happen, teams no longer wait until “tomorrow” to understand new columns or updated assets.',
            },
            {
                header: 'Enterprise-scale lineage clarity',
                description: 'OpenMetadata tracks and exposes over 130,000 lineage connections across tables, jobs, and dashboards, giving teams instant visibility into how data flows and where changes will propagate.',
            },
            {
                header: 'Operational readiness for AI',
                description: 'Wix reports 70–80% completeness across descriptions, queries, and metadata, enabling AI agents to operate effectively and accelerating adoption.',
            },
            {
                header: 'Higher-quality shared data assets',
                description: 'Certified tier-one and tier-two tables are prioritized across internal systems, ensuring teams consistently build on governed, trustworthy datasets.',
            },
            {
                header: 'Reduced analyst and engineer toil',
                description: 'Analysts no longer need to manually locate tables or reverse-engineer logic. AI agents handle discovery and querying while metadata provides guardrails. By offloading investigation and context-gathering to AI agents like AirBot, Wix has reduced repetitive on-call work and reclaimed 675 engineering hours each month.',
            },
            {
                header: 'Faster product iteration cycles',
                description: 'By shortening the path from question to insight, teams can make data-backed product decisions more quickly.',
            },
            {
                header: 'A scalable foundation for future AI innovation',
                description: 'With metadata structured, enriched, and accessible through APIs and MCPs, Wix is positioned to expand AI-driven workflows across operations, and product development.',
            }
        ]
    }
]

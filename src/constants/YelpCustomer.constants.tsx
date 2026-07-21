export const YELP_CUSTOMER_HEADER = {
    title: "Yelp Builds a Trust-First Discovery Layer on OpenMetadata for an Agentic Workplace",
    description: `Yelp connects people with local businesses, and its Analytics Engineering team runs the platforms its data practitioners depend on, including data quality, monitoring, cataloging, and lineage. As AI agents became pervasive across the company, the team faced a discovery problem: a data catalog crowded with duplicates, thin documentation, and no way to weigh trust signals in search. To solve this, they scaled OpenMetadata from a small proof-of-concept to a production deployment of ~100,000 assets, then engineered a custom search layer, persona-based policies, and a token-efficient in-house MCP server, Yelp's first upstream OpenMetadata contribution. The team turned OpenMetadata into an open context layer: the trusted, governed source its people and its AI agents both draw on to find and understand the right data, not just any data.`,
    industry: "Consumer Internet / Local Commerce",
    technologies: "OpenMetadata, Amazon Athena, Amazon Redshift, dbt, Apache Spark, Apache Kafka, Apache Flink, OpenLineage, Streamlit, OpenSearch, LiteLLM",
    videoUrl: "HLFyqQ96IUo",
    attribution: {
        text: "This case study is adapted from Amy Forest's ",
        linkText: "Summit '26 talk",
        linkUrl: "https://youtu.be/HLFyqQ96IUo"
    }
}

export const YELP_CUSTOMER_HIGHLIGHTS = [
    {
        id: 1,
        count: '~100k',
        description: "data assets cataloged in production OpenMetadata"
    },
    {
        id: 2,
        count: '~66%',
        description: "improved token economy on Yelp's core search"
    },
    {
        id: 3,
        count: '~80%',
        description: "payload reduction for large context bundles"
    }
];

export const YELP_CUSTOMER_TESTIMONIAL = {
    content: "Our data catalog had a lot of duplicates, and maybe only one of them was documented, or worse, none of them were. What it really suffered from was trust decay: I wasn't sure what I should use, or even how to search for it. For us, the foundation of data discovery is good search, and that's why we picked OpenMetadata. The focus on search, broad and accessible API support, and the fact that it's open source and extensible let us bring our own search algorithm and contribute fixes back upstream.",
    name: "Amy Forest",
    title: "Software Engineer, Analytics Engineering at Yelp",
    logo: "/assets/testimonials/yelp-logo.webp"
}

export const YELP_CUSTOMER_CHALLENGES = [
    {
        image: '/assets/yelp-customer/section-1.webp',
        title: 'Governing discovery when duplicates and thin docs erode trust',
        description: `Before OpenMetadata, Yelp's internal catalog made the last mile of analysis the hardest part. Data flowed from Athena into Redshift, fanning the same tables across multiple clusters, so a single search returned many near-identical results, often with only one (or none) documented. Analysts couldn't tell what was canonical, and as AI agents entered the workflow, the same ambiguity tripped them up faster and more expensively. The catalog suffered from trust decay stemming from compounding causes: subpar search relevance, excessive duplication, lacking documentation, and limited write licenses. High-quality search was essential, but the catalog wasn't delivering it where it mattered.`,
        challenges: [
            {
                header: 'Search blind to trust signals',
                description: `Keyword search, and even hybrid semantic search, didn't weigh the signals indicating a reliable asset: usage, tiering, and certification. High-quality tables didn't rise to the top, so relevance suffered where it mattered most.`,
            },
            {
                header: 'Duplicate sprawl across clusters',
                description: `Athena-to-Redshift Spectrum shares produced the same table on every Redshift cluster. A search for a product concept surfaced a wall of duplicates with no clear canonical source, and users wouldn't know which one to query.`,
            },
            {
                header: 'Thin documentation and trust decay',
                description: `Documentation was lacking due to a prior vendor agreement capping write licenses, which limited how much the data practitioner community could document. Combined with duplication, this bred "trust decay" where users weren't sure what to use or even how to search for it.`,
            },
            {
                header: 'Agents that give up or blow up context',
                description: `Agents don't search like humans. LLMs probe with many keywords, lack immediate business context, and are vulnerable to context explosions, so they need explicit guidelines for encoding discovery flows and MCP use. In practice, piling on keywords could return almost nothing, while Yelp's dbt documentation could chew through tokens quickly without careful control.`,
            },
            {
                header: 'Overwhelming one-size catalog for every persona',
                description: `Analysts and data consumers didn't need to see Kafka topics, Flink pipelines, or raw OpenLineage entities, but the catalog exposed everything to everyone, adding even more noise to data discovery for consumers.`,
            }
        ]
    },
    {
        image: '/assets/yelp-customer/section-2.webp',
        title: 'A trust-first, persona-aware discovery layer on OpenMetadata',
        description: `Yelp picked OpenMetadata for three reasons: (1) search customization to be able to bring their own ranking; (2) broad API support so they could integrate it everywhere in their data stack; and (3) open source extensibility so they could customize it and contribute fixes back upstream. On that foundation, the Yelp Analytics Engineering team treated discovery as a product, building a custom search layer for their human and AI data teams.`,
        challenges: [
            {
                header: 'Bring-your-own search algorithm',
                description: `With ~100k assets cataloged, keyword search alone couldn't weigh the trust signals that indicate a reliable asset. Yelp customized its search algorithm to weight usage, tiers, and certifications, to bias canonical sources when duplicates exist, to power filtered persona-centric experiences, and to optimize agentic retrieval success.`,
            },
            {
                header: 'Search management system',
                description: `To iterate on ranking safely, Yelp built a Search Management System over OpenMetadata's customizable search: versioning to save and roll back a known-good algorithm, score decompositions to keep ranking interpretable, and search evals to confirm the right tables land at the top.`,
            },
            {
                header: 'Canonical source over duplicates',
                description: `Rather than surfacing three duplicates, the ranking promotes the canonical, best-documented asset and represents the duplicates through lineage, so users land on the one table they should use.`,
            },
            {
                header: 'Persona-based filtering via policies and tags',
                description: `Using OpenMetadata policies and tags, analysts and data consumers see all assets related to business intelligence, while underlying Kafka topics, Flink pipelines, and OpenLineage entities are hidden from them, though lineage stays visible. Engineers and data builders can see everything. Discovery is tailored to each user's needs.`,
            },
            {
                header: 'A customized, read-only MCP server',
                description: `Yelp built its own OpenMetadata MCP server to meet Analytics Engineering's requirements: a read-only, slimmed-down version that used fewer tokens and parameters. It ran centrally via LiteLLM with OAuth, and a companion local CLI pushed documentation updates back safely.`,
            },
            {
                header: 'Guardrails for agentic search',
                description: `To adjust to the unique search behavior of agents on the open context layer, Yelp encoded search methodology into agent skills that enforce a strict discovery flow across glossaries, assets, and queries. These guardrails helped cut per-tool docstring tokens by ~66%.`,
            }
        ]
    },
    {
        image: '/assets/yelp-customer/section-3.webp',
        title: 'Data discovery that both people and agents can trust',
        description: `Yelp moved from a duplicate-ridden catalog its own engineering teams didn't trust to a production OpenMetadata deployment where the canonical, best-documented asset rises to the top for humans and agents alike, and where the platform team's improvements loop back to strengthen the wider data community.`,
        challenges: [
            {
                header: 'Journey from PoC to production',
                description: `Yelp's progression ran from an OpenMetadata PoC and data-catalog survey, through user interviews and alpha, through to internal beta and full production launch. The production deployment now catalogs ~100k assets and the team has made contributions back to the open source community.`,
            },
            {
                header: 'Trust signals now drive relevance',
                description: `Certification and tiering feed a certification and checklist process that gives the data community concrete incentives to document and improve assets, turning search ranking into a lever for better data culture, not just better retrieval.`,
            },
            {
                header: 'Agent-safe discovery',
                description: `The structured skills and improved search give agents reliable results up front, cut large-context payloads by ~80%, and guard against failure modes like keyword over-stuffing, premature "no data," and context blow-ups, helping keep search latencies and token cost in check.`,
            },
            {
                header: 'Contributing back to the community',
                description: `The in-house OpenMetadata MCP became Yelp's first upstream contribution to the project, alongside OpenLineage support for Spark pipelines and search-performance fixes that trimmed oversized payloads. It is this ecosystem of community contributions to the open source project that has helped OpenMetadata grow and innovate.`,
            },
            {
                header: 'Going from search to data foundation',
                description: `The impacts of OpenMetadata have gone far beyond search and context: automatic ownership resolution, lineage maintenance, an asset certification process, importance/tiering inference, agent tooling, and more. OpenMetadata provided a foundation, while team engagement and processes brought it to practice across the organization.`,
            },
            {
                header: 'Accelerating the platform flywheel',
                description: `The efforts across the team reinforce each other: data platform teams equip and enable data practitioners, practitioners surface and contribute back, business stakeholders empower and educate. Discovery, certification, and agent enablement can now compound to strengthen the data culture across the organization, powering an open context layer of shared understanding that people and agents alike can trust.`,
            }
        ]
    }
]

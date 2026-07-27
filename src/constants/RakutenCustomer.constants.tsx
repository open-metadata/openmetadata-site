export const RAKUTEN_CUSTOMER_HEADER = {
    title: "OpenMetadata Journey at Rakuten: Unifying a Fractured Data Landscape and Laying the Foundation for AI Agents",
    description: `Rakuten runs one of the world's largest digital ecosystems, a company founded in Japan in 1997 that now spans more than 30 countries and regions, over 70 services, and more than 2.1 billion users across e-commerce, mobile, fintech, and media, with global gross transaction value exceeding 48 trillion yen. Beneath that ecosystem sit many independent data platforms, each maintained by its own engineering team, with catalogs fractured across Excel files, Confluence pages, and bespoke web apps. To consolidate discovery, governance, and utilization across the group, and to build a foundation ready for AI use cases, Rakuten's Data Platform team adopted OpenMetadata as a single, group-wide catalog.`,
    industry: "Internet Services / E-commerce (global technology ecosystem)",
    technologies: "OpenMetadata, MySQL, PostgreSQL, Cassandra, MongoDB, Apache Kafka, Apache Spark, Apache Airflow, Kubernetes",
    image: "/assets/rakuten-customer/rakuten-header.webp",
    attribution: {
        text: "This case study is adapted from Muqtafi Akhmad's ",
        linkText: "Collate Summit '26 talk",
        linkUrl: "https://www.getcollate.io/summit2026"
    }
}

export const RAKUTEN_CUSTOMER_HIGHLIGHTS = [
    {
        id: 1,
        count: '2-3 mo to <1 hr',
        description: "projected time to find whether a dataset is useful, down from a two-to-three month user-survey baseline"
    },
    {
        id: 2,
        count: '30-60% to 80%',
        description: "projected lift in data utilization across onboarded business platforms"
    },
    {
        id: 3,
        count: 'many to 1',
        description: "fractured per-team catalogs consolidated into one group-wide OpenMetadata catalog"
    }
];

export const RAKUTEN_CUSTOMER_TESTIMONIAL = {
    content: "OpenMetadata offers the technical metadata, business metadata, quality, and observability that we are looking for. It's easy to use the search and discovery features, it has the standard governance features which fit well with our use cases, with the notion of domain, products, and tags, and it's an open source platform with a growing community. We see that OpenMetadata is a complete package solution for Rakuten Group.",
    name: "Muqtafi Akhmad",
    title: "Assistant Manager, Data Pipeline Platform Team, Data Platform Department at Rakuten Group, Inc.",
    logo: "/assets/testimonials/rakuten-logo.webp"
}

export const RAKUTEN_CUSTOMER_CHALLENGES = [
    {
        image: '/assets/rakuten-customer/section-1.webp',
        title: 'A fractured catalog landscape across a sprawling ecosystem',
        description: `Rakuten's strength, a broad ecosystem of complementary services, is also what made its data hard to govern. Many data platforms, each owned by a different engineering group, meant many catalogs, many governance models, and no shared view of what data existed or how businesses related to one another. Data consumers couldn't reliably find relevant data, couldn't judge whether it was useful, and pipelines ran at cost even when no one used their output.`,
        challenges: [
            {
                header: 'Fractured, siloed catalogs',
                description: `Each team maintained its own catalog in whatever form it chose, a spreadsheet or Excel file, a Confluence page, or a dedicated web app built as a data catalog. Each had its own definition of what a data catalog was, so there was no consistent way to see what data existed across the group.`,
            },
            {
                header: 'Inconsistent, unclear governance',
                description: `Because each team did things its own way, governance was unclear across the group. From the user's perspective, the relationship between data on one platform and another was opaque, and there was no standard classification, taxonomy, or domain.`,
            },
            {
                header: 'Slow, uncertain discovery',
                description: `When a data consumer arrived with a business question, they often didn't know which team could answer it or where to look. A user survey found users typically needed two to three months to find the useful data for a problem.`,
            },
            {
                header: 'Wasted pipelines, low utilization',
                description: `Many pipelines produced data that no one used, giving it low business impact while Rakuten still paid to compute and store it. On sampled platforms, utilization sat around one-third to 60% (business one had roughly 300 tables at about 60%; business two roughly 220 tables at about one third).`,
            },
            {
                header: 'No AI-ready foundation',
                description: `The fractured catalogs offered no path to the AI use cases the team wanted to enable: automatic description generation across thousands of tables, and agents that query lineage and data characteristics to debug pipelines.`,
            }
        ]
    },
    {
        image: '/assets/rakuten-customer/section-2.webp',
        title: 'A single group-wide catalog on OpenMetadata',
        description: `After starting the initiative in October 2025 with requirement definition, an evaluation of catalog solutions on the market, and a POC to validate fit, Rakuten selected OpenMetadata as its group-wide catalog. The team valued that it covers technical metadata, business metadata, quality, and observability in one place; that search and discovery are easy to use; that governance is standardized around domains, products, and tags; and that it's open source with a growing community, a complete package solution for Rakuten Group.`,
        challenges: [
            {
                header: 'One consolidated catalog',
                description: `OpenMetadata replaces the patchwork of Excel, Confluence, and custom apps with a single group-wide catalog, a place to capture any data and the processes that move it, from operational databases through pipelines to the data platforms that serve it.`,
            },
            {
                header: 'Built-in, standard governance',
                description: `Rather than per-team, ad-hoc models, OpenMetadata provides standard governance the team can apply consistently, using data products, a glossary, tagging, and rules and policies to manage access.`,
            },
            {
                header: 'Fast search and discovery',
                description: `Easy-to-use search and discovery let consumers find relevant data, filtering by data product, domain, or tags, and judge its usefulness directly in the catalog, instead of hunting across teams for months.`,
            },
            {
                header: 'Kubernetes-native orchestration and OpenLineage',
                description: `The Kubernetes-native orchestrator lets Rakuten deploy OpenMetadata without a dedicated Airflow cluster, described on stage as pretty cost-saving. The team is also testing OpenLineage integration to smooth ingestion from its various databases and processes.`,
            },
            {
                header: 'A foundation for AI use cases',
                description: `Beyond human discovery, Rakuten sees OpenMetadata as the foundation for AI, with automatic description generation and MCP integration on the roadmap so agents can query lineage and data characteristics to help engineers debug pipelines.`,
            }
        ]
    },
    {
        image: '/assets/rakuten-customer/section-3.webp',
        title: 'A foundation for discovery, governance, and AI, in progress',
        description: `With a single group-wide catalog coming online, Rakuten expects to turn a fractured, low-utilization estate into one where consumers find and trust data quickly, governance is consistent, and AI agents have a reliable foundation. The headline figures below are Rakuten's own projected targets, stated on stage, with production stabilization and broader onboarding scheduled from July 2026.`,
        challenges: [
            {
                header: 'Discovery: 2-3 months to under an hour (projected)',
                description: `With a single searchable catalog, Rakuten expects determining whether a dataset is useful to drop from two-to-three months to under an hour.`,
            },
            {
                header: 'Utilization: 30-60% to 80% (projected)',
                description: `As businesses onboard and data becomes discoverable, Rakuten expects utilization rising from a 30-60% baseline toward 80%.`,
            },
            {
                header: 'One governance standard replacing many',
                description: `Consolidating fractured catalogs into a single OpenMetadata instance gives Rakuten one governance standard and one place to manage access, replacing the per-team, ad-hoc approach.`,
            },
            {
                header: 'Lower operational burden',
                description: `The Kubernetes-native orchestrator lets Rakuten run OpenMetadata without a dedicated Airflow cluster, described on stage as pretty cost-saving.`,
            },
            {
                header: 'Building toward AI use cases',
                description: `Rakuten is moving from a metadata catalog toward an AI-ready foundation, with data observability, automatic description generation, and MCP integration (agents that debug pipelines via lineage and data characteristics) on the roadmap.`,
            }
        ]
    }
]

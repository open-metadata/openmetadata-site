export const TABBY_CUSTOMER_HEADER = {
    title: "How tabby Built an Open Context Layer for AI Agents on OpenMetadata",
    description: `With more than 15 million customers, 40,000+ merchants, and roughly $10 billion in annual transaction volume, tabby is the Middle East's largest buy-now-pay-later platform, serving shoppers and brands across Saudi Arabia, the UAE, and Kuwait. Behind that scale sits a sprawling data platform, with real-time pipelines, a feature store, a warehouse, and machine-learning systems, where the semantic knowledge needed to make sense of the data lived scattered across a dozen tools. To serve that context to both its people and its AI agents, tabby built an open context layer on OpenMetadata, wired into its LLM agents through the Model Context Protocol (MCP).`,
    industry: "Fintech (Buy Now, Pay Later)",
    technologies: "Google BigQuery, Cloud SQL / PostgreSQL, Apache Airflow (Cloud Composer), dbt, Apache Flink, Terraform, Feature Store, Tableau, Looker, Slack, GitLab, and LLMs from Anthropic and OpenAI (plus self-hosted models), connected through the Model Context Protocol (MCP).",
    videoUrl: "ryrb1-2d2NE",
    attribution: {
        text: "This case study is adapted from Maksim Zolotarev's ",
        linkText: "OpenMetadata June 2026 Community Meetup spotlight",
        linkUrl: "https://youtu.be/ryrb1-2d2NE"
    }
}

export const TABBY_CUSTOMER_HIGHLIGHTS = [
    {
        id: 1,
        count: '15M+',
        description: "Customers behind the data tabby's AI agents reason over"
    },
    {
        id: 2,
        count: '2',
        description: "AI agent plugins, one for data engineers and one for analysts, on a single context layer"
    },
    {
        id: 3,
        count: 'Single',
        description: "Open context layer unifying metadata, lineage, glossaries, and business knowledge for humans and LLMs"
    }
];

export const TABBY_CUSTOMER_TESTIMONIAL = {
    content: "I remember the main rule from when I was a machine learning engineer: garbage in, garbage out. In the new era of AI, we still need to provide the context, the metadata, and the physical data to the LLM. If you want the right insights about your data, your business, and your product, that rule still works, and OpenMetadata is how we give our agents that context.",
    name: "Maksim Zolotarev",
    title: "Head of Data Platform & ML, tabby",
    logo: "/assets/tabby-customer/tabby-logo.webp"
}

export const TABBY_CUSTOMER_CHALLENGES = [
    {
        image: '/assets/tabby-customer/section-1.webp',
        title: 'Feeding AI Agents More Than a Schema',
        description: `At tabby, a "data platform" is not a single warehouse. It is a set of solutions spanning data synchronization, a corporate warehouse on BigQuery, a feature store for machine-learning models, and self-service tooling for analysts. Every one of those solutions produced its own metadata: ownership, lineage, and data-quality signals from dbt; YAML pipeline and feature configs; data contracts; metric definitions. That knowledge is exactly what people, and increasingly AI agents, need to use the data correctly. But it was fragmented, and a raw schema alone tells an LLM almost nothing.`,
        challenges: [
            {
                header: 'Metadata Scattered Across Solutions',
                description: `The context that gave tabby's data meaning was spread across dbt models, YAML configs, data contracts, Terraform, and feature-store definitions. Analysts, data scientists, ML engineers, and product managers each needed a slice of it, and there was no single place to get the ownership, lineage, and business meaning behind any given asset.`,
            },
            {
                header: 'Schema Is Not Context',
                description: `Pointing an LLM at a warehouse gives it table and column names: physical structure, and little else. It cannot tell what a dataset is used for, which downstream reports depend on it, or what breaks if a source moves. As Maksim put it, "garbage in, garbage out": without business context, agents produce confident, wrong answers.`,
            },
            {
                header: 'No Connector for Custom Metadata',
                description: `Much of tabby's most valuable semantic data lived in custom formats: YAML files and open-data-contract-standard definitions for features and metrics, with no off-the-shelf connector to bring it into a catalog. Left outside the metadata layer, that context stayed invisible to both users and agents.`,
            },
            {
                header: 'Analytics Bottlenecked on Specialists',
                description: `When a product manager wanted a metric like current GMV, the path ran through an analyst: file a request, wait for a query, or stand up yet another Tableau dashboard. Answering routine business questions meant maintaining a growing sprawl of dashboards and pulling specialists away from deeper work.`,
            }
        ]
    },
    {
        image: '/assets/tabby-customer/section-2.webp',
        title: 'An Open Context Layer with OpenMetadata',
        description: `tabby made OpenMetadata the semantic layer at the center of its platform: one point of truth for data products, assets, pipelines, contracts, and lineage, sitting between the tools its teams use and the engines underneath. The same layer that helps a human discover and trust data became the context source its AI agents read from, so both work from one shared, governed picture of the estate.`,
        challenges: [
            {
                header: 'One Point of Truth',
                description: `OpenMetadata became tabby's single source for data governance and discovery: data products, tables, pipelines, and data contracts, with lineage traced from operational sources through the warehouse's master data products out to BI dashboards. One place to explore what exists, who owns it, and how it connects.`,
            },
            {
                header: 'Context, Not Just Schema',
                description: `Beyond structure, tabby surfaces descriptions, ownership, business meaning, and lineage in OpenMetadata: the "what this data means for the business" layer. That context is what its agents consume, so an LLM reasoning over the estate understands purpose and dependencies, not just column names.`,
            },
            {
                header: 'Glossaries for Custom Metadata',
                description: `Where OpenMetadata's out-of-the-box connectors covered BigQuery, Airflow, dbt, and Flink, tabby used customizable glossaries to bring in everything else: the YAML and data-contract definitions for features and metrics that had no native connector. Custom knowledge became first-class, queryable metadata alongside the automatically ingested sources.`,
            },
            {
                header: 'Agents Wired In Through MCP',
                description: `tabby built agent "plugins," or skills, that pull context from OpenMetadata, plus an internal markdown knowledge base, through the Model Context Protocol, and feed it to LLMs from Anthropic, OpenAI, and self-hosted models. Two plugins put that shared context to work: one for the data platform team, one for analysts and non-technical users.`,
            }
        ]
    },
    {
        image: '/assets/tabby-customer/section-3.webp',
        title: 'Self-Service Data and AI Agents That Understand the Business',
        description: `With OpenMetadata as the context layer, tabby's teams can ask questions in plain language and get answers grounded in real data and real business meaning. The two agent plugins turn a governed metadata catalog into working self-service: for engineers building the platform and for the product people who just want a number.`,
        challenges: [
            {
                header: 'A Data Platform Plugin for Engineers',
                description: `The data platform plugin helps engineers and analysts trace how data products link back to their sources and dependencies, choose the right feature-store feature type and create new features to platform standards, and onboard new sources, preparing the warehouse models and representations that downstream teams consume. Grounded in OpenMetadata plus internal docs, it encodes how tabby's platform actually works.`,
            },
            {
                header: 'A Data Analyst Plugin for Everyone Else',
                description: `The analyst plugin lets non-technical users, product managers and product owners, ask for a metric in plain text, like "get the current GMV" (gross merchandise value). The LLM fetches context from OpenMetadata and the knowledge base over MCP, writes SQL for BigQuery, runs it, and returns the aggregate, generating visualizations on demand instead of standing up and maintaining complex Tableau or Looker dashboards.`,
            },
            {
                header: 'What-If Analysis on Real Context',
                description: `Because agents can reach both the data and the context around it, tabby's teams run ad hoc "what-if" scenarios: what happens to downstream analytics if a fee changes, or a UX pipeline is reworked. Grounded in data products, lineage, and business knowledge, the agents can reason about consequences, not just report current numbers.`,
            },
            {
                header: 'Trustworthy AI, Because the Context Is There',
                description: `The through-line is tabby's founding rule turned into architecture: give an LLM the physical data, the metadata, and the business context together, and it produces reliable analytical results. By making OpenMetadata the open context layer feeding its agents, tabby turned "garbage in, garbage out" from a risk into a design principle: trusted context in, trusted answers out.`,
            }
        ]
    }
]

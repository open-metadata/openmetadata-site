export const NW_CUSTOMER_HEADER = {
    title: "NW Scales Clean Energy Governance Across Thousands of Assets with OpenMetadata",
    description: `NW is the first French unicorn in the energy transition industry and a national leader in electricity storage, with more than 600 megawatts of installed capacity. A pioneer in renewable energy and electric mobility, the company is committed to making clean power accessible to all. Today, NW operates over 130 ultra-fast charging stations under its IECharge® brand and is developing JBox® distributed storage units to stabilize the electrical grid and provide the flexibility needed for the future. 
    
Yet, as NW expanded its clean energy infrastructure, data governance fell behind. Manual lineage, scattered ownership, and outdated tags slowed insights and undermined trust in data. Partnering with Collate, NW replaced this patchwork of silos with a governed ecosystem with the help of OpenMetadata. OpenMetadata now automates ingestion, lineage, and ownership tagging, while the Model Context Protocol (MCP) brings AI-driven capabilities, like prompt-based queries and dashboard generation, into the mix, ensuring NW’s approach to data governance scales with its clean energy mission.`,
    industry: "Renewable Energy, Electric Mobility",
    technologies: "Kafka, PostgreSQL, BigQuery, Power BI, MCP, Grafana",
    videoUrl: "jEBN2CNTvBo?si=pYbTaf7cjOFUEEoA"
}

export const NW_CUSTOMER_HIGHLIGHTS = [
    {
        id: 1,
        count: 'Thousands',
        description: "of assets automatically governed with lineage, ownership, and enrichment"
    },
    {
        id: 2,
        count: '72 pipelines',
        description: "automatically patched in a lineage-driven automation demo"
    }
];

export const NW_CUSTOMER_TESTIMONIAL = {
    content: "For us, governance isn’t just about control — it’s also about trust. OpenMetadata gives us a single source of truth that’s automated, scalable, and trusted, so our teams can move faster with confidence.",
    name: "Aimen Denche",
    title: "Data Engineer at NW",
    logo: "/assets/testimonials/nw-logo.jpeg"
}

export const NW_CUSTOMER_CHALLENGES = [
    {
        image: '/assets/nw-customer/fragmented-governance.png',
        title: 'Fragmented governance that slowed data-driven decision-making',
        description: 'Timely, reliable insights are essential in the push for cleaner energy and electric mobility. However, NW’s data ecosystem — spanning Kafka, PostgreSQL, BigQuery, and Power BI — was hard to manage without a central governance layer. Lineage was tracked manually, ownership was scattered, and outdated descriptions or tags created confusion. Endless hours were spent retracing where data came from and where it was going, delaying decisions about grid stability, infrastructure planning, and operational efficiency. Since this eroded trust in analytics, engineers were buried in upkeep while business users questioned which data to rely on, and this left both groups of users lacking the clarity necessary to drive innovation.',
        challenges: [
            {
                header: 'Manual lineage tracking',
                description: 'Teams spent hours mapping flows across systems — an unsustainable process as sources multiplied.',
            },
            {
                header: 'Scattered ownership',
                description: 'Accountability was often unclear, which slowed the resolution of data issues.',
            },
            {
                header: 'Outdated metadata',
                description: 'Stale descriptions and inconsistent tags caused confusion and misinterpretation of data.',
            },
            {
                header: 'Repetitive governance work',
                description: 'Daily updates to lineage and tags drained engineering time and introduced the risk for errors and bottlenecks.',
            },
            {
                header: 'Slow, unreliable insights',
                description: 'Delayed governance made reports less trusted, slowing business decision-making.',
            }
        ]
    },
    {
        image: '/assets/nw-customer/automating-governance.png',
        title: 'Automating governance using AI-assisted workflows',
        description: `Attempting to make legitimate change throughout their organization, NW turned to OpenMetadata to establish a single source of truth across its data ecosystem. By integrating Kafka, PostgreSQL, BigQuery, and Power BI with this new, central solution, NW brought its critical systems together into one metadata catalog. With more than 90 connectors available, OpenMetadata allowed NW’s teams to unify their data environment without building custom integrations.
        
Once adopted, OpenMetadata addressed NW’s main obstacles directly. Firstly, built-in lineage and relationships provided end-to-end visibility across the company’s data assets and eliminated the need for engineers to trace flows manually. Second, metadata enrichment features made it easy to assign owners, add tags, and apply certifications, which reduced confusion and standardized documentation. Third, governance was embedded into orchestration workflows with automation-ready APIs, making manual processes repeatable.

Despite all of these improvements, the most significant step forward for NW came with the MCP, which connects large language models (LLMs), like Claude, OpenAI , or Gemini, directly to OpenMetadata. With MCP, governance tasks are triggered through simple prompts (e.g., search the data, generate the lineage, or create glossary terms). By bringing LLMs into the loop, MCP successfully shifted NW’s governance from reactive maintenance to proactive momentum.`,
        challenges: [
            {
                header: 'AI-powered governance with MCP',
                description: 'The Model Context Protocol connects LLMs to OpenMetadata to enable prompt-driven tasks — like lineage creation, glossary term generation, and even Grafana dashboard creation — through multi-MCP workflows.',
            },
            {
                header: 'Centralized catalog',
                description: "Consolidates Kafka (streaming), PostgreSQL (databases), BigQuery (warehouses), and Power BI (dashboards) into one governed platform, creating a single source of truth.",
            },
            {
                header: '90+ connectors',
                description: 'Out-of-the-box integration with APIs, pipelines, storage systems, and dashboards that eliminate the need for custom builds.',
            },
            {
                header: 'End-to-end lineage and enrichment',
                description: 'Automatically maps data flows and applies owners, tags, and certifications consistently to improve discoverability, accountability, and trust.',
            },
            {
                header: 'Automation-ready APIs',
                description: 'Metadata updates, lineage resolution, and tagging can be triggered programmatically and integrated directly into orchestration workflows.',
            }
        ]
    },
    {
        image2: '/assets/nw-customer/faster-insights.png',
        image: '/assets/nw-customer/mcp-integration.png',
        title: 'Faster insights, trusted governance, and a stronger foundation for clean energy',
        description: 'Instead of wasting time on repetitive governance tasks, NW benefited from a centralized system that accelerated insight delivery and strengthened trust in its data. OpenMetadata created a reliable source of truth across its data ecosystem while helping the company manage thousands of diverse assets. With a combination of automation and MCP, NW showed how governance can move beyond cataloging into AI-driven workflows.',
        description2: 'By unifying its data ecosystem and embedding AI-assisted governance into daily workflows, NW has built a foundation that is both scalable and future-ready. With OpenMetadata, the company can focus less on managing data and more on accelerating its mission to make clean, reliable energy accessible to all.',
        challenges: [
            {
                header: 'Accelerated productivity with AI',
                description: 'Powerful multi-MCP workflows orchestrate complex governance tasks end-to-end across the data ecosystem, saving time and costs for data teams.',
            },
            {
                header: 'Faster insights, less manual work',
                description: 'Teams no longer lose hours to repetitive lineage tracking or updating tags, freeing time for analysis and innovation.',
            },
            {
                header: 'Trusted single source of truth',
                description: 'All metadata — including connectors, pipelines, and reports — is centralized to ensure consistency and reliability across the ecosystem.',
            },
            {
                header: 'Scaling governance without overhead',
                description: 'Ownership and certifications were automated across thousands of assets, proving that workflows could expand without the extra burden.',
            },
            {
                header: 'Automation in practice',
                description: 'OpenMetadata automates repetitive governance tasks, whether it’s tagging owners, applying certifications, or patching broken pipelines. In one test scenario, 72 pipelines were automatically fixed through lineage-driven automation.',
            }
        ]
    }
]
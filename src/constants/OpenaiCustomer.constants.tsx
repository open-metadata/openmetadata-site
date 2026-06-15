export const OPENAI_CUSTOMER_HEADER = {
    title: "How OpenAI Built Their Self-Service AI Data Agent for 3,500+ Employees on OpenMetadata",
    description: `OpenAI's data platform serves 80% of the company, roughly 3,500 internal users on 15 tools, with 580+ petabytes of data processed daily across 70,000 datasets. At that scale, simple questions like "How many ChatGPT Pro users do we have in Italy?" routinely cost analysts hours of table discovery, multiple code deep-dives, and several cross-team Slack threads, and could still return answers off by orders of magnitude. OpenAI's Data Productivity team built Kepler, an internal AI data agent, on top of OpenMetadata as the open context layer that grounds every response. The result: self-service analytics across the company, with repeat queries down from 22 minutes to under 90 seconds.`,
    industry: "AI Research and Deployment",
    technologies: "OpenMetadata, Spark, Airflow, Notion, Slack, OpenAI Responses API, OpenAI Embeddings API, OpenAI Evals, Codex",
    videoUrl: "-6czrxuHJLg",
    attribution: {
        text: "This case study is adapted from Bonnie Xu's ",
        linkText: "Summit '26 keynote",
        linkUrl: "https://youtu.be/-6czrxuHJLg"
    }
}

export const OPENAI_CUSTOMER_HIGHLIGHTS = [
    {
        id: 1,
        count: '3,500+',
        description: "Internal users served by Kepler, OpenAI's AI data agent built on OpenMetadata"
    },
    {
        id: 2,
        count: '580+ PB',
        description: "Of data processed daily across 70,000 datasets"
    },
    {
        id: 3,
        count: '<90 sec',
        description: "Time-to-answer on repeat queries, down from 22+ minutes"
    }
];

export const OPENAI_CUSTOMER_TESTIMONIAL = {
    content: "Agents without context can give wildly wrong answers. Memory is the mechanism that helps the agent continuously improve and learn. Use OpenMetadata for metadata as part of the context layer.",
    name: "Bonnie Xu",
    title: "Tech Lead, Data Productivity at OpenAI",
    logo: "/assets/openai-customer/openai-logo.webp"
}

export const OPENAI_CUSTOMER_CHALLENGES = [
    {
        image: '/assets/openai-customer/wildly-wrong-answers.png',
        image2: '/assets/openai-customer/data-platform-stats.png',
        title: 'Days of Searching, Multi-Team Threads, and Wildly Wrong Answers',
        description: `Eighty percent of OpenAI's employees rely on the data platform every day. As the product scaled, so did the complexity of the questions being asked. Going from "how many users do we have?" to "how many daily active instant-checkout users do we have in New York?" scaled the cost of getting a response, as well as the difficulty of getting the answer correct. Tables proliferated, semantics drifted, and the institutional knowledge needed to use them stayed locked in Slack threads and engineers' heads. For OpenAI's Data Productivity team, four challenges defined the gap:`,
        challenges: [
            {
                header: 'Confidently Wrong, by Orders of Magnitude',
                description: "With 70,000 datasets across 15 tools, similar-sounding tables differed in subtle ways. Without context, an agent asked how many ChatGPT users existed confidently answered 5,062,338. The real number, announced at DevDay 2025: 800 million.",
            },
            {
                header: 'Simple Questions, Expensive Answers',
                description: "A question that should take minutes was costing hours of work. A business lead asking how many ChatGPT Pro users were in Italy would trigger three code deep-dives, two quick meetings, and five Slack threads. At 3,500 internal users across 15 tools, that cost compounded across the whole company.",
            },
            {
                header: 'Context Trapped in Tribal Knowledge',
                description: "A table's name and schema only tell part of the story. The why, the filters applied, and the team-specific vocabulary lived in Notion docs, Slack incident channels, and engineers' heads, invisible to any agent looking only at metadata.",
            },
            {
                header: 'No Memory Across Conversations',
                description: "Without a memory layer, every correction had to be relearned. Team-specific definitions, edge-case filters, and learned corrections evaporated the moment a session ended.",
            }
        ]
    },
    {
        image: '/assets/openai-customer/six-layer-context.png',
        title: 'An AI Data Agent on the Open Context Layer',
        description: `OpenAI's Data Productivity team built Kepler, an internal AI data agent that surfaces wherever the work happens (Slack, the IDE, web agents, workflows) and answers business questions in minutes. Instead of building a metadata layer from scratch, they put OpenMetadata on top of the data warehouse and let it carry the rich context the agent needs to reason. The architecture organizes context into six layers that the agent draws on per query:`,
        challenges: [
            {
                header: 'OpenMetadata as the Context Foundation',
                description: "Kepler's first layer of context is table metadata surfaced from OpenMetadata: schemas, query history, lineage, and co-derived tables, transformed into embeddings for semantic search. The agent finds the right table by meaning, not just by matching keywords.",
            },
            {
                header: 'Human Annotations, Edited in Place',
                description: "Descriptions, tags, usage, and ownership are maintained by the data team directly in the OpenMetadata UI, and the agent reads them through OpenMetadata APIs. Where descriptions are missing or stale, the agent auto-generates candidates the team can confirm.",
            },
            {
                header: 'Codex Enrichment, Institutional Knowledge, and Runtime Calls',
                description: "Codex offline jobs crawl the codebase to explain why each table exists. Institutional knowledge from Slack and Notion feeds permission-gated context on the why behind every dip and spike. Runtime calls to Spark, Airflow, and OpenMetadata fill in the rest in real time.",
            },
            {
                header: 'A Memory Layer That Compounds',
                description: "As analysts use Kepler, the agent suggests memories drawn from conversations, and users confirm. A team-specific filter learned today becomes inherited context for every query tomorrow.",
            },
            {
                header: 'Evals and Permission Enforcement Built In',
                description: "An evals system using OpenAI's evals grader prevents regressions: SQL AST normalization, result-set comparison, and chain-of-thought debugging. Permission checks at every layer ensure the agent only surfaces data the requesting user can access.",
            }
        ]
    },
    {
        image: '/assets/openai-customer/self-service-at-scale.png',
        title: 'Self-Service Analytics at OpenAI Scale',
        description: `Kepler now runs across OpenAI's data platform, available wherever employees work. Eighty percent of the company uses the platform, and Kepler is how they reach it. The architecture has held up at OpenAI's scale of 580+ petabytes per day and 70,000 datasets. The open foundation, OpenMetadata, is the same one any team can adopt without engineering an internal catalog from scratch.`,
        challenges: [
            {
                header: 'From Multi-Day Searches to Self-Service in Minutes',
                description: "The Italy ChatGPT Pro question that once took three deep-dives, two meetings, and five Slack threads now gets answered in minutes, in the Slack channel the analyst is already in. With six layers of governed context, the agent picks the right table, applies the right filters, and walks the analyst through its reasoning step by step.",
            },
            {
                header: 'Repeat Queries Drop from 22 Minutes to Under 90 Seconds',
                description: "With memory compounding across conversations, repeat queries that once took 22 minutes and 41 seconds now resolve in 1 minute and 22 seconds. Every correction a team makes becomes inherited context the next analyst (or agent) gets for free.",
            },
            {
                header: 'Auditable Answers, Every Time',
                description: "Every response streams the agent's chain of thought, links every query it ran, and cites every assumption. Combined with sanitized query history and gated content retrieval, the agent is auditable end-to-end at OpenAI's scale.",
            },
            {
                header: 'An Open Foundation Anyone Can Adopt',
                description: "Bonnie's three-line recipe for smaller teams: leverage existing APIs (OpenAI Responses, embeddings, evals); use OpenMetadata for metadata as part of the context layer; use Codex to iterate quickly. The OpenMetadata foundation OpenAI selected for Kepler is the same open standard available to any team.",
            }
        ]
    }
]

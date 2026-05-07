export const FDNY_CUSTOMER_HEADER = {
    title: "FDNY: Governing Mission-Critical Data to Support New York's Heroes",
    description: "With more than 17,000 uniformed and civilian employees responding to over 1.6 million emergencies each year, the Fire Department of New York is the largest fire department in the United States and the second largest in the world. Behind every dispatch decision, duty status check, and medical leave record sits a 30-year-old Oracle database that FDNY's IT department built, maintained, and extended without ever fully governing it. When leadership wanted AI-powered analytics at scale, FDNY turned to OpenMetadata to convert decades of siloed institutional knowledge into a living, AI-ready semantic layer, then connected it directly to Claude for natural-language data exploration.",
    industry: "Public Safety / Government",
    technologies: "Oracle, Postgres, MySQL, GitHub, Obsidian, OpenCode",
    image: '/assets/fdny-customer/fdny-header.webp'
}

export const FDNY_CUSTOMER_HIGHLIGHTS = [
    {
        id: 1,
        count: '30 years',
        description: "of Oracle data made discoverable and AI-ready with OpenMetadata"
    },
    {
        id: 2,
        count: '15,582',
        description: "active Fire and EMS personnel schedules now analyzed through natural-language queries"
    },
    {
        id: 3,
        count: '1.6M+',
        description: "medical emergencies responded to each year, powered by data that's now governed, trusted, and accessible"
    }
];

export const FDNY_CUSTOMER_TESTIMONIAL = {
    content: "We are really good at building applications, and where we ran into a lot of friction and pain was operational analytics. Every time we went through this exercise, we had to start over. There's institutional knowledge siloed into certain teams and individuals, and it's really difficult to get their time and have them participate in a process where this becomes a living document. Once we enriched the underlying data model with OpenMetadata and connected to Claude, all of a sudden it clicked. The purpose behind doing all this documentation is that you can have that data uncovered, and using natural language, be able to discover that data, work with it, and have quick visualizations without writing SQL.",
    name: "Wes Fang",
    title: "Deputy Director, IT, Fire Department of New York",
    logo: "/assets/fdny-customer/fdny-logo.webp"
}

export const FDNY_CUSTOMER_CHALLENGES = [
    {
        image: '/assets/fdny-customer/governing-critical-data.png',
        title: 'Governing critical data without a data engineering team',
        description: `FDNY's IT department of roughly 60 staff, including application developers, database developers, business analysts, and QA, has long excelled at building operational systems: a computer-aided dispatch platform central to NYC's 911 response, a mobile incident command application, and a custom electronic health records system tracking the duty status and medical leave of every active fire and EMS member. The team had no formal data engineering function, and no scalable way to document, govern, or surface the institutional knowledge locked inside three decades of Oracle data.`,
        challenges: [
            {
                header: 'Three decades of undocumented data',
                description: "FDNY's Oracle database grew for 30 years, accumulating tables, views, and business logic across healthcare, dispatch, and incident command systems. No central catalog existed, no formal taxonomy, no structured way to communicate what the data meant. Informal knowledge held by individuals across the department kept things running.",
            },
            {
                header: 'Turnover-driven knowledge loss',
                description: 'When data dictionaries existed at all, they lived in Excel spreadsheets shared among subject matter experts. Staff who moved to other agencies took critical context with them. Every new analytics engagement meant starting from scratch: convening meetings, rebuilding definitions, recapturing logic that someone had already documented once before.',
            },
            {
                header: 'Analytics bottlenecks slowing operations',
                description: 'Business and operations teams had no direct path to the data they needed. Every analytics request went through the development team, with a typical lead time of two to three weeks before a dataset was compiled and handed off. For a department responding to over 1.6 million emergencies a year, that lag had real operational costs.',
            },
            {
                header: 'Scaling AI without a semantic layer',
                description: "FDNY's leadership saw the promise of LLM-powered analytics through an early text-to-SQL pilot, but when they asked to expand it across the entire agency database, the team hit a wall. Without a structured semantic layer describing the underlying data, there was no way to give the LLM the context it needed to generate accurate queries at scale.",
            }
        ]
    },
    {
        image: '/assets/fdny-customer/ai-ready-governance.png',
        title: 'AI-ready data governance with OpenMetadata',
        description: `After a two-month evaluation of platforms including Alation, DataHub, and others, FDNY selected OpenMetadata for its rapid deployment path, open source accessibility, active community, and on-premise deployment support, a firm requirement for operationally sensitive data. Within weeks of standing up a Kubernetes environment, the team had a working instance. OpenMetadata became one tool in a broader chain: Obsidian for markdown-based documentation, OpenCode as an AI co-pilot inside Obsidian, GitHub for version control, and Claude connected via the OpenMetadata MCP for natural-language data exploration. New documentation drafted in Obsidian writes back directly to the relevant assets in OpenMetadata.`,
        challenges: [
            {
                header: 'Centralized metadata catalog',
                description: 'OpenMetadata gave FDNY a single collaborative platform where database developers, business analysts, and subject matter experts document schema objects together. Descriptions and definitions now live in a governed, version-controlled catalog that updates as the database evolves, replacing Excel spreadsheets passed between individuals.',
            },
            {
                header: 'AI-assisted documentation at scale',
                description: 'To document a 30-year Oracle database without a data engineering team, FDNY built a workflow using Obsidian and OpenCode. Subject matter experts draft documentation in markdown, and OpenCode, wired into a GitHub-backed knowledge base, helps generate, review, and commit descriptions for tables and columns. That documentation writes back to the relevant assets in OpenMetadata, keeping the catalog in sync. The barrier to contribution dropped from technical tools like VS Code to a markdown editor anyone on the team can use.',
            },
            {
                header: 'On-premise deployment for sensitive operational data',
                description: "FDNY's data spans duty status, medical leave, and health records for active personnel, all of which carry operational sensitivity. OpenMetadata's Kubernetes-based self-hosted deployment gave leadership the control they required, with no data leaving FDNY's environment.",
            },
            {
                header: 'Natural-language data exploration via MCP',
                description: "With schema objects documented in OpenMetadata, the analytics team connected Claude via the OpenMetadata MCP server. Business users ask questions in plain English and Claude queries the knowledge graph, identifies the right views, and generates visualizations without anyone writing a line of SQL. When a snowstorm drove an unexpected surge in personnel calling out, the team produced a fire-versus-EMS staffing breakdown in minutes with no developer involvement.",
            }
        ]
    },
    {
        image: '/assets/fdny-customer/self-service-analytics.png',
        title: 'Empowering first responders with self-service analytics',
        description: `OpenMetadata gave FDNY's 30-year Oracle database something it never had: a readable record of what the data means. Documentation that lived in individuals' memories and spreadsheet cells now lives in a governed, version-controlled catalog that updates nightly as the database changes. Business users who once waited weeks for developer-compiled datasets can now explore data on their own, and developers focus on enriching the data estate rather than fielding recurring analytics requests.`,
        challenges: [
            {
                header: 'From spreadsheets to a living catalog',
                description: 'Metadata scattered across Excel files and informal handoffs is now centralized, versioned, and continuously maintained. When database objects change, the OpenMetadata agent syncs nightly and surfaces updates to the team members who own those objects, turning documentation from a one-time exercise into an ongoing practice.',
            },
            {
                header: 'Analyst self-service without SQL',
                description: "Connected to Claude via the OpenMetadata MCP, FDNY's analytics team explores the department's data estate in natural language. The snowstorm staffing analysis, a query that would have previously required a developer, a two-to-three-week lead time, and custom SQL, completed in a single Claude session with no code written.",
            },
            {
                header: 'Operational insight across 15,582 personnel records',
                description: 'With duty status, medical leave, and scheduling data for all active fire and EMS members documented and accessible, FDNY can analyze workforce patterns in real time. Investigations that once required bespoke developer work, like understanding how a weather event affected staffing across two divisions, are now within reach of any analyst.',
            },
            {
                header: 'A foundation for agentic AI',
                description: 'With the semantic layer in place, FDNY is building toward a future where business users generate and deploy dashboards without developer involvement. Visualizations produced by Claude can be downloaded, committed to GitHub, and pushed through the DevOps pipeline to production, compressing the path from question to deployed dashboard.',
            }
        ]
    }
]

export const FREENOW_CUSTOMER_HEADER = {
    title: "Driving Smarter Data Communication: How FREENOW Built a Custom Asset Announcement Engine with OpenMetadata",
    description: "FREENOW is a leading multi-mobility provider operating across 150+ cities in 9 countries, partnering with major services like Hertz and Dott. With over 150,000 drivers and hundreds of thousands micromobility assets—including 160k+ eScooters, 40k+ eBikes, and 30k+ car shares—FREENOW manages a decentralized but high-stakes data environment. At this scale, ensuring timely, consistent communication around critical data asset changes—without overwhelming stakeholders—was a growing challenge. By building on OpenMetadata's open source foundation, they developed a Slack-integrated, lineage-aware announcement system. Communication is now so streamlined that a single update can cascade across more than 300 downstream asset dependencies",
    blog: {
        url: 'https://medium.com/breaking-data-silos-lineage-for-cross-domain/data-management-at-freenow-the-lineage-and-announcements-approach-177f387a9180',
        text: "Read FreeNOW's blog on adopting OpenMetadata"
    },
    industry: "Mobility-as-a-Service (MaaS), Ridesharing",
    technologies: "Slack, Python Flask, OpenMetadata API",
    videoUrl: 'OyD3DgEv8hM?si=vpsc4Uzx2sV-UOXB'
}


export const FREENOW_CUSTOMER_HIGHLIGHTS = [
    {
        id: 1,
        count: '300+',
        description: "downstream assets automatically reached with a single announcement"
    },
    {
        id: 2,
        count: '17k',
        description: "data assets tracked and governed in one centralized platform"
    },
    {
        id: 3,
        count: '9',
        description: "countries unified under a single communication workflow"
    }
];

export const FREENOW_CUSTOMER_TESTIMONIAL = {
    content: "We’re not trying to communicate more—we’re trying to communicate better and more efficiently. With OpenMetadata, we’ve created a centralized, automated communication hub that gives full visibility into data asset changes and their impact across the organization.",
    name: "Mehak Roha",
    title: "Data Platform Engineer",
    logo: "/assets/testimonials/freenow-logo.png"
}

export const FREENOW_CUSTOMER_CHALLENGES = [
    {
        image: '/assets/freenow-customer/disconnected-communications.png',
        title: 'Disconnected communication slowed asset lifecycle decisions',
        description: `FREENOW operates in a highly distributed environment. The organization manages 17k+ tables across 400+ schemas, 300+ data pipelines, and over 4,000 reports spread across three different BI platforms. With seven process domains—each owning their own data assets—and more than 30 analytical workflows in each, they needed a scalable way to communicate changes to data. But as the ecosystem grew, so did the challenge of keeping stakeholders aligned on what was changing, when, and why.

The core problem was as operational as it was technical. Teams lacked a consistent, automated way to communicate asset deprecations, migrations, or changes. This created ripple effects downstream, where reports, pipelines, and dashboards could break without warning. As ownership became more decentralized under FREENOW's data mesh model, the need for a unified, cross-domain communication layer became clear.`,
        challenges: [
            {
                header: 'No standardized process for announcing asset changes',
                description: 'Teams relied on manual messaging or ad hoc coordination, leading to missed updates and broken dependencies.',
            },
            {
                header: 'High dependency complexity',
                description: 'One data asset could have 300+ downstream connections. This is impossible to manage without visibility into lineage.',
            },
            {
                header: 'Fragmented tooling',
                description: 'With multiple reporting platforms and decentralized ownership, communication around asset updates was inconsistent and unreliable.',
            },
            {
                header: 'Delayed stakeholder awareness',
                description: 'Asset changes risked reaching affected teams too late, impacting reports or analysis in production.',
            },
            {
                header: 'Manual, repetitive work',
                description: 'Engineers had to recreate similar messages for each affected domain and asset owner, wasting time and risking inconsistency.',
            }
        ]
    },
    {
        image: '/assets/freenow-customer/opensource-automation.png',
        title: 'Open source automation for smarter, scalable asset communication',
        description: `To streamline communication across a rapidly scaling data environment, FREENOW turned to OpenMetadata's open source platform to build a centralized, automated asset announcement ecosystem. By integrating the OpenMetadata API with Slack and a lightweight Python Flask backend, the team created a fully custom workflow that transformed how metadata changes are shared across domains.What began as a vision to make deprecations and schema updates more transparent soon evolved into a production-ready solution—driven by community-powered tooling, flexible APIs, and the ability to self-host and extend features that fit their mesh architecture.

Built on top of RESTful services and powered by automation, the solution couples Slack's real-time messaging interface with OpenMetadata's APIs to process updates, trace lineage, and manage announcements end-to-end. Beyond notifying teams, this announcement system improves trust, reduces breakage, and reinforces governance with every update.`,
        challenges: [
            {
                header: 'Slack bot integration',
                description: 'A user-friendly Slack interface allows team members to initiate announcements and set visibility preferences directly from their communication platform. Slack triggers POST requests to the backend, which then routes commands through preconfigured endpoints, leveraging Slack’s chat.postMessage and other API methods for targeted delivery.',
            },
            {
                header: 'Flask backend orchestration',
                description: "A custom Python Flask app receives commands from Slack, handles logic and validation, and communicates with the OpenMetadata API to retrieve lineage and ownership details. Slack modals guide users through form submissions, and the backend parses nested JSON responses into structured formats like pandas DataFrames for downstream propagation.",
            },
            {
                header: 'API-powered lineage resolution',
                description: 'The backend dynamically traces downstream asset dependencies via OpenMetadata’s lineage feature to generate targeted, personalized announcements.',
            },
            {
                header: 'Consistent, visible communication',
                description: 'Announcements are posted both in Slack and back into OpenMetadata, giving teams full visibility into asset changes—from a single source of truth.',
            },
            {
                header: 'Reminder automation',
                description: "Periodic reminders are triggered if owners don’t act, ensuring updates don’t fall through the cracks and reducing manual follow-up.",
            },
            {
                header: 'Community-enabled flexibility',
                description: 'Since OpenMetadata is open source, FREENOW was able to build a custom solution without vendor constraints. They tailored the implementation to fit their unique infrastructure and decentralized operating model.',
            },
            {
                header: 'Cross-platform integration ready',
                description: "Designed with API interoperability in mind, the system can be extended to communicate with additional tools across the data ecosystem. This enables full-stack coordination beyond Slack and OpenMetadata.",
            }
        ]
    },
    {
        image: '/assets/freenow-customer/smarter-operations.png',
        title: 'Smarter operations, stronger governance, and better mobility experiences',
        description: 'In the world of urban mobility, speed and reliability matter—not just on the road, but in the data stack. For FREENOW, delivering seamless rider and partner experiences across over 150 cities requires data systems that are as agile and responsive as their fleet. By automating data asset announcements with OpenMetadata, FREENOW transformed a fragmented, manual process into a real-time, lineage-aware communication system that scales with their business. This proactive approach has helped reduce the risk of misinformation, foster a culture of transparency, and improve agility when responding to changes in data assets.',
        challenges: [
            {
                header: 'End-to-end asset tracking at scale',
                description: 'With 17k assets in scope, FREENOW uses lineage insights from OpenMetadata to trace insights across connected tables, schemas, and reports.',
            },
            {
                header: 'Persistent, global visibility',
                description: 'Announcements are automatically broadcast to relevant domains and asset owners across nine countries, then logged into OpenMetadata for 24/7 access, searchability, and traceability.',
            },
            {
                header: 'Automated, high-impact outreach',
                description: 'A single announcement can cascade across 300+ downstream assets and notify all associated owners. What once required hours of repetitive outreach is now fully automated and traceable within seconds.',
            },
            {
                header: 'Reduced risk of data breakage',
                description: 'Automated reminders and lineage analysis help prevent silent failures in reports, dashboards, and pipelines. Updates and deprecations never go unnoticed.',
            },
            {
                header: 'Minimized misinformation, maximized agility',
                description: 'Automation of data announcements and lineage tracking reduces the chance of miscommunication while enabling faster, more coordinated responses to asset changes.',
            },
            {
                header: 'Centralized governance, decentralized execution',
                description: 'Domain teams retain ownership while communication flows through a unified platform, streamlining coordination without slowing autonomy. The system also improved overall data management practices and strengthened team alignment across the company’s complex data ecosystem.',
            }
        ]
    }
]
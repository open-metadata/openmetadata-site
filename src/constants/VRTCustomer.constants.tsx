export const VRT_CUSTOMER_HEADER = {
    title: "VRT automates their self-service data quality loop with OpenMetadata",
    description: 'VRT is the public broadcaster of the Flemish Community in Belgium. With three television channels, five radio stations and various digital channels, VRT reaches 90% of all Flemish people, every single week. Dataroots is partnering with VRT to maintain and expand a modern data platform with a focus on data governance and data quality. The growing number of teams, data systems, and touch points has necessitated an increased importance in getting metadata correct and consistent while keeping manually intervention from Data Engineers to a minimum. By implementing OpenMetadata, VRT built a single point of truth that was easily configurable and scalable where business users can address new data quality issues immediately without developer intervention.',
    industry: "Other / Media",
    technologies: "Amazon Athena, Amazon S3, dbt, AWS Lambda",
    image: "/assets/vrt/vrt-header.png"
}

export const VRT_CUSTOMER_HIGHLIGHTS = [
    {
        id: 1,
        count: '2.3+ Million',
        description: "Daily TV Viewers"
    },
    {
        id: 2,
        count: '88.9%',
        description: "Weekly reach in Flemish region of Belgium"
    },
    {
        id: 3,
        count: '30 seconds',
        description: "to set up a custom data quality alert in OpenMetadata"
    }
];

export const VRT_CUSTOMER_TESTIMONIAL = {
    content: "Before, the data engineer was the middleman. With OpenMetadata, they are freed up to focus on their core tasks, and the number of steps to resolve a data quality issue is way less than before.",
    name: "David Backx",
    title: "Data Engineer at Dataroots",
    logo: "/assets/testimonials/dataroots-logo.png"
}

export const VRT_CUSTOMER_CHALLENGES = [
    {
        title: 'Inconsistent metadata can impact customer experience',
        description: `VRT has a vast library of content viewed by millions of people everyday. A Content Management System (CMS) with inconsistent, missing, or incorrect metadata could directly affect the end-user experience for a wide variety of audiences.

To ensure data quality at VRT gets resolved as quickly as possible, Dataroots built out an alerting platform on AWS that incorporated Athena, S3, AWS Lamdba and dbt, with OpenMetadata at the center:`,
        challenges: [
            {
                header: 'Implementing data quality tests with non-technical teams',
                description: 'To inspire ownership, Dataroots needed to make sure data owners have the right tools/information to fix issues.',
            },
            {
                header: 'Managing metadata across multiple touchpoints',
                description: 'With a single CMS powering content for a streaming service, news site, and many other touchpoints, VRT needed consistent and accurate metadata to prevent errors, like content showing up in the wrong UI location, from disrupting the customer experience.', 
            },

       ]
    },
    {
        title: 'Enabling self-service data quality resolutions',
        description: `VRT needed a solution that was accessible to non-technical users. OpenMetadata fit the requirements: a centralized, point-of-truth system for data observability that was easy to deploy, user-friendly, and could all stay within their data ecosystem.`,
        challenges: [
            {
                header: 'Growing test cases',
                description: 'Integrating test cases from dbt, OpenMetadata, and custom-built tests increased VRT coverage, but their initial alerts were being sent directly to Data Engineers, who would work with data owners to implement a fix.',
            },
            {
                header: 'Self-service prevented costly bottlenecks',
                description: "Data Engineers quickly became bottlenecks in the resolution process as data tests grew, with frequent context switching between alerts and other work taking away focus and preventing ownership of stakeholder team. By customizing alerts in OpenMetadata, Dataroots created alerts that went directly to the single point of contant responsible for owning the data asset!",
            },
        ]
    },
    {
        title: 'Developing scalable and customizable alerts without maintainence fatigue',
        description: 'With OpenMetadata, Dataroots provides the right alerts to the right stakeholders as soon as they appeared, but their ideal solution would go even further, with immediate fixes to new issues. This pipeline freed up time that the VRT team could use for core tasks while giving owners responsibility, agency, and paths to resoultion in a shortened time with a reduced number of steps.',
        challenges: [
            {
                header: 'Reducing time and steps to resolution',
                description: 'Through Lambda functions, Dataroots now parses alerts coming from OpenMetadata and recreates the incident in Athena before emailing the results to the asset owner.',
            },
            {
                header: '30 seconds to a custom alert',
                description: 'Dataroots has scaled there data quality alerting configuration for every data quality test, taking just seconds to add new tests with the easy alerting setup available in OpenMetadata.',
            },
            {
                header: 'Dynamic, multifunctional mail with all relevant information',
                description: 'Through OpenMetadata, emails now not only include data that is causing a test to fail, but also details and hyperlinks to the test in OpenMetadata, and even links directly to query engines so that VRT data teams can investigate further.',
            },
            {
                header: 'Foundation for AI innovation',
                description: 'With effective data quality pipelines now in place, Dataroots would like to leverage GenAI and provide VRT with automated pre-analysis for failed data quality tests.',
            },
        ]
    }
]

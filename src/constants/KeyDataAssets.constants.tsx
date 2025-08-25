import { CollaborationIcon } from "@/components/Icons/Collaboration";
import { EyeIcon } from "@/components/Icons/Eye";
import { FingerPrintIcon } from "@/components/Icons/FingerPrint";
import { GovernanceIcon } from "@/components/Icons/Governance";
import { QualityIcon } from "@/components/Icons/Quality";
import { SearchIcon } from "@/components/Icons/Search";

export const TABS = [
  {
    name: "Discovery",
    icon: SearchIcon,
    useCases: {
      header: {
        text: "Enable teams to find ",
        highlightedText: "key data assets",
      },
      description:
        "Get the right data to the right people to do their work. OpenMetadata delivers a single source of truth for all your data sources, data pipelines, and data products.",
      imgSrc: "/assets/discovery.webp",
      cases: [
        "90+ Data Connectors for all your data sources",
        "Search, facet, and preview across your data estate",
        "Collaborate with other data practitioners",
      ],
    },
  },
  {
    name: "Lineage",
    icon: FingerPrintIcon,
    useCases: {
      header: {
        text: "Know where your ",
        highlightedText: "data comes from",
      },
      description:
        "Column-level lineage maps help you understand your overall data flow. Tier critical and sensitive data to manage its quality, observability, and governance.",
      imgSrc: "/assets/lineage.webp",
      cases: [
        "End-to-end visibility for faster root cause analysis",
        "Understand sensitive PII flow for controls and policies",
        "Automated lineage mapping across different data sources",
      ],
    },
  },
  {
    name: "Observability",
    icon: EyeIcon,
    useCases: {
      header: {
        text: "See changes to ",
        highlightedText: "your data sooner",
      },
      description:
        "Be the first to know about data schema changes, volume fluctuation, data distribution, pipeline issues, and test failures in order to proactively get ahead of the problem.",
      imgSrc: "/assets/observability.webp",
      cases: [
        "Visibility into your data quality, schema, lineage, and governance",
        "Improve data reliability through data quality tests and KPIs",
        "Confidently change data with clear insights on consumer impact",
      ],
    },
  },
  {
    name: "Quality",
    icon: QualityIcon,
    useCases: {
      header: {
        text: "Trusted and reliable data ",
        highlightedText: "for the business",
      },
      description:
        "Proactively manage the data quality of your most business-critical data assets and ensure they receive priority operations and infrastructure.",
      imgSrc: "/assets/quality.webp",
      cases: [
        "Zero-code data quality test suites for your data assets",
        "Automatically create incidents and notify downstream stakeholders",
        "Dashboards for data quality and coverage organization-wide",
      ],
    },
  },
  {
    name: "Collaboration",
    icon: CollaborationIcon,
    useCases: {
      header: {
        text: "Transform your data ",
        highlightedText: "culture and teams",
      },
      description:
        "Shared workspaces and workflows foster shared responsibilities and ownership among data producers and consumers across your organization.",
      imgSrc: "/assets/collaboration.webp",
      cases: [
        "Activity feeds, conversations, and workflows bring data teams together",
        "Centralize all your data knowledge throughout your organization",
        "Consolidate tools, break down silos, and improve productivity",
      ],
    },
  },
  {
    name: "Governance",
    icon: GovernanceIcon,
    useCases: {
      header: {
        text: "Collectively manage ",
        highlightedText: "risk and compliance",
      },
      description:
        "Gain visibility and control across your entire data estate with a centralized metadata platform for managing data governance, compliance, security, and privacy.",
      imgSrc: "/assets/governance.webp",
      cases: [
        "Enforce quality, control access, and audit control",
        "Automated workflows to govern data assets at scale",
        "Prioritize sensitive PII data for enhanced governance",
      ],
    },
  },
];

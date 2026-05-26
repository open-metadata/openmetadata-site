import { ContextIcon } from "@/components/Icons/Context";
import { MemoryIcon } from "@/components/Icons/Memory";
import { SemanticsIcon } from "@/components/Icons/Semantics";

export const PRIMITIVES_LIST = [
  {
    name: "Context",
    icon: ContextIcon,
    description:
      "Schemas, tables, columns, dashboards, pipelines, ML models, owners, lineage, and classifications — captured in one open metadata graph.",
  },
  {
    name: "Semantics",
    icon: SemanticsIcon,
    description:
      "Glossary terms, metric definitions, ontologies, and W3C-standard relationships (RDF, OWL, DCAT, Schema.org) that give your data shared business meaning.",
  },
  {
    name: "Memory",
    icon: MemoryIcon,
    description:
      "Corrections, decisions, approvals, feedback loops, and an auditable record of every change — across humans and AI.",
  },
];

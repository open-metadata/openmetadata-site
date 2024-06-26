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
    },
    {
        name: "Lineage",
        icon: FingerPrintIcon,
    },
    {
        name: "Observability",
        icon: EyeIcon,
    },
    {
        name: "Quality",
        icon: QualityIcon,
    },
    {
        name: "Collaboration",
        icon: CollaborationIcon,
    },
    {
        name: "Governance",
        icon: GovernanceIcon,
    },
]
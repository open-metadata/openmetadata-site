import CustomerChallenges from "@/components/CustomerCaseStudy/CustomerChallenges";
import CustomerHeader from "@/components/CustomerCaseStudy/CustomerHeader";
import CustomerTestimonial from "@/components/CustomerCaseStudy/CustomerTestimonial";
import FooterDev from "@/components/FooterDev/FooterDev";
import NavbarDev from "@/components/NavbarDev/NavbarDev.component"
import NavbarStrip from "@/components/NavbarDev/NavbarStrip.component"
import { 
    GORGIAS_CUSTOMER_CHALLENGES, 
    GORGIAS_CUSTOMER_HEADER, 
    GORGIAS_CUSTOMER_HIGHLIGHTS, 
    GORGIAS_CUSTOMER_TESTIMONIAL 
} from "@/constants/GorgiasCustomer.constants";
import { useRouter } from "next/router";

const GorgiasCaseStudyPage = () => {
    const router = useRouter();
        
    const handleTryOpenMetadataClick = () => {
        router.push('/#try-openmetadata');
    };

    return (
        <div>
            <div className="mx-auto fixed top-0 w-full z-[1030]">
                <NavbarDev onClick={handleTryOpenMetadataClick} />
                <NavbarStrip />
            </div>
            <div className="mt-20 md:mt-24 lg:mt-32">
                <CustomerHeader customerHeader={GORGIAS_CUSTOMER_HEADER} highlights={GORGIAS_CUSTOMER_HIGHLIGHTS} />
                <CustomerTestimonial testimonial={GORGIAS_CUSTOMER_TESTIMONIAL} />
                <CustomerChallenges data={GORGIAS_CUSTOMER_CHALLENGES} />
            </div>
            <FooterDev />
        </div>
    )
}

export default GorgiasCaseStudyPage
import CustomerChallenges from "@/components/CustomerCaseStudy/CustomerChallenges";
import CustomerHeader from "@/components/CustomerCaseStudy/CustomerHeader";
import CustomerTestimonial from "@/components/CustomerCaseStudy/CustomerTestimonial";
import FooterDev from "@/components/FooterDev/FooterDev";
import {
    VRT_CUSTOMER_CHALLENGES, 
    VRT_CUSTOMER_HEADER, 
    VRT_CUSTOMER_HIGHLIGHTS, 
    VRT_CUSTOMER_TESTIMONIAL 
} from "@/constants/VRTCustomer.constants";

const VRTCaseStudyPage = () => {
  return (
    <>
      <div>
        <div className="mt-9 md:mt-16">
          <CustomerHeader
            customerHeader={VRT_CUSTOMER_HEADER}
            highlights={VRT_CUSTOMER_HIGHLIGHTS}
          />
          <CustomerTestimonial testimonial={VRT_CUSTOMER_TESTIMONIAL} />
          <CustomerChallenges data={VRT_CUSTOMER_CHALLENGES} />
        </div>
        <FooterDev />
      </div>
    </>
  );
};

export default VRTCaseStudyPage;

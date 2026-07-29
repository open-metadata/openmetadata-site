import CustomerChallenges from "@/components/CustomerCaseStudy/CustomerChallenges";
import CustomerHeader from "@/components/CustomerCaseStudy/CustomerHeader";
import CustomerTestimonial from "@/components/CustomerCaseStudy/CustomerTestimonial";
import FooterDev from "@/components/FooterDev/FooterDev";
import {
    NW_CUSTOMER_CHALLENGES, 
    NW_CUSTOMER_HEADER, 
    NW_CUSTOMER_HIGHLIGHTS, 
    NW_CUSTOMER_TESTIMONIAL 
} from "@/constants/NwCustomer.constants";

const NwCaseStudyPage = () => {
  return (
    <>
      <div>
        <div className="mt-9 md:mt-16">
          <CustomerHeader
            customerHeader={NW_CUSTOMER_HEADER}
            highlights={NW_CUSTOMER_HIGHLIGHTS}
          />
          <CustomerTestimonial testimonial={NW_CUSTOMER_TESTIMONIAL} />
          <CustomerChallenges data={NW_CUSTOMER_CHALLENGES} />
        </div>
        <FooterDev />
      </div>
    </>
  );
};

export default NwCaseStudyPage;

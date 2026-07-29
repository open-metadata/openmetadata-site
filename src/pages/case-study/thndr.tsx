import CustomerChallenges from "@/components/CustomerCaseStudy/CustomerChallenges";
import CustomerHeader from "@/components/CustomerCaseStudy/CustomerHeader";
import CustomerTestimonial from "@/components/CustomerCaseStudy/CustomerTestimonial";
import FooterDev from "@/components/FooterDev/FooterDev";
import {
    THNDR_CUSTOMER_CHALLENGES, 
    THNDR_CUSTOMER_HEADER, 
    THNDR_CUSTOMER_HIGHLIGHTS, 
    THNDR_CUSTOMER_TESTIMONIAL 
} from "@/constants/ThndrCustomer.constants";

const ThndrCaseStudyPage = () => {
  return (
    <>
      <div>
        <div className="mt-9 md:mt-16">
          <CustomerHeader
            customerHeader={THNDR_CUSTOMER_HEADER}
            highlights={THNDR_CUSTOMER_HIGHLIGHTS}
          />
          <CustomerTestimonial testimonial={THNDR_CUSTOMER_TESTIMONIAL} />
          <CustomerChallenges data={THNDR_CUSTOMER_CHALLENGES} />
        </div>
        <FooterDev />
      </div>
    </>
  );
};

export default ThndrCaseStudyPage;

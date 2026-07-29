import CustomerChallenges from "@/components/CustomerCaseStudy/CustomerChallenges";
import CustomerHeader from "@/components/CustomerCaseStudy/CustomerHeader";
import CustomerTestimonial from "@/components/CustomerCaseStudy/CustomerTestimonial";
import FooterDev from "@/components/FooterDev/FooterDev";
import {
    ASPIRE_CUSTOMER_CHALLENGES, 
    ASPIRE_CUSTOMER_HEADER, 
    ASPIRE_CUSTOMER_HIGHLIGHTS, 
    ASPIRE_CUSTOMER_TESTIMONIAL 
} from "@/constants/AspireCustomer.constants";

const AspireCaseStudyPage = () => {
  return (
    <>
      <div>
        <div className="mt-9 md:mt-16">
          <CustomerHeader
            customerHeader={ASPIRE_CUSTOMER_HEADER}
            highlights={ASPIRE_CUSTOMER_HIGHLIGHTS}
          />
          <CustomerTestimonial testimonial={ASPIRE_CUSTOMER_TESTIMONIAL} />
          <CustomerChallenges data={ASPIRE_CUSTOMER_CHALLENGES} />
        </div>
        <FooterDev />
      </div>
    </>
  );
};

export default AspireCaseStudyPage;

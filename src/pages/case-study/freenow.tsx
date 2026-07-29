import CustomerChallenges from "@/components/CustomerCaseStudy/CustomerChallenges";
import CustomerHeader from "@/components/CustomerCaseStudy/CustomerHeader";
import CustomerTestimonial from "@/components/CustomerCaseStudy/CustomerTestimonial";
import FooterDev from "@/components/FooterDev/FooterDev";
import {
    FREENOW_CUSTOMER_CHALLENGES, 
    FREENOW_CUSTOMER_HEADER, 
    FREENOW_CUSTOMER_HIGHLIGHTS, 
    FREENOW_CUSTOMER_TESTIMONIAL 
} from "@/constants/FreenowCustomer.constants";

const FreeNowCaseStudyPage = () => {
  return (
    <>
      <div>
        <div className="mt-9 md:mt-16">
          <CustomerHeader
            customerHeader={FREENOW_CUSTOMER_HEADER}
            highlights={FREENOW_CUSTOMER_HIGHLIGHTS}
          />
          <CustomerTestimonial testimonial={FREENOW_CUSTOMER_TESTIMONIAL} />
          <CustomerChallenges data={FREENOW_CUSTOMER_CHALLENGES} />
        </div>
        <FooterDev />
      </div>
    </>
  );
};

export default FreeNowCaseStudyPage;

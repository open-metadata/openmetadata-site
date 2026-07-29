import CustomerChallenges from "@/components/CustomerCaseStudy/CustomerChallenges";
import CustomerHeader from "@/components/CustomerCaseStudy/CustomerHeader";
import CustomerTestimonial from "@/components/CustomerCaseStudy/CustomerTestimonial";
import FooterDev from "@/components/FooterDev/FooterDev";
import {
    FORTER_CUSTOMER_CHALLENGES, 
    FORTER_CUSTOMER_HEADER, 
    FORTER_CUSTOMER_HIGHLIGHTS, 
    FORTER_CUSTOMER_TESTIMONIAL 
} from "@/constants/ForterCustomer.constants";

const ForterCaseStudyPage = () => {
  return (
    <>
      <div>
        <div className="mt-9 md:mt-16">
          <CustomerHeader
            customerHeader={FORTER_CUSTOMER_HEADER}
            highlights={FORTER_CUSTOMER_HIGHLIGHTS}
          />
          <CustomerTestimonial testimonial={FORTER_CUSTOMER_TESTIMONIAL} />
          <CustomerChallenges data={FORTER_CUSTOMER_CHALLENGES} />
        </div>
        <FooterDev />
      </div>
    </>
  );
};

export default ForterCaseStudyPage;

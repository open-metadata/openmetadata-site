import CustomerChallenges from "@/components/CustomerCaseStudy/CustomerChallenges";
import CustomerHeader from "@/components/CustomerCaseStudy/CustomerHeader";
import CustomerTestimonial from "@/components/CustomerCaseStudy/CustomerTestimonial";
import FooterDev from "@/components/FooterDev/FooterDev";
import {
    SOLOCAL_CUSTOMER_CHALLENGES,
    SOLOCAL_CUSTOMER_HEADER,
    SOLOCAL_CUSTOMER_HIGHLIGHTS,
    SOLOCAL_CUSTOMER_TESTIMONIAL
} from "@/constants/SolocalCustomer.constants";

const SolocalCaseStudyPage = () => {
  return (
    <>
      <div>
        <div className="mt-9 md:mt-16">
          <CustomerHeader
            customerHeader={SOLOCAL_CUSTOMER_HEADER}
            highlights={SOLOCAL_CUSTOMER_HIGHLIGHTS}
          />
          <CustomerTestimonial testimonial={SOLOCAL_CUSTOMER_TESTIMONIAL} />
          <CustomerChallenges data={SOLOCAL_CUSTOMER_CHALLENGES} />
        </div>
        <FooterDev />
      </div>
    </>
  );
};

export default SolocalCaseStudyPage;

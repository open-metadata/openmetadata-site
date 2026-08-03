import CustomerChallenges from "@/components/CustomerCaseStudy/CustomerChallenges";
import CustomerHeader from "@/components/CustomerCaseStudy/CustomerHeader";
import CustomerTestimonial from "@/components/CustomerCaseStudy/CustomerTestimonial";
import FooterDev from "@/components/FooterDev/FooterDev";
import {
  LOGGI_CUSTOMER_CHALLENGES, 
  LOGGI_CUSTOMER_HEADER, 
  LOGGI_CUSTOMER_HIGHLIGHTS, 
  LOGGI_CUSTOMER_TESTIMONIAL 
} from "@/constants/LoggiCustomer.constants";

const LoggiCaseStudyPage = () => {
  return (
    <>
      <div>
        <div className="mt-9 md:mt-16">
          <CustomerHeader
            customerHeader={LOGGI_CUSTOMER_HEADER}
            highlights={LOGGI_CUSTOMER_HIGHLIGHTS}
          />
          <CustomerTestimonial testimonial={LOGGI_CUSTOMER_TESTIMONIAL} />
          <CustomerChallenges data={LOGGI_CUSTOMER_CHALLENGES} />
        </div>
        <FooterDev />
      </div>
    </>
  );
};

export default LoggiCaseStudyPage;

import CustomerChallenges from "@/components/CustomerCaseStudy/CustomerChallenges";
import CustomerHeader from "@/components/CustomerCaseStudy/CustomerHeader";
import CustomerTestimonial from "@/components/CustomerCaseStudy/CustomerTestimonial";
import FooterDev from "@/components/FooterDev/FooterDev";
import {
    INDRIVE_CUSTOMER_CHALLENGES, 
    INDRIVE_CUSTOMER_HEADER, 
    INDRIVE_CUSTOMER_HIGHLIGHTS, 
    INDRIVE_CUSTOMER_TESTIMONIAL 
} from "@/constants/IndriveCustomer.constants";

const IndriveCaseStudyPage = () => {
  return (
    <>
      <div>
        <div className="mt-9 md:mt-16">
          <CustomerHeader
            customerHeader={INDRIVE_CUSTOMER_HEADER}
            highlights={INDRIVE_CUSTOMER_HIGHLIGHTS}
          />
          <CustomerTestimonial testimonial={INDRIVE_CUSTOMER_TESTIMONIAL} />
          <CustomerChallenges data={INDRIVE_CUSTOMER_CHALLENGES} />
        </div>
        <FooterDev />
      </div>
    </>
  );
};

export default IndriveCaseStudyPage;

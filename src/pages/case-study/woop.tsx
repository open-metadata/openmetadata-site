import CustomerChallenges from "@/components/CustomerCaseStudy/CustomerChallenges";
import CustomerHeader from "@/components/CustomerCaseStudy/CustomerHeader";
import CustomerTestimonial from "@/components/CustomerCaseStudy/CustomerTestimonial";
import FooterDev from "@/components/FooterDev/FooterDev";
import {
  WOOP_CUSTOMER_CHALLENGES, 
  WOOP_CUSTOMER_HEADER, 
  WOOP_CUSTOMER_HIGHLIGHTS, 
  WOOP_CUSTOMER_TESTIMONIAL 
} from "@/constants/WoopCustomer.constants";

const WoopCaseStudyPage = () => {
  return (
    <>
      <div>
        <div className="mt-9 md:mt-16">
          <CustomerHeader
            customerHeader={WOOP_CUSTOMER_HEADER}
            highlights={WOOP_CUSTOMER_HIGHLIGHTS}
          />
          <CustomerTestimonial testimonial={WOOP_CUSTOMER_TESTIMONIAL} />
          <CustomerChallenges data={WOOP_CUSTOMER_CHALLENGES} />
        </div>
        <FooterDev />
      </div>
    </>
  );
};

export default WoopCaseStudyPage;

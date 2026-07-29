import CustomerChallenges from "@/components/CustomerCaseStudy/CustomerChallenges";
import CustomerHeader from "@/components/CustomerCaseStudy/CustomerHeader";
import CustomerTestimonial from "@/components/CustomerCaseStudy/CustomerTestimonial";
import FooterDev from "@/components/FooterDev/FooterDev";
import {
    WIX_CUSTOMER_CHALLENGES, 
    WIX_CUSTOMER_HEADER, 
    WIX_CUSTOMER_HIGHLIGHTS, 
    WIX_CUSTOMER_TESTIMONIAL 
} from "@/constants/WixCustomer.constants";

const WixCaseStudyPage = () => {
  return (
    <>
      <div>
        <div className="mt-9 md:mt-16">
          <CustomerHeader
            customerHeader={WIX_CUSTOMER_HEADER}
            highlights={WIX_CUSTOMER_HIGHLIGHTS}
          />
          <CustomerTestimonial testimonial={WIX_CUSTOMER_TESTIMONIAL} />
          <CustomerChallenges data={WIX_CUSTOMER_CHALLENGES} />
        </div>
        <FooterDev />
      </div>
    </>
  );
};

export default WixCaseStudyPage;

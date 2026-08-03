import CustomerChallenges from "@/components/CustomerCaseStudy/CustomerChallenges";
import CustomerHeader from "@/components/CustomerCaseStudy/CustomerHeader";
import CustomerTestimonial from "@/components/CustomerCaseStudy/CustomerTestimonial";
import FooterDev from "@/components/FooterDev/FooterDev";
import {
    KANSAI_CUSTOMER_CHALLENGES, 
    KANSAI_CUSTOMER_HEADER, 
    KANSAI_CUSTOMER_HIGHLIGHTS, 
    KANSAI_CUSTOMER_TESTIMONIAL 
} from "@/constants/KansaiAirportCustomer.constants";

const KansaiCaseStudyPage = () => {
  return (
    <>
      <div>
        <div className="mt-9 md:mt-16">
          <CustomerHeader
            customerHeader={KANSAI_CUSTOMER_HEADER}
            highlights={KANSAI_CUSTOMER_HIGHLIGHTS}
          />
          <CustomerTestimonial testimonial={KANSAI_CUSTOMER_TESTIMONIAL} />
          <CustomerChallenges data={KANSAI_CUSTOMER_CHALLENGES} />
        </div>
        <FooterDev />
      </div>
    </>
  );
};

export default KansaiCaseStudyPage;

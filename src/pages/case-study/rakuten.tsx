import CustomerChallenges from "@/components/CustomerCaseStudy/CustomerChallenges";
import CustomerHeader from "@/components/CustomerCaseStudy/CustomerHeader";
import CustomerTestimonial from "@/components/CustomerCaseStudy/CustomerTestimonial";
import FooterDev from "@/components/FooterDev/FooterDev";
import {
    RAKUTEN_CUSTOMER_CHALLENGES,
    RAKUTEN_CUSTOMER_HEADER,
    RAKUTEN_CUSTOMER_HIGHLIGHTS,
    RAKUTEN_CUSTOMER_TESTIMONIAL
} from "@/constants/RakutenCustomer.constants";

const RakutenCaseStudyPage = () => {
  return (
    <>
      <div>
        <div className="mt-9 md:mt-16">
          <CustomerHeader
            customerHeader={RAKUTEN_CUSTOMER_HEADER}
            highlights={RAKUTEN_CUSTOMER_HIGHLIGHTS}
          />
          <CustomerTestimonial testimonial={RAKUTEN_CUSTOMER_TESTIMONIAL} />
          <CustomerChallenges data={RAKUTEN_CUSTOMER_CHALLENGES} />
        </div>
        <FooterDev />
      </div>
    </>
  );
};

export default RakutenCaseStudyPage;

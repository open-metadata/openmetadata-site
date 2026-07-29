import CustomerChallenges from "@/components/CustomerCaseStudy/CustomerChallenges";
import CustomerHeader from "@/components/CustomerCaseStudy/CustomerHeader";
import CustomerTestimonial from "@/components/CustomerCaseStudy/CustomerTestimonial";
import FooterDev from "@/components/FooterDev/FooterDev";
import {
    YELP_CUSTOMER_CHALLENGES,
    YELP_CUSTOMER_HEADER,
    YELP_CUSTOMER_HIGHLIGHTS,
    YELP_CUSTOMER_TESTIMONIAL
} from "@/constants/YelpCustomer.constants";

const YelpCaseStudyPage = () => {
  return (
    <>
      <div>
        <div className="mt-9 md:mt-16">
          <CustomerHeader
            customerHeader={YELP_CUSTOMER_HEADER}
            highlights={YELP_CUSTOMER_HIGHLIGHTS}
          />
          <CustomerTestimonial testimonial={YELP_CUSTOMER_TESTIMONIAL} />
          <CustomerChallenges data={YELP_CUSTOMER_CHALLENGES} />
        </div>
        <FooterDev />
      </div>
    </>
  );
};

export default YelpCaseStudyPage;

import CustomerChallenges from "@/components/CustomerCaseStudy/CustomerChallenges";
import CustomerHeader from "@/components/CustomerCaseStudy/CustomerHeader";
import CustomerTestimonial from "@/components/CustomerCaseStudy/CustomerTestimonial";
import FooterDev from "@/components/FooterDev/FooterDev";
import {
    EDNON_CUSTOMER_CHALLENGES,
    EDNON_CUSTOMER_HEADER,
    EDNON_CUSTOMER_HIGHLIGHTS,
    EDNON_CUSTOMER_TESTIMONIAL
} from "@/constants/EdnonCustomer.constants";

const EdnonCaseStudyPage = () => {
  return (
    <>
      <div>
        <div className="mt-9 md:mt-16">
          <CustomerHeader
            customerHeader={EDNON_CUSTOMER_HEADER}
            highlights={EDNON_CUSTOMER_HIGHLIGHTS}
          />
          <CustomerTestimonial testimonial={EDNON_CUSTOMER_TESTIMONIAL} />
          <CustomerChallenges data={EDNON_CUSTOMER_CHALLENGES} />
        </div>
        <FooterDev />
      </div>
    </>
  );
};

export default EdnonCaseStudyPage;

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
import Head from "next/head";

const WoopCaseStudyPage = () => {
  return (
    <>
      <Head>
        <title>Woop Enables Self-Service Data Discovery with OpenMetadata</title>
        <meta name="description" content="See how logistics platform Woop's 2-person data team manages 1,600+ assets for 100+ users with OpenMetadata's automated governance and self-service discovery." />
      </Head>
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

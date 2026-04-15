import CustomerChallenges from "@/components/CustomerCaseStudy/CustomerChallenges";
import CustomerHeader from "@/components/CustomerCaseStudy/CustomerHeader";
import CustomerTestimonial from "@/components/CustomerCaseStudy/CustomerTestimonial";
import FooterDev from "@/components/FooterDev/FooterDev";
import {
    THNDR_CUSTOMER_CHALLENGES, 
    THNDR_CUSTOMER_HEADER, 
    THNDR_CUSTOMER_HIGHLIGHTS, 
    THNDR_CUSTOMER_TESTIMONIAL 
} from "@/constants/ThndrCustomer.constants";
import Head from "next/head";

export function getServerSideProps({ resolvedUrl }: { resolvedUrl: string }) {
  return {
    props: {
      link: resolvedUrl,
    },
  };
}

const ThndrCaseStudyPage = () => {
  return (
    <>
      <Head>
        <title>Thndr: Protects 3M+ Accounts with OpenMetadata Governance</title>
        <meta name="description" content="See how fintech Thndr's 6-person data team scales governance for 3M+ investor accounts with OpenMetadata's automated PII detection and real-time quality monitoring" />
      </Head>
      <div>
        <div className="mt-20 md:mt-24 lg:mt-32">
          <CustomerHeader
            customerHeader={THNDR_CUSTOMER_HEADER}
            highlights={THNDR_CUSTOMER_HIGHLIGHTS}
          />
          <CustomerTestimonial testimonial={THNDR_CUSTOMER_TESTIMONIAL} />
          <CustomerChallenges data={THNDR_CUSTOMER_CHALLENGES} />
        </div>
        <FooterDev />
      </div>
    </>
  );
};

export default ThndrCaseStudyPage;

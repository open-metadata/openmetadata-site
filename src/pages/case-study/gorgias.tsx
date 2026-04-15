import CustomerChallenges from "@/components/CustomerCaseStudy/CustomerChallenges";
import CustomerHeader from "@/components/CustomerCaseStudy/CustomerHeader";
import CustomerTestimonial from "@/components/CustomerCaseStudy/CustomerTestimonial";
import FooterDev from "@/components/FooterDev/FooterDev";
import {
  GORGIAS_CUSTOMER_CHALLENGES,
  GORGIAS_CUSTOMER_HEADER,
  GORGIAS_CUSTOMER_HIGHLIGHTS,
  GORGIAS_CUSTOMER_TESTIMONIAL,
} from "@/constants/GorgiasCustomer.constants";
import Head from "next/head";

export function getServerSideProps({ resolvedUrl }: { resolvedUrl: string }) {
  return {
    props: {
      link: resolvedUrl,
    },
  };
}

const GorgiasCaseStudyPage = () => {
  return (
    <>
      <Head>
        <title>Gorgias: Data Discovery Automation with OpenMetadata</title>
      </Head>
      <div>
        <div className="mt-20 md:mt-24 lg:mt-32">
          <CustomerHeader
            customerHeader={GORGIAS_CUSTOMER_HEADER}
            highlights={GORGIAS_CUSTOMER_HIGHLIGHTS}
          />
          <CustomerTestimonial testimonial={GORGIAS_CUSTOMER_TESTIMONIAL} />
          <CustomerChallenges data={GORGIAS_CUSTOMER_CHALLENGES} />
        </div>
        <FooterDev />
      </div>
    </>
  );
};

export default GorgiasCaseStudyPage;

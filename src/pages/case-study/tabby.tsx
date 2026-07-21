import CustomerChallenges from "@/components/CustomerCaseStudy/CustomerChallenges";
import CustomerHeader from "@/components/CustomerCaseStudy/CustomerHeader";
import CustomerTestimonial from "@/components/CustomerCaseStudy/CustomerTestimonial";
import FooterDev from "@/components/FooterDev/FooterDev";
import {
    TABBY_CUSTOMER_CHALLENGES,
    TABBY_CUSTOMER_HEADER,
    TABBY_CUSTOMER_HIGHLIGHTS,
    TABBY_CUSTOMER_TESTIMONIAL
} from "@/constants/TabbyCustomer.constants";
import Head from "next/head";

export function getServerSideProps({ resolvedUrl }: { resolvedUrl: string }) {
  return {
    props: {
      link: resolvedUrl,
    },
  };
}

const TabbyCaseStudyPage = () => {
  return (
    <>
      <Head>
        <title>How tabby Built an Open Context Layer for AI Agents on OpenMetadata</title>
        <meta name="description" content="See how tabby, the Middle East's largest buy-now-pay-later platform, made OpenMetadata the open context layer feeding its AI agents. Two agent plugins wired into OpenMetadata over MCP give engineers and analysts self-service answers grounded in real data and business meaning." />
      </Head>
      <div>
        <div className="mt-20 md:mt-24 lg:mt-32">
          <CustomerHeader
            customerHeader={TABBY_CUSTOMER_HEADER}
            highlights={TABBY_CUSTOMER_HIGHLIGHTS}
          />
          <CustomerTestimonial testimonial={TABBY_CUSTOMER_TESTIMONIAL} />
          <CustomerChallenges data={TABBY_CUSTOMER_CHALLENGES} />
        </div>
        <FooterDev />
      </div>
    </>
  );
};

export default TabbyCaseStudyPage;

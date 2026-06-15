import CustomerChallenges from "@/components/CustomerCaseStudy/CustomerChallenges";
import CustomerHeader from "@/components/CustomerCaseStudy/CustomerHeader";
import CustomerTestimonial from "@/components/CustomerCaseStudy/CustomerTestimonial";
import FooterDev from "@/components/FooterDev/FooterDev";
import {
    OPENAI_CUSTOMER_CHALLENGES,
    OPENAI_CUSTOMER_HEADER,
    OPENAI_CUSTOMER_HIGHLIGHTS,
    OPENAI_CUSTOMER_TESTIMONIAL
} from "@/constants/OpenaiCustomer.constants";
import Head from "next/head";

export function getServerSideProps({ resolvedUrl }: { resolvedUrl: string }) {
  return {
    props: {
      link: resolvedUrl,
    },
  };
}

const OpenAICaseStudyPage = () => {
  return (
    <>
      <Head>
        <title>How OpenAI Built a Self-Service AI Data Agent on OpenMetadata</title>
        <meta name="description" content="See how OpenAI's Data Productivity team built Kepler, an internal AI data agent serving 3,500+ employees, on OpenMetadata as the open context layer. Repeat queries dropped from 22 minutes to under 90 seconds." />
      </Head>
      <div>
        <div className="mt-20 md:mt-24 lg:mt-32">
          <CustomerHeader
            customerHeader={OPENAI_CUSTOMER_HEADER}
            highlights={OPENAI_CUSTOMER_HIGHLIGHTS}
          />
          <CustomerTestimonial testimonial={OPENAI_CUSTOMER_TESTIMONIAL} />
          <CustomerChallenges data={OPENAI_CUSTOMER_CHALLENGES} />
        </div>
        <FooterDev />
      </div>
    </>
  );
};

export default OpenAICaseStudyPage;

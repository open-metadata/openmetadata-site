import CustomerChallenges from "@/components/CustomerCaseStudy/CustomerChallenges";
import CustomerHeader from "@/components/CustomerCaseStudy/CustomerHeader";
import CustomerTestimonial from "@/components/CustomerCaseStudy/CustomerTestimonial";
import FooterDev from "@/components/FooterDev/FooterDev";
import {
  FDNY_CUSTOMER_CHALLENGES,
  FDNY_CUSTOMER_HEADER,
  FDNY_CUSTOMER_HIGHLIGHTS,
  FDNY_CUSTOMER_TESTIMONIAL,
} from "@/constants/FdnyCustomer.constants";
import Head from "next/head";

export function getServerSideProps({ resolvedUrl }: { resolvedUrl: string }) {
  return {
    props: {
      link: resolvedUrl,
    },
  };
}

const FdnyCaseStudyPage = () => {
  return (
    <>
      <Head>
        <title>FDNY: Governing Mission-Critical Data with OpenMetadata</title>
        <meta
          name="description"
          content="Learn how the Fire Department of New York used OpenMetadata to convert 30 years of Oracle data into an AI-ready semantic layer, connected to Claude via MCP for natural-language analytics across 15,582 active fire and EMS personnel records."
        />
      </Head>
      <div>
        <div className="mt-20 md:mt-24 lg:mt-32">
          <CustomerHeader
            customerHeader={FDNY_CUSTOMER_HEADER}
            highlights={FDNY_CUSTOMER_HIGHLIGHTS}
          />
          <CustomerTestimonial testimonial={FDNY_CUSTOMER_TESTIMONIAL} />
          <CustomerChallenges data={FDNY_CUSTOMER_CHALLENGES} />
        </div>
        <FooterDev />
      </div>
    </>
  );
};

export default FdnyCaseStudyPage;

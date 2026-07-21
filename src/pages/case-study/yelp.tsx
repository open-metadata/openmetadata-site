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
import Head from "next/head";

export function getServerSideProps({ resolvedUrl }: { resolvedUrl: string }) {
  return {
    props: {
      link: resolvedUrl,
    },
  };
}

const YelpCaseStudyPage = () => {
  return (
    <>
      <Head>
        <title>Yelp Builds a Trust-First Discovery Layer on OpenMetadata</title>
        <meta name="description" content="See how Yelp's Analytics Engineering team scaled OpenMetadata to ~100,000 assets and built a trust-first, persona-aware discovery layer with a custom search algorithm and a token-efficient in-house MCP server, turning OpenMetadata into an open context layer that people and AI agents can trust." />
      </Head>
      <div>
        <div className="mt-20 md:mt-24 lg:mt-32">
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

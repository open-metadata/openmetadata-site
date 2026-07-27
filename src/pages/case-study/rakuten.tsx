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
import Head from "next/head";

export function getServerSideProps({ resolvedUrl }: { resolvedUrl: string }) {
  return {
    props: {
      link: resolvedUrl,
    },
  };
}

const RakutenCaseStudyPage = () => {
  return (
    <>
      <Head>
        <title>OpenMetadata Journey at Rakuten: Unifying Assets, Enabling Discovery</title>
        <meta name="description" content="See how Rakuten's Data Platform team consolidated a fractured, low-utilization data landscape across 70+ services into a single group-wide OpenMetadata catalog, laying an open, governed foundation for discovery and AI agents." />
      </Head>
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

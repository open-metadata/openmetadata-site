import CustomerChallenges from "@/components/CustomerCaseStudy/CustomerChallenges";
import CustomerHeader from "@/components/CustomerCaseStudy/CustomerHeader";
import CustomerTestimonial from "@/components/CustomerCaseStudy/CustomerTestimonial";
import FooterDev from "@/components/FooterDev/FooterDev";
import {
    NW_CUSTOMER_CHALLENGES, 
    NW_CUSTOMER_HEADER, 
    NW_CUSTOMER_HIGHLIGHTS, 
    NW_CUSTOMER_TESTIMONIAL 
} from "@/constants/NwCustomer.constants";
import Head from "next/head";

export function getServerSideProps({ resolvedUrl }: { resolvedUrl: string }) {
  return {
    props: {
      link: resolvedUrl,
    },
  };
}

const NwCaseStudyPage = () => {
  return (
    <>
      <Head>
        <title>NW: Driving Clean Energy With Data Governance Powered By OpenMetadata</title>
        <meta name="description" content="See how NW implemented OpenMetadata to centralize governance: automating lineage, enriching metadata, and scaling insights across 90+ connectors." />
      </Head>
      <div>
        <div className="mt-20 md:mt-24 lg:mt-32">
          <CustomerHeader
            customerHeader={NW_CUSTOMER_HEADER}
            highlights={NW_CUSTOMER_HIGHLIGHTS}
          />
          <CustomerTestimonial testimonial={NW_CUSTOMER_TESTIMONIAL} />
          <CustomerChallenges data={NW_CUSTOMER_CHALLENGES} />
        </div>
        <FooterDev />
      </div>
    </>
  );
};

export default NwCaseStudyPage;

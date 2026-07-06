import CustomerChallenges from "@/components/CustomerCaseStudy/CustomerChallenges";
import CustomerHeader from "@/components/CustomerCaseStudy/CustomerHeader";
import CustomerTestimonial from "@/components/CustomerCaseStudy/CustomerTestimonial";
import FooterDev from "@/components/FooterDev/FooterDev";
import {
    WIX_CUSTOMER_CHALLENGES, 
    WIX_CUSTOMER_HEADER, 
    WIX_CUSTOMER_HIGHLIGHTS, 
    WIX_CUSTOMER_TESTIMONIAL 
} from "@/constants/WixCustomer.constants";
import Head from "next/head";

export function getServerSideProps({ resolvedUrl }: { resolvedUrl: string }) {
  return {
    props: {
      link: resolvedUrl,
    },
  };
}

const WixCaseStudyPage = () => {
  return (
    <>
      <Head>
        <title>Wix Builds an AI-Ready Data Foundation with OpenMetadata</title>
        <meta name="description" content="Discover how Wix leverages OpenMetadata to deliver real-time insights, streamline analyst work, and power AI agents that drive faster product decisions for 200M+ users." />
      </Head>
      <div>
        <div className="mt-20 md:mt-24 lg:mt-32">
          <CustomerHeader
            customerHeader={WIX_CUSTOMER_HEADER}
            highlights={WIX_CUSTOMER_HIGHLIGHTS}
          />
          <CustomerTestimonial testimonial={WIX_CUSTOMER_TESTIMONIAL} />
          <CustomerChallenges data={WIX_CUSTOMER_CHALLENGES} />
        </div>
        <FooterDev />
      </div>
    </>
  );
};

export default WixCaseStudyPage;

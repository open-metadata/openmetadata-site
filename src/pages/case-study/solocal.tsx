import CustomerChallenges from "@/components/CustomerCaseStudy/CustomerChallenges";
import CustomerHeader from "@/components/CustomerCaseStudy/CustomerHeader";
import CustomerTestimonial from "@/components/CustomerCaseStudy/CustomerTestimonial";
import FooterDev from "@/components/FooterDev/FooterDev";
import {
    SOLOCAL_CUSTOMER_CHALLENGES,
    SOLOCAL_CUSTOMER_HEADER,
    SOLOCAL_CUSTOMER_HIGHLIGHTS,
    SOLOCAL_CUSTOMER_TESTIMONIAL
} from "@/constants/SolocalCustomer.constants";
import Head from "next/head";

export function getServerSideProps({ resolvedUrl }: { resolvedUrl: string }) {
  return {
    props: {
      link: resolvedUrl,
    },
  };
}

const SolocalCaseStudyPage = () => {
  return (
    <>
      <Head>
        <title>Solocal Delivers Trusted Analytics to 260K+ Local Businesses with OpenMetadata</title>
        <meta name="description" content="Learn how Solocal, operator of PagesJaunes, uses OpenMetadata to deliver trusted analytics for France’s most-visited local business platform." />
      </Head>
      <div>
        <div className="mt-20 md:mt-24 lg:mt-32">
          <CustomerHeader
            customerHeader={SOLOCAL_CUSTOMER_HEADER}
            highlights={SOLOCAL_CUSTOMER_HIGHLIGHTS}
          />
          <CustomerTestimonial testimonial={SOLOCAL_CUSTOMER_TESTIMONIAL} />
          <CustomerChallenges data={SOLOCAL_CUSTOMER_CHALLENGES} />
        </div>
        <FooterDev />
      </div>
    </>
  );
};

export default SolocalCaseStudyPage;

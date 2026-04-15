import CustomerChallenges from "@/components/CustomerCaseStudy/CustomerChallenges";
import CustomerHeader from "@/components/CustomerCaseStudy/CustomerHeader";
import CustomerTestimonial from "@/components/CustomerCaseStudy/CustomerTestimonial";
import FooterDev from "@/components/FooterDev/FooterDev";
import {
    KANSAI_CUSTOMER_CHALLENGES, 
    KANSAI_CUSTOMER_HEADER, 
    KANSAI_CUSTOMER_HIGHLIGHTS, 
    KANSAI_CUSTOMER_TESTIMONIAL 
} from "@/constants/KansaiAirportCustomer.constants";
import Head from "next/head";

export function getServerSideProps({ resolvedUrl }: { resolvedUrl: string }) {
  return {
    props: {
      link: resolvedUrl,
    },
  };
}

const KansaiCaseStudyPage = () => {
  return (
    <>
      <Head>
        <title>Kansai Airports Streamlines Aviation Operations with OpenMetadata</title>
        <meta name="description" content="Discover how Kansai Airports modernized its aviation data operations, breaking down silos across dashboards and systems, reducing metadata management effort by 67%, and enabling faster, trusted insights for 50M+ passengers annually." />
      </Head>
      <div>
        <div className="mt-20 md:mt-24 lg:mt-32">
          <CustomerHeader
            customerHeader={KANSAI_CUSTOMER_HEADER}
            highlights={KANSAI_CUSTOMER_HIGHLIGHTS}
          />
          <CustomerTestimonial testimonial={KANSAI_CUSTOMER_TESTIMONIAL} />
          <CustomerChallenges data={KANSAI_CUSTOMER_CHALLENGES} />
        </div>
        <FooterDev />
      </div>
    </>
  );
};

export default KansaiCaseStudyPage;

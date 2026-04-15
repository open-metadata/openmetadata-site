import CustomerChallenges from "@/components/CustomerCaseStudy/CustomerChallenges";
import CustomerHeader from "@/components/CustomerCaseStudy/CustomerHeader";
import CustomerTestimonial from "@/components/CustomerCaseStudy/CustomerTestimonial";
import FooterDev from "@/components/FooterDev/FooterDev";
import {
  CARREFOUR_CUSTOMER_CHALLENGES,
  CARREFOUR_CUSTOMER_HEADER,
  CARREFOUR_CUSTOMER_HIGHLIGHTS,
  CARREFOUR_CUSTOMER_TESTIMONIAL,
} from "@/constants/CarrefourCustomer.constants";
import Head from "next/head";

export function getServerSideProps({ resolvedUrl }: { resolvedUrl: string }) {
  return {
    props: {
      link: resolvedUrl,
    },
  };
}

const CarrefourCaseStudyPage = () => {
  return (
    <>
      <Head>
        <title>
          Carrefour Brazil: Data Governance Success with OpenMetadata
        </title>
      </Head>
      <div>
        <div className="mt-20 md:mt-24 lg:mt-32">
          <CustomerHeader
            customerHeader={CARREFOUR_CUSTOMER_HEADER}
            highlights={CARREFOUR_CUSTOMER_HIGHLIGHTS}
          />
          <CustomerTestimonial testimonial={CARREFOUR_CUSTOMER_TESTIMONIAL} />
          <CustomerChallenges data={CARREFOUR_CUSTOMER_CHALLENGES} />
        </div>
        <FooterDev />
      </div>
    </>
  );
};

export default CarrefourCaseStudyPage;

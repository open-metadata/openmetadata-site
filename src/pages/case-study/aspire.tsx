import CustomerChallenges from "@/components/CustomerCaseStudy/CustomerChallenges";
import CustomerHeader from "@/components/CustomerCaseStudy/CustomerHeader";
import CustomerTestimonial from "@/components/CustomerCaseStudy/CustomerTestimonial";
import FooterDev from "@/components/FooterDev/FooterDev";
import {
    ASPIRE_CUSTOMER_CHALLENGES, 
    ASPIRE_CUSTOMER_HEADER, 
    ASPIRE_CUSTOMER_HIGHLIGHTS, 
    ASPIRE_CUSTOMER_TESTIMONIAL 
} from "@/constants/AspireCustomer.constants";
import Head from "next/head";

export function getServerSideProps({ resolvedUrl }: { resolvedUrl: string }) {
  return {
    props: {
      link: resolvedUrl,
    },
  };
}

const AspireCaseStudyPage = () => {
  return (
    <>
      <Head>
        <title>Aspire Builds a Trusted Metadata Foundation With OpenMetadata</title>
        <meta name="description" content="Learn how Aspire unified metadata across its finance platform using OpenMetadata, replacing manual documentation with a trusted system of record, standardizing data quality, and enabling faster, self-serve analytics across 1,700+ tables and 6,100+ quality checks." />
      </Head>
      <div>
        <div className="mt-20 md:mt-24 lg:mt-32">
          <CustomerHeader
            customerHeader={ASPIRE_CUSTOMER_HEADER}
            highlights={ASPIRE_CUSTOMER_HIGHLIGHTS}
          />
          <CustomerTestimonial testimonial={ASPIRE_CUSTOMER_TESTIMONIAL} />
          <CustomerChallenges data={ASPIRE_CUSTOMER_CHALLENGES} />
        </div>
        <FooterDev />
      </div>
    </>
  );
};

export default AspireCaseStudyPage;

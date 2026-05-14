import CustomerChallenges from "@/components/CustomerCaseStudy/CustomerChallenges";
import CustomerHeader from "@/components/CustomerCaseStudy/CustomerHeader";
import CustomerTestimonial from "@/components/CustomerCaseStudy/CustomerTestimonial";
import FooterDev from "@/components/FooterDev/FooterDev";
import {
    EDNON_CUSTOMER_CHALLENGES,
    EDNON_CUSTOMER_HEADER,
    EDNON_CUSTOMER_HIGHLIGHTS,
    EDNON_CUSTOMER_TESTIMONIAL
} from "@/constants/EdnonCustomer.constants";
import Head from "next/head";

export function getServerSideProps({ resolvedUrl }: { resolvedUrl: string }) {
  return {
    props: {
      link: resolvedUrl,
    },
  };
}

const EdnonCaseStudyPage = () => {
  return (
    <>
      <Head>
        <title>Ednon Eliminated Data Silos for 80+ Municipalities with OpenMetadata</title>
        <meta name="description" content="See how Ednon deployed OpenMetadata to help Deputación da Coruña catalog 1,400+ assets, improve documentation 40+ PP, and implement governance for millions of citizens." />
      </Head>
      <div>
        <div className="mt-20 md:mt-24 lg:mt-32">
          <CustomerHeader
            customerHeader={EDNON_CUSTOMER_HEADER}
            highlights={EDNON_CUSTOMER_HIGHLIGHTS}
          />
          <CustomerTestimonial testimonial={EDNON_CUSTOMER_TESTIMONIAL} />
          <CustomerChallenges data={EDNON_CUSTOMER_CHALLENGES} />
        </div>
        <FooterDev />
      </div>
    </>
  );
};

export default EdnonCaseStudyPage;

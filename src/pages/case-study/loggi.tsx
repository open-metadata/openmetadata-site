import CustomerChallenges from "@/components/CustomerCaseStudy/CustomerChallenges";
import CustomerHeader from "@/components/CustomerCaseStudy/CustomerHeader";
import CustomerTestimonial from "@/components/CustomerCaseStudy/CustomerTestimonial";
import FooterDev from "@/components/FooterDev/FooterDev";
import {
  LOGGI_CUSTOMER_CHALLENGES, 
  LOGGI_CUSTOMER_HEADER, 
  LOGGI_CUSTOMER_HIGHLIGHTS, 
  LOGGI_CUSTOMER_TESTIMONIAL 
} from "@/constants/LoggiCustomer.constants";
import Head from "next/head";

const LoggiCaseStudyPage = () => {
  return (
    <>
      <Head>
        <title>Loggi’s data delivers 30% faster with OpenMetadata</title>
        <meta name="description" content="Loggi saves $24K annually with OpenMetadata. Cut dashboards from 18K  to 2K with streamlined data governance" />
      </Head>
      <div>
        <div className="mt-9 md:mt-16">
          <CustomerHeader
            customerHeader={LOGGI_CUSTOMER_HEADER}
            highlights={LOGGI_CUSTOMER_HIGHLIGHTS}
          />
          <CustomerTestimonial testimonial={LOGGI_CUSTOMER_TESTIMONIAL} />
          <CustomerChallenges data={LOGGI_CUSTOMER_CHALLENGES} />
        </div>
        <FooterDev />
      </div>
    </>
  );
};

export default LoggiCaseStudyPage;

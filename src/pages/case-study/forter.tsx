import CustomerChallenges from "@/components/CustomerCaseStudy/CustomerChallenges";
import CustomerHeader from "@/components/CustomerCaseStudy/CustomerHeader";
import CustomerTestimonial from "@/components/CustomerCaseStudy/CustomerTestimonial";
import FooterDev from "@/components/FooterDev/FooterDev";
import NavbarDev from "@/components/NavbarDev/NavbarDev.component";
import NavbarStrip from "@/components/NavbarDev/NavbarStrip.component";
import { 
    FORTER_CUSTOMER_CHALLENGES, 
    FORTER_CUSTOMER_HEADER, 
    FORTER_CUSTOMER_HIGHLIGHTS, 
    FORTER_CUSTOMER_TESTIMONIAL 
} from "@/constants/ForterCustomer.constants";
import Head from "next/head";
import { useRouter } from "next/router";

export function getServerSideProps({ resolvedUrl }: { resolvedUrl: string }) {
  return {
    props: {
      link: resolvedUrl,
    },
  };
}

const ForterCaseStudyPage = () => {
  const router = useRouter();

  const handleTryOpenMetadataClick = () => {
    router.push("/#try-openmetadata");
  };

  return (
    <>
      <Head>
        <title>Forter Scaled Metadata for Enterprise Fraud Prevention</title>
        <meta name="description" content="Discover how Forter built a centralized metadata foundation to manage sensitive, high-volume data while deterring malicious behavior for enterprise merchants." />
      </Head>
      <div>
        <div className="mx-auto fixed top-0 w-full z-[1030]">
          <NavbarDev onClick={handleTryOpenMetadataClick} />
          <NavbarStrip />
        </div>
        <div className="mt-20 md:mt-24 lg:mt-32">
          <CustomerHeader
            customerHeader={FORTER_CUSTOMER_HEADER}
            highlights={FORTER_CUSTOMER_HIGHLIGHTS}
          />
          <CustomerTestimonial testimonial={FORTER_CUSTOMER_TESTIMONIAL} />
          <CustomerChallenges data={FORTER_CUSTOMER_CHALLENGES} />
        </div>
        <FooterDev />
      </div>
    </>
  );
};

export default ForterCaseStudyPage;

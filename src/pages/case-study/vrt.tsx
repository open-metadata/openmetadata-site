import CustomerChallenges from "@/components/CustomerCaseStudy/CustomerChallenges";
import CustomerHeader from "@/components/CustomerCaseStudy/CustomerHeader";
import CustomerTestimonial from "@/components/CustomerCaseStudy/CustomerTestimonial";
import FooterDev from "@/components/FooterDev/FooterDev";
import NavbarDev from "@/components/NavbarDev/NavbarDev.component";
import NavbarStrip from "@/components/NavbarDev/NavbarStrip.component";
import { 
    VRT_CUSTOMER_CHALLENGES, 
    VRT_CUSTOMER_HEADER, 
    VRT_CUSTOMER_HIGHLIGHTS, 
    VRT_CUSTOMER_TESTIMONIAL 
} from "@/constants/VRTCustomer.constants";
import Head from "next/head";
import { useRouter } from "next/router";

export function getServerSideProps({ resolvedUrl }: { resolvedUrl: string }) {
  return {
    props: {
      link: resolvedUrl,
    },
  };
}

const VRTCaseStudyPage = () => {
  const router = useRouter();

  const handleTryOpenMetadataClick = () => {
    router.push("/#try-openmetadata");
  };

  return (
    <>
      <Head>
        <title>Enabling real data ownership at VRT with OpenMetadata</title>
        <meta name="description" content="Discover how Belgian public media broadcaster VRT established true ownership of data quality fixes at scale through their data transformation partners at Dataroots and OpenMetadata!" />
      </Head>
      <div>
        <div className="mx-auto fixed top-0 w-full z-[1030]">
          <NavbarDev onClick={handleTryOpenMetadataClick} />
          <NavbarStrip />
        </div>
        <div className="mt-20 md:mt-24 lg:mt-32">
          <CustomerHeader
            customerHeader={VRT_CUSTOMER_HEADER}
            highlights={VRT_CUSTOMER_HIGHLIGHTS}
          />
          <CustomerTestimonial testimonial={VRT_CUSTOMER_TESTIMONIAL} />
          <CustomerChallenges data={VRT_CUSTOMER_CHALLENGES} />
        </div>
        <FooterDev />
      </div>
    </>
  );
};

export default VRTCaseStudyPage;

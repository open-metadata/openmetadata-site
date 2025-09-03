import CustomerChallenges from "@/components/CustomerCaseStudy/CustomerChallenges";
import CustomerHeader from "@/components/CustomerCaseStudy/CustomerHeader";
import CustomerTestimonial from "@/components/CustomerCaseStudy/CustomerTestimonial";
import FooterDev from "@/components/FooterDev/FooterDev";
import NavbarDev from "@/components/NavbarDev/NavbarDev.component";
import NavbarStrip from "@/components/NavbarDev/NavbarStrip.component";
import { 
    FREENOW_CUSTOMER_CHALLENGES, 
    FREENOW_CUSTOMER_HEADER, 
    FREENOW_CUSTOMER_HIGHLIGHTS, 
    FREENOW_CUSTOMER_TESTIMONIAL 
} from "@/constants/FreenowCustomer.constants";
import Head from "next/head";
import { useRouter } from "next/router";

export function getServerSideProps({ resolvedUrl }: { resolvedUrl: string }) {
  return {
    props: {
      link: resolvedUrl,
    },
  };
}

const FreeNowCaseStudyPage = () => {
  const router = useRouter();

  const handleTryOpenMetadataClick = () => {
    router.push("/#try-openmetadata");
  };

  return (
    <>
      <Head>
        <title>FREENOW: OpenMetadata powered Data Announcement Engine</title>
        <meta 
            name="description" 
            content="Discover how FREENOW built an OpenMetadata-powered system to automate data communications across 17k assets and 300+ downstream dependencies" 
        />
      </Head>
      <div>
        <div className="mx-auto fixed top-0 w-full z-[1030]">
          <NavbarDev onClick={handleTryOpenMetadataClick} />
          <NavbarStrip />
        </div>
        <div className="mt-20 md:mt-24 lg:mt-32">
          <CustomerHeader
            customerHeader={FREENOW_CUSTOMER_HEADER}
            highlights={FREENOW_CUSTOMER_HIGHLIGHTS}
          />
          <CustomerTestimonial testimonial={FREENOW_CUSTOMER_TESTIMONIAL} />
          <CustomerChallenges data={FREENOW_CUSTOMER_CHALLENGES} />
        </div>
        <FooterDev />
      </div>
    </>
  );
};

export default FreeNowCaseStudyPage;

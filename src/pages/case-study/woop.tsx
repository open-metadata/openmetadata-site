import CustomerChallenges from "@/components/CustomerCaseStudy/CustomerChallenges";
import CustomerHeader from "@/components/CustomerCaseStudy/CustomerHeader";
import CustomerTestimonial from "@/components/CustomerCaseStudy/CustomerTestimonial";
import FooterDev from "@/components/FooterDev/FooterDev";
import NavbarDev from "@/components/NavbarDev/NavbarDev.component";
import NavbarStrip from "@/components/NavbarDev/NavbarStrip.component";
import { 
  WOOP_CUSTOMER_CHALLENGES, 
  WOOP_CUSTOMER_HEADER, 
  WOOP_CUSTOMER_HIGHLIGHTS, 
  WOOP_CUSTOMER_TESTIMONIAL 
} from "@/constants/WoopCustomer.constants";
import Head from "next/head";
import { useRouter } from "next/router";

export function getServerSideProps({ resolvedUrl }: { resolvedUrl: string }) {
  return {
    props: {
      link: resolvedUrl,
    },
  };
}

const WoopCaseStudyPage = () => {
  const router = useRouter();

  const handleTryOpenMetadataClick = () => {
    router.push("/#try-openmetadata");
  };

  return (
    <>
      <Head>
        <title>Woop Enables Self-Service Data Discovery with OpenMetadata</title>
        <meta name="description" content="See how logistics platform Woop's 2-person data team manages 1,600+ assets for 100+ users with OpenMetadata's automated governance and self-service discovery." />
      </Head>
      <div>
        <div className="mx-auto fixed top-0 w-full z-[1030]">
          <NavbarDev onClick={handleTryOpenMetadataClick} />
          <NavbarStrip />
        </div>
        <div className="mt-20 md:mt-24 lg:mt-32">
          <CustomerHeader
            customerHeader={WOOP_CUSTOMER_HEADER}
            highlights={WOOP_CUSTOMER_HIGHLIGHTS}
          />
          <CustomerTestimonial testimonial={WOOP_CUSTOMER_TESTIMONIAL} />
          <CustomerChallenges data={WOOP_CUSTOMER_CHALLENGES} />
        </div>
        <FooterDev />
      </div>
    </>
  );
};

export default WoopCaseStudyPage;

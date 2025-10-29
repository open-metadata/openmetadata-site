import CustomerChallenges from "@/components/CustomerCaseStudy/CustomerChallenges";
import CustomerHeader from "@/components/CustomerCaseStudy/CustomerHeader";
import CustomerTestimonial from "@/components/CustomerCaseStudy/CustomerTestimonial";
import FooterDev from "@/components/FooterDev/FooterDev";
import NavbarDev from "@/components/NavbarDev/NavbarDev.component";
import NavbarStrip from "@/components/NavbarDev/NavbarStrip.component";
import { 
    KANSAI_CUSTOMER_CHALLENGES, 
    KANSAI_CUSTOMER_HEADER, 
    KANSAI_CUSTOMER_HIGHLIGHTS, 
    KANSAI_CUSTOMER_TESTIMONIAL 
} from "@/constants/KansaiAirportCustomer.constants";
import Head from "next/head";
import { useRouter } from "next/router";

export function getServerSideProps({ resolvedUrl }: { resolvedUrl: string }) {
  return {
    props: {
      link: resolvedUrl,
    },
  };
}

const KansaiCaseStudyPage = () => {
  const router = useRouter();

  const handleTryOpenMetadataClick = () => {
    router.push("/#try-openmetadata");
  };

  return (
    <>
      <Head>
        <title>Kansai Airports Streamlines Aviation Operations with OpenMetadata</title>
        <meta name="description" content="Discover how Kansai Airports modernized its aviation data operations, breaking down silos across dashboards and systems, reducing metadata management effort by 67%, and enabling faster, trusted insights for 50M+ passengers annually." />
      </Head>
      <div>
        <div className="mx-auto fixed top-0 w-full z-[1030]">
          <NavbarDev onClick={handleTryOpenMetadataClick} />
          <NavbarStrip />
        </div>
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

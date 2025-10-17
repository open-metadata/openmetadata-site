import CustomerChallenges from "@/components/CustomerCaseStudy/CustomerChallenges";
import CustomerHeader from "@/components/CustomerCaseStudy/CustomerHeader";
import CustomerTestimonial from "@/components/CustomerCaseStudy/CustomerTestimonial";
import FooterDev from "@/components/FooterDev/FooterDev";
import NavbarDev from "@/components/NavbarDev/NavbarDev.component";
import NavbarStrip from "@/components/NavbarDev/NavbarStrip.component";
import { 
    INDRIVE_CUSTOMER_CHALLENGES, 
    INDRIVE_CUSTOMER_HEADER, 
    INDRIVE_CUSTOMER_HIGHLIGHTS, 
    INDRIVE_CUSTOMER_TESTIMONIAL 
} from "@/constants/IndriveCustomer.constants";
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
        <title>inDrive Scales Global Data Governance with OpenMetadata</title>
        <meta name="description" content="See how inDrive tracks and governs 100+ AWS-hosted databases for global teams, enabling faster analytics, automated compliance, and trusted data at scale." />
      </Head>
      <div>
        <div className="mx-auto fixed top-0 w-full z-[1030]">
          <NavbarDev onClick={handleTryOpenMetadataClick} />
          <NavbarStrip />
        </div>
        <div className="mt-20 md:mt-24 lg:mt-32">
          <CustomerHeader
            customerHeader={INDRIVE_CUSTOMER_HEADER}
            highlights={INDRIVE_CUSTOMER_HIGHLIGHTS}
          />
          <CustomerTestimonial testimonial={INDRIVE_CUSTOMER_TESTIMONIAL} />
          <CustomerChallenges data={INDRIVE_CUSTOMER_CHALLENGES} />
        </div>
        <FooterDev />
      </div>
    </>
  );
};

export default WoopCaseStudyPage;

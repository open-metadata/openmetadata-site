import AboutOpenMetadata from "@/components/AboutOpenMetadata/AboutOpenMetadata";
import Achievement from "@/components/Achievement/Achievement";
import FooterDev from "@/components/FooterDev/FooterDev";
import Header from "@/components/Header/Header";
import IntegrationsDev from "@/components/IntegrationsDev/IntegrationsDev";
import KeyDataAssets from "@/components/KeyDataAssets/KeyDataAssets";
import Services from "@/components/Service/Service";
import Testimonials from "@/components/Testimonials/Testimonials";
import TryOpenMetadata from "@/components/TryOpenMetadata/TryOpenMetadata";

export function getServerSideProps({ resolvedUrl }: { resolvedUrl: string }) {
  return {
    props: {
      link: resolvedUrl,
    },
  };
}

const Development = () => {
  const handleTryOpenMetadataClick = () => {
    const element = document.querySelector("#try-openmetadata");
    element?.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  return (
      <div>
        <Header onClick={handleTryOpenMetadataClick} />
        <Achievement />
        <Services />
        <KeyDataAssets />
        <IntegrationsDev />
        <TryOpenMetadata />
        <Testimonials />
        <AboutOpenMetadata />
        <FooterDev />
      </div>
  );
};

export default Development;

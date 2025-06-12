import AboutOpenMetadata from "@/components/AboutOpenMetadata/AboutOpenMetadata";
import Achievement from "@/components/Achievement/Achievement";
import FooterDev from "@/components/FooterDev/FooterDev";
import Header from "@/components/Header/Header";
import IntegrationsDev from "@/components/IntegrationsDev/IntegrationsDev";
import KeyDataAssets from "@/components/KeyDataAssets/KeyDataAssets";
import NavbarDev from "@/components/NavbarDev/NavbarDev.component";
import NavbarStrip from "@/components/NavbarDev/NavbarStrip.component";
import Services from "@/components/Service/Service";
import Testimonials from "@/components/Testimonials/Testimonials";
import TryOpenMetadata from "@/components/TryOpenMetadata/TryOpenMetadata";

const Development = () => {
  const handleTryOpenMetadataClick = () => {
    const element = document.querySelector("#try-openmetadata");
    element?.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  return (
      <div>
        <div className="mx-auto fixed top-0 w-full z-[1030]">
          <NavbarDev onClick={handleTryOpenMetadataClick} />
          <NavbarStrip />
        </div>
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

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
import Head from "next/head";

const Development = () => {
  const handleTryOpenMetadataClick = () => {
    const element = document.querySelector("#try-openmetadata");
    element?.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  return (
    <div className="justify-between min-h-screen flex flex-col">
      <Head>
        <link rel="preload" href="/assets/home-section.webp" as="image" />
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://open-metadata.org/" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="OpenMetadata is the #1 open source metadata platform. Empower innovation and foster collaboration with the all-in-one platform for data discovery, lineage, data quality, observability, governance, and more."
        />
        <meta
          name="keywords"
          content="best open-source data catalog, #1 open source data catalog, enterprise data catalog, data governance solutions, centralized metadata platform, best data discovery tool, data collaboration platform, modern data catalog, data catalog data lineage, best metadata management tool, best metadata platform, open-source metadata platform, open source metadata"
        />
        <meta name="author" content="open-metadata" />

        {/* Open Graph tags start  */}
        <meta
          property="og:title"
          content="OpenMetadata: The Best Open Source Metadata Platform"
        />
        <meta
          property="og:description"
          content="OpenMetadata is the #1 open source metadata platform. Empower innovation and foster collaboration with the all-in-one platform for data discovery, lineage, data quality, observability, governance, and more."
        />
        <meta
          property="og:image"
          content="https://open-metadata.org/assets/favicon.png"
        />
        <meta property="og:type" content="metadata tool" />
        <meta property="og:url" content="https://open-metadata.org" />
        {/* Open Graph tags end  */}

        {/* Twitter Card start  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="https://open-metadata.org" />
        <meta
          name="twitter:title"
          content="OpenMetadata: The Best Open Source Data Catalog Solution"
        />
        <meta
          name="twitter:description"
          content="An end-to-end metadata management solution that includes data discovery, governance, data quality, observability, and people collaboration."
        />
        <meta
          name="twitter:image"
          content="https://open-metadata.org/assets/favicon.png"
        />
        <title>OpenMetadata: Join the #1 Open Source Data Community</title>
      </Head>
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
    </div>
  );
};

export default Development;

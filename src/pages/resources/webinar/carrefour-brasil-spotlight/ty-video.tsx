import FooterDev from "@/components/FooterDev/FooterDev";
import NavbarDev from "@/components/NavbarDev/NavbarDev.component";
import NavbarStrip from "@/components/NavbarDev/NavbarStrip.component";
import TyHeader from "@/components/TyVideo/Header";
import ResourceGallery from "@/components/TyVideo/ResourceGallery";
import { useRouter } from "next/router";
import { TY_PAGE_CARREFOUR } from "@/constants/LandingPage.constants";
import Head from "next/head";

const CarrefourTy = () => {
  const router = useRouter();

  const handleTryOpenMetadataClick = () => {
    router.push("/#try-openmetadata");
  };

  return (
    <div>
      <Head>
        <link
          rel="preload"
          href="/assets/landingPage/carrefour.jpg"
          as="image"
        />
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://open-metadata.org/" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="OpenMetadata is the #1 open source data catalog tool. Empower innovation and foster collaboration with the all-in-one platform for data discovery, lineage, data quality, observability, governance, and more."
        />
        <meta
          name="keywords"
          content="best open-source data catalog, #1 open source data catalog, enterprise data catalog, data governance solutions, centralized metadata platform, best data discovery tool, data collaboration platform, modern data catalog, data catalog data lineage, best metadata management tool"
        />
        <meta name="author" content="open-metadata" />

        {/* Open Graph tags start  */}
        <meta
          property="og:title"
          content="OpenMetadata: The Best Open Source Data Catalog Solution"
        />
        <meta
          property="og:description"
          content="OpenMetadata is the #1 open source data catalog tool. Empower innovation and foster collaboration with the all-in-one platform for data discovery, lineage, data quality, observability, governance, and more."
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
      <div className="mx-auto fixed top-0 w-full z-[1030]">
        <NavbarDev onClick={handleTryOpenMetadataClick} />
        <NavbarStrip />
      </div>
      <div className="landing-page mt-20 md:mt-24 lg:mt-32">
        <div className="max-w-[1440px] mx-auto py-28 md:py-20 px-4 md:px-10 xl:px-16">
          <div className="grid gap-16 lg:grid-cols-2 xl:grid-cols-3">
            <TyHeader
              header="Carrefour Brasil Community Spotlight:"
              description="How OpenMetadata Transforms Data Governance, Quality, and Observability into Actionable Insights."
              videoSrc="https://www.youtube.com/embed/Un5Sf2hCCrw?si=D54dnczT7mkmBNwu"
            />
            <ResourceGallery data={TY_PAGE_CARREFOUR} />
          </div>
        </div>
      </div>
      <FooterDev />
    </div>
  );
};

export default CarrefourTy;

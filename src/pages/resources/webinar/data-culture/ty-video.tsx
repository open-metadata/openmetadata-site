import FooterDev from "@/components/FooterDev/FooterDev";
import NavbarDev from "@/components/NavbarDev/NavbarDev.component";
import NavbarStrip from "@/components/NavbarDev/NavbarStrip.component";
import TyHeader from "@/components/TyVideo/Header";
import ResourceGallery from "@/components/TyVideo/ResourceGallery";
import { useRouter } from "next/router";
import { TY_PAGE_DATA_CULTURE } from "@/constants/LandingPage.constants";

export function getServerSideProps({ resolvedUrl }: { resolvedUrl: string }) {
  return {
    props: {
      link: resolvedUrl,
      title: "Data Culture with Uber's Former Chief Architect | Access",
    },
  };
}

const DataCultureTy = () => {
  const router = useRouter();

  const handleTryOpenMetadataClick = () => {
    router.push("/#try-openmetadata");
  };

  return (
    <div>
      <div className="mx-auto fixed top-0 w-full z-[1030]">
        <NavbarDev onClick={handleTryOpenMetadataClick} />
        <NavbarStrip />
      </div>
      <div className="landing-page mt-20 md:mt-24 lg:mt-32">
        <div className="max-w-[1440px] mx-auto py-28 md:py-20 px-4 md:px-10 xl:px-16">
          <div className="grid gap-16 lg:grid-cols-2 xl:grid-cols-3">
            <TyHeader
              header="Data Culture Best Practices with OpenMetadata"
              description="Learnings and Insights from the former Chief Data Architect of Uber"
              videoSrc="https://www.youtube.com/embed/lOQepnTdA58?si=6wF5K6BV14wasqAh"
            />
            <ResourceGallery data={TY_PAGE_DATA_CULTURE} />
          </div>
        </div>
      </div>
      <FooterDev />
    </div>
  );
};

export default DataCultureTy;

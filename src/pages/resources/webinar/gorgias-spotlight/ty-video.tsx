import FooterDev from "@/components/FooterDev/FooterDev";
import NavbarDev from "@/components/NavbarDev/NavbarDev.component"
import NavbarStrip from "@/components/NavbarDev/NavbarStrip.component"
import TyHeader from "@/components/TyVideo/Header";
import ResourceGallery from "@/components/TyVideo/ResourceGallery";
import { useRouter } from "next/router";
import { TY_PAGE_GORGIAS } from "@/constants/LandingPage.constants";

const GorgiasTy = () => {
    const router = useRouter();
    
      const handleTryOpenMetadataClick = () => {
        router.push('/#try-openmetadata');
      };
      
    return (
        <div className="justify-between min-h-screen flex flex-col">
        <div className="mx-auto fixed top-0 w-full z-[1030]">
          <NavbarDev onClick={handleTryOpenMetadataClick} />
          <NavbarStrip />
        </div>
        <div className="landing-page mt-20 md:mt-24 lg:mt-32">
            <div className="max-w-[1440px] mx-auto py-28 md:py-20 px-4 md:px-10 xl:px-16">
                <div className="grid gap-16 lg:grid-cols-2 xl:grid-cols-3">
                    <TyHeader header="Gorgias Community Spotlight:" description="Data Management Learnings with OpenMetadata on Data Asset Discovery, Source Coverage, and Data Assistance." videoSrc="https://www.youtube.com/embed/EgPed_N5fQk?si=znq3dfAz-wAMAD8J" />
                    <ResourceGallery data={TY_PAGE_GORGIAS} />
                </div>
            </div>
        </div>
        <FooterDev />
      </div>
    )
}

export default GorgiasTy
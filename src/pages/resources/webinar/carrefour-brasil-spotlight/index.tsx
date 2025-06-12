import FooterDev from "@/components/FooterDev/FooterDev";
import HubspotForm from "@/components/HubspotForm";
import NavbarDev from "@/components/NavbarDev/NavbarDev.component";
import NavbarStrip from "@/components/NavbarDev/NavbarStrip.component";
import { SPEAKERS } from "@/constants/LandingPage.constants";
import Image from "next/image";
import { useRouter } from "next/router";

export function getServerSideProps({ resolvedUrl }: { resolvedUrl: string }) {
  return {
    props: {
      link: resolvedUrl,
    },
  };
}

const CarrefourPage = () => {
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
            <div className="xl:col-span-2">
              <p className="uppercase text-[#7147E8] tracking-[0.04em] text-lg font-medium text-center lg:text-left md:font-bold">
                on demand webinar video
              </p>
              <h1 className="text-[#292929] tracking-[-0.02em] font-medium my-4 text-[44px] leading-[52px] text-center lg:text-left md:text-6xl xl:max-w-[80%]">
                Community Spotlight—OpenMetadata @ Carrefour Brasil
              </h1>
              <div className="flex gap-3 justify-center my-5 sm:gap-4 lg:justify-start">
                <Image
                  src="/assets/omd-logo.svg"
                  alt="OMD Logo"
                  width={147}
                  height={58}
                />
                <Image
                  src="/assets/landingPage/cross.svg"
                  alt="Cross"
                  width={45}
                  height={45}
                />
                <Image
                  src="/assets/landingPage/carrefour-brasil.svg"
                  alt="Carrefour Brasil"
                  width={200}
                  height={65}
                />
              </div>
              <div className="lg:hidden">
                <HubspotForm id="hubspotFormMobile" />
              </div>
              <p className="text-[#292929] tracking-[-0.02em] mt-16 text-center md:text-lg lg:text-left lg:mt-0">
                The OpenMetadata Community Meeting was held on January 15th,
                2025. In the Community Spotlight, the Carrefour Brazil data team
                of Ronnie Santos, Brenda Barcelos, Vládia Beserra, and Kelly
                Rocha shared their journey with OpenMetadata. Topics covered
                included data estate, team structure, stakeholder challenges,
                data strategy, certification, quality tests, and more.
              </p>
              <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-y-5">
                {SPEAKERS.map((item) => (
                  <div key={item.name} className="flex items-center gap-3">
                    <div>
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={75}
                        height={75}
                      />
                    </div>
                    <div className="tracking-[-0.02em] font-medium">
                      <div className="text-[#0D0337] sm:text-[20px]">
                        {item.name}
                      </div>
                      <div className="text-[#757575] sm:text-lg">
                        {item.designation}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 hidden lg:block">
              <HubspotForm id="hubspotFormDesktop" />
            </div>
          </div>
        </div>
      </div>
      <FooterDev />
    </div>
  );
};

export default CarrefourPage;

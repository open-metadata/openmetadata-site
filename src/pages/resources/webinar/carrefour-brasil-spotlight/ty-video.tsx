import FooterDev from "@/components/FooterDev/FooterDev";
import NavbarDev from "@/components/NavbarDev/NavbarDev.component"
import NavbarStrip from "@/components/NavbarDev/NavbarStrip.component"
import { TY_PAGE } from "@/constants/TyPage.constants";
import Image from "next/image";
import { useRouter } from "next/router";

const CarrefourTy = () => {
    const router = useRouter();
    
      const handleTryOpenMetadataClick = () => {
        router.push('/#try-openmetadata');
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
                    <div className="text-center lg:text-left xl:col-span-2">
                        <p className="uppercase text-[#7147E8] tracking-[0.04em] text-lg font-medium md:font-bold">on demand webinar video</p>
                        <h1 className="text-[#292929] tracking-[-0.02em] font-medium my-4 text-5xl md:text-6xl">Thank you for your interest.</h1>
                        <p className="text-[#292929] tracking-[-0.02em] md:text-lg">You now have access to the webinar. A link to the video will be emailed to you as well.</p>
                        <div className="mt-12 relative pb-[56.25%] h-0">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src="https://www.youtube.com/embed/Un5Sf2hCCrw?si=D54dnczT7mkmBNwu"
                                title="YouTube video player"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                    <div className="mt-12">
                        <div className="text-[#292929] tracking-[-0.02em] text-2xl">You might also be interested in...</div>
                        <div className="mt-4 flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-col gap-4">
                            {TY_PAGE.map((item, i) => (
                                <div key={i} className="lp-card shadow-card rounded bg-white">
                                    <a href={item.href} target={item.isExternalLink ? '_blank' : '_self'}>
                                        <div className="grid grid-cols-5">
                                            <div className="landing-page-card rounded-l flex justify-center items-center col-span-2">
                                                <Image src={item.image} alt={item.header} width={200} height={140} className="p-3" />
                                            </div>
                                            <div className="py-3 px-4 col-span-3">
                                                <div className="header-text text-[#474E71] text-sm sm:text-base font-medium mb-1">{item.header}</div>
                                                <div className="text-[#2E3457] text-xs sm:text-sm">{item.description}</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterDev />
      </div>
    )
}

export default CarrefourTy
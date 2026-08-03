import Image from "next/image";
import { OmdLogo } from "@/components/Icons/OmdLogo";
import { SUMMIT_COMPANIES } from "@/constants/Summit.constants";
import { useEffect } from "react";

const SUMMIT_ON_DEMAND_FORM_TARGET = 'summit-on-demand-form'

const SummitBanner = () => {
  useEffect(() => {
    const createForm = () => {
      if ((window as any).hbspt) {
        (window as any).hbspt.forms.create({
          portalId: '21369141',
          formId: '19429fb6-c941-4c60-adff-85593acaa291',
          region: 'na1',
          target: `#${SUMMIT_ON_DEMAND_FORM_TARGET}`,
          onFormReady: () => {
            const form = document.querySelector(`#${SUMMIT_ON_DEMAND_FORM_TARGET} form`)
            const nameFieldset = form?.querySelector('.hs_firstname')?.closest('fieldset')
            const emailFieldset = form?.querySelector('.hs_email')?.closest('fieldset')
            if (nameFieldset && emailFieldset && emailFieldset.parentNode) {
              emailFieldset.parentNode.insertBefore(nameFieldset, emailFieldset)
            }
          },
        })
      }
    }

    if ((window as any).hbspt) {
      createForm()
      return
    }

    const script = document.createElement('script')
    script.src = 'https://js.hsforms.net/forms/embed/v2.js'
    script.charset = 'utf-8'
    script.type = 'text/javascript'
    script.onload = createForm
    document.body.appendChild(script)
  }, [])

  return (
    <>
      <div className="bg-[linear-gradient(0deg,_#FFF_-3.19%,_#A585FF_281.53%)]">
        <div className="max-w-[1350px] mx-auto py-8 lg:py-16 px-4 w-full">
          <div className="grid lg:grid-cols-5 lg:rounded-[20px] overflow-hidden">
            <div
              className="lg:col-span-3 lg:rounded-tl-[20px] lg:rounded-bl-[20px] lg:rounded-tr-none lg:rounded-br-none p-6 lg:p-8 lg:pr-16 flex-1 bg-[#F9F6FF] min-h-[400px]"
            >
              <div className="flex gap-3 items-center">
                <img src="/assets/collate-logo.svg" alt="Collate" width={169} height={39} />
                <span className="text-gray-400 text-xl font-light">×</span>
                <OmdLogo />
              </div>
              <div className="text-white text-sm py-1 px-3 max-w-fit rounded-full my-3 bg-[#181D27]">
                ON-DEMAND
              </div>
              <h2 className="text-4xl lg:text-6xl font-normal text-[#222244]">
                Collate Summit &apos;<span className="text-[#7147E8]">26</span>
              </h2>
              <div className="text-lg mb-3 text-[#414651]">
                AI agents at work. Governed data. Powered by Semantic Intelligence.
              </div>
              <div className="text-[#414651] text-2xl font-medium mt-3">Hear from data & AI leaders sharing real production stories</div>
              <div className="flex flex-wrap gap-4 mt-8 items-center">
                {SUMMIT_COMPANIES.map(item => (
                  <div className="bg-white py-3 px-4 md:py-5 md:px-6 w-fit rounded-full shadow-summit-logo" key={item.name}>
                    <img
                      src={item.logo}
                      alt={item.name}
                      className={`${['Airbus', 'Scout24'].includes(item.name) ? 'h-3 md:h-3.5' : 'h-4 md:h-5'} w-auto object-contain`}
                    />
                  </div>
                ))}
                <div className="text-[#7147E8] text-lg font-medium">& more.</div>
              </div>
            </div>
            <div className="lg:col-span-2 relative lg:rounded-tr-[20px] lg:rounded-br-[20px] lg:rounded-tl-none lg:rounded-bl-none w-full min-h-[260px] lg:w-[480px] shrink-0 overflow-hidden">
              <Image
                src="/assets/summit-banner/banner-bg.png"
                alt="Collate Summit 2026"
                fill
                priority
                className="object-cover object-center scale-[1.2]"
              />
              <div className="text-white relative z-10 sm:max-w-[55%] mx-auto lg:max-w-full lg:w-full p-6 lg:p-10 summit-banner-form">
                <div className="text-[28px] font-semibold">Watch on Demand for free</div>
                <div className="mb-4 mt-1 md:text-lg">Sign up to start watching</div>
                <div id={SUMMIT_ON_DEMAND_FORM_TARGET}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SummitBanner;

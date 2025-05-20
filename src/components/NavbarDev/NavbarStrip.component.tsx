import { CollateLogo } from '../Icons/CollateLogo';
import ParamLink from "../ParamLink";

const NavbarStrip = () => {
  return (
    <div className="bg-[#0B3547] mx-auto text-[#D3ECF7] py-[12px] px-8 md:text-center lg:py-[8px] lg:px-12">
      <div className="custom-container flex justify-center items-center gap-3">
        <CollateLogo />
        <div className="max-w-[80%] lg:flex lg:gap-3 lg:items-center">
          <span className="font-normal my-2 text-[14px] tracking-[-0.02em] sm:my-0 md:text-[16px] lg:leading-[32px]">
            Try OpenMetadata as a managed service for free, from Collate.
          </span>
          <span className="lg:relative">
            <ParamLink 
              name="Get Started" 
              link="https://cloud.getcollate.io/signup" 
              target="_blank" 
              className="nav-strip-btn lg:leading-[31.2px] pl-2 text-[14px] md:text-[16px] lg:py-2 lg:px-4 hover:text-[#D3ECF7]"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavbarStrip;

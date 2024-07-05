import Link from "next/link";
import { CollateLogo } from '../Icons/CollateLogo';

const NavbarStrip = () => {
  return (
    <div className="bg-[#0B3547] mx-auto text-[#D3ECF7] py-2 px-5 md:text-center lg:px-12">
      <div className="custom-container flex justify-center items-center gap-3">
        <CollateLogo />
        <div className="max-w-[80%] lg:flex lg:gap-3 lg:items-center">
          <span className="font-normal my-2 text-[14px] tracking-[-0.02em] sm:my-0 md:text-[16px] lg:leading-[32px]">
            Try OpenMetadata as a managed service for free, from Collate.
          </span>
          <span className="lg:relative">
            <Link
              className="border-none lg:leading-[31.2px] underline decoration-1 underline-offset-[2px] pl-2 text-[14px] md:text-[16px] lg:py-2 lg:px-4 lg:no-underline lg:border lg:border-[#D3ECF7] hover:text-[#D3ECF7]"
              href="https://cloud.getcollate.io/signup"
              target="_blank"
            >
              Get Started
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavbarStrip;

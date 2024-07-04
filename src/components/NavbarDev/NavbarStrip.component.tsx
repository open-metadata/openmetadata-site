import Image from "next/image";
import Link from "next/link";

const NavbarStrip = () => {
  return (
    <div className="bg-[#0B3547] mx-auto text-[#D3ECF7] py-3 px-[32px] sm:px-[24px] md:py-2 lg:text-center lg:px-12">
      <div className="custom-container flex justify-center items-center gap-3">
        <Image
          className="w-9 h-9 sm:w-6 sm:h-6 md:inline"
          height={24}
          width={24}
          src="/assets/collate.svg"
          alt="collate-logo-svg"
          loading="eager"
        />
        <div className="max-w-[80%] lg:flex lg:gap-3 lg:items-center">
          <span className="font-normal my-2 text-[15px] sm:my-0 lg:leading-[32px]">
            Try OpenMetadata as a managed service for free, from Collate.
          </span>
          <span className="lg:relative">
            <Link
              className="border-none lg:leading-[31.2px] underline decoration-1 underline-offset-[2px] pl-2 text-[15px] lg:py-2 lg:px-4 lg:no-underline lg:border lg:border-[#D3ECF7] hover:text-[#D3ECF7]"
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

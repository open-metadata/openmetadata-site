import Image from "next/image";
import Link from "next/link";

const NavbarStrip = () => {
  return (
    <div className="bg-[#0B3547] text-center mx-auto text-[#D3ECF7] py-2 lg:px-12">
      <div className="custom-container flex justify-center items-center sm:gap-2 md:gap-3">
        <Image
          className="md:inline"
          height={24}
          width={24}
          src="/assets/collate.svg"
          alt="collate-logo-svg"
          loading="eager"
        />
        <div className="flex gap-3 items-center">
          <span className="font-normal my-2 text-[16px] sm:my-0 lg:leading-[32px]">
            Try OpenMetadata as a managed service for free, from Collate.
          </span>
          <span className="lg:relative">
            <Link
              className="text-[16px] border-none px-4 py-2 leading-[31.2px] underline decoration-1 underline-offset-[2px] lg:no-underline lg:border lg:border-[#D3ECF7] hover:text-[#D3ECF7]"
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

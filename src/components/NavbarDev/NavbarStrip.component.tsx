import Image from "next/image";
import Link from "next/link";

const NavbarStrip = () => {
  return (
    <div className="bg-[#0B3547] text-center mx-auto text-[#D3ECF7] py-3 text-[16px] max-lg:px-4 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        <Image
          className="mx-auto md:inline"
          height={45}
          width={45}
          src="/assets/collate.svg"
          alt="collate-logo-svg"
          loading="lazy"
        />
        <span className="mx-2 lg:text-[24px] font-normal leading-[32px]">
          Try OpenMetadata as a managed service for free, from Collate.
        </span>
        <span className="lg:relative lg:top-[6px]">
          <Link
            className="border-2 border-[#D3ECF7] px-3 py-2 lg:text-[32px] leading-[25px] hover:text-[#D3ECF7]"
            href="https://getcollate.io"
            target="_blank"
          >
            Get Started
          </Link>
        </span>
      </div>
    </div>
  );
};

export default NavbarStrip;

import Image from 'next/image';
import Link from 'next/link';

const NavbarStrip = () => {
  return (
    <div className="bg-[#0B3547] text-center mx-auto text-[#D3ECF7] max-lg:px-4 lg:px-12">
      <div className="custom-container flex justify-center items-center sm:gap-2 flex-col md:flex-row md:gap-5">
        <Image
          className="md:inline"
          height={24}
          width={24}
          src="/assets/collate.svg"
          alt="collate-logo-svg"
          loading="eager"
        />
        <span className="font-normal my-2 text-[16px] sm:my-0 lg:leading-[32px]">
          Try OpenMetadata as a managed service for free, from Collate.
        </span>
        <span className="lg:relative">
          <Link
            className="border-1 border-[#D3ECF7] text-[16px] px-4 py-2 leading-[31.2px] hover:text-[#D3ECF7]"
            href="https://cloud.getcollate.io/signup"
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

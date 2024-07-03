import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NavbarDev = ({ onClick }: { onClick: () => void }) => {
  const [open, setOpen] = useState(false);
  const [scrolledNav, setScrolledNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 25) {
      setScrolledNav(true);
    } else {
      setScrolledNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <nav
      className={`relative top-0 z-50 w-full duration-400 ${
        scrolledNav ? "bg-white shadow-custom" : "bg-white"
      }`}
    >
      <div className="mx-auto custom-container flex justify-between items-center lg:px-5 lg:gap-3 max-lg:contents xl:px-7">
        <div className="flex items-center justify-between px-[44px] py-3 lg:px-0 lg:py-0">
          <Link className="text-primary" href="/">
            <Image
              className="w-[115px] h-[50px] md:w-[144px] md:h-[56px]"
              height={56}
              width={145}
              src="/assets/omd-logo.svg"
              alt="omd-logo-svg"
              loading="eager"
            />
          </Link>

          <div
            className="lg:hidden cursor-pointer"
            onClick={() => setOpen((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 28 20"
              width="28"
              height="20"
            >
              <path
                fill="#323232"
                d="M0 16H24V13.3333H0V16ZM0 9.33333H24V6.66667H0V9.33333ZM0 0V2.66667H24V0H0Z"
              />
            </svg>
          </div>
        </div>

        <div
          className={`${
            open ? "block" : "hidden"
          } h-auto lg:flex bg-white items-center relative top-full text-center lg:relative lg:top-auto lg:left-auto lg:right-auto max-lg:pb-4`}
        >
          <ul className="font-semibold ml-auto flex flex-col gap-4 items-center text-[#272F4D] sm:text-lg lg:flex-row lg:mr-10 lg:text-[16px]">
            <li>
              <Link
                href="https://docs.open-metadata.org/v1.3.x/how-to-guides"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
              </Link>
            </li>
            <li>
              <Link
                href="https://docs.open-metadata.org/v1.3.x"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </Link>
            </li>
            <li>
              <Link href="https://open-metadata.org/community">Community</Link>
            </li>
            <li>
              <Link
                href="https://blog.open-metadata.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link href="http://getcollate.io/contact" target="_blank">
                Contact Us
              </Link>
            </li>
            <li className="mb-4 lg:mb-0">
              <Link
                href="https://github.com/open-metadata/OpenMetadata"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  width={72}
                  height={40}
                  className="object-cover"
                  src="/assets/github.svg"
                  alt="github-icon"
                  loading="eager"
                />
              </Link>
            </li>
          </ul>
          <button
            onClick={() => {
              onClick();
              setOpen(false);
            }}
            className="rounded-sm bg-[#7147E8] font-semibold px-5 py-[10px] text-white hover:no-underline hover:bg-[#6642c8] xl:px-7"
          >
            Try OpenMetadata
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDev;

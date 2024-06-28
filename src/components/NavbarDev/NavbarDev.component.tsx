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
      <div className="mx-auto custom-container flex justify-between items-center lg:py-2 lg:px-5 lg:gap-3 max-lg:contents xl:px-7">
        <div className="px-5 py-2 flex items-center justify-between lg:pl-4">
          <Link className="text-primary" href="/">
            <Image
              height={56}
              width={145}
              src="/assets/omd-logo.svg"
              alt="omd-logo-svg"
              loading="eager"
            />
          </Link>

          <div
            className="p-3 lg:hidden cursor-pointer"
            onClick={() => setOpen((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
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
            onClick={onClick}
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

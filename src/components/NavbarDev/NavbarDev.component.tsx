import { useEffect, useState } from "react";
import { OmdLogo } from "../Icons/OmdLogo";
import { GitHubLogo } from "../Icons/GitHubLogo";
import ParamLink from "../ParamLink";

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
      <div className="mx-auto max-w-[1550px] flex justify-between items-center lg:px-5 lg:gap-3 max-lg:contents xl:px-[24px] 2xl:px-0">
        <div className="flex items-center justify-between px-5 py-[12px] lg:px-0 lg:py-[10px]">
          <ParamLink className="text-primary" href="/">
            <OmdLogo />
          </ParamLink>

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
          } h-auto lg:flex bg-white items-center relative top-full text-center lg:relative lg:top-auto lg:left-auto lg:mr-[8px] lg:right-auto max-lg:pb-4`}
        >
          <ul className="font-medium ml-auto flex flex-col gap-[22px] items-center text-[#272F4D] sm:text-lg lg:flex-row lg:mr-7 lg:text-[15px]">
            <li>
              <ParamLink
                href="https://docs.open-metadata.org/latest/quick-start"
                target="_blank"
                name="Get Started"
              />
            </li>
            <li>
              <ParamLink
                href="https://docs.open-metadata.org"
                target="_blank"
                name="Documentation"
              />
            </li>
            <li>
              <ParamLink href="/community" name="Community" />
            </li>
            <li>
              <ParamLink href="/mcp" name="MCP" />
            </li>
            <li>
              <ParamLink
                href="https://blog.open-metadata.org/"
                target="_blank"
                name="Blog"
              />
            </li>
            <li>
              <ParamLink href="/case-studies" name="Case Studies" />
            </li>
            <li>
              <ParamLink href="/product-updates" name="Product Updates" />
            </li>
            <li className="mb-4 lg:mb-0">
              <ParamLink
                href="https://github.com/open-metadata/OpenMetadata"
                target="_blank"
              >
                <GitHubLogo />
              </ParamLink>
            </li>
          </ul>
          <button
            onClick={() => {
              onClick();
              setOpen(false);
            }}
            className="bg-[#7147E8] font-medium px-5 text-[14px] py-[10px] text-white hover:no-underline hover:bg-[#6642c8] xl:px-7"
          >
            Try OpenMetadata
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDev;

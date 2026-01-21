import { useEffect, useState } from "react";
import { OmdLogo } from "../Icons/OmdLogo";
import { GitHubLogo } from "../Icons/GitHubLogo";
import ParamLink from "../ParamLink";

const NavbarDev = ({ onClick }: { onClick: () => void }) => {
  const [open, setOpen] = useState(false);
  const [scrolledNav, setScrolledNav] = useState(false);
  const [communityDropdownOpen, setCommunityDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 25) {
      setScrolledNav(true);
    } else {
      setScrolledNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.relative.group')) {
        setCommunityDropdownOpen(false);
        setResourcesDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener("scroll", changeBackground);
      document.removeEventListener('click', handleClickOutside);
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
            <li className="relative group">
              <div 
                className="flex items-center gap-1 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setCommunityDropdownOpen(!communityDropdownOpen);
                }}
              >
                <span className="hover:text-primary">Community</span>
                <svg
                  className={`w-4 h-4 transition-transform ${communityDropdownOpen ? 'rotate-180' : ''} group-hover:rotate-180`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <ul className={`absolute left-0 mt-2 py-2 top-5 w-48 bg-white border border-gray-200 rounded-md shadow-lg transition-all duration-200 z-50 ${
                communityDropdownOpen ? 'block' : 'hidden'
              } lg:hidden lg:opacity-0 lg:invisible lg:group-hover:block lg:group-hover:opacity-100 lg:group-hover:visible`}>
                <li>
                  <ParamLink 
                    href="/community" 
                    name="Slack" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-t-md"
                  />
                </li>
                <li>
                  <ParamLink 
                    href="/events" 
                    name="Events" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  />
                </li>
                <li>
                  <ParamLink 
                    href="https://www.youtube.com/@OpenMetadataChannel" 
                    target="_blank"
                    name="YouTube" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-b-md"
                  />
                </li>
              </ul>
            </li>
            <li>
              <ParamLink href="/mcp" name="MCP" />
            </li>
            <li>
              <ParamLink href="/datacontracts" name="Data Contracts" />
            </li>
            <li className="relative group">
              <div 
                className="flex items-center gap-1 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setResourcesDropdownOpen(!resourcesDropdownOpen);
                }}
              >
                <span className="hover:text-primary">Resources</span>
                <svg
                  className={`w-4 h-4 transition-transform ${resourcesDropdownOpen ? 'rotate-180' : ''} group-hover:rotate-180`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <ul className={`absolute left-0 mt-2 py-2 top-5 w-48 bg-white border border-gray-200 rounded-md shadow-lg transition-all duration-200 z-50 ${
                resourcesDropdownOpen ? 'block' : 'hidden'
              } lg:hidden lg:opacity-0 lg:invisible lg:group-hover:block lg:group-hover:opacity-100 lg:group-hover:visible`}>
                <li>
                  <ParamLink 
                    href="https://docs.open-metadata.org"
                    target="_blank"
                    name="Documentation" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-t-md"
                  />
                </li>
                <li>
                  <ParamLink 
                    href="/case-studies"
                    name="Case Studies" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  />
                </li>
                <li>
                  <ParamLink 
                    href="https://blog.open-metadata.org/" 
                    target="_blank"
                    name="Blog" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-b-md"
                  />
                </li>
                <li>
                  <ParamLink 
                    href="/product-updates"
                    name="Product Updates" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  />
                </li>
              </ul>
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

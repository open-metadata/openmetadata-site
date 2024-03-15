import React, {useEffect, useState} from "react";
import Image from "next/image";

function Navbar() {
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
      className={`relative top-0 z-50 w-full duration-300 lg:pr-10 ${
        scrolledNav ? "bg-white shadow-custom" : "bg-background"
      }`}
    >
      <div className=" mx-auto flex justify-between items-center lg:py-4 lg:px-32 max-lg:contents lg:gap-3">
        <div className="flex items-center lg:pl-12 max-lg:justify-around">
          <a className="navbar-brand text-primary" href="/">
            <Image
              height={56}
              width={140}
              src="/assets/omd-logo.svg"
              alt="omd-logo-svg"
              loading="lazy"
            />
          </a>

          <div
            className="p-4 hamburger lg:hidden cursor-pointer"
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
          } h-auto lg:flex bg-white lg:items-center relative top-full left-0 right-0 lg:relative lg:top-auto lg:left-auto lg:right-auto max-lg:pb-4`}
        >
          <ul className="navbar-nav ml-auto mr-4 lg:mr-10 lg:flex-row">
            <li className="nav-item lg:mr-7 max-lg:pl-10">
              <a className="nav-link" href="community">
                Community
              </a>
            </li>
            <li className="nav-item lg:mr-5 max-lg:pl-10">
              <a
                className="nav-link"
                href="https://sandbox.open-metadata.org/signin"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sandbox
              </a>
            </li>
            <li className="nav-item mr-7 max-lg:pl-10">
              <a
                className="nav-link"
                href="https://docs.open-metadata.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </a>
            </li>
            <li className="nav-item mr-7 max-lg:pl-10">
              <a
                className="nav-link"
                href="http://blog.open-metadata.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </li>
            <li className="nav-item max-lg:pl-10">
              <a
                className="nav-link"
                href="https://github.com/open-metadata/OpenMetadata"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
          <a
            aria-label="Visit Collate website"
            className="btn fw-500 btn-primary rounded-full h-[42px] max-lg:ml-10 lg:mx-4"
            href="https://getcollate.io"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#fff"
              className="w-5 h-5"
            >
              <path d="M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6.072 6.072 0 0 1-.02-.496Z" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

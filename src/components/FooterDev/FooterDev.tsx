import Image from "next/image";
import Link from "next/link";
import React from "react";
import { OmdFooterLogo } from "../Icons/OmdFooterLogo";

const FooterDev = () => {
  return (
    <footer className="pt-24 pb-12 mt-auto w-full bg-[#333333] text-white">
      <div className="custom-container sm:grid sm:gap-5 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 px-8 md:px-20 xl:px-28">
        <div className="hidden sm:block lg:col-span-2 xl:col-span-3">
          <div className="flex flex-col gap-5">
            <div>
              <OmdFooterLogo />
            </div>
            <div className="font-normal tracking-[-0.005em] text-[14px] md:max-w-[80%] xl:max-w-[50%]">
              Unlock the value of data assets with an end-to-end metadata
              management solution that includes data discovery, governance, data
              quality, observability, and people collaboration.
            </div>
            <div className="text-[12px] tracking-[-0.02em] font-normal mb-5">
              Copyright OpenMetadata {new Date().getFullYear()}
            </div>
          </div>
        </div>

        <div className="mb-5">
          <div className="text-uppercase text-[16px] font-medium tracking-[4px] mb-3">
            Docs
          </div>
          <ul className="tracking-[-0.02em] text-[14px]">
            <li className="mb-2">
              <Link
                href="https://docs.open-metadata.org/"
                target="_blank"
                className="hover:text-gray-500"
              >
                What is OpenMetadata?
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="https://docs.open-metadata.org/main-concepts/metadata-standard/apis"
                target="_blank"
                className="hover:text-gray-500"
              >
                APIs
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="https://docs.open-metadata.org/deployment"
                target="_blank"
                className="hover:text-gray-500"
              >
                Install
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="https://docs.open-metadata.org/connectors/ingestion"
                target="_blank"
                className="hover:text-gray-500"
              >
                Ingestion
              </Link>
            </li>
            <li>
              <Link
                href="https://docs.open-metadata.org/roadmap"
                target="_blank"
                className="hover:text-gray-500"
              >
                Roadmap
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-uppercase text-[16px] font-medium tracking-[4px] mb-4">
            Community
          </div>
          <ul className="text-[14px] tracking-[-0.02em]">
            <li className="mb-1">
              <Link
                className="inline-flex items-center gap-x-1 hover:text-gray-500"
                href="https://slack.open-metadata.org/"
                target="_blank"
              >
                <svg
                  width="14"
                  height="12"
                  viewBox="0 0 81 81"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M58.9759 72.5685C58.9759 67.9285 55.2125 64.1652 50.5725 64.1652H42.1692V72.5752C42.1725 77.2118 45.9325 80.9718 50.5725 80.9718C55.2125 80.9718 58.9759 77.2085 58.9759 72.5685Z"
                    fill="currentColor"
                  />
                  <path
                    d="M71.6325 43.1451H50.5725C45.9291 43.1451 42.1625 46.9118 42.1625 51.5551C42.1625 56.1985 45.9291 59.9651 50.5725 59.9651H71.6325C76.2758 59.9651 80.0425 56.1985 80.0425 51.5551C80.0425 46.9118 76.2758 43.1451 71.6325 43.1451V43.1451Z"
                    fill="currentColor"
                  />
                  <path
                    d="M29.5125 43.1519C24.8725 43.1519 21.1091 46.9152 21.1091 51.5552V72.5752C21.1091 77.2152 24.8725 80.9785 29.5125 80.9785C34.1525 80.9785 37.9158 77.2152 37.9158 72.5752V51.5552C37.9125 46.9152 34.1491 43.1519 29.5125 43.1519Z"
                    fill="currentColor"
                  />
                  <path
                    d="M0.0991211 51.5551C0.0991211 56.1985 3.86579 59.9651 8.50912 59.9651C13.1525 59.9651 16.9191 56.1985 16.9191 51.5551V43.1451H8.51579C8.51245 43.1451 8.51245 43.1451 8.50912 43.1451C3.86579 43.1451 0.0991211 46.9118 0.0991211 51.5551V51.5551Z"
                    fill="currentColor"
                  />
                  <path
                    d="M29.5225 0.978516C29.5192 0.978516 29.5159 0.978516 29.5125 0.978516C24.8692 0.978516 21.1025 4.74518 21.1025 9.38852C21.1025 14.0318 24.8692 17.7985 29.5125 17.7985H37.9159V9.38852C37.9159 9.38518 37.9159 9.37852 37.9159 9.37185C37.9125 4.73518 34.1559 0.978516 29.5225 0.978516V0.978516Z"
                    fill="currentColor"
                  />
                  <path
                    d="M8.45248 38.8819H29.5125C34.1558 38.8819 37.9225 35.1152 37.9225 30.4719C37.9225 25.8286 34.1558 22.0619 29.5125 22.0619H8.45248C3.80915 22.0619 0.0424805 25.8286 0.0424805 30.4719C0.0424805 35.1152 3.80915 38.8819 8.45248 38.8819V38.8819Z"
                    fill="currentColor"
                  />
                  <path
                    d="M71.5591 22.0585C66.9224 22.0585 63.1658 25.8151 63.1658 30.4518V30.4685V38.8785H71.5691C76.2124 38.8785 79.9791 35.1118 79.9791 30.4685C79.9791 25.8251 76.2124 22.0585 71.5691 22.0585C71.5658 22.0585 71.5624 22.0585 71.5591 22.0585V22.0585Z"
                    fill="currentColor"
                  />
                  <path
                    d="M42.1725 9.38856V30.4719C42.1725 35.1119 45.9358 38.8752 50.5758 38.8752C55.2158 38.8752 58.9792 35.1119 58.9792 30.4719V9.38856C58.9792 4.74856 55.2158 0.985229 50.5758 0.985229C45.9358 0.985229 42.1725 4.74856 42.1725 9.38856V9.38856Z"
                    fill="currentColor"
                  />
                </svg>
                Slack
              </Link>
            </li>
            <li className="mb-1">
              <Link
                className="inline-flex items-center gap-x-1 hover:text-gray-500"
                href="https://github.com/open-metadata/openmetadata"
                target="_blank"
              >
                <svg
                  width="14"
                  height="12"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.8547 64.3229C28.2985 64.4266 28.0555 64.6876 28.1252 65.1039C28.1945 65.5204 28.507 65.6596 29.0625 65.5204C29.6187 65.3817 29.8615 65.1382 29.7916 64.7912C29.7227 64.4096 29.4102 64.2531 28.8547 64.3229Z"
                    fill="currentColor"
                  />
                  <path
                    d="M25.8858 64.74C25.3301 64.74 25.0525 64.9299 25.0525 65.3126C25.0525 65.7639 25.3478 65.9543 25.9378 65.885C26.4935 65.885 26.7715 65.694 26.7715 65.3126C26.7715 64.8618 26.4761 64.6701 25.8858 64.74Z"
                    fill="currentColor"
                  />
                  <path
                    d="M21.8234 64.5825C21.6847 64.9647 21.9106 65.2245 22.5003 65.364C23.0212 65.5715 23.3512 65.4677 23.4898 65.0514C23.5942 64.6699 23.3683 64.3928 22.8128 64.218C22.2918 64.0796 21.9622 64.1994 21.8234 64.5825Z"
                    fill="currentColor"
                  />
                  <path
                    d="M75.5988 4.40064C72.6647 1.46706 69.1326 0 64.9997 0H14.9999C10.8683 0 7.33495 1.46706 4.40064 4.40064C1.46706 7.33477 0 10.8682 0 14.9999V65.0005C0 69.1324 1.46706 72.6654 4.40064 75.599C7.33477 78.5331 10.8683 80.0002 14.9999 80.0002H26.6665C27.4298 80.0002 28.0032 79.9739 28.385 79.9228C28.7666 79.8703 29.1483 79.6445 29.5304 79.2448C29.9128 78.8458 30.1033 78.264 30.1033 77.5004C30.1033 77.3968 30.0941 76.215 30.077 73.9583C30.0593 71.7008 30.0507 69.9128 30.0507 68.5931L28.8527 68.8017C28.0889 68.9403 27.1253 69.0014 25.962 68.9839C24.7992 68.9664 23.5923 68.8453 22.3425 68.6194C21.092 68.3934 19.9292 67.8727 18.8527 67.0575C17.7768 66.2408 17.013 65.1734 16.5615 63.8543L16.0405 62.6556C15.6933 61.8578 15.1468 60.972 14.4001 60.0006C13.6534 59.0279 12.8984 58.368 12.1346 58.0209L11.7699 57.7604C11.5271 57.5869 11.3014 57.3776 11.0929 57.1348C10.8848 56.8913 10.7286 56.6479 10.6244 56.4057C10.5203 56.1621 10.6067 55.9624 10.8848 55.8057C11.1628 55.6497 11.6657 55.5724 12.3952 55.5724L13.4365 55.7283C14.1312 55.867 14.9901 56.2833 16.0149 56.9781C17.0391 57.6724 17.8809 58.5751 18.5408 59.6859C19.3398 61.1099 20.3025 62.1942 21.4315 62.9409C22.5596 63.6883 23.697 64.0615 24.8427 64.0615C25.9883 64.0615 26.9778 63.9747 27.8114 63.8017C28.6442 63.6277 29.4255 63.3667 30.1551 63.0195C30.4676 60.6934 31.3184 58.9042 32.7068 57.6544C30.7279 57.4459 28.9485 57.1337 27.3682 56.7167C25.7887 56.2997 24.1566 55.6231 22.4728 54.6852C20.7883 53.7476 19.3909 52.5852 18.2797 51.1954C17.1688 49.8057 16.257 47.9829 15.5457 45.7267C14.8341 43.4692 14.4782 40.8647 14.4782 37.9136C14.4782 33.7125 15.8502 30.1355 18.5931 27.1845C17.3081 24.0248 17.4294 20.4836 18.9574 16.5596C19.9644 16.247 21.4578 16.4816 23.4367 17.2629C25.416 18.0448 26.8652 18.7134 27.7857 19.2681C28.7062 19.823 29.4438 20.2922 29.9995 20.6746C33.2293 19.7718 36.5624 19.3205 39.9996 19.3205C43.4367 19.3205 46.7703 19.7718 50.0004 20.6746L51.9795 19.4246C53.3342 18.5909 54.9311 17.8271 56.7716 17.133C58.6119 16.4387 60.0179 16.2475 60.9906 16.5602C62.5525 20.4842 62.6922 24.0254 61.4063 27.1848C64.1493 30.1363 65.5216 33.7131 65.5216 37.9142C65.5216 40.8658 65.1657 43.479 64.4541 45.7528C63.743 48.0271 62.8234 49.8506 61.694 51.2221C60.5659 52.5937 59.1594 53.7474 57.4756 54.6856C55.7914 55.6227 54.1595 56.3006 52.5793 56.7164C50.9993 57.1334 49.2201 57.4468 47.241 57.6553C49.0454 59.2172 49.948 61.6818 49.948 65.0504V77.4988C49.948 78.0893 50.0341 78.5663 50.2078 78.931C50.3825 79.2955 50.6598 79.5465 51.0416 79.6864C51.4251 79.8251 51.762 79.9117 52.0579 79.9462C52.3538 79.981 52.7783 79.9985 53.334 79.9985H65.0006C69.1322 79.9985 72.6658 78.5315 75.5986 75.5974C78.5328 72.6632 79.9998 69.1297 79.9998 64.9981V14.9999C79.9995 10.8682 78.5324 7.33422 75.5988 4.40064Z"
                    fill="currentColor"
                  />
                  <path
                    d="M15.8333 58.2291C15.5905 58.4021 15.6251 58.6799 15.9376 59.0619C16.2853 59.4089 16.5628 59.4612 16.7713 59.2179C17.0141 59.045 16.9795 58.7671 16.6664 58.3844C16.3194 58.0724 16.0418 58.0201 15.8333 58.2291Z"
                    fill="currentColor"
                  />
                  <path
                    d="M14.1149 56.927C14.011 57.1706 14.1325 57.3791 14.4796 57.552C14.7571 57.7263 14.9835 57.692 15.1566 57.4484C15.2606 57.2049 15.1391 56.9964 14.7919 56.8222C14.4448 56.7178 14.2191 56.7528 14.1149 56.927Z"
                    fill="currentColor"
                  />
                  <path
                    d="M17.4483 60.2607C17.1354 60.4337 17.1354 60.7471 17.4483 61.1978C17.7608 61.6499 18.0554 61.771 18.3336 61.5623C18.6463 61.319 18.6463 60.9892 18.3336 60.5723C18.0561 60.1221 17.7608 60.0166 17.4483 60.2607Z"
                    fill="currentColor"
                  />
                  <path
                    d="M19.2716 62.6035C18.9589 62.8819 19.0279 63.2105 19.48 63.5937C19.8961 64.0095 20.2434 64.0618 20.5212 63.7486C20.7993 63.4715 20.7298 63.1419 20.3129 62.7599C19.8968 62.344 19.5495 62.2914 19.2716 62.6035Z"
                    fill="currentColor"
                  />
                </svg>
                GitHub
              </Link>
            </li>
            <li className="mb-1">
              <Link
                className="inline-flex items-center gap-x-1 hover:text-gray-500"
                href="https://twitter.com/open_metadata"
                target="_blank"
              >
                <svg
                  className="svg-inline--fa fa-twitter fa-w-16"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="twitter"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                  ></path>
                </svg>{" "}
                Twitter
              </Link>
            </li>
            <li className="mb-1">
              <Link
                className="inline-flex items-center gap-x-1 hover:text-gray-500"
                href="https://www.meetup.com/openmetadata-meetup-group/"
                target="_blank"
              >
                <svg
                  className="svg-inline--fa fa-meetup fa-w-16"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="meetup"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M99 414.3c1.1 5.7-2.3 11.1-8 12.3-5.4 1.1-10.9-2.3-12-8-1.1-5.4 2.3-11.1 7.7-12.3 5.4-1.2 11.1 2.3 12.3 8zm143.1 71.4c-6.3 4.6-8 13.4-3.7 20 4.6 6.6 13.4 8.3 20 3.7 6.3-4.6 8-13.4 3.4-20-4.2-6.5-13.1-8.3-19.7-3.7zm-86-462.3c6.3-1.4 10.3-7.7 8.9-14-1.1-6.6-7.4-10.6-13.7-9.1-6.3 1.4-10.3 7.7-9.1 14 1.4 6.6 7.6 10.6 13.9 9.1zM34.4 226.3c-10-6.9-23.7-4.3-30.6 6-6.9 10-4.3 24 5.7 30.9 10 7.1 23.7 4.6 30.6-5.7 6.9-10.4 4.3-24.1-5.7-31.2zm272-170.9c10.6-6.3 13.7-20 7.7-30.3-6.3-10.6-19.7-14-30-7.7s-13.7 20-7.4 30.6c6 10.3 19.4 13.7 29.7 7.4zm-191.1 58c7.7-5.4 9.4-16 4.3-23.7s-15.7-9.4-23.1-4.3c-7.7 5.4-9.4 16-4.3 23.7 5.1 7.8 15.6 9.5 23.1 4.3zm372.3 156c-7.4 1.7-12.3 9.1-10.6 16.9 1.4 7.4 8.9 12.3 16.3 10.6 7.4-1.4 12.3-8.9 10.6-16.6-1.5-7.4-8.9-12.3-16.3-10.9zm39.7-56.8c-1.1-5.7-6.6-9.1-12-8-5.7 1.1-9.1 6.9-8 12.6 1.1 5.4 6.6 9.1 12.3 8 5.4-1.5 9.1-6.9 7.7-12.6zM447 138.9c-8.6 6-10.6 17.7-4.9 26.3 5.7 8.6 17.4 10.6 26 4.9 8.3-6 10.3-17.7 4.6-26.3-5.7-8.7-17.4-10.9-25.7-4.9zm-6.3 139.4c26.3 43.1 15.1 100-26.3 129.1-17.4 12.3-37.1 17.7-56.9 17.1-12 47.1-69.4 64.6-105.1 32.6-1.1.9-2.6 1.7-3.7 2.9-39.1 27.1-92.3 17.4-119.4-22.3-9.7-14.3-14.6-30.6-15.1-46.9-65.4-10.9-90-94-41.1-139.7-28.3-46.9.6-107.4 53.4-114.9C151.6 70 234.1 38.6 290.1 82c67.4-22.3 136.3 29.4 130.9 101.1 41.1 12.6 52.8 66.9 19.7 95.2zm-70 74.3c-3.1-20.6-40.9-4.6-43.1-27.1-3.1-32 43.7-101.1 40-128-3.4-24-19.4-29.1-33.4-29.4-13.4-.3-16.9 2-21.4 4.6-2.9 1.7-6.6 4.9-11.7-.3-6.3-6-11.1-11.7-19.4-12.9-12.3-2-17.7 2-26.6 9.7-3.4 2.9-12 12.9-20 9.1-3.4-1.7-15.4-7.7-24-11.4-16.3-7.1-40 4.6-48.6 20-12.9 22.9-38 113.1-41.7 125.1-8.6 26.6 10.9 48.6 36.9 47.1 11.1-.6 18.3-4.6 25.4-17.4 4-7.4 41.7-107.7 44.6-112.6 2-3.4 8.9-8 14.6-5.1 5.7 3.1 6.9 9.4 6 15.1-1.1 9.7-28 70.9-28.9 77.7-3.4 22.9 26.9 26.6 38.6 4 3.7-7.1 45.7-92.6 49.4-98.3 4.3-6.3 7.4-8.3 11.7-8 3.1 0 8.3.9 7.1 10.9-1.4 9.4-35.1 72.3-38.9 87.7-4.6 20.6 6.6 41.4 24.9 50.6 11.4 5.7 62.5 15.7 58.5-11.1zm5.7 92.3c-10.3 7.4-12.9 22-5.7 32.6 7.1 10.6 21.4 13.1 32 6 10.6-7.4 13.1-22 6-32.6-7.4-10.6-21.7-13.5-32.3-6z"
                  ></path>
                </svg>{" "}
                Meetup
              </Link>
            </li>
            <li>
              <Link
                className="inline-flex items-center gap-x-1 hover:text-gray-500"
                href="https://www.youtube.com/@OpenMetadataChannel/videos"
                target="_blank"
              >
                <svg
                  className="svg-inline--fa fa-youtube fa-w-16"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="youtube"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"
                  />
                </svg>{" "}
                YouTube
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5 mt-5 sm:hidden">
          <div>
            <OmdFooterLogo />
          </div>
          <div className="font-normal tracking-[-0.02em] text-[14px] md:max-w-[80%] xl:max-w-[40%]">
            Open Standard for Metadata with a centralized Metadata Store.
            Discover, collaborate and get your Data Right.
          </div>
          <div className="text-[12px] tracking-[-0.02em] font-normal mb-5">
            Copyright OpenMetadata {new Date().getFullYear()}
          </div>
        </div>
        <div className="mt-2 lg:ml-5 sm:mt-0 sm:row-start-1 sm:col-start-2 lg:col-start-auto lg:row-start-auto">
          <div className="text-uppercase text-[8px] text-nowrap text-gray-400 font-medium tracking-[3px] mb-2">
            Site Hosted By
          </div>
          <Image
            alt="netlify"
            width={100}
            height={30}
            src="/assets/netlify.webp"
            priority
          />
        </div>
      </div>
    </footer>
  );
};

export default FooterDev;

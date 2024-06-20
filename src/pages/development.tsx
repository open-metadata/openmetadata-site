import NavbarDev from "@/components/NavbarDev/NavbarDev.component";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Development = () => {
  return (
    <>
      <Head>
        <link rel="preload" href="/assets/home-section.webp" as="image" />
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://open-metadata.org/" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="OpenMetadata is the #1 open source data catalog tool. Empower innovation and foster collaboration with the all-in-one platform for data discovery, lineage, data quality, observability, governance, and more."
        />
        <meta
          name="keywords"
          content="best open-source data catalog, #1 open source data catalog, enterprise data catalog, data governance solutions, centralized metadata platform, best data discovery tool, data collaboration platform, modern data catalog, data catalog data lineage, best metadata management tool"
        />
        <meta name="author" content="open-metadata" />

        {/* Open Graph tags start  */}
        <meta
          property="og:title"
          content="OpenMetadata: The Best Open Source Data Catalog Solution"
        />
        <meta
          property="og:description"
          content="OpenMetadata is the #1 open source data catalog tool. Empower innovation and foster collaboration with the all-in-one platform for data discovery, lineage, data quality, observability, governance, and more."
        />
        <meta
          property="og:image"
          content="https://open-metadata.org/assets/favicon.png"
        />
        <meta property="og:type" content="metadata tool" />
        <meta property="og:url" content="https://open-metadata.org" />
        {/* Open Graph tags end  */}

        {/* Twitter Card start  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="https://open-metadata.org" />
        <meta
          name="twitter:title"
          content="OpenMetadata: The Best Open Source Data Catalog Solution"
        />
        <meta
          name="twitter:description"
          content="An end-to-end metadata management solution that includes data discovery, governance, data quality, observability, and people collaboration."
        />
        <meta
          name="twitter:image"
          content="https://open-metadata.org/assets/favicon.png"
        />
        <title>OpenMetadata: Join the #1 Open Source Data Community</title>
      </Head>
      <div>
        <div className="mx-auto max-w-[1440px] fixed top-0 right-0 left-0 z-[1030]">
          <NavbarDev />
          <div className="bg-[#0B3547] text-center mx-auto text-[#D3ECF7] py-2 text-[16px] max-lg:px-10 lg:px-12">
            <Image
              className="mx-auto md:inline"
              height={30}
              width={30}
              src="/assets/collate.svg"
              alt="collate-logo-svg"
              loading="lazy"
            />
            <span className="mx-2">
              Try OpenMetadata as a managed service for free, from Collate.
            </span>
            <span>
              <Link
                className="underline hover:no-underline hover:text-[#D3ECF7]"
                href="https://getcollate.io"
                target="_blank"
              >
                Get Started
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Development;

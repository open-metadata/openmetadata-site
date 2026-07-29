import "../styles/styles.css";
import "../styles/globals.css";
import "../styles/cve-style.css";
import "../styles/modal.css";
import type { AppProps } from "next/app";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import CookieModal from "@/components/CookieModal";
import Layout from "@/components/Layout/Layout";
import metropolis from "@/fonts/metropolis";
import { PAGE_METADATA } from "@/constants/pageMetadata";

config.autoAddCss = false;

const DEFAULT_TITLE = "OpenMetadata: #1 Open Source Context Layer";
const DEFAULT_DESCRIPTION =
  "OpenMetadata is the open-source AI context layer — powered by metadata, semantics, and memory that give people and AI a shared, rich understanding of your data. Built by the founders of Apache Hadoop, Apache Atlas, and Uber Databook. The unified platform for data cataloging, discovery, quality, observability, governance, lineage, collaboration & more.";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [storedCookie, setStoredCookie] = useState<string | null>(null);

  const handleButtonClick = (choice: string) => {
    localStorage.setItem("userCookie", choice);
    setStoredCookie(choice);
  };

  const pageMeta = PAGE_METADATA[router.pathname];
  const pageTitle = pageMeta?.title ?? DEFAULT_TITLE;
  const pageDescription = pageMeta?.description ?? DEFAULT_DESCRIPTION;

  const canonicalUrl = (pageProps.link ?? router.asPath).split("?")[0]
  const markdownUrl =
    !canonicalUrl || canonicalUrl === "/"
      ? "https://open-metadata.org/index.md"
      : `https://open-metadata.org${canonicalUrl.replace(/\/$/, "")}.md`

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userCookie = window.localStorage.getItem("userCookie");
      setStoredCookie(userCookie);
    }
  }, []);

  useEffect(() => {
    if (storedCookie === "Decline") {
      const scriptTags = document.querySelectorAll(
        'script[src*="googletagmanager"], script#gtag-init, script#tag-manager'
      );
      scriptTags.forEach((tag) => tag.remove());

      const iframes = document.querySelectorAll(
        'iframe[src*="googletagmanager"]'
      );
      iframes.forEach((iframe) => iframe.remove());
    }
  }, [storedCookie]);

  useEffect(() => {
    AOS.init({
      offset: 80,
      once: true,
    });
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link
          rel="canonical"
          href={`https://open-metadata.org${canonicalUrl}`}
        />
        {markdownUrl && (
          <link rel="alternate" type="text/markdown" href={markdownUrl} />
        )}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="open source data catalog, #1 open source data catalog, enterprise data catalog, AI data catalog, data governance, data lineage, data quality, data discovery, metadata management, metadata platform, data intelligence platform, knowledge graph, data observability, GraphRAG, AI-ready data, open metadata standard, semantic data catalog, open source context layer, AI context layer, semantic context graph, context layer for AI agents"
        />
        <meta name="author" content="open-metadata" />
        <meta name="publisher" content="Collate" />

        {/* Open Graph tags start  */}
        <meta
          property="og:title"
          content="OpenMetadata: #1 Open Source Context Layer"
        />
        <meta
          property="og:description"
          content="OpenMetadata is the open-source AI context layer — powered by metadata, semantics, and memory that give people and AI a shared, rich understanding of your data. Built by the founders of Apache Hadoop, Apache Atlas, and Uber Databook. The unified platform for data cataloging, discovery, quality, observability, governance, lineage, collaboration &amp; more."
        />
        <meta
          property="og:image"
          content="https://open-metadata.org/assets/favicon.png"
        />
        <meta property="og:type" content="metadata tool" />
        {/* Open Graph tags end */}

        {/* Twitter Card start */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="https://open-metadata.org" />
        <meta
          name="twitter:title"
          content="OpenMetadata: #1 Open Source Context Layer"
        />
        <meta
          name="twitter:description"
          content="OpenMetadata is the open-source AI context layer — powered by metadata, semantics, and memory that give people and AI a shared, rich understanding of your data. Built by the founders of Apache Hadoop, Apache Atlas, and Uber Databook. The unified platform for data cataloging, discovery, quality, observability, governance, lineage, collaboration &amp; more."
        />
        <meta
          name="twitter:image"
          content="https://open-metadata.org/assets/favicon.png"
        />
        {/* Twitter Card end */}

        <title>{pageTitle}</title>
      </Head>
      <style jsx global>{`
        :root {
          --font-metropolis: ${metropolis.style.fontFamily};
        }
      `}</style>
      {(!storedCookie || storedCookie === "Accept") && (
        <Script
          id="tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-554C968W');
        `,
          }}
        />
      )}
      <Layout>
        {!storedCookie && <CookieModal handleButtonClick={handleButtonClick} />}
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

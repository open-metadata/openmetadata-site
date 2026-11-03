import "../styles/styles.css";
import "../styles/globals.css";
import "../styles/modal.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import CookieModal from "@/components/CookieModal";
import Layout from "@/components/Layout/Layout";
import metropolis from "@/fonts/metropolis";
import { PAGE_METADATA } from "@/constants/pageMetadata";

const GTM_ID = "GTM-554C968W";
// GTM waits for the first interaction (or the fallback timer) so its tags stay off the initial load.
const GTM_TRIGGER_EVENTS = ["pointerdown", "keydown", "touchstart", "scroll", "wheel", "mousemove"];
const GTM_FALLBACK_DELAY_MS = 3000;
// Ad/campaign visits load GTM at once so click IDs are read before a client-side navigation drops them.
const CAMPAIGN_PARAM = /^(gclid|gbraid|wbraid|msclkid|fbclid|li_fat_id|rdt_cid|utm_.+)$/i;

const hasCampaignParams = () =>
  Array.from(new URLSearchParams(window.location.search).keys()).some((key) =>
    CAMPAIGN_PARAM.test(key)
  );

const loadGtm = () => {
  if (document.getElementById("tag-manager")) return;
  const w = window as any;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  const script = document.createElement("script");
  script.id = "tag-manager";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(script);
};

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

  const gtmAllowed = !storedCookie || storedCookie === "Accept";

  useEffect(() => {
    if (!gtmAllowed) return;
    if (hasCampaignParams()) {
      loadGtm();
      return;
    }

    let timer: ReturnType<typeof setTimeout>;
    const stop = () => {
      clearTimeout(timer);
      GTM_TRIGGER_EVENTS.forEach((e) => window.removeEventListener(e, trigger));
    };
    const trigger = () => {
      stop();
      loadGtm();
    };
    GTM_TRIGGER_EVENTS.forEach((e) =>
      window.addEventListener(e, trigger, { passive: true })
    );
    timer = setTimeout(trigger, GTM_FALLBACK_DELAY_MS);
    return stop;
  }, [gtmAllowed]);

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
      <Layout>
        {!storedCookie && <CookieModal handleButtonClick={handleButtonClick} />}
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

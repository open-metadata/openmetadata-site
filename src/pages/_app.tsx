import '../styles/styles.css';
import '../styles/globals.css';
import '../styles/cve-style.css';
import '../styles/modal.css';
import type { AppProps } from 'next/app';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '@fontsource/metropolis';
import '@fontsource/metropolis/400-italic.css';
import '@fontsource/metropolis/500.css';
import '@fontsource/metropolis/600.css';
import '@fontsource/metropolis/700.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import Script from 'next/script';
import Head from 'next/head';
import CookieModal from '@/components/CookieModal';

config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  const [storedCookie, setStoredCookie] = useState<string | null>(null);

  const handleButtonClick = (choice: string) => {
    localStorage.setItem("userCookie", choice);
    setStoredCookie(choice); 
  };

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
      {(!storedCookie || storedCookie === "Accept") && (
        <>
          {/* Google Tag Manager */}
      <Head>
      <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <link rel="canonical" href="https://www.getcollate.io/" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="OpenMetadata is the #1 open source data catalog tool with the all-in-one platform for data discovery, quality, governance, collaboration &amp; more. Join our community to stay updated."
        />
        <meta
          name="keywords"
          content="best open-source data catalog community, #1 open source data catalog, enterprise data catalog, data governance solutions, centralized metadata platform, best data discovery tool, data collaboration platform, modern data catalog, data catalog data lineage, best metadata management tool"
        />
        <meta name="author" content="open-metadata" />
        <meta name="publisher" content="Collate" />

        {/* Open Graph tags start  */}
        <meta
          property="og:title"
          content="OpenMetadata: Join the #1 Open Source Data Community"
        />
        <meta
          property="og:description"
          content="OpenMetadata is the #1 open source data catalog tool with the all-in-one platform for data discovery, quality, governance, collaboration &amp; more. Join our community to stay updated."
        />
        <meta
          property="og:image"
          content="https://open-metadata.org/assets/favicon.png"
        />
        <meta property="og:type" content="metadata tool" />
        <meta property="og:url" content="https://open-metadata.org" />
        {/* {/* Open Graph tags end  */}

        {/* {/* Twitter Card start  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="https://open-metadata.org" />
        <meta
          name="twitter:title"
          content="OpenMetadata: Join the #1 Open Source Data Community"
        />
        <meta
          name="twitter:description"
          content="OpenMetadata is the #1 open source data catalog tool with the all-in-one platform for data discovery, quality, governance, collaboration &amp; more. Join our community to stay updated."
        />
        <meta
          name="twitter:image"
          content="https://open-metadata.org/assets/favicon.png"
        />

        {/* {/* Twitter Card end  */}

        <title>OpenMetadata: Join the #1 Open Source Data Community</title>
        {/* eslint-disable-next-line @next/next/next-script-for-ga */}
        <script
          defer
          id="tag-manager"
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
      </Head>

      {/* Tag manager no script */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-554C968W"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>

      {/* Tag manager no script */}
      <Script
        src={'https://www.googletagmanager.com/gtag/js?id=G-LBLK284YQW'}
        strategy="afterInteractive"
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LBLK284YQW', {
              page_path: window.location.pathname,
            });
          `,
        }}
        id="gtag-init"
        strategy="afterInteractive"
      />
        </>
      )}
      {!storedCookie && <CookieModal handleButtonClick={handleButtonClick} />}
      <Component {...pageProps} />
    </>
  );
}

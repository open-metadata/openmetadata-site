import '../styles/styles.css';
import '../styles/globals.css';
import '../styles/cve-style.css';
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

    useEffect(() => {
        const userCookie = localStorage.getItem('userCookie')
        setStoredCookie(userCookie);
    }, []);

  useEffect(() => {
    AOS.init({
      offset: 80,
      once: true,
    });
  }, []);

  return (
    <>
      {storedCookie === 'Accept' && (
        <>
          {/* Google Tag Manager */}
      <Head>
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
      <CookieModal />
      <Component {...pageProps} />
    </>
  );
}

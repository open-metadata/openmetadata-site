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
        </>
      )}
      {!storedCookie && <CookieModal handleButtonClick={handleButtonClick} />}
      <Component {...pageProps} />
    </>
  );
}

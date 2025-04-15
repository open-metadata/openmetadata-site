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

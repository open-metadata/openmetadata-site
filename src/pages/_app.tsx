import '../styles/styles.css';
import '../styles/globals.css';
import '../styles/cve-style.css';
import type { AppProps } from 'next/app';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '@fontsource/metropolis';
import { config } from '@fortawesome/fontawesome-svg-core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Script from 'next/script';

config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      offset: 80,
      once: true,
    });
  }, []);

  return (
    <>
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
      <Script src={'/js/piwik.js'} defer />
      <Component {...pageProps} />
    </>
  );
}

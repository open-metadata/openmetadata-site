import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

/**
 * Initialise AOS scroll animations for the page that calls it.
 * Kept out of _app so pages without `data-aos` don't ship the library.
 */
export const useAos = () => {
  useEffect(() => {
    AOS.init({
      offset: 80,
      once: true,
    });
  }, []);
};

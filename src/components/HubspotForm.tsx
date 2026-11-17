import { useEffect, useRef } from "react";

const HubspotForm = ({ id, formId }: { id: string, formId: string }) => {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createForm = () => {
      if (typeof window !== "undefined" && "hbspt" in window) {
        (window as any).hbspt.forms.create({
          portalId: "21369141",
          formId,
          target: `#${id}`,
        });
      }
    };

    const loadForm = () => {
      if ("hbspt" in window) {
        createForm();
        return;
      }

      const script = document.createElement("script");
      script.src = "//js.hsforms.net/forms/embed/v2.js";
      script.type = "text/javascript";
      script.onload = createForm;
      document.body.appendChild(script);
    };

    // The HubSpot embed is ~200 KB of JS, so it waits until the form is about to scroll into view.
    // A form inside a display:none wrapper never intersects, so it isn't created until it's shown.
    const target = formRef.current;
    if (!target) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        observer.disconnect();
        loadForm();
      }
    }, { rootMargin: "300px" });
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return <div id={id} ref={formRef} className="hubspotForm"></div>;
};

export default HubspotForm;

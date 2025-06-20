import { useEffect } from "react"; 

const HubspotForm = ({ id, formId }: { id: string, formId: string }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.type = "text/javascript";
    script.onload = () => {
        if (typeof window !== "undefined" && "hbspt" in window) {
            (window as any).hbspt.forms.create({
              portalId: "21369141",
              formId,
              target: `#${id}`,
            });
        }
    };
    document.body.appendChild(script);
  }, []);

  return <div id={id} className="hubspotForm"></div>;
};

export default HubspotForm;

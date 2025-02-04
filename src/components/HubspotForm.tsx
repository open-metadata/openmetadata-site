import { useEffect } from "react"; 

const HubspotForm = ({ id }: { id: string }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.type = "text/javascript";
    script.onload = () => {
        if (typeof window !== "undefined" && "hbspt" in window) {
            (window as any).hbspt.forms.create({
              portalId: "21369141",
              formId: "ca4f7460-c6c2-40a3-8e65-66ab65fac5a9",
              target: `#${id}`,
            });
        }
    };
    document.body.appendChild(script);
  }, []);

  return <div id={id} className="hubspotForm"></div>;
};

export default HubspotForm;

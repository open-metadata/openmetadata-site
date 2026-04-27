import { useEffect } from "react";

const HubspotFormNew = ({
  portalId,
  formId,
  region,
}: {
  portalId: string;
  formId: string;
  region: string;
}) => {
  useEffect(() => {
    const existing = document.querySelector(
      `script[src="https://js.hsforms.net/forms/embed/${portalId}.js"]`
    );
    if (!existing) {
      const script = document.createElement("script");
      script.src = `https://js.hsforms.net/forms/embed/${portalId}.js`;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, [portalId]);

  return (
    <div
      className="hs-form-frame"
      data-region={region}
      data-form-id={formId}
      data-portal-id={portalId}
    />
  );
};

export default HubspotFormNew;

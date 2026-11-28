import Script from "next/script";

const StructuredData = ({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) => (
  <Script
    defer
    id="structured-data"
    key="structured-data"
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

export default StructuredData;

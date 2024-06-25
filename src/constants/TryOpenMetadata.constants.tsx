const ICON_ROUTE = "/assets/tryOpenMetadata";

export const TRY_OPENMETADATA = [
  {
    icon: `${ICON_ROUTE}/deploy.svg`,
    header: "Deploy",
    description: "Deploy OpenMetadata in your own environment",
    linkText: "Download Now",
    href: "https://docs.open-metadata.org/deployment",
    isNew: false
  },
  {
    icon: `${ICON_ROUTE}/experience.svg`,
    header: "Experience",
    description: "Experience OpenMetadata with demo data in seconds",
    linkText: "Try Live Sandbox",
    href: "https://sandbox.open-metadata.org/",
    isNew: false
  },
  {
    icon: `${ICON_ROUTE}/free-saas.svg`,
    header: "Free SaaS",
    description: "Free OpenMetadata cloud service with your own data",
    linkText: "Sign Up Free",
    href: "https://cloud.getcollate.io/signup",
    isNew: true
  }
];

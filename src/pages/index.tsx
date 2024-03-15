import Image from "next/image";
import Testimonials from "../components/TeamsSection/Testimonials";
import TeamsSection from "../components/TeamsSection/TeamsSection";
import CopyCode from "@/components/CopyCode/CopyCode.component";
import Features from "@/components/Features/Features.component";
import Blogs from "@/components/Blogs/Blogs.component";
import SaasTrial from "@/components/SaaSTrial/SaasTrial.component";
import YoutubeEmbed from "@/components/common/YouTubeEmbed";
import Footer from "@/components/Footer/Footer.component";
import Integrations from "@/components/Integrations/Integrations";
import Navbar from "@/components/Navbar/Navbar.component";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preload" href="/assets/home-section.webp" as="image" />
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://open-metadata.org/" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="OpenMetadata is the #1 open source data catalog tool. Empower innovation and foster collaboration with the all-in-one platform for data discovery, lineage, data quality, observability, governance, and more."
        />
        <meta
          name="keywords"
          content="best open-source data catalog, #1 open source data catalog, enterprise data catalog, data governance solutions, centralized metadata platform, best data discovery tool, data collaboration platform, modern data catalog, data catalog data lineage, best metadata management tool"
        />
        <meta name="author" content="open-metadata" />

        {/* Open Graph tags start  */}
        <meta
          property="og:title"
          content="OpenMetadata: The Best Open Source Data Catalog Solution"
        />
        <meta
          property="og:description"
          content="OpenMetadata is the #1 open source data catalog tool. Empower innovation and foster collaboration with the all-in-one platform for data discovery, lineage, data quality, observability, governance, and more."
        />
        <meta
          property="og:image"
          content="https://open-metadata.org/images/favicon.png"
        />
        <meta property="og:type" content="metadata tool" />
        <meta property="og:url" content="https://open-metadata.org" />
        {/* Open Graph tags end  */}

        {/* Twitter Card start  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="https://open-metadata.org" />
        <meta
          name="twitter:title"
          content="OpenMetadata: The Best Open Source Data Catalog Solution"
        />
        <meta
          name="twitter:description"
          content="An end-to-end metadata management solution that includes data discovery, governance, data quality, observability, and people collaboration."
        />
        <meta
          name="twitter:image"
          content="https://open-metadata.org/images/favicon.png"
        />
        <title>OpenMetadata: Join the #1 Open Source Data Community</title>
      </Head>
      <div id="layoutDefault">
        <div id="layoutDefault_content">
          <div
            style={{position: "fixed", top: 0, right: 0, left: 0, zIndex: 1030}}
          >
            <Navbar />
            <div className="saas-strip max-lg:px-10 lg:px-12">
              <div className="row gx-5 align-items-center lg:px-20">
                <div className="col-lg-9 max-lg:mb-3">
                  <strong>OpenMetadata SaaS Trial Offer!</strong> Go ahead &amp;
                  access the full suite of features to rebuild trust in your
                  data.
                </div>
                <div className="col-lg-3">
                  <a
                    className="btn btn-md btn-saas btn-quick-cta fw-700"
                    href="https://getcollate.io"
                    target="_blank"
                  >
                    Sign Up for the SaaS Trial
                  </a>
                </div>
              </div>
            </div>
          </div>
          <header className="page-header-ui page-header-ui-light bg-white max-lg:mt-20">
            <div className="page-header-ui-content pt-5">
              <div className="container px-10">
                <div className="row gx-5 align-items-center">
                  <div className="col-lg-7" data-aos="fade-up">
                    <h1 className="text-[40px] leading-[48px] fw-700 mb-6 mt-4">
                      OpenMetadata
                    </h1>
                    <h3 className="text-[28px] leading-8 text-primary font-medium mb-2">
                      A Single Place to Discover, Collaborate and get your Data
                      Right
                    </h3>
                    <p className="page-header-ui-text mb-6">
                      Unlock the value of data assets with an end-to-end
                      metadata management solution that includes data discovery,
                      governance, data quality, observability, and people
                      collaboration.
                    </p>
                    <div className="d-flex flex-column flex-sm-row">
                      <a
                        className="btn btn-primary btn-home-slack fw-500 mb-3 mb-sm-0 me-sm-3"
                        href="https://sandbox.open-metadata.org/"
                        target="_blank"
                      >
                        Explore Sandbox
                      </a>
                      <a
                        className="btn btn-outline-primary btn-home-slack fw-500 mb-3 mb-sm-0 me-sm-3"
                        href="https://slack.open-metadata.org/"
                        target="_blank"
                      >
                        <Image
                          height={18}
                          width={18}
                          src="/assets/icon-slack.svg"
                          alt="slack-logo-svg"
                          loading="lazy"
                        />
                        &nbsp; Join our Slack
                      </a>
                      <a
                        className="btn btn-outline-primary btn-home-gitstar fw-500"
                        href="https://github.com/open-metadata/OpenMetadata/stargazers"
                      >
                        <Image
                          src="https://img.shields.io/github/stars/open-metadata?style=social"
                          alt="github-stars"
                          width={120}
                          height={30}
                          title="GitHub Stars"
                          loading="lazy"
                        />
                      </a>
                    </div>
                  </div>
                  <div
                    className="col-lg-5 d-none d-lg-block"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <Image
                      height={800}
                      width={800}
                      className="object-contain"
                      src="/assets/home-section.webp"
                      alt="home-section-img"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
              <div className="svg-border-rounded text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 144.54 17.34"
                  preserveAspectRatio="none"
                  fill="currentColor"
                >
                  <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0" />
                </svg>
              </div>
            </div>
          </header>
          <section
            className="bg-banner py-6 lg:px-40 max-md:px-10"
            rel="preload"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-items-center lg:justify-items-start text-center">
              <div className="text-primary text-[40px] font-medium">
                1.3.0 Released - Try Now!
              </div>
              <p className="text-center">
                <strong>OpenMetadata 1.3.0 Released</strong> Intuitive Lineage
                UI, Data Observability Alerts, Data Quality Incident Manager,
                Custom Metrics for Profiler, Knowledge Center Improvements, and
                lots more.
                <strong> OpenMetadata 1.3.0 Release </strong>
                <Link
                  rel="noopener noreferrer"
                  aria-label="Read More here"
                  className="text-primary font-medium"
                  href="https://blog.open-metadata.org/openmetadata-release-1-3-ac801834ee80"
                  target="_blank"
                >
                  Read more here
                </Link>
                .
              </p>
            </div>
            <div className="svg-border-rounded text-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 144.54 17.34"
                preserveAspectRatio="none"
                fill="currentColor"
              >
                <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0" />
              </svg>
            </div>
          </section>

          <section className="bg-light py-10">
            <div className="container px-10">
              <div className="row gx-5 justify-content-center text-center mb-4">
                <div className="col-lg-8">
                  <div className="display-5 mb-3 text-dark">
                    Why OpenMetadata?
                  </div>
                  <h4>
                    Get to know OpenMetadata in few minutes. Watch the data
                    discovery, data profiler, and lineage features in action.
                  </h4>
                </div>
              </div>
              <div className="row gx-5 justify-content-center z-1">
                <div className="col-lg-8" data-aos="fade-up">
                  <div className="card">
                    <div className="card-body p-2">
                      <div className="video bg-img-cover rounded">
                        <YoutubeEmbed videoId="pF8L_mAtexo" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="svg-border-rounded text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 144.54 17.34"
                preserveAspectRatio="none"
                fill="currentColor"
              >
                <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0" />
              </svg>
            </div>
          </section>
          <section className="bg-white pb-5 py-10">
            <div className="container position-relative px-10">
              <div className="row gx-5 justify-content-center">
                <div className="col-lg-12">
                  <div className="text-center mb-5">
                    <h2 className="display-5 mb-3 text-dark">
                      Trusted Across Industries
                    </h2>
                  </div>
                </div>
              </div>
              <Testimonials />
            </div>
          </section>
          <section className="bg-white pb-5">
            <TeamsSection />
          </section>
          <section
            className="bg-img-cover overlay overlay-light overlay-90 py-10 bg-ready"
            id="getting-started"
          >
            <div className="container px-10 z-1">
              <CopyCode />
            </div>
            <div className="svg-border-rounded text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 144.54 17.34"
                preserveAspectRatio="none"
                fill="currentColor"
              >
                <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0" />
              </svg>
            </div>
          </section>
          <section className="bg-white py-10">
            <div className="container px-10">
              <div className="row justify-content-center text-center">
                <div className="col-lg-3 col-md-6 mb-5">
                  <div className="mb-4">
                    <Image
                      style={{display: "inline-flex"}}
                      width={80}
                      src="/assets/icon-git.svg"
                      height={80}
                      className="mb-4"
                      alt="git-svg"
                      loading="lazy"
                    />
                    <h3 className="mb-2 font-medium">Let’s Build on GitHub</h3>
                    <p className="mb-4">
                      Contribute code, try out good starting issues, and join
                      the momentum.
                    </p>
                    <Link
                      className="btn btn-sm btn-primary btn-quick-cta fw-500"
                      href="https://github.com/open-metadata/OpenMetadata"
                      target="_blank"
                    >
                      Explore
                    </Link>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-5">
                  <div className="mb-4">
                    <Image
                      style={{display: "inline-flex"}}
                      width={80}
                      src="/assets/icon-doc.svg"
                      height={80}
                      className="mb-4"
                      alt="doc-svg"
                      loading="lazy"
                    />
                    <h3 className="mb-2 font-medium">Refer to our Docs</h3>
                    <p className="mb-4">
                      Benefit with the step-by-step implementation guides and
                      get started.
                    </p>
                    <Link
                      className="btn btn-sm btn-primary btn-quick-cta fw-500"
                      href="https://docs.open-metadata.org/"
                      target="_blank"
                    >
                      Visit
                    </Link>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-5">
                  <div className="mb-4">
                    <Image
                      style={{display: "inline-flex"}}
                      src="/assets/icon-slack.svg"
                      width={80}
                      height={80}
                      className="mb-4"
                      alt="slack-icon-svg"
                      loading="lazy"
                    />
                    <h3 className="mb-2 font-medium">Connect on Slack</h3>
                    <p className="mb-4">
                      Ask questions, get help, discuss features, and connect
                      with contributors &amp; users.
                    </p>
                    <Link
                      className="btn btn-sm btn-primary btn-quick-cta fw-500"
                      href="https://slack.open-metadata.org/"
                      target="_blank"
                    >
                      Connect
                    </Link>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="mb-4">
                    <Image
                      style={{display: "inline-flex"}}
                      width={80}
                      className="mb-4"
                      src="/assets/icon-join.svg"
                      height={80}
                      alt="join-us-svg"
                      loading="lazy"
                    />
                    <h3 className="mb-2 font-medium">Join our Community</h3>
                    <p className="mb-4">
                      Attend meetings, share your thoughts, and know where we
                      are heading.
                    </p>
                    <Link
                      className="btn btn-sm btn-primary btn-quick-cta fw-500"
                      href="community.html"
                    >
                      Join Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="svg-border-rounded text-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 144.54 17.34"
                preserveAspectRatio="none"
                fill="currentColor"
              >
                <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0" />
              </svg>
            </div>
          </section>

          <section className="bg-light py-10" id="features">
            <div className="container px-10">
              <div className="row gx-5 justify-content-center">
                <div className="col-lg-8">
                  <div className="text-center mb-5">
                    <h2 className="section-header fw-600">Features</h2>
                  </div>
                </div>
              </div>
              <Features />
            </div>
            <div className="svg-border-rounded text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 144.54 17.34"
                preserveAspectRatio="none"
                fill="currentColor"
              >
                <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0" />
              </svg>
            </div>
          </section>
          <Integrations />
          <SaasTrial />
          <Blogs />
        </div>
        <Footer />
      </div>
      {/* Social Media Engagement - Off page SEO */}
    </>
  );
}

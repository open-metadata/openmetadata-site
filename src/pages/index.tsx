import Image from "next/image";
import Head from "next/head";
import Testimonials from "../components/TeamsSection/Testimonials";
import TeamsSection from "../components/TeamsSection/TeamsSection";
import CopyCode from "@/components/CopyCode/CopyCode.component";
import Features from "@/components/Features/Features.component";
import Blogs from "@/components/Blogs/Blogs.component";
import SaasTrial from "@/components/SaaSTrial/SaasTrial.component";
import YoutubeEmbed from "@/components/common/YouTubeEmbed";
import Footer from "@/components/Footer/Footer.component";
import Integrations from "@/components/Integrations/Integrations";

export default function Home() {
  return (
    <>
      <Head>
        <script type="text/javascript" src="/js/scripts.js" async />
      </Head>
      <div id="layoutDefault">
        <div id="layoutDefault_content">
          <main>
            {/* Navbar*/}
            <nav className="navbar navbar-marketing navbar-expand-lg bg-transparent navbar-light fixed-top flex-column">
              <div className="container px-10">
                <a className="navbar-brand text-primary" href="/">
                  <Image
                    height={56}
                    width={140}
                    src="/assets/omd-logo.svg"
                    alt="omd-logo-svg"
                    loading="lazy"
                  />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i data-feather="menu" />
                </button>
                <div className="navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto me-lg-5">
                    <li className="nav-item">
                      <a className="nav-link" href="community">
                        Community
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="https://sandbox.open-metadata.org/signin"
                        target="_blank"
                      >
                        Sandbox
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="https://docs.open-metadata.org/"
                        target="_blank"
                      >
                        Documentation
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="http://blog.open-metadata.org/"
                        target="_blank"
                      >
                        Blog
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="https://github.com/open-metadata/OpenMetadata"
                        target="_blank"
                      >
                        GitHub
                      </a>
                    </li>
                  </ul>
                  <a
                    className="btn fw-500 btn-primary rounded-full h-[42px]"
                    href="https://getcollate.io"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#fff"
                      className="w-5 h-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6.072 6.072 0 0 1-.02-.496Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="saas-strip">
                <div className="container">
                  <div className="row gx-5 align-items-center">
                    <div className="col-lg-9">
                      <strong>OpenMetadata SaaS Trial Offer!</strong> Go ahead
                      &amp; access the full suite of features to rebuild trust
                      in your data.
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
            </nav>
            {/* Page Header*/}
            <header className="page-header-ui page-header-ui-light bg-white">
              <div className="page-header-ui-content pt-5">
                <div className="container px-10">
                  <div className="row gx-5 align-items-center">
                    <div className="col-lg-7" data-aos="fade-up">
                      <h1 className="text-4xl fw-700 mb-4 mt-4">
                        OpenMetadata
                      </h1>
                      <h3 className="text-3xl text-primary font-medium mb-2">
                        A Single Place to Discover, Collaborate and get your
                        Data Right
                      </h3>
                      <p className="page-header-ui-text mb-4">
                        Unlock the value of data assets with an end-to-end
                        metadata management solution that includes data
                        discovery, governance, data quality, observability, and
                        people collaboration.
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
                      data-aos-delay={100}
                    >
                      <Image
                        height={2000}
                        width={2000}
                        className="object-contain"
                        src="/assets/home-section.png"
                        alt="home-section-img"
                        loading="lazy"
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
            <section className="bg-banner py-6">
              <div className="container px-10 z-[1]">
                <div className="row gx-5 justify-content-center text-center">
                  <div className="col-lg-6">
                    <div className="text-primary text-4xl font-normal">
                      1.3.0 Released - Try Now!
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div>
                      <strong>OpenMetadata 1.3.0 Released</strong> Intuitive
                      Lineage UI, Data Observability Alerts, Data Quality
                      Incident Manager, Custom Metrics for Profiler, Knowledge
                      Center Improvements, and lots more.
                      <strong>OpenMetadata 1.3.0 Release </strong>
                      <a
                        style={{color: "#7147e8"}}
                        href="https://blog.open-metadata.org/openmetadata-release-1-3-ac801834ee80"
                        target="_blank"
                      >
                        Read more here
                      </a>
                      .
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
                          <YoutubeEmbed videoId="pF8L_mAtexo" height="350" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="svg-border-rounded text-white">
                {/* Rounded SVG Border*/}
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
                <div
                  className="row gx-5 justify-content-center"
                  id="testimonialImagesContainer"
                >
                  <Testimonials />
                </div>
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
                <div className="flex flex-row gap-5 justify-center text-center">
                  <div className="col-lg-3 mb-5 mb-lg-0 text-center">
                    <Image
                      style={{display: "inline-flex"}}
                      width={80}
                      src="/assets/icon-git.svg"
                      height={80}
                      className="mb-4"
                      alt="git-svg"
                      loading="lazy"
                    />
                    <h3 className="mb-2">Let’s Build on GitHub</h3>
                    <p className="mb-4">
                      Contribute code, try out good starting issues, and join
                      the momentum.
                    </p>
                    <a
                      className="btn btn-sm btn-primary btn-quick-cta fw-500"
                      href="https://github.com/open-metadata/OpenMetadata"
                      target="_blank"
                    >
                      Explore
                    </a>
                  </div>
                  <div className="col-lg-3 mb-5 mb-lg-0">
                    <Image
                      style={{display: "inline-flex"}}
                      width={80}
                      src="/assets/icon-doc.svg"
                      height={80}
                      className="mb-4"
                      alt="doc-svg"
                      loading="lazy"
                    />
                    <h3 className="mb-2">Refer to our Docs</h3>
                    <p className="mb-4">
                      Benefit with the step-by-step implementation guides and
                      get started.
                    </p>
                    <a
                      className="btn btn-sm btn-primary btn-quick-cta fw-500"
                      href="https://docs.open-metadata.org/"
                      target="_blank"
                    >
                      Visit
                    </a>
                  </div>
                  <div className="col-lg-3 mb-5 mb-lg-0">
                    <Image
                      style={{display: "inline-flex"}}
                      src="/assets/icon-slack.svg"
                      width={80}
                      height={80}
                      className="mb-4"
                      alt="slack-icon-svg"
                      loading="lazy"
                    />
                    <h3 className="mb-2">Connect on Slack</h3>
                    <p className="mb-4">
                      Ask questions, get help, discuss features, and connect
                      with contributors &amp; users.
                    </p>
                    <a
                      className="btn btn-sm btn-primary btn-quick-cta fw-500"
                      href="https://slack.open-metadata.org/"
                      target="_blank"
                    >
                      Connect
                    </a>
                  </div>
                  <div className="col-lg-3 mb-4">
                    <Image
                      style={{display: "inline-flex"}}
                      width={80}
                      className="mb-4"
                      src="/assets/icon-join.svg"
                      height={80}
                      alt="join-us-svg"
                      loading="lazy"
                    />
                    <h3 className="mb-2">Join our Community</h3>
                    <p className="mb-4">
                      Attend meetings, share your thoughts, and know where we
                      are heading.
                    </p>
                    <a
                      className="btn btn-sm btn-primary btn-quick-cta fw-500"
                      href="community.html"
                    >
                      Join Now
                    </a>
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
                {/* Rounded SVG Border*/}
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
          </main>
        </div>
        <Footer />
      </div>
      {/* Social Media Engagement - Off page SEO */}
    </>
  );
}

import YoutubeEmbed from "@/components/common/YouTubeEmbed";
import Head from "next/head";

export default function Community() {
  return (
    <>
      <Head>
        <script type="text/javascript" src="/js/scripts.js" async />
      </Head>
      <div id="layoutDefault">
        <div id="layoutDefault_content">
          <main>
            <nav className="navbar navbar-marketing navbar-expand-lg bg-transparent navbar-light fixed-top flex-column">
              <div className="container px-10">
                <a className="navbar-brand text-primary" href="/">
                  <img
                    className="w-full"
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
            </nav>

            <header className="page-header-ui page-header-ui-light bg-white">
              <div className="page-header-ui-content pt-5">
                <div className="container px-10">
                  <div className="row gx-5 align-items-center">
                    <div
                      className="col-lg-6 d-none d-lg-block"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <img
                        className="img-fluid"
                        src="/assets/community.png"
                        alt="community"
                        loading="lazy"
                      />
                    </div>
                    <div className="col-lg-6" data-aos="fade-up">
                      <h1 className="page-header-ui-title fw-700">
                        Meet & Greet on Slack
                      </h1>
                      <p className="page-header-ui-text mb-2">
                        That’s where the OpenMetadata enthusiasts are;
                        <br />
                        apart from&nbsp;
                        <a
                          className="text-primary"
                          href="https://github.com/open-metadata/OpenMetadata"
                          target="_blank"
                        >
                          GitHub
                        </a>
                        , of course.
                      </p>
                      <p>
                        Catch up with all the discussions and queries on the
                        growing world of metadata. Know what other users are
                        looking for and how OpenMetadata contributes to make
                        their lives easier.
                      </p>
                      <p>
                        Learn, engage, and get going with your organization’s
                        needs!
                      </p>
                      <div className="d-flex flex-column flex-sm-row">
                        <a
                          className="btn btn-lg btn-outline-primary btn-home-slack fw-500"
                          href="https://slack.open-metadata.org/"
                          target="_blank"
                        >
                          <img
                            className="img-fluid"
                            height={20}
                            width={20}
                            src="/assets/icon-slack.svg"
                            alt="slack"
                            loading="lazy"
                          />
                          &nbsp; Join our Slack
                        </a>
                      </div>
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
                  <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path>
                </svg>
              </div>
            </header>

            <section className="bg-light py-10">
              <div className="container px-10">
                <div className="row gx-5 align-items-center justify-content-center">
                  <div className="col-lg-6">
                    <h2 className="section-header fw-600 mb-4">
                      Monthly Meetups
                    </h2>
                    <p className="lead">
                      Join us&nbsp;
                      <strong>every month</strong> over Zoom to learn about
                      OpenMetadata’s progress. Catch up with some exciting news
                      on the upcoming features. Benefit from the informative
                      webinars, watch live demos, ask questions, and share your
                      feedback.
                    </p>
                    <p className="lead mb-4">
                      Stay tuned for the latest in Metadata management!
                    </p>
                    <a
                      className="btn btn-primary fw-500"
                      href="https://www.meetup.com/openmetadata-meetup-group/"
                      target="_blank"
                    >
                      Join OpenMetadata Meetup Group
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <img
                      src="/assets/meetups.png"
                      className="img-fluid"
                      alt="meetups"
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
                  <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path>
                </svg>
              </div>
            </section>

            <section className="bg-white py-10">
              <div className="container px-10">
                <div className="row gx-5 justify-content-center">
                  <div className="col-lg-8">
                    <div className="text-center mb-5">
                      <h2 className="section-header fw-600">
                        OpenMetadata Webinars
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="row gx-5">
                  <div className="col">
                    <div className="card">
                      <div className="card-body">
                        <YoutubeEmbed videoId="ihwtuNHt1kI" height="260" />
                        <p className="fw-600 mb-0 mt-2">
                          Here's a Webinar on Data Quality Simplified:
                          Effortlessly Build, Deploy, Monitor, & Configure
                          Alerts with our No-Code Platform. Watch Teddy
                          Crépineau, Founding Software Engineer at Collate demo
                          the easy-to-use and extensible data quality features
                          to get to reliable data faster.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card">
                      <div className="card-body">
                        <YoutubeEmbed videoId="lOQepnTdA58" height="260" />
                        <p className="fw-600 mb-0 mt-2">
                          Learn to proactively hone the data culture of your
                          company. With a built-in goal-setting and tracking
                          mechanism in Data Insights, you can now set targets,
                          monitor, and boost teams to accomplish data goals to
                          foster a healthy data culture using OpenMetadata.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row gx-5 justify-content-center">
                  <div className="col-lg-8">
                    <div className="text-center mt-5">
                      <p className="lead">
                        Watch out for an end-to-end coverage on everything you
                        need to know about Data Lineage, Data Quality &
                        Profiler, Roles & Policies, Custom Connectors, Data
                        Culture, Storage Services, Setting up Integrations for
                        Metadata Ingestion, Data Discovery, and a lot more.
                      </p>
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
                  <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path>
                </svg>
              </div>
            </section>

            <section className="bg-light py-10">
              <div className="container px-10">
                <div className="row gx-5 justify-content-center">
                  <div className="col-lg-12 text-center">
                    <h2 className="section-header fw-600 mb-4">
                      Missed a Meeting? Access it Anytime
                    </h2>
                    <p>
                      You can watch all of our previous meetings on&nbsp;
                      <a
                        className="text-primary"
                        href="https://www.youtube.com/c/OpenMetadataChannel"
                        target="_blank"
                      >
                        YouTube
                      </a>
                      .
                    </p>
                    <p className="mb-5">
                      You’ll also find some short feature videos there. Here’s
                      what’s most recent. Take a look!
                    </p>
                    <div className="row gx-5">
                      <div className="col">
                        <div className="card">
                          <div className="card-body">
                            <YoutubeEmbed videoId="7jgtfdpOKwo" height="260" />
                            <p className="fw-600 mb-0 mt-2">Feb 1st, 2024</p>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="card">
                          <div className="card-body">
                            <YoutubeEmbed videoId="W4R8BUiHyK4" height="260" />
                            <p className="fw-600 mb-0 mt-2">Dec 18th, 2023</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="svg-border-rounded text-dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 144.54 17.34"
                  preserveAspectRatio="none"
                  fill="currentColor"
                >
                  <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path>
                </svg>
              </div>
            </section>
          </main>
        </div>
        <div id="layoutDefault_footer">
          <footer className="footer pt-10 pb-5 mt-auto bg-dark footer-dark">
            <div className="container px-10">
              <div className="row gx-5">
                <div className="col-lg-3">
                  <div className="footer-brand">
                    <img
                      src="images/omd-logo-footer.svg"
                      alt="omd-footer-logo"
                      loading="lazy"
                    />
                  </div>
                  <div className="mb-3">
                    Open Standard for Metadata with a Centralized Metadata
                    Store. Discover, Collaborate and get your Data Right.
                  </div>
                </div>
                <div className="col-lg-3 offset-lg-1 col-md-6 mb-4 mb-lg-0">
                  <div className="text-uppercase-expanded text-xs mb-4">
                    Docs
                  </div>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      <a href="https://docs.open-metadata.org/" target="_blank">
                        What is OpenMetadata?
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="https://docs.open-metadata.org/openmetadata/schemas"
                        target="_blank"
                      >
                        Schemas
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="https://docs.open-metadata.org/openmetadata/apis"
                        target="_blank"
                      >
                        APIs
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="https://docs.open-metadata.org/install/run-openmetadata"
                        target="_blank"
                      >
                        Install
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://docs.open-metadata.org/install/metadata-ingestion"
                        target="_blank"
                      >
                        Ingestion
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                  <div className="text-uppercase-expanded text-xs mb-4">
                    Community
                  </div>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      <a
                        href="https://slack.open-metadata.org/"
                        target="_blank"
                      >
                        <i className="fab fa-slack"></i> Slack
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="https://github.com/open-metadata/openmetadata"
                        target="_blank"
                      >
                        <i className="fab fa-github"></i> GitHub
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="https://twitter.com/open_metadata"
                        target="_blank"
                      >
                        <i className="fab fa-twitter"></i> Twitter
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.meetup.com/openmetadata-meetup-group/"
                        target="_blank"
                      >
                        <i className="fab fa-meetup"></i> Meetup
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-2">
                  <div className="text-uppercase-expanded text-xs mb-2">
                    Developed By
                  </div>
                  <img
                    src="images/netlify.png"
                    width="120"
                    alt="netlify"
                    loading="lazy"
                  />
                </div>
              </div>
              <hr className="my-5" />
              <div className="row gx-5 align-items-center">
                <div className="col-md-6 small">
                  Copyright © OpenMetadata 2022
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

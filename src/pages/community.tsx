import Footer from "@/components/Footer/Footer.component";
import Navbar from "@/components/Navbar/Navbar.component";
import YoutubeEmbed from "@/components/common/YouTubeEmbed";
import Head from "next/head";
import Image from "next/image";

export default function Community() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="OpenMetadata is the #1 open source data catalog tool with the all-in-one platform for data discovery, quality, governance, collaboration &amp; more. Join our community to stay updated."
        />
        <meta
          name="keywords"
          content="best open-source data catalog community, #1 open source data catalog, enterprise data catalog, data governance solutions, centralized metadata platform, best data discovery tool, data collaboration platform, modern data catalog, data catalog data lineage, best metadata management tool"
        />
        <meta name="author" content="open-metadata" />

        {/* Open Graph tags start  */}
        <meta
          property="og:title"
          content="OpenMetadata: Join the #1 Open Source Data Community"
        />
        <meta
          property="og:description"
          content="OpenMetadata is the #1 open source data catalog tool with the all-in-one platform for data discovery, quality, governance, collaboration &amp; more. Join our community to stay updated."
        />
        <meta
          property="og:image"
          content="https://open-metadata.org/images/favicon.png"
        />
        <meta property="og:type" content="metadata tool" />
        <meta property="og:url" content="https://open-metadata.org" />
        {/* {/* Open Graph tags end  */}

        {/* {/* Twitter Card start  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="https://open-metadata.org" />
        <meta
          name="twitter:title"
          content="OpenMetadata: Join the #1 Open Source Data Community"
        />
        <meta
          name="twitter:description"
          content="OpenMetadata is the #1 open source data catalog tool with the all-in-one platform for data discovery, quality, governance, collaboration &amp; more. Join our community to stay updated."
        />
        <meta
          name="twitter:image"
          content="https://open-metadata.org/images/favicon.png"
        />

        {/* {/* Twitter Card end  */}

        <title>OpenMetadata: Join the #1 Open Source Data Community</title>
      </Head>
      <div id="layoutDefault">
        <div id="layoutDefault_content">
          <main>
            <Navbar />
            <header className="page-header-ui page-header-ui-light bg-white lg:pt-0 max-lg:mt-0">
              <div className="page-header-ui-content pt-5 max-lg:pt-0">
                <div className="container px-10">
                  <div className="row gx-5 align-items-center">
                    <div
                      className="col-lg-6 lg:block hidden"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <Image
                        alt="community"
                        width={1000}
                        className="w-full"
                        height={1000}
                        src="/assets/community.png"
                      />
                    </div>
                    <div className="col-lg-6" data-aos="fade-up">
                      <h1 className="page-header-ui-title font-bold leading-[60px]">
                        Meet &amp; Greet on Slack
                      </h1>
                      <p className="page-header-ui-text mb-2">
                        That's where the OpenMetadata enthusiasts are;
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
                        Learn, engage, and get going with your organization's
                        needs!
                      </p>
                      <div className="flex flex-col sm:flex-row max-lg:mt-3">
                        <a
                          className="btn btn-lg btn-outline-primary btn-home-slack font-semibold"
                          href="https://slack.open-metadata.org/"
                          target="_blank"
                        >
                          <Image
                            alt="slack"
                            width={1000}
                            className="h-5 w-5 mr-2"
                            height={1000}
                            src="/assets/icon-slack.svg"
                          />
                          Join our Slack
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
                    <h2 className="section-header font-semibold mb-4 leading-10">
                      Monthly Meetups
                    </h2>
                    <p className="text-[18px]">
                      Join us&nbsp;
                      <strong>every month</strong> over Zoom to learn about
                      OpenMetadata's progress. Catch up with some exciting news
                      on the upcoming features. Benefit from the informative
                      webinars, watch live demos, ask questions, and share your
                      feedback.
                    </p>
                    <p className="text-[18px] mb-4">
                      Stay tuned for the latest in Metadata management!
                    </p>
                    <a
                      className="btn btn-primary"
                      href="https://www.meetup.com/openmetadata-meetup-group/"
                      target="_blank"
                    >
                      Join OpenMetadata Meetup Group
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <Image
                      alt="meetups"
                      width={1000}
                      height={1000}
                      src="/assets/meetups.png"
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
                      <h2 className="section-header font-semibold">
                        OpenMetadata Webinars
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="row gx-5">
                  <div className="col max-lg:mb-4">
                    <div className="card">
                      <div className="card-body">
                        <YoutubeEmbed videoId="ihwtuNHt1kI" />
                        <p className="font-semibold mb-0 mt-2">
                          Here's a Webinar on Data Quality Simplified:
                          Effortlessly Build, Deploy, Monitor, &amp; Configure
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
                        <YoutubeEmbed videoId="lOQepnTdA58" />
                        <p className="font-semibold mb-0 mt-2">
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
                      <p className="text-[18px]">
                        Watch out for an end-to-end coverage on everything you
                        need to know about Data Lineage, Data Quality &amp;
                        Profiler, Roles &amp; Policies, Custom Connectors, Data
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
                    <h2 className="section-header font-semibold mb-4 leading-8">
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
                      You'll also find some short feature videos there. Here's
                      what's most recent. Take a look!
                    </p>
                    <div className="row gx-5">
                      <div className="col-lg-6 mb-4">
                        <div className="card">
                          <div className="card-body">
                            <YoutubeEmbed videoId="7jgtfdpOKwo" />
                            <p className="font-semibold mb-0 mt-2">
                              Feb 1st, 2024
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="card">
                          <div className="card-body">
                            <YoutubeEmbed videoId="W4R8BUiHyK4" />
                            <p className="font-semibold mb-0 mt-2">
                              Dec 18th, 2023
                            </p>
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
        <Footer />
      </div>
    </>
  );
}

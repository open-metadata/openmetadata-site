import FooterDev from "@/components/FooterDev/FooterDev";
import NavbarDev from "@/components/NavbarDev/NavbarDev.component";
import NavbarStrip from "@/components/NavbarDev/NavbarStrip.component";
import ParamLink from "@/components/ParamLink";
import YoutubeEmbed from "@/components/common/YouTubeEmbed";
import Image from "next/image";
import { useRouter } from "next/router";

export function getServerSideProps({ resolvedUrl }: { resolvedUrl: string }) {
  return {
    props: {
      link: resolvedUrl,
    },
  };
}

export default function Community() {
  const router = useRouter();

  const handleTryOpenMetadataClick = () => {
    router.push("/#try-openmetadata");
  };

  return (
      <div id="layoutDefault">
        <div id="layoutDefault_content">
          <div className="mx-auto fixed top-0 w-full z-[1030]">
            <NavbarDev onClick={handleTryOpenMetadataClick} />
            <NavbarStrip />
          </div>

          <header className="page-header-ui page-header-ui-light bg-white lg:pt-32 max-lg:mt-0">
            <div className="page-header-ui-content pt-5 max-lg:pt-0">
              <div className="container px-10">
                <div className="row gx-5 align-items-center">
                  <div
                    className="col-lg-6 lg:block hidden"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <Image
                      loading="eager"
                      alt="community"
                      width={1000}
                      className="w-full"
                      height={1000}
                      src="/assets/community.webp"
                    />
                  </div>
                  <div className="col-lg-6" data-aos="fade-up">
                    <h1 className="page-header-ui-title font-bold leading-[48px] mb-2">
                      Meet &amp; Greet on Slack
                    </h1>
                    <p className="page-header-ui-text mb-2 max-md:mt-2">
                      That's where the OpenMetadata enthusiasts are;
                      <br />
                      apart from&nbsp;
                      <ParamLink
                        href="https://github.com/open-metadata/OpenMetadata"
                        name="GitHub"
                        className="text-primary font-medium"
                        target="_blank"
                      />
                      , of course.
                    </p>
                    <p>
                      Catch up with all the discussions and queries on the
                      growing world of metadata. Know what other users are
                      looking for and how OpenMetadata contributes to make their
                      lives easier.
                    </p>
                    <p>
                      Learn, engage, and get going with your organization's
                      needs!
                    </p>
                    <div className="flex flex-col sm:flex-row max-lg:mt-3">
                      <ParamLink
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
                      </ParamLink>
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

          <section className="bg-light py-10 px-10">
            <div className="container">
              <div className="row gx-5 align-items-center justify-content-center">
                <div className="col-lg-6">
                  <h2 className="section-header font-semibold mb-4 leading-10">
                    Monthly Meetups
                  </h2>
                  <p className="text-[18px]">
                    Join us&nbsp;<strong>every month</strong> over Zoom to learn about
                    OpenMetadata's progress. Catch up with some exciting news on
                    the upcoming features. Benefit from the informative
                    webinars, watch live demos, ask questions, and share your
                    feedback.
                  </p>
                  <p className="text-[18px]">
                    Stay tuned for the latest in Metadata management!
                  </p>
                  <ParamLink
                    className="btn btn-primary"
                    href="https://www.meetup.com/openmetadata-meetup-group/"
                    target="_blank"
                    name="Join OpenMetadata Meetup Group"
                  />
                </div>
                <div className="col-lg-6">
                  <Image
                    alt="meetups"
                    width={1000}
                    height={1000}
                    src="/assets/meetups.webp"
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
              <div className="text-center mb-5">
                <h2 className="section-header font-semibold">
                  OpenMetadata Webinars
                </h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6">
                <div className="max-w-lg">
                  <div className="card">
                    <div className="card-body">
                      <YoutubeEmbed videoId="ihwtuNHt1kI" />
                      <p className="font-semibold mb-0 mt-2">
                        Here's a Webinar on Data Quality Simplified:
                        Effortlessly Build, Deploy, Monitor, &amp; Configure
                        Alerts with our No-Code Platform. Watch Teddy Crépineau,
                        Founding Software Engineer at Collate demo the
                        easy-to-use and extensible data quality features to get
                        to reliable data faster.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="max-w-lg">
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
              <div className="mt-6 flex justify-center">
                <div className="col-lg-8 items-center justify-items-center text-center">
                  <p className="text-[18px]">
                    Watch out for an end-to-end coverage on everything you need
                    to know about Data Lineage, Data Quality &amp; Profiler,
                    Roles &amp; Policies, Custom Connectors, Data Culture,
                    Storage Services, Setting up Integrations for Metadata
                    Ingestion, Data Discovery, and a lot more.
                  </p>
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
                    <ParamLink
                      className="text-primary font-medium"
                      href="https://www.youtube.com/c/OpenMetadataChannel"
                      target="_blank"
                      name="YouTube"
                    />
                    .
                  </p>
                  <p className="mb-5">
                    You'll also find some short feature videos there. Here's
                    what's most recent. Take a look!
                  </p>
                  <div className="row gx-5">
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <YoutubeEmbed videoId="dSNynCcrOD8" />
                          <p className="font-semibold mb-0 mt-2">March 2025</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                      <div className="card">
                        <div className="card-body">
                          <YoutubeEmbed videoId="EgPed_N5fQk" />
                          <p className="font-semibold mb-0 mt-2">
                            Spotlight, March 2025
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <FooterDev />
      </div>
  );
}

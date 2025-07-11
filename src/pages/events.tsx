import FooterDev from "@/components/FooterDev/FooterDev";
import NavbarDev from "@/components/NavbarDev/NavbarDev.component";
import NavbarStrip from "@/components/NavbarDev/NavbarStrip.component";
import ParamLink from "@/components/ParamLink";
import YoutubeEmbed from "@/components/common/YouTubeEmbed";
import { useRouter } from "next/router";

export function getServerSideProps({ resolvedUrl }: { resolvedUrl: string }) {
  return {
    props: {
      link: resolvedUrl,
    },
  };
}

export default function Events() {
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

        <section className="bg-white lg:pt-40 max-lg:pt-24 pt-20">
          <div className="container px-10 py-10">
            <div className="text-center mb-8 max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 leading-tight">
                OpenMetadata Community<br />Events Calendar
              </h1>
              <p className="text-base md:text-lg text-gray-600">
                Join our events to learn more about OpenMetadata
              </p>
            </div>
            <div className="relative w-full overflow-hidden rounded-lg" style={{ height: 'calc(100vh - 300px)', minHeight: '600px' }}>
              <iframe
                src="https://lu.ma/embed/calendar/cal-vu0BP4BUofmA5oU/events"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                style={{ 
                  border: '1px solid #bfcbda88', 
                  borderRadius: '4px'
                }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
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
              <div className="max-w-lg mx-auto">
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
              <div className="max-w-lg mx-auto">
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
                <div className="row gx-5 justify-content-center">
                  <div className="col-lg-6 mb-4">
                    <div className="card">
                      <div className="card-body">
                        <YoutubeEmbed videoId="NxqCn-3XkVc" />
                        <p className="font-semibold mb-0 mt-2">May 2025</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="card">
                      <div className="card-body">
                        <YoutubeEmbed videoId="AuYBaXC8-M4" />
                        <p className="font-semibold mb-0 mt-2">
                          MCP Introduction, May 2025
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
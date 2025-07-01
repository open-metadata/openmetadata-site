import FooterDev from "@/components/FooterDev/FooterDev";
import NavbarDev from "@/components/NavbarDev/NavbarDev.component";
import NavbarStrip from "@/components/NavbarDev/NavbarStrip.component";
import ParamLink from "@/components/ParamLink";
import YoutubeEmbed from "@/components/common/YouTubeEmbed";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Community() {
  const router = useRouter();

  const handleTryOpenMetadataClick = () => {
    router.push("/#try-openmetadata");
  };

  return (
    <div className="justify-between min-h-screen flex flex-col">
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
                      src="/assets/omd-mcp.webp"
                    />
                  </div>
                  <div className="col-lg-6" data-aos="fade-up">
                    <h1 className="page-header-ui-title font-bold leading-[48px] mb-2">
                      OpenMetadata: Now with MCP Server!
                    </h1>
                    <p className="page-header-ui-text mb-2 max-md:mt-2">
                      The first Enterprise-grade MCP server for metadata
                      <br />
                      from OpenMetadata is revolutionizing AI-driven governance!
                    </p>
                    <p>
                      LLMs lack the crucial context of your business -
                      your data's unique structure, lineage, critical 
                      business glossaries - all information readily available
                       within metadata. With OpenMetadata's new MCP server, 
                      LLMs & agents can take action on your data systems
                      by leveraging OpenMetadata's Unified Knowledge Graph 
                      for intelligent data mangement and automated data operations!
                    </p>
                    <p>
                      Check out our introduction to OpenMetadata's MCP Server!
                    </p>
                    <div className="flex flex-col sm:flex-row max-lg:mt-3">
                      <ParamLink
                        className="btn btn-lg btn-outline-primary btn-home-slack font-semibold"
                        href="https://www.youtube.com/watch?v=AuYBaXC8-M4"
                        target="_blank"
                      >
                        Watch on YouTube
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
                    Embedded MCP Server Architecture
                  </h2>
                  <p className="text-[18px]">
                    By fully integrating an MCP Server into OpenMetadata, it 
                    uses the same Authorization engine we have for the OpenMetadata APIs. 
                    This enables any MCP client (such as Claude, Cursor, or OpenAI) to read 
                    from or write to the integrations you already have set up in OpenMetadata, 
                    and assume any role or policy you define, giving agents the proper 
                    access to the right data and functional logic to automate data operations.
                  </p>
                  <p className="text-[18px]">
                    Check out our Getting Started guide!
                  </p>
                  <ParamLink
                    className="btn btn-primary"
                    href="https://docs.open-metadata.org/latest/how-to-guides/mcp/claude"
                    target="_blank"
                    name="Getting started with MCP on Claude Desktop"
                  />
                </div>
                <div className="col-lg-6">
                  <Image
                    alt="architecture"
                    width={1000}
                    height={1000}
                    src="/assets/openmetadata-mcp-architecture.webp"
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
                  OpenMetadata and MCP Use Cases
                </h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6">
                <div className="max-w-lg">
                  <div className="card">
                    <div className="card-body">
                      <YoutubeEmbed videoId="Yrv86hSmeME" />
                      <p className="font-semibold mb-0 mt-2">
                        OpenMetadata Release v1.8.0 Overview!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="max-w-lg">
                  <div className="card">
                    <div className="card-body">
                      <YoutubeEmbed videoId="Ad3PCGb7abw" />
                      <p className="font-semibold mb-0 mt-2">
                        Intelligent pipeline monitoring!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="max-w-lg">
                  <div className="card">
                    <div className="card-body">
                      <YoutubeEmbed videoId="5FqK3Cr9fXI" />
                      <p className="font-semibold mb-0 mt-2">
                        Generating dashboards from metadata analysis!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="max-w-lg">
                  <div className="card">
                    <div className="card-body">
                      <YoutubeEmbed videoId="ZVMFa2OvU9U" />
                      <p className="font-semibold mb-0 mt-2">
                        Automated data glossary creation!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-center">
                <div className="col-lg-8 items-center justify-items-center text-center">
                  <p className="text-[18px]">
                    Keep an eye out on the&nbsp;
                    <ParamLink
                      className="text-primary font-medium"
                      href="https://www.meetup.com/openmetadata-meetup-group/"
                      target="_blank"
                      name="OpenMetadata Meetup Group "
                    />
                     and our 
                    MCP Spotlights as we continue to discover the revolutionary
                    capabilities of this new integration!
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
                    Missed a Community Meeting? Access it Anytime
                  </h2>
                  <p>
                    You can watch all of our previous meetups on&nbsp;
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
                          <YoutubeEmbed videoId="e0IDbuBsInY" />
                          <p className="font-semibold mb-0 mt-2">June 2025</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                      <div className="card">
                        <div className="card-body">
                          <YoutubeEmbed videoId="ErYPOBBiAAA" />
                          <p className="font-semibold mb-0 mt-2">
                            Data Contracts, June 2025
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
    </div>
  );
}

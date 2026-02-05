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
                      src="/assets/omd-contract.webp"
                    />
                  </div>
                  <div className="col-lg-6" data-aos="fade-up">
                    <h1 className="page-header-ui-title font-bold leading-[48px] mb-2">
                      Build Collaborative Data Contracts in Open-Source with OpenMetadata!
                    </h1>
                    <p className="page-header-ui-text mb-2 max-md:mt-2">
                      The first open source platform for data contracts
                      <br />
                      from OpenMetadata is redefining data quality!
                    </p>
                    <p>
                      Data platforms are complex, and the constant interactions of 
                      APIs, streams, CDC, external tables, data warehouses, and dashboards 
                      can result in data pipelines full of assumptions downstream 
                      so that, fingers crossed, objects upstream do not break. 
                      Data contracts keep data consumers and producers aligned & 
                      formalize agreements between them validate data quality!
                    </p>
                    <p>
                      Check out our introduction to OpenMetadata Data Contracts!
                    </p>
                    <div className="flex flex-col sm:flex-row max-lg:mt-3">
                      <ParamLink
                        className="btn btn-lg btn-outline-primary btn-home-slack font-semibold"
                        href="https://blog.open-metadata.org/introducing-the-model-context-protocol-mcp-in-openmetadata-e757385f4fb2"
                        target="_blank"
                      >
                        Read the blog
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
                    Full UI and Data Quality Support
                  </h2>
                  <p className="text-[18px]">
                    Technical contracts result in complex collaboration that can exclude 
                    certain personas. OpenMetadata provides UI-driven data contracts that 
                    empower users, democratize alignment across departments, 
                    and ensure contracts are enforced across data schemas, 
                    data semantics, and OpenMetadata's data quality tests!</p>
                  <p className="text-[18px]">
                    Check out our Getting Started guide!
                  </p>
                  <ParamLink
                    className="btn btn-primary"
                    href="https://docs.open-metadata.org/latest/how-to-guides/data-contracts"
                    target="_blank"
                    name="Getting started with OpenMetadata Data Contracts"
                  />
                </div>
                <div className="col-lg-6">
                  <Image
                    alt="architecture"
                    width={1000}
                    height={1000}
                    src="/assets/contracts-ui.webp"
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
                  OpenMetadata Data Contracts
                </h2>
              </div>
              <div className="flex justify-center text-center">
                <div className="w-full max-w-xl">
                  <div className="card">
                    <div className="card-body">
                      <YoutubeEmbed videoId="9CAy_kNvenA" />
                      <p className="font-semibold mb-0 mt-2">
                        Introducing Data Contracts
                      </p>
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
          </section>

          <section className="bg-light py-10">
            <div className="container px-10">
              <div className="row gx-5 justify-content-center">
                <div className="col-lg-12 text-center">
                  <h2 className="section-header font-semibold mb-4 leading-8">
                    Data Contracts at our Meetups
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
                    Here are some recent meetup sessions on Data Contracts and OpenMetadata. Take a look!
                  </p>
                  <div className="row gx-5">
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <YoutubeEmbed videoId="ErYPOBBiAAA" />
                          <p className="font-semibold mb-0 mt-2">Data Contracts Introduction, June 2025</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                      <div className="card">
                        <div className="card-body">
                          <YoutubeEmbed videoId="sz2XUEQHp08" />
                          <p className="font-semibold mb-0 mt-2">
                            Data Contracts Update, August 2025
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

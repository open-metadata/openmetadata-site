import FooterDev from "@/components/FooterDev/FooterDev";
import HubspotFormNew from "@/components/HubspotFormNew";
import NavbarDev from "@/components/NavbarDev/NavbarDev.component";
import NavbarStrip from "@/components/NavbarDev/NavbarStrip.component";
import Image from "next/image";
import { useRouter } from "next/router";

export function getServerSideProps({ resolvedUrl }: { resolvedUrl: string }) {
  return {
    props: {
      link: resolvedUrl,
      title:
        "Knowledge Graphs & Ontologies in OpenMetadata | Webinar | OpenMetadata",
    },
  };
}

const SPEAKERS = [
  {
    name: "Jo Perez",
    title: "Head of Solutions Engineering",
    company: "Google",
    image: "/assets/meetup/jo.svg",
  },
  {
    name: "Ellie Turner",
    title: "Business Development",
    company: "Google",
    image: "/assets/meetup/ellie.svg",
  },
  {
    name: "Eleni Patsiou",
    title: "Business Development",
    company: "Google",
    image: "/assets/meetup/eleni.png",
  },
];

const AGENDA = [
  "Introduction to MCP Toolbox",
  "MCP Toolbox & OpenMetadata Demo",
  "Knowledge graphs and Ontologies in OpenMetadata",
];

const KnowledgeGraphsWebinar = () => {
  const router = useRouter();

  const handleTryOpenMetadataClick = () => {
    router.push("/#try-openmetadata");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="mx-auto fixed top-0 w-full z-[1030]">
        <NavbarDev onClick={handleTryOpenMetadataClick} />
        <NavbarStrip />
      </div>

      <section className="relative mt-20 md:mt-24 lg:mt-32 overflow-hidden">
        <Image
          src="/assets/meetup/bg.svg"
          alt=""
          width={1512}
          height={542}
          className="absolute inset-0 w-full h-full object-cover z-0"
          priority
        />
        <div className="max-w-[1440px] mx-auto relative z-10 w-full px-6 md:px-10 xl:px-16 py-24">
          <div className="text-[#222244] md:max-w-[50%]">
            <span className="inline-block bg-[#8E52F0] text-white text-sm font-semibold px-4 py-1.5 rounded-md mb-9">
              Webinar Series
            </span>

            <h1 className="text-5xl md:text-6xl font-normal md:leading-[68px] mb-12">
              Knowledge Graphs &amp; Ontologies in OpenMetadata
            </h1>

            <p className="text-lg font-semibold mb-6">
              Mar 25, 2026 11:00 AM CT
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white flex-1">
        <div className="max-w-[1440px] mx-auto px-4 md:px-10 xl:px-16 py-16">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            <div className="text-[#2A2733] text-lg">
              <div className="flex gap-4">
                <Image
                  src="/assets/meetup/google.svg"
                  alt="Google"
                  width={100}
                  height={20}
                  className="mt-1"
                />
                <Image
                  src="/assets/meetup/google.svg"
                  alt="Google"
                  width={100}
                  height={20}
                  className="mt-1"
                />
              </div>
              <p className="leading-relaxed my-8">
                OpenMetadata is an open-source project that is driving open metadata standards for data. By centralizing all your metadata in a single place in a unified metadata graph, data teams can have a unified, open platform for data discovery, observability, and governance.
              </p>

              <div className="mb-6">
                Please join our <a href="https://slack.open-metadata.org/" target="_blank" className="text-[#8E52F0]">Slack</a>, we have a very active and growing community providing support, and discussing about the great new features to add. We also run a monthly online community meeting, and you can see the recordings on the <a href="https://www.youtube.com/@OpenMetadataChannel" target="_blank" className="text-[#8E52F0]">Youtube channel</a>.
              </div>

              <div className="mb-12">
                Most importantly, show your love for the project and the community by giving us a Star on our <a href="https://github.com/open-metadata/OpenMetadata/" target="_blank" className="text-[#8E52F0]">GitHub repo</a>.
              </div>

              {/* Speakers */}
              <h2 className="text-[#2A2733] text-[24px] font-semibold mb-6">
                Speakers:
              </h2>
              <div className="grid md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-2 gap-3">
                {SPEAKERS.map((speaker) => (
                  <div
                    key={speaker.name}
                    className="border border-[#C2C5D5] rounded-xl p-4 flex flex-row items-center gap-4 bg-[#F7F9FF]"
                  >
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      width={98}
                      height={98}
                      className="w-24 h-24 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex flex-col text-[#222244]">
                      <p className="font-bold leading-tight">
                        {speaker.name}
                      </p>
                      <p className="text-sm italic leading-tight my-2 xl:-mt-2">
                        {speaker.title}
                      </p>
                      <Image
                        src="/assets/meetup/google.svg"
                        alt="Google"
                        width={70}
                        height={20}
                        className="mt-1"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl sm:p-4 relative lg:-top-80 z-20">
              <HubspotFormNew
                portalId="21369141"
                formId="7fa761f3-d0df-46ea-be80-da6bcb8c4d49"
                region="na1"
              />
            </div>
          </div>
        </div>
      </section>

      <FooterDev />
    </div>
  );
}

export default KnowledgeGraphsWebinar
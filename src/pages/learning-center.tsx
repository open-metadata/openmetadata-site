import FooterDev from "@/components/FooterDev/FooterDev";
import NavbarDev from "@/components/NavbarDev/NavbarDev.component";
import NavbarStrip from "@/components/NavbarDev/NavbarStrip.component";
import { useRouter } from "next/router";

export function getServerSideProps({ resolvedUrl }: { resolvedUrl: string }) {
  return {
    props: {
      link: resolvedUrl,
    },
  };
}

const CaseStudiesPage = () => {
  const router = useRouter();
  const handleTryOpenMetadataClick = () => {
    router.push("/#try-openmetadata");
  };

  return (
    <div>
      <div className="mx-auto fixed top-0 w-full z-[1030]">
        <NavbarDev onClick={handleTryOpenMetadataClick} />
        <NavbarStrip />
      </div>
      <div className="mt-20 md:mt-24 lg:mt-32">
        <div className="bg-gradient-to-t from-[#f2edfd] to-white py-24 px-24 text-black">
            <h1 className="text-[52px] tracking-[-0.01em]">Learning Center</h1>
            <div className="text-lg mt-2 max-w-[48%]">
              Discover guides, tutorials, and best practices to accelerate your data journey. Whether you're building data pipelines, establishing governance frameworks, or transforming data culture, find resources to do more with your data across your organization.
            </div>
        </div>
      </div>
      <FooterDev />
    </div>
  );
};

export default CaseStudiesPage;

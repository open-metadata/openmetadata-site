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

const Blog = () => {
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
        
        <div className="mt-32">
            <div className="py-1">
            <iframe
                    src="https://omblog7.wordpress.com/"
                    className="w-full min-h-screen"
                    style={{ border: 'none' }}
                    title="Blog"
                />
            </div>
        </div>
        <FooterDev />
      </div>
  );
};

export default Blog;

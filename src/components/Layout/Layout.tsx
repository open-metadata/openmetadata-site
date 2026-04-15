import { useRouter } from "next/router";
import NavbarDev from "@/components/NavbarDev/NavbarDev.component";
import NavbarStrip from "@/components/NavbarDev/NavbarStrip.component";
import SummitBanner from "@/components/NavbarDev/SummitBanner.component";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const handleTryOpenMetadataClick = () => {
    router.push("/#try-openmetadata");
  };

  return (
    <>
      <div className="mx-auto fixed top-0 w-full z-[1030]">
        <SummitBanner />
        <NavbarDev onClick={handleTryOpenMetadataClick} />
        <NavbarStrip />
      </div>
      {children}
    </>
  );
};

export default Layout;

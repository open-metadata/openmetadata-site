import { useRouter } from "next/router";
import NavbarDev from "@/components/NavbarDev/NavbarDev.component";
import AnnouncementBanner from "@/components/NavbarDev/AnnouncementBanner.component";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const handleTryOpenMetadataClick = () => {
    router.push("/#try-openmetadata");
  };

  return (
    <>
      <div className="mx-auto fixed top-0 w-full z-[1030]">
        <AnnouncementBanner />
        <NavbarDev onClick={handleTryOpenMetadataClick} />
      </div>
      {children}
    </>
  );
};

export default Layout;

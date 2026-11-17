import ParamLink from "../ParamLink";

const AnnouncementBanner = () => {
  return (
    <div className="w-full py-[6px] px-5 text-center summit-bg">
      <span className="text-black text-sm">
        OpenMetadata 2.1 is here: your business definitions in the context graph.{" "}
        <ParamLink
          name="See what's new"
          href="https://blog.open-metadata.org/announcing-openmetadata-2-1-your-business-definitions-in-the-context-graph-54c65a6c6749"
          target="_blank"
          className="underline font-semibold"
        />{" "}
        🚀
      </span>
    </div>
  );
};

export default AnnouncementBanner;

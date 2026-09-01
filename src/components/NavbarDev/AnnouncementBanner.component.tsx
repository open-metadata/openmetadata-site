import ParamLink from "../ParamLink";

const AnnouncementBanner = () => {
  return (
    <div className="w-full py-[6px] px-5 text-center summit-bg">
      <span className="text-black text-sm">
        Introducing OpenMetadata 2.0, the open context layer for AI.{" "}
        <ParamLink
          name="See what's new"
          href="https://blog.open-metadata.org/announcing-openmetadata-2-0-the-open-context-layer-for-ai-agents-83b8ce8b9dde"
          target="_blank"
          className="underline font-semibold"
        />{" "}
        🚀
      </span>
    </div>
  );
};

export default AnnouncementBanner;

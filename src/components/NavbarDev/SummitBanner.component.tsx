import ParamLink from "../ParamLink";

const SummitBanner = () => {
  return (
    <div className="w-full py-[6px] px-5 text-center summit-bg">
      <span className="text-black text-sm">
        Introducing OpenMetadata 2.0, the open context layer for AI.{" "}
        <ParamLink
          name="See what's new"
          href="/product-updates"
          className="underline font-semibold"
        />{" "}
        🚀
      </span>
    </div>
  );
};

export default SummitBanner;

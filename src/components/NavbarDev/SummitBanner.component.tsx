import ParamLink from "../ParamLink";

const SummitBanner = () => {
  return (
    <div className="w-full py-[6px] px-5 text-center summit-bg">
      <span className="text-black text-sm">
        OpenMetadata production stories from OpenAI, Yelp, Rakuten &amp; more —{" "}
        <ParamLink
          name="Learn More about Collate Summit '26"
          href="https://www.getcollate.io/summit2026"
          target="_blank"
          className="underline font-semibold"
        />{" "}
        🚀
      </span>
    </div>
  );
};

export default SummitBanner;

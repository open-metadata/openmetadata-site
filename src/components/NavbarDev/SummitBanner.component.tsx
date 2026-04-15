import ParamLink from "../ParamLink";

const SummitBanner = () => {
  return (
    <div className="w-full py-[6px] px-5 text-center" style={{ background: "linear-gradient(270deg, #ECE5FF 39.9%, #7147E8 114.41%)" }}>
      <span className="text-black text-sm font-medium">
        OpenMetadata production stories from OpenAI, Yelp, Rakuten &amp; more —{" "}
        <ParamLink
          name="Register Now for Collate Summit '26"
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

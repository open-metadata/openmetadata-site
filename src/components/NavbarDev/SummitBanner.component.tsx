import ParamLink from "../ParamLink";

const SummitBanner = () => {
  return (
    <div className="w-full py-1 px-5 bg-[#0B3547] text-center">
      <span className="text-sm font-normal text-white">
        Collate Summit &apos;26: OpenMetadata deployment stories from OpenAI, Airbus, Scout24, Rakuten &amp; more —{" "}
        <ParamLink
          name="Register Now"
          href="https://www.getcollate.io/summit2026"
          target="_blank"
          className="underline"
        />{" "}
        🚀
      </span>
    </div>
  );
};

export default SummitBanner;

import { PRIMITIVES_LIST } from "@/constants/ThreePrimitives.constants";

const ThreePrimitives = () => {
  return (
    <div className="custom-container mt-20 mb-24 px-4 md:px-16 xl:px-28">
      <h2 className="text-[#292929] text-[32px] font-medium text-center tracking-[-0.01em] lg:text-[48px]">
        Three primitives in one{" "}
        <span className="text-[#7147E8]">open Semantic Context Graph</span>
      </h2>
      <div className="mt-9 grid gap-6 md:grid-cols-3">
        {PRIMITIVES_LIST.map((item) => (
          <div
            key={item.name}
            className="bg-white border border-[#E3DAFA] rounded-lg p-8 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-10">
              <item.icon color="#7147E8" />
            </div>
            <h3 className="text-[24px] font-semibold text-[#7147E8] tracking-[-0.01em]">
              {item.name}
            </h3>
            <p className="text-[16px] text-[#555555] leading-[24px]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreePrimitives;

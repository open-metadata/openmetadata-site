import Image from "next/image";
import ParamLink from "@/components/ParamLink";
import { BlogPostSummary } from "@/lib/hashnode";

const Tag = ({ label }: { label: string }) => (
  <div className="inline-block w-fit text-sm text-[#7147E8] bg-white border border-[#7147E8]/20 rounded-[4px] px-1.5 py-0.5 mb-3">
    {label}
  </div>
);

/** Lead large on the left, remaining stacked on the right — same layout as getcollate FeaturedArticles. */
const FeaturedArticles = ({ items, heading = "Featured" }: { items: BlogPostSummary[]; heading?: string }) => {
  if (!items?.length) return null;

  const [lead, ...rest] = items;

  return (
    <div>
      <h2 className="text-black text-2xl md:text-3xl font-semibold tracking-[-0.01em] mb-6 leading-snug">
        {heading}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 lg:gap-6">
        <ParamLink href={`/blog/${lead.slug}`} className="flex flex-col group">
          <div className="relative w-full aspect-[1200/630] rounded-2xl overflow-hidden bg-gray-100">
            {lead.coverImage && (
              <Image
                src={lead.coverImage}
                alt=""
                fill
                className="object-cover scale-[1.025]"
                sizes="(max-width: 767px) 100vw, 60vw"
                priority
              />
            )}
          </div>
          <div className="pt-6 px-1 lg:px-4">
            {lead.seriesName && <Tag label={lead.seriesName} />}
            <div className="text-2xl md:text-3xl lg:text-[34px] font-semibold tracking-[-0.01em] leading-[1.2] text-black">
              {lead.title}
            </div>
            <div className="mt-5 inline-block px-5 py-3 bg-[#f2edfd] group-hover:bg-[#7147E8] group-hover:text-white duration-200 rounded-[8px] text-black font-semibold text-base">
              Read more
            </div>
          </div>
        </ParamLink>

        <div className="flex flex-col gap-8">
          {rest.map((item) => (
            <ParamLink key={item.id} href={`/blog/${item.slug}`} className="flex flex-col group">
              <div className="relative w-full aspect-[1200/630] rounded-2xl overflow-hidden bg-gray-100">
                {item.coverImage && (
                  <Image
                    src={item.coverImage}
                    alt=""
                    fill
                    className="object-cover scale-[1.025]"
                    sizes="(max-width: 767px) 100vw, 30vw"
                    priority
                  />
                )}
              </div>
              <div className="pt-5 px-1 lg:px-4">
                {item.seriesName && <Tag label={item.seriesName} />}
                <div className="text-lg md:text-xl font-semibold tracking-[-0.01em] leading-[1.3] text-black">
                  {item.title}
                </div>
                <div className="mt-5 md:mt-2 inline-block px-5 py-3 md:p-0 bg-[#f2edfd] group-hover:bg-[#7147E8] group-hover:text-white md:bg-transparent md:group-hover:bg-transparent md:text-[#7147E8] md:group-hover:underline duration-200 rounded-[8px] text-black font-semibold text-base">
                  Read more
                </div>
              </div>
            </ParamLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticles;

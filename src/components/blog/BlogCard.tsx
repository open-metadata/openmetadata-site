import Image from "next/image";
import ParamLink from "@/components/ParamLink";
import { BlogPostSummary } from "@/lib/hashnode";

const BlogCard = ({ post }: { post: BlogPostSummary }) => (
  <ParamLink
    href={`/blog/${post.slug}`}
    className="learning-center-card border border-white bg-white p-6 rounded-[10px] flex flex-col h-full"
  >
    {post.coverImage && (
      <div className="relative w-full aspect-[40/22]">
        <Image src={post.coverImage} alt={post.title} fill className="object-cover rounded-[6px]" />
      </div>
    )}
    <div className="px-2 pt-6 flex flex-col flex-grow">
      <div className="mb-3 text-[#484357] text-sm">{post.seriesName ?? "OpenMetadata"}</div>
      <div className="text-lg md:text-xl font-medium tracking-[-0.01em] leading-[1.2] text-black">
        {post.title}
      </div>
      <p className="text-[#484357] mt-3 line-clamp-3">{post.brief}</p>
      <div className="mt-auto pt-6">
        <span className="inline-block border-2 border-[#7147E8] text-[#7147E8] font-semibold text-base px-6 py-2 rounded-[3px]">
          Read More
        </span>
      </div>
    </div>
  </ParamLink>
);

export default BlogCard;

import Image from "next/image";
import ParamLink from "@/components/ParamLink";
import { BlogPostSummary } from "@/lib/hashnode";

const BlogCard = ({ post }: { post: BlogPostSummary }) => (
  <div className="rounded-md shadow-md p-4 flex flex-col w-full bg-white h-full">
    <ParamLink href={`/blog/${post.slug}`} className="flex flex-col flex-grow">
      {post.coverImage && (
        <div className="relative w-full aspect-[500/275] overflow-hidden rounded-md bg-[#f2edfd]">
          <Image
            src={post.coverImage}
            alt=""
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="text-[#484357] mt-6 text-sm">{post.seriesName ?? "OpenMetadata"}</div>
      <h2 className="text-[22px] font-semibold tracking-[0.01em] mt-2 text-black leading-snug">{post.title}</h2>
      {post.brief && <p className="text-[#484357] mt-2 line-clamp-3">{post.brief}</p>}
    </ParamLink>
  </div>
);

export default BlogCard;

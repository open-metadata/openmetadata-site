import Image from "next/image";
import ParamLink from "@/components/ParamLink";
import { HashnodePostNode } from "@/lib/hashnode";

const BlogCard = ({ post }: { post: HashnodePostNode }) => {
  const cover = post.coverImage?.url;
  return (
    <div className="rounded-md shadow-md flex flex-col w-full bg-white h-full overflow-hidden">
      <ParamLink href={`/blog/${post.slug}`} className="flex flex-col flex-grow">
        {cover && (
          <div className="relative w-full aspect-[500/275] overflow-hidden bg-[#f2edfd]">
            <Image
              src={cover}
              alt={post.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        <div className="px-4 pb-4 pt-4 flex flex-col flex-grow">
          <div className="text-[#484357] text-sm">{post.series?.name ?? "OpenMetadata"}</div>
          <h2 className="text-[22px] font-semibold tracking-[0.01em] mt-2 text-black leading-snug">
            {post.title}
          </h2>
          {post.brief && <p className="text-[#484357] mt-2 line-clamp-3">{post.brief}</p>}
        </div>
      </ParamLink>
    </div>
  );
};

export default BlogCard;

import ParamLink from "@/components/ParamLink";
import { BLOG_SITE_HOST } from "@/constants/blog.constants";

const ShareArticle = ({ slug }: { slug: string }) => {
  const url = `${BLOG_SITE_HOST}/blog/${slug}`;
  return (
    <div className="mt-10 pl-4">
      <h2 className="text-xl text-black font-semibold mb-4 leading-snug">Share this article</h2>
      <div className="flex gap-4 text-[#7147E8] font-medium">
        <ParamLink
          href={`https://twitter.com/intent/post?url=${encodeURIComponent(`${url}?ref=twitter-share`)}`}
          target="_blank"
          className="hover:underline"
        >
          X
        </ParamLink>
        <ParamLink
          href={`https://www.linkedin.com/feed/?linkOrigin=LI_BADGE&shareActive=true&shareUrl=${encodeURIComponent(url)}`}
          target="_blank"
          className="hover:underline"
        >
          LinkedIn
        </ParamLink>
      </div>
    </div>
  );
};

export default ShareArticle;

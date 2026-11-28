import { useEffect, useState } from "react";
import ParamLink from "@/components/ParamLink";
import BlogCard from "@/components/blog/BlogCard";
import { HashnodePostNode } from "@/lib/hashnode";

const KeepReading = ({ series, slug }: { series: string | null; slug: string }) => {
  const [data, setData] = useState<HashnodePostNode[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        let newPosts: HashnodePostNode[] = [];

        if (series) {
          const response = await fetch("/api/blog/seriesPosts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              variables: { after: null, first: 4, seriesSlug: series },
            }),
          });
          const { data: json } = await response.json();
          newPosts =
            json?.publication?.series?.posts?.edges?.map(
              (edge: { node: HashnodePostNode }) => edge.node
            ) || [];
        } else {
          const response = await fetch("/api/blog/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              variables: { after: null, first: 4 },
            }),
          });
          const { data: json } = await response.json();
          newPosts =
            json?.publication?.posts?.edges?.map((edge: { node: HashnodePostNode }) => edge.node) ||
            [];
        }

        setData(newPosts.filter((post) => post.slug !== slug).slice(0, 3));
      } catch (error) {
        console.error("Error fetching keep reading posts:", error);
      }
    };

    fetchPosts();
  }, [series, slug]);

  if (!data.length) return null;

  return (
    <div className="max-w-[1440px] mx-auto px-5 md:px-10 xl:px-16 py-16 overflow-hidden">
      <div className="flex justify-between items-center">
        <h2 className="text-black text-4xl tracking-[-0.03em]">Keep Reading</h2>
        <ParamLink href="/blog" className="text-[#7147E8] underline">
          View All
        </ParamLink>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
        {data.map((post) => (
          <BlogCard post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default KeepReading;

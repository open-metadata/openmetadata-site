import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import FooterDev from "@/components/FooterDev/FooterDev";
import ParamLink from "@/components/ParamLink";
import BlogMeta from "@/components/blog/BlogMeta";
import KeepReading from "@/components/blog/KeepReading";
import LeftPanel from "@/components/blog/LeftPanel";
import StructuredData from "@/components/blog/StructuredData";
import {
  BLOG_SITE_HOST,
  BLOG_TITLE,
  HASHNODE_MAX_PAGE_SIZE,
  HASHNODE_POST_QUERY,
} from "@/constants/blog.constants";
import { BlogPostDetails, getPostBySlug, getPosts } from "@/lib/hashnode";
import { extractH2s, renderBlogMarkdown } from "@/utils/blogMarkdown";

interface Props {
  post: BlogPostDetails;
  html: string;
  toc: { title: string; id: string }[];
  link: string;
  host: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const slugs: string[] = [];
    let after: string | null = null;
    let hasNextPage = true;

    while (hasNextPage) {
      const response = await getPosts(HASHNODE_POST_QUERY(), {
        first: HASHNODE_MAX_PAGE_SIZE,
        after,
      });
      const posts = response?.data?.publication?.posts;
      const edges = posts?.edges || [];
      slugs.push(...edges.map((edge: { node: { slug: string } }) => edge.node.slug).filter(Boolean));
      hasNextPage = posts?.pageInfo?.hasNextPage || false;
      after = posts?.pageInfo?.endCursor || null;
    }

    return {
      paths: slugs.map((slug) => ({ params: { slug } })),
      fallback: "blocking",
    };
  } catch (error) {
    console.error("Error fetching blog paths from Hashnode:", error);
    return { paths: [], fallback: "blocking" };
  }
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = String(params?.slug || "");
  if (!slug) return { notFound: true };

  try {
    const post = await getPostBySlug(slug);
    if (!post) return { notFound: true, revalidate: 60 };

    return {
      props: {
        post,
        html: renderBlogMarkdown(post.markdown),
        toc: extractH2s(post.markdown),
        link: `/blog/${slug}`,
        host: BLOG_SITE_HOST,
      },
      revalidate: 60,
    };
  } catch (e) {
    console.error("blog post: Hashnode fetch failed", e);
    return { notFound: true, revalidate: 10 };
  }
};

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });

const BlogPostPage = ({ post, html, toc, link, host }: Props) => {
  const title = `${post.seo?.title || post.title} | ${BLOG_TITLE}`;
  const description = post.seo?.description || undefined;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.publishedAt,
    image: post.coverImage || undefined,
    author: post.author
      ? { "@type": "Person", name: post.author.name }
      : { "@type": "Organization", name: "OpenMetadata" },
    publisher: {
      "@type": "Organization",
      name: "OpenMetadata",
      url: host,
    },
    mainEntityOfPage: `${host}${link}`,
    description,
  };

  return (
    <div>
      <BlogMeta
        link={link}
        host={host}
        metaData={{
          title,
          description,
          ogimage: post.coverImage || undefined,
          keywords: post.tags.map((t) => t.slug).join(", "),
        }}
      />
      <StructuredData data={structuredData} />

      <header className="bg-gradient-to-t from-[#f2edfd] to-white mt-9 md:mt-16">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 xl:px-16 py-16 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <nav className="flex gap-4 text-gray-500 items-center text-sm" aria-label="Breadcrumb">
              <ParamLink
                href="/blog"
                className="border border-gray-400 py-1 px-2 rounded-[6px] hover:underline"
              >
                Blog
              </ParamLink>
              {post.series && (
                <ParamLink href={`/blog/series/${post.series.slug}`} className="hover:underline">
                  {post.series.name}
                </ParamLink>
              )}
            </nav>
            <h1 className="text-4xl lg:text-[48px] lg:leading-[52px] text-black tracking-[-0.01em] mt-8 mb-4 leading-snug">
              {post.title}
            </h1>
            <div className="text-black">
              {fmtDate(post.publishedAt)}
              {post.readTimeInMinutes ? ` · ${post.readTimeInMinutes} min read` : ""}
            </div>
            {post.author && (
              <div className="flex items-center gap-3 mt-5">
                {post.author.profilePicture && (
                  <Image
                    src={post.author.profilePicture}
                    alt={post.author.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                )}
                <span className="text-xl font-semibold text-black">{post.author.name}</span>
              </div>
            )}
          </div>
          {post.coverImage && (
            <div className="relative w-full aspect-[600/350]">
              <Image src={post.coverImage} alt={post.title} fill className="object-cover rounded-md" />
            </div>
          )}
        </div>
      </header>

      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-7 gap-8 py-10 px-6 md:px-10 xl:px-16">
        <aside className="lg:col-span-2 lg:sticky lg:top-28 self-start">
          <LeftPanel h2List={toc} slug={post.slug} />
        </aside>

        <article className="lg:col-span-5">
          {html ? (
            <div className="max-w-none text-black" dangerouslySetInnerHTML={{ __html: html }} />
          ) : (
            <p className="text-center py-10 text-black">Post content not available</p>
          )}
          {post.tags.length > 0 && (
            <div className="flex mt-10 gap-3 flex-wrap">
              {post.tags.map((t) => (
                <ParamLink
                  key={t.slug}
                  href={`/blog/tag/${t.slug}`}
                  className="border border-gray-300 rounded-full px-3 py-1 text-sm text-black"
                >
                  #{t.slug}
                </ParamLink>
              ))}
            </div>
          )}
          <div className="md:hidden">
            <LeftPanel h2List={[]} slug={post.slug} />
          </div>
        </article>
      </div>

      <KeepReading series={post.series?.slug ?? null} slug={post.slug} />
      <FooterDev />
    </div>
  );
};

export default BlogPostPage;

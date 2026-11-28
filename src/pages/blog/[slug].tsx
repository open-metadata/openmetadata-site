import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import FooterDev from "@/components/FooterDev/FooterDev";
import ParamLink from "@/components/ParamLink";
import BlogCard from "@/components/blog/BlogCard";
import { BlogPostDetails, BlogPostSummary, getAllPosts, getPostBySlug } from "@/lib/hashnode";
import { BLOG_TITLE } from "@/constants/blog.constants";
import { extractH2s, renderBlogMarkdown } from "@/utils/blogMarkdown";

interface Props {
  post: BlogPostDetails;
  html: string;
  toc: { title: string; id: string }[];
  related: BlogPostSummary[];
  link: string;
}

export const getStaticPaths: GetStaticPaths = async () => ({ paths: [], fallback: "blocking" });

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string;
  try {
    const post = await getPostBySlug(slug);
    if (!post) return { notFound: true, revalidate: 60 };
    const all = await getAllPosts();
    const sameSeries = post.seriesSlug ? all.filter((p) => p.seriesSlug === post.seriesSlug) : all;
    const related = sameSeries.filter((p) => p.slug !== slug).slice(0, 3);
    return {
      props: {
        post,
        html: renderBlogMarkdown(post.markdown),
        toc: extractH2s(post.markdown),
        related,
        link: `/blog/${slug}`,
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

const BlogPostPage = ({ post, html, toc, related, link }: Props) => {
  const shareUrl = encodeURIComponent(`https://open-metadata.org${link}`);
  return (
    <div>
      <Head>
        <title>{`${post.seoTitle || post.title} | ${BLOG_TITLE}`}</title>
        {post.seoDescription && <meta name="description" content={post.seoDescription} />}
        {post.coverImage && <meta property="og:image" content={post.coverImage} />}
      </Head>

      <header className="bg-gradient-to-t from-[#f2edfd] to-white mt-9 md:mt-16">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 xl:px-16 py-16 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <nav className="flex gap-4 text-gray-500 items-center text-sm" aria-label="Breadcrumb">
              <ParamLink href="/blog" className="border border-gray-400 py-1 px-2 rounded-[6px] hover:underline">
                Blog
              </ParamLink>
              {post.seriesName && post.seriesSlug && (
                <ParamLink href={`/blog/series/${post.seriesSlug}`} className="hover:underline">
                  {post.seriesName}
                </ParamLink>
              )}
            </nav>
            <h1 className="text-4xl lg:text-[48px] lg:leading-[52px] text-black tracking-[-0.01em] mt-8 mb-4">
              {post.title}
            </h1>
            <div className="text-black">
              {fmtDate(post.publishedAt)}
              {post.readTimeInMinutes ? ` · ${post.readTimeInMinutes} min read` : ""}
            </div>
            {post.author && (
              <div className="flex items-center gap-3 mt-5">
                {post.author.profilePicture && (
                  <Image src={post.author.profilePicture} alt={post.author.name} width={48} height={48} className="rounded-full" />
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
          {toc.length > 0 && (
            <div className="learning-center-card bg-white border border-white rounded-3xl p-7">
              <div className="text-black font-semibold text-xl leading-snug">Table of Contents</div>
              <div className="flex flex-col gap-4 mt-5 text-black lg:max-h-[calc(100vh-18rem)] lg:overflow-y-auto">
                {toc.map((t) => (
                  <a key={t.id} href={`#${t.id}`} className="border-b border-gray-300 pb-3">
                    {t.title}
                  </a>
                ))}
              </div>
            </div>
          )}
          <div className="mt-8 pl-2">
            <div className="text-xl text-black font-semibold mb-3">Share this article</div>
            <div className="flex gap-4 text-[#7147E8] font-medium">
              <a href={`https://twitter.com/intent/post?url=${shareUrl}`} target="_blank" rel="noreferrer">
                X
              </a>
              <a
                href={`https://www.linkedin.com/feed/?shareActive=true&shareUrl=${shareUrl}`}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
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
        </article>
      </div>

      {related.length > 0 && (
        <section className="max-w-[1440px] mx-auto px-6 md:px-10 xl:px-16 pb-20">
          <div className="flex justify-between items-center">
            <h2 className="text-black text-4xl tracking-[-0.03em]">Keep Reading</h2>
            <ParamLink href="/blog" className="text-[#7147E8] underline">
              View All
            </ParamLink>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
            {related.map((p) => (
              <BlogCard key={p.id} post={p} />
            ))}
          </div>
        </section>
      )}
      <FooterDev />
    </div>
  );
};

export default BlogPostPage;

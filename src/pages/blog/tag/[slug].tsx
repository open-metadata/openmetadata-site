import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import FooterDev from "@/components/FooterDev/FooterDev";
import BlogListing from "@/components/blog/BlogListing";
import {
  BlogFilterOption,
  BlogPostSummary,
  buildSeriesOptions,
  buildTagOptions,
  getAllPosts,
  tagSlugToLabel,
} from "@/lib/hashnode";
import { BLOG_TITLE } from "@/constants/blog.constants";

interface Props {
  posts: BlogPostSummary[];
  tags: BlogFilterOption[];
  series: BlogFilterOption[];
  tag: string;
  link: string;
}

export const getStaticPaths: GetStaticPaths = async () => ({ paths: [], fallback: "blocking" });

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const tag = params?.slug as string;
  try {
    const all = await getAllPosts();
    const posts = all.filter((p) => p.tags.includes(tag));
    if (posts.length === 0) return { notFound: true, revalidate: 60 };
    return {
      props: { posts, tags: buildTagOptions(all), series: buildSeriesOptions(all), tag, link: `/blog/tag/${tag}` },
      revalidate: 60,
    };
  } catch (e) {
    console.error("blog tag: Hashnode fetch failed", e);
    return { notFound: true, revalidate: 10 };
  }
};

const BlogTagPage = ({ posts, tags, series, tag }: Props) => (
  <div>
    <Head>
      <title>{`${tagSlugToLabel(tag)} | ${BLOG_TITLE}`}</title>
    </Head>
    <BlogListing
      posts={posts}
      featured={[]}
      tags={tags}
      series={series}
      selectedTag={tag}
      title={`Posts tagged ${tagSlugToLabel(tag)}`}
    />
    <FooterDev />
  </div>
);

export default BlogTagPage;

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
} from "@/lib/hashnode";
import { BLOG_TITLE } from "@/constants/blog.constants";

interface Props {
  posts: BlogPostSummary[];
  tags: BlogFilterOption[];
  series: BlogFilterOption[];
  seriesSlug: string;
  seriesName: string;
  link: string;
}

export const getStaticPaths: GetStaticPaths = async () => ({ paths: [], fallback: "blocking" });

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const seriesSlug = params?.series as string;
  try {
    const all = await getAllPosts();
    const posts = all.filter((p) => p.seriesSlug === seriesSlug);
    if (posts.length === 0) return { notFound: true, revalidate: 60 };
    return {
      props: {
        posts,
        tags: buildTagOptions(all),
        series: buildSeriesOptions(all),
        seriesSlug,
        seriesName: posts[0].seriesName ?? seriesSlug,
        link: `/blog/series/${seriesSlug}`,
      },
      revalidate: 60,
    };
  } catch (e) {
    console.error("blog series: Hashnode fetch failed", e);
    return { notFound: true, revalidate: 10 };
  }
};

const BlogSeriesPage = ({ posts, tags, series, seriesSlug, seriesName }: Props) => (
  <div>
    <Head>
      <title>{`${seriesName} | ${BLOG_TITLE}`}</title>
    </Head>
    <BlogListing
      posts={posts}
      featured={[]}
      tags={tags}
      series={series}
      selectedSeries={seriesSlug}
      title={seriesName}
    />
    <FooterDev />
  </div>
);

export default BlogSeriesPage;

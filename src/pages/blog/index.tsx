import { GetStaticProps } from "next";
import Head from "next/head";
import FooterDev from "@/components/FooterDev/FooterDev";
import BlogListing from "@/components/blog/BlogListing";
import {
  BlogFilterOption,
  BlogPostSummary,
  buildSeriesOptions,
  buildTagOptions,
  getAllPosts,
  pickFeatured,
} from "@/lib/hashnode";
import { BLOG_TITLE } from "@/constants/blog.constants";

interface Props {
  posts: BlogPostSummary[];
  featured: BlogPostSummary[];
  tags: BlogFilterOption[];
  series: BlogFilterOption[];
  link: string;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const posts = await getAllPosts();
    return {
      props: {
        posts,
        featured: pickFeatured(posts),
        tags: buildTagOptions(posts),
        series: buildSeriesOptions(posts),
        link: "/blog",
      },
      revalidate: 60,
    };
  } catch (e) {
    console.error("blog index: Hashnode fetch failed", e);
    return { props: { posts: [], featured: [], tags: [], series: [], link: "/blog" }, revalidate: 10 };
  }
};

const BlogIndex = ({ posts, featured, tags, series }: Props) => (
  <div>
    <Head>
      <title>{`${BLOG_TITLE} | OpenMetadata`}</title>
      <meta name="description" content="News, releases, and ideas from the OpenMetadata community." />
    </Head>
    <BlogListing posts={posts} featured={featured} tags={tags} series={series} title="Latest posts" />
    <FooterDev />
  </div>
);

export default BlogIndex;

import { GetStaticPaths, GetStaticProps } from "next";
import FooterDev from "@/components/FooterDev/FooterDev";
import BlogListing from "@/components/blog/BlogListing";
import BlogMeta from "@/components/blog/BlogMeta";
import { BLOG_SITE_HOST, BLOG_TITLE } from "@/constants/blog.constants";
import { usePagination } from "@/hooks/usePagination";
import { useBlogSearch } from "@/hooks/useBlogSearch";
import {
  BlogTag,
  FeaturedItem,
  SeriesNode,
  getBlogFilters,
  getFeaturedBlogPosts,
} from "@/lib/hashnode";

interface Props {
  currentPage: number;
  featuredPosts: FeaturedItem[];
  boundaryCursor: string | null;
  skipCount: number;
  initialSeries: SeriesNode[];
  blogTags: BlogTag[];
  link: string;
  host: string;
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: "blocking",
});

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const pageNumber = parseInt(String(context.params?.page), 10);
  if (Number.isNaN(pageNumber) || pageNumber < 2) {
    return { notFound: true };
  }

  const host = BLOG_SITE_HOST;
  try {
    const [{ featuredPosts, boundaryCursor, skipCount }, filters] = await Promise.all([
      getFeaturedBlogPosts(),
      getBlogFilters(),
    ]);

    return {
      props: {
        currentPage: pageNumber,
        featuredPosts,
        boundaryCursor,
        skipCount,
        ...filters,
        link: `/blog/page/${pageNumber}`,
        host,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error fetching blog page data:", error);
    return { notFound: true };
  }
};

const BlogPage = (props: Props) => {
  const search = useBlogSearch();
  const pagination = usePagination(
    "posts",
    {},
    props.currentPage,
    null,
    [],
    0,
    {
      globalBoundaryCursor: props.boundaryCursor,
      skipCount: props.skipCount,
    }
  );

  const title = `Page ${pagination.currentPage} of OpenMetadata Blog`;

  return (
    <div className="mt-16 md:mt-20">
      <BlogMeta
        link={props.link}
        host={props.host}
        metaData={{
          title: `${title} | ${BLOG_TITLE}`,
          description: "News, releases, and ideas from the OpenMetadata community.",
        }}
      />
      <BlogListing
        featuredPosts={props.featuredPosts}
        series={props.initialSeries}
        tags={props.blogTags}
        selectedSeries={null}
        search={search}
        pagination={pagination}
        title={search.isActive ? `Search results for “${search.query}”` : title}
      />
      <FooterDev />
    </div>
  );
};

export default BlogPage;

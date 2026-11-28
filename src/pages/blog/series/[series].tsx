import { GetStaticPaths, GetStaticProps } from "next";
import FooterDev from "@/components/FooterDev/FooterDev";
import BlogListing from "@/components/blog/BlogListing";
import BlogMeta from "@/components/blog/BlogMeta";
import {
  BLOG_SITE_HOST,
  HASHNODE_SERIES_POSTS_QUERY,
  POST_COUNT_PER_PAGE,
} from "@/constants/blog.constants";
import { usePagination } from "@/hooks/usePagination";
import { useBlogSearch } from "@/hooks/useBlogSearch";
import {
  BlogTag,
  FeaturedItem,
  HashnodePostNode,
  SeriesNode,
  getBlogFilters,
  getFeaturedBlogPosts,
  getSeriesPostCount,
  getSeriesPosts,
} from "@/lib/hashnode";

interface Props {
  featuredPosts: FeaturedItem[];
  initialPosts: HashnodePostNode[];
  initialTotalPosts: number;
  selectedSeriesData: SeriesNode;
  initialSeries: SeriesNode[];
  blogTags: BlogTag[];
  link: string;
  host: string;
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: "blocking",
});

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const seriesSlug = String(params?.series || "");

  try {
    const [{ featuredPosts }, filters] = await Promise.all([
      getFeaturedBlogPosts(),
      getBlogFilters(),
    ]);

    const selectedSeriesData = filters.initialSeries.find((s: SeriesNode) => s.slug === seriesSlug);
    if (!selectedSeriesData) {
      return { notFound: true };
    }

    const [postsResponse, totalPosts] = await Promise.all([
      getSeriesPosts(HASHNODE_SERIES_POSTS_QUERY(), {
        seriesSlug,
        first: POST_COUNT_PER_PAGE,
      }),
      getSeriesPostCount(seriesSlug),
    ]);
    const postsData = postsResponse?.data?.publication?.series?.posts;

    return {
      props: {
        featuredPosts,
        initialPosts: (postsData?.edges || []).map((edge: { node: HashnodePostNode }) => edge.node),
        initialTotalPosts: totalPosts,
        selectedSeriesData,
        ...filters,
        link: `/blog/series/${seriesSlug}`,
        host: BLOG_SITE_HOST,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error fetching series page data:", error);
    return { notFound: true };
  }
};

const BlogSeriesPage = (props: Props) => {
  const { selectedSeriesData } = props;
  const search = useBlogSearch({ seriesSlug: selectedSeriesData.slug });
  const pagination = usePagination(
    "seriesPosts",
    { seriesSlug: selectedSeriesData.slug },
    1,
    selectedSeriesData,
    props.initialPosts,
    props.initialTotalPosts
  );

  return (
    <div className="mt-16 md:mt-20">
      <BlogMeta
        link={props.link}
        host={props.host}
        metaData={{
          title: `${selectedSeriesData.name} | OpenMetadata Blog`,
          description: `Posts in the ${selectedSeriesData.name} series`,
        }}
      />
      <BlogListing
        featuredPosts={props.featuredPosts}
        series={props.initialSeries}
        tags={props.blogTags}
        selectedSeries={selectedSeriesData}
        search={search}
        pagination={pagination}
        title={
          search.isActive
            ? `Search results for “${search.query}” in ${selectedSeriesData.name}`
            : `${selectedSeriesData.name} Series - Page ${pagination.currentPage}`
        }
      />
      <FooterDev />
    </div>
  );
};

export default BlogSeriesPage;

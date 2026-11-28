import { GetStaticPaths, GetStaticProps } from "next";
import FooterDev from "@/components/FooterDev/FooterDev";
import BlogListing from "@/components/blog/BlogListing";
import BlogMeta from "@/components/blog/BlogMeta";
import { BLOG_SITE_HOST } from "@/constants/blog.constants";
import { usePagination } from "@/hooks/usePagination";
import { useBlogSearch } from "@/hooks/useBlogSearch";
import {
  BlogTag,
  FeaturedItem,
  SeriesNode,
  getBlogFilters,
  getFeaturedBlogPosts,
  getSeriesPostCount,
} from "@/lib/hashnode";

interface Props {
  currentPage: number;
  featuredPosts: FeaturedItem[];
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
  const pageNumber = parseInt(String(params?.page), 10);
  if (Number.isNaN(pageNumber) || pageNumber < 2) {
    return { notFound: true };
  }

  try {
    const [{ featuredPosts }, filters, totalPosts] = await Promise.all([
      getFeaturedBlogPosts(),
      getBlogFilters(),
      getSeriesPostCount(seriesSlug),
    ]);

    const selectedSeriesData = filters.initialSeries.find((s: SeriesNode) => s.slug === seriesSlug);
    if (!selectedSeriesData) {
      return { notFound: true };
    }

    return {
      props: {
        currentPage: pageNumber,
        featuredPosts,
        initialTotalPosts: totalPosts,
        selectedSeriesData,
        ...filters,
        link: `/blog/series/${seriesSlug}/page/${pageNumber}`,
        host: BLOG_SITE_HOST,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error fetching series page data:", error);
    return { notFound: true };
  }
};

const BlogSeriesPaginatedPage = (props: Props) => {
  const { selectedSeriesData } = props;
  const search = useBlogSearch({ seriesSlug: selectedSeriesData.slug });
  const pagination = usePagination(
    "seriesPosts",
    { seriesSlug: selectedSeriesData.slug },
    props.currentPage,
    selectedSeriesData,
    [],
    props.initialTotalPosts
  );

  return (
    <div className="mt-16 md:mt-20">
      <BlogMeta
        link={props.link}
        host={props.host}
        metaData={{
          title: `${selectedSeriesData.name} | OpenMetadata Blog — Page ${props.currentPage}`,
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

export default BlogSeriesPaginatedPage;

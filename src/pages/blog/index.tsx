import { GetStaticProps } from "next";
import FooterDev from "@/components/FooterDev/FooterDev";
import BlogListing from "@/components/blog/BlogListing";
import BlogMeta from "@/components/blog/BlogMeta";
import {
  HASHNODE_POST_QUERY,
  POST_COUNT_PER_PAGE,
  BLOG_TITLE,
  BLOG_SITE_HOST,
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
  getPosts,
} from "@/lib/hashnode";

interface Props {
  featuredPosts: FeaturedItem[];
  boundaryCursor: string | null;
  skipCount: number;
  initialPosts: HashnodePostNode[];
  initialTotalPosts: number;
  initialSeries: SeriesNode[];
  blogTags: BlogTag[];
  link: string;
  host: string;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const host = BLOG_SITE_HOST;
  const base = {
    featuredPosts: [] as FeaturedItem[],
    boundaryCursor: null as string | null,
    skipCount: 0,
    initialPosts: [] as HashnodePostNode[],
    initialTotalPosts: 0,
    initialSeries: [] as SeriesNode[],
    blogTags: [] as BlogTag[],
    link: "/blog",
    host,
  };

  try {
    const filters = await getBlogFilters();
    const { featuredPosts, boundaryCursor, skipCount } = await getFeaturedBlogPosts();
    const postsRes = await getPosts(HASHNODE_POST_QUERY(), {
      first: POST_COUNT_PER_PAGE,
      after: boundaryCursor,
    });
    const postsData = postsRes?.data?.publication?.posts;

    return {
      props: {
        ...base,
        ...filters,
        featuredPosts,
        boundaryCursor,
        skipCount,
        initialPosts: (postsData?.edges || []).map((edge: { node: HashnodePostNode }) => edge.node),
        initialTotalPosts: Math.max((postsData?.totalDocuments || 0) - skipCount, 0),
      },
      revalidate: 60,
    };
  } catch (e) {
    console.error("blog index: Hashnode fetch failed", e);
    return { props: base, revalidate: 10 };
  }
};

const BlogIndex = (props: Props) => {
  const search = useBlogSearch();
  const pagination = usePagination(
    "posts",
    {},
    1,
    null,
    props.initialPosts,
    props.initialTotalPosts,
    {
      globalBoundaryCursor: props.boundaryCursor,
      skipCount: props.skipCount,
    }
  );

  return (
    <div className="mt-16 md:mt-20">
      <BlogMeta
        link={props.link}
        host={props.host}
        metaData={{
          title: `${BLOG_TITLE} | OpenMetadata`,
          description: "News, releases, and ideas from the OpenMetadata community.",
          keywords: "OpenMetadata, data catalog, metadata, open source",
        }}
      />
      <BlogListing
        featuredPosts={props.featuredPosts}
        series={props.initialSeries}
        tags={props.blogTags}
        selectedSeries={null}
        search={search}
        pagination={pagination}
        title={
          search.isActive
            ? `Search results for “${search.query}”`
            : pagination.currentPage === 1
              ? "Latest posts"
              : `Page ${pagination.currentPage} of OpenMetadata Blog`
        }
      />
      <FooterDev />
    </div>
  );
};

export default BlogIndex;

import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import FooterDev from "@/components/FooterDev/FooterDev";
import BlogFilters from "@/components/blog/BlogFilters";
import BlogMeta from "@/components/blog/BlogMeta";
import BlogPostList from "@/components/blog/BlogPostList";
import { BLOG_SITE_HOST, HASHNODE_POST_BY_TAG_QUERY } from "@/constants/blog.constants";
import { usePagination } from "@/hooks/usePagination";
import { useBlogSearch } from "@/hooks/useBlogSearch";
import { BlogTag, SeriesNode, getBlogFilters, getPosts, tagSlugToLabel } from "@/lib/hashnode";

interface Props {
  link: string;
  host: string;
  currentPage: number;
  slug: string;
  initialSeries: SeriesNode[];
  blogTags: BlogTag[];
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const slug = String(context.params?.slug || "");
  const pageNumber = parseInt(String(context.params?.page), 10);
  if (Number.isNaN(pageNumber) || pageNumber < 2) {
    return { notFound: true };
  }

  try {
    const [postsResponse, filters] = await Promise.all([
      getPosts(HASHNODE_POST_BY_TAG_QUERY(), {
        tagSlugs: [slug],
        first: 1,
        after: null,
      }),
      getBlogFilters(),
    ]);

    const postsData = postsResponse?.data?.publication?.posts;
    const isTagged = postsData?.edges[0]?.node.tags?.some((tag: { slug: string }) => tag.slug === slug);
    if (!isTagged) {
      return { notFound: true };
    }

    return {
      props: {
        link: (context.resolvedUrl || `/blog/tag/${slug}/page/${pageNumber}`).split("?")[0],
        host: BLOG_SITE_HOST,
        currentPage: pageNumber,
        slug,
        ...filters,
      },
    };
  } catch (error) {
    console.error("Error validating tag for pagination:", error);
    return { notFound: true };
  }
};

const BlogTagPage = (props: Props) => {
  const router = useRouter();
  const slug = props.slug || String(router.query.slug || "");
  const label = tagSlugToLabel(slug);

  const search = useBlogSearch({ tagSlug: slug });
  const pagination = usePagination("postsByTag", { tagSlugs: [slug] }, props.currentPage);

  return (
    <div className="mt-16 md:mt-20 max-w-[1440px] mx-auto">
      <BlogMeta
        link={props.link}
        host={props.host}
        metaData={{
          title: `${label} | OpenMetadata Blog — Page ${props.currentPage}`,
          description: `Blog posts tagged with ${label}`,
          keywords: slug || "",
        }}
      />
      <div className="py-10 px-5 md:px-10 xl:px-16">
        <BlogFilters
          series={props.initialSeries}
          tags={props.blogTags}
          selectedSeries={null}
          selectedTag={slug}
          search={search}
        />
        <div className="text-lg text-gray-600 font-medium">Tags</div>
        <h1 className="text-4xl md:text-[52px] md:leading-[56px] text-black font-normal">
          {label}
        </h1>
        <BlogPostList search={search} pagination={pagination} />
      </div>
      <FooterDev />
    </div>
  );
};

export default BlogTagPage;

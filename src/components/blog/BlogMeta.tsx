import Head from "next/head";
import { BLOG_SITE_HOST, BLOG_TITLE } from "@/constants/blog.constants";

export interface BlogMetaData {
  title: string;
  description?: string;
  ogimage?: string;
  keywords?: string;
}

interface Props {
  metaData: BlogMetaData;
  link: string;
  host?: string | null;
  prevUrl?: string | null;
  nextUrl?: string | null;
}

const BlogMeta = ({
  metaData: { title, description, ogimage, keywords },
  link,
  host,
  prevUrl,
  nextUrl,
}: Props) => {
  const site = host || BLOG_SITE_HOST;
  const cleanLink = link ? link.split("?")[0] : "";
  const url = `${site}${cleanLink}`;
  const rawOgImage = ogimage || "";
  const ogImageUrl = rawOgImage
    ? /^https?:\/\//.test(rawOgImage)
      ? rawOgImage
      : `${site}${rawOgImage.startsWith("/") ? "" : "/"}${rawOgImage}`
    : undefined;

  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="OpenMetadata" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      {prevUrl && <link rel="prev" href={prevUrl} />}
      {nextUrl && <link rel="next" href={nextUrl} />}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      {ogImageUrl && <meta property="og:image" content={ogImageUrl} />}
      <meta property="og:site_name" content={BLOG_TITLE} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@open_metadata" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      {ogImageUrl && <meta name="twitter:image" content={ogImageUrl} />}
    </Head>
  );
};

export default BlogMeta;

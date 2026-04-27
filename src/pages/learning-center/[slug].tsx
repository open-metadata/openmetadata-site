import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { GetStaticProps, GetStaticPaths } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Image from 'next/image'
import { useRouter } from 'next/router'
import NavbarDev from '@/components/NavbarDev/NavbarDev.component'
import NavbarStrip from '@/components/NavbarDev/NavbarStrip.component'
import FooterDev from '@/components/FooterDev/FooterDev'
import ParamLink from '@/components/ParamLink'
import DetailsPageRightPanel from '@/components/learning-center/DetailsPageRightPanel'
import { mdxComponents } from '@/components/MDXComponents'
import { cleanMarkdownContent } from '@/utils/markdownUtils'

const CONTENT_DIR = path.join(process.cwd(), 'content', 'learning-center')

interface Article {
    slug: string
    title: string
    description: string | null
    date: string | null
    author: string | null
    cluster: string
}

interface Props {
    article: Article
    mdxSource: MDXRemoteSerializeResult
    isRightPanelVisible: boolean
    link: string
}

export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const files = fs.readdirSync(CONTENT_DIR)
        const paths = files
            .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
            .map((f) => ({ params: { slug: f.replace(/\.mdx?$/, '') } }))
        return { paths, fallback: 'blocking' }
    } catch {
        return { paths: [], fallback: 'blocking' }
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = params?.slug as string
    const mdPath = path.join(CONTENT_DIR, `${slug}.md`)
    const mdxPath = path.join(CONTENT_DIR, `${slug}.mdx`)
    const filePath = fs.existsSync(mdxPath) ? mdxPath : mdPath

    if (!fs.existsSync(filePath)) {
        return { notFound: true }
    }

    const raw = fs.readFileSync(filePath, 'utf8')
    const { data: frontmatter, content } = matter(raw)
    const cleaned = cleanMarkdownContent(content)

    const mdxSource = await serialize(cleaned, {
        mdxOptions: { remarkPlugins: [], rehypePlugins: [] },
    })

    const title =
        frontmatter.title ||
        slug.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())

    return {
        props: {
            article: {
                slug,
                title,
                description: frontmatter.description || null,
                date: frontmatter.date || null,
                author: frontmatter.author || null,
                cluster: frontmatter.cluster || '',
            },
            mdxSource,
            isRightPanelVisible: frontmatter.isRightPanelVisible ?? true,
            link: `/learning-center/${slug}`,
        },
        revalidate: 60 * 60,
    }
}

const toId = (children: React.ReactNode): string =>
    String(children ?? '')
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]/g, '')

const LearningCenterArticle = ({ article, mdxSource, isRightPanelVisible, link }: Props) => {
    const router = useRouter()
    const clusterSlug = article.cluster
        ?.split('&')[0]
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-')

    return (
        <div>
            <div className="mx-auto fixed top-0 w-full z-[1030]">
                <NavbarDev onClick={() => router.push('/#try-openmetadata')} />
                <NavbarStrip />
            </div>

            <div className="mt-20 md:mt-24 lg:mt-32 bg-gradient-to-t from-[#f2edfd] to-white min-h-screen">
                <div className="max-w-[1440px] mx-auto py-20 px-5 md:px-10 xl:px-16">
                    <div
                        className={
                            isRightPanelVisible
                                ? 'grid lg:grid-cols-7 gap-8'
                                : ''
                        }
                    >
                        <div className="lg:col-span-5">
                            {/* Breadcrumb */}
                            <div className="flex gap-4 text-gray-500 items-center text-sm mb-6">
                                <ParamLink
                                    href="/learning-center"
                                    className="border border-gray-400 py-1 px-2 rounded-[6px] hover:underline"
                                >
                                    Learning Center
                                </ParamLink>
                                {article.cluster && (
                                    <ParamLink
                                        href={`/learning-center/topic/${clusterSlug}`}
                                        className="py-1 px-2 hover:underline"
                                    >
                                        {article.cluster}
                                    </ParamLink>
                                )}
                            </div>

                            {/* Article content */}
                            <div className="lc-article-body">
                                <MDXRemote
                                    {...mdxSource}
                                    components={{
                                        ...mdxComponents,
                                        h1: ({ children }) => (
                                            <h1 id={toId(children)} className="lc-h1">{children}</h1>
                                        ),
                                        h2: ({ children }) => (
                                            <h2 id={toId(children)} className="lc-h2">{children}</h2>
                                        ),
                                        h3: ({ children }) => (
                                            <h3 id={toId(children)} className="lc-h3">{children}</h3>
                                        ),
                                        h4: ({ children }) => (
                                            <h4 id={toId(children)} className="lc-h4">{children}</h4>
                                        ),
                                        p: ({ children }) => (
                                            <p className="lc-p">{children}</p>
                                        ),
                                        a: ({ href, children }) => (
                                            <a href={href} className="lc-a">{children}</a>
                                        ),
                                        ul: ({ children }) => (
                                            <ul className="lc-ul">{children}</ul>
                                        ),
                                        ol: ({ children }) => (
                                            <ol className="lc-ol">{children}</ol>
                                        ),
                                        li: ({ children }) => (
                                            <li className="lc-li">{children}</li>
                                        ),
                                        strong: ({ children }) => (
                                            <strong className="lc-strong">{children}</strong>
                                        ),
                                        img: ({ src, alt }) => src ? (
                                            <Image
                                                src={src}
                                                alt={alt || ''}
                                                width={800}
                                                height={450}
                                                className="rounded-lg my-6 w-full h-auto"
                                            />
                                        ) : null,
                                    }}
                                />
                            </div>
                        </div>

                        {isRightPanelVisible && (
                            <div className="lg:col-span-2 mb-4 mt-10 lg:mt-36">
                                <DetailsPageRightPanel article={article} link={link} />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <FooterDev />
        </div>
    )
}

export default LearningCenterArticle

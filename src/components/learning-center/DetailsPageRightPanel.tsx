import { useState } from 'react'
import Image from 'next/image'
import ParamLink from '@/components/ParamLink'
import { LEARNING_CENTER_DATA } from '@/constants/learningCenter.constant'

interface Article {
    slug: string
    title: string
    cluster: string
}

interface Props {
    article: Article
    link: string
}

const DetailsPageRightPanel = ({ article, link }: Props) => {
    const [showAllArticles, setShowAllArticles] = useState(false)

    const currentItem = LEARNING_CENTER_DATA.find((item) => item.slug === article.slug)
    const currentClusters = (currentItem?.cluster || article.cluster)
        .split(' & ')
        .map((c) => c.trim())

    const relatedArticles = LEARNING_CENTER_DATA.filter((item) => {
        if (item.slug === article.slug) return false
        const itemClusters = item.cluster.split(' & ').map((c) => c.trim())
        return itemClusters.some((ic) => currentClusters.includes(ic))
    })

    const siteUrl = 'https://open-metadata.org'

    return (
        <>
            {relatedArticles.length > 0 && (
                <aside className="bg-gradient-to-t from-gray-200 to-white border border-white rounded-3xl learning-center-card p-8 lg:block hidden mb-6">
                    <h2 className="text-2xl font-semibold mb-4 text-black">
                        Related Articles
                    </h2>
                    <div>
                        {(showAllArticles ? relatedArticles : relatedArticles.slice(0, 3)).map(
                            (item, index) => (
                                <div
                                    key={item.id}
                                    className="py-4 border-b border-gray-300 flex justify-between gap-5 items-center"
                                >
                                    <ParamLink
                                        href={
                                            item.slug
                                                ? `/learning-center/${item.slug}`
                                                : item.link ?? '#'
                                        }
                                        className="text-black font-bold hover:underline"
                                    >
                                        {item.title}
                                    </ParamLink>
                                </div>
                            )
                        )}
                    </div>
                    {relatedArticles.length > 3 ? (
                        <button
                            onClick={() => setShowAllArticles(!showAllArticles)}
                            className="text-[#7147E8] font-semibold pt-5 block text-lg hover:underline"
                        >
                            {showAllArticles ? 'Collapse' : (
                                <span className="flex gap-2 items-center">
                                    See More
                                    <Image
                                        src="/assets/icons/next-arrow.svg"
                                        alt="arrow"
                                        width={16}
                                        height={16}
                                    />
                                </span>
                            )}
                        </button>
                    ) : (
                        <ParamLink
                            href="/learning-center"
                            className="text-[#7147E8] font-semibold pt-5 flex gap-2 items-center text-lg hover:underline"
                        >
                            See More
                            <Image
                                src="/assets/icons/next-arrow.svg"
                                alt="arrow"
                                width={16}
                                height={16}
                            />
                        </ParamLink>
                    )}
                </aside>
            )}

            <div>
                <h2 className="text-xl text-black font-medium mb-4">
                    Share this article
                </h2>
                <div className="flex gap-3">
                    <a
                        href={`https://twitter.com/intent/post?url=${encodeURIComponent(`${siteUrl}${link}`)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="cursor-pointer flex justify-center items-center bg-gray-200 px-[6px] py-1 rounded-[6px] hover:bg-gray-300 transition-colors"
                        aria-label="Share on X (Twitter)"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.724-8.835L2.25 2.25h6.844l4.258 5.622 4.892-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" fill="currentColor"/>
                        </svg>
                    </a>
                    <a
                        href={`https://www.linkedin.com/feed/?linkOrigin=LI_BADGE&shareActive=true&shareUrl=${encodeURIComponent(`${siteUrl}${link}`)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="cursor-pointer flex justify-center items-center bg-gray-200 px-[6px] py-1 rounded-[6px] hover:bg-gray-300 transition-colors"
                        aria-label="Share on LinkedIn"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/>
                        </svg>
                    </a>
                </div>
            </div>
        </>
    )
}

export default DetailsPageRightPanel

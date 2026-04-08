import { useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import FooterDev from '@/components/FooterDev/FooterDev'
import NavbarDev from '@/components/NavbarDev/NavbarDev.component'
import NavbarStrip from '@/components/NavbarDev/NavbarStrip.component'
import ParamLink from '@/components/ParamLink'
import Filters from '@/components/learning-center/Filters'
import { LEARNING_CENTER_DATA } from '@/constants/learningCenter.constant'
import { getFilteredData, buildLearningCenterPath } from '@/utils/filterUtils'
import { getPageNumbers } from '@/utils/paginationUtils'
import { slugToText } from '@/utils/slugUtils'

const PAGE_SIZE = 9

function parseFilterParams(segments: string[]) {
    let topic: string | null = null
    let resource: string | null = null
    let page = 1

    for (let i = 0; i < segments.length; i++) {
        if (segments[i] === 'topic' && i + 1 < segments.length) {
            topic = segments[++i]
        } else if (segments[i] === 'resource' && i + 1 < segments.length) {
            resource = segments[++i]
        } else if (segments[i] === 'page' && i + 1 < segments.length) {
            const parsed = parseInt(segments[++i], 10)
            if (!isNaN(parsed) && parsed > 0) page = parsed
        }
    }

    return { topic, resource, page }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const segments = (context.params?.params as string[]) || []
    const { topic, resource, page } = parseFilterParams(segments)

    // Unknown segments with no topic/resource and no page — redirect to base
    if (!topic && !resource && page === 1) {
        return { redirect: { destination: '/learning-center', permanent: false } }
    }

    return {
        props: {
            initialTopic: topic ? slugToText(topic) : 'All',
            initialResourceType: resource ? slugToText(resource) : 'All',
            initialPage: page,
            link: context.resolvedUrl,
        },
    }
}

interface Props {
    initialTopic: string
    initialResourceType: string
    initialPage: number
}

const LearningCenterFiltered = ({ initialTopic, initialResourceType, initialPage }: Props) => {
    const router = useRouter()

    const [pageNumber, setPageNumber] = useState(initialPage)
    const [selectedTopic, setSelectedTopic] = useState(initialTopic)
    const [selectedResourceType, setSelectedResourceType] = useState(initialResourceType)
    const [inputValue, setInputValue] = useState('')

    const filteredByBoth = useMemo(
        () => getFilteredData(LEARNING_CENTER_DATA, selectedTopic, selectedResourceType, inputValue),
        [selectedTopic, selectedResourceType, inputValue]
    )

    const totalPages = useMemo(
        () => Math.ceil(filteredByBoth.length / PAGE_SIZE),
        [filteredByBoth]
    )

    const visiblePages = useMemo(
        () => getPageNumbers(pageNumber, totalPages),
        [pageNumber, totalPages]
    )

    const paginatedData = useMemo(() => {
        const start = (pageNumber - 1) * PAGE_SIZE
        return filteredByBoth.slice(start, start + PAGE_SIZE)
    }, [filteredByBoth, pageNumber])

    const updateUrl = (newTopic: string, newResourceType: string, newPage = 1) => {
        router.push(buildLearningCenterPath(newTopic, newResourceType, newPage))
    }

    const handleCategoryFilter = (category: string, categoryType: string) => {
        if (categoryType === 'topic') {
            setSelectedTopic(category)
            setPageNumber(1)
            updateUrl(category, selectedResourceType)
        } else if (categoryType === 'resourceType') {
            setSelectedResourceType(category)
            setPageNumber(1)
            updateUrl(selectedTopic, category)
        } else if (category === 'All') {
            setSelectedTopic('All')
            setSelectedResourceType('All')
            setPageNumber(1)
            updateUrl('All', 'All')
        }
    }

    const handleInputChange = (input: string) => {
        setInputValue(input)
        setPageNumber(1)
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 240, behavior: 'smooth' })
    }

    return (
        <div>
            <div className="mx-auto fixed top-0 w-full z-[1030]">
                <NavbarDev onClick={() => router.push('/#try-openmetadata')} />
                <NavbarStrip />
            </div>
            <div className="bg-gradient-to-t from-[#f2edfd] to-white mt-20 md:mt-24 lg:mt-32">
                {/* Hero */}
                <div className="py-24 px-6 md:px-10 xl:px-24 text-black max-w-[1440px] mx-auto">
                    <h1 className="text-[52px] leading-[56px] tracking-[-0.01em]">Learning Center</h1>
                    <div className="text-lg mt-2 lg:max-w-[48%]">
                        Discover guides, tutorials, and best practices to accelerate your
                        data journey. Whether you&apos;re building data pipelines,
                        establishing governance frameworks, or transforming data culture,
                        find resources to do more with your data across your organization.
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-[1440px] mx-auto px-6 md:px-10 xl:px-16 relative sm:top-[-60px]">
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                        <Filters
                            selectedTopic={selectedTopic}
                            selectedResourceType={selectedResourceType}
                            handleCategoryFilter={handleCategoryFilter}
                            handleInputChange={handleInputChange}
                            inputValue={inputValue}
                        />

                        <div className="w-full">
                            {paginatedData.length > 0 ? (
                                <>
                                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                        {paginatedData.map((item) => (
                                            <ParamLink
                                                href={
                                                    item.slug
                                                        ? `/learning-center/${item.slug}`
                                                        : item.link ?? '#'
                                                }
                                                key={item.id}
                                                className="learning-center-card border border-white bg-white p-6 md:p-8 rounded-[10px] flex flex-col h-full"
                                            >
                                                <div className="relative w-full">
                                                    <div className="w-full aspect-[40/22]">
                                                        <Image
                                                            src={item.image}
                                                            alt={item.title}
                                                            fill
                                                            className="object-cover rounded-[6px]"
                                                            loading="eager"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="px-2 pt-8 flex flex-col flex-grow">
                                                    <div className="mb-3 text-gray-500">
                                                        {item.cluster}
                                                    </div>
                                                    <div className="text-lg pb-8 md:text-xl lg:text-2xl font-semibold tracking-[-0.01em] leading-[1.2] flex-grow text-black">
                                                        {item.title}
                                                    </div>
                                                    <div className="mt-auto pt-4">
                                                        <span className="inline-block border-2 border-[#7147E8] text-[#7147E8] font-semibold text-base px-6 py-2 rounded-[3px]">
                                                            {item.resourceType === 'Demos'
                                                                ? 'Watch Now'
                                                                : 'Read More'}
                                                        </span>
                                                    </div>
                                                </div>
                                            </ParamLink>
                                        ))}
                                    </div>
                                    <div className="sr-only" aria-hidden="true">
                                        {filteredByBoth.map((item) => (
                                            <a
                                                key={`seo-${item.id}`}
                                                href={
                                                    item.slug
                                                        ? `/learning-center/${item.slug}`
                                                        : item.link
                                                }
                                            >
                                                {item.title}
                                            </a>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <div className="text-center text-3xl font-medium text-black">
                                    No data found
                                </div>
                            )}

                            {filteredByBoth.length > PAGE_SIZE && (
                                <div className="flex justify-end mt-16">
                                    <div className="inline-flex items-center bg-white border border-gray-300 rounded-[6px]">
                                        <button
                                            className="w-10 h-10 flex items-center justify-center disabled:opacity-40"
                                            onClick={() => {
                                                if (pageNumber > 1) {
                                                    const newPage = pageNumber - 1
                                                    setPageNumber(newPage)
                                                    updateUrl(selectedTopic, selectedResourceType, newPage)
                                                }
                                                scrollToTop()
                                            }}
                                            disabled={pageNumber === 1}
                                        >
                                            <Image
                                                src="/assets/icons/previous-arrow.svg"
                                                alt="arrow-left"
                                                width={16}
                                                height={16}
                                            />
                                        </button>
                                        <div className="w-px h-6 bg-gray-300" />
                                        {visiblePages.map((page, index) =>
                                            typeof page === 'number' ? (
                                                <button
                                                    key={page}
                                                    onClick={() => {
                                                        setPageNumber(page)
                                                        updateUrl(selectedTopic, selectedResourceType, page)
                                                        scrollToTop()
                                                    }}
                                                    className={`w-10 h-10 flex items-center justify-center text-base font-medium ${
                                                        pageNumber === page
                                                            ? 'bg-gray-100 text-[#7147E8]'
                                                            : 'bg-white text-gray-500 hover:bg-gray-50'
                                                    }`}
                                                >
                                                    {page}
                                                </button>
                                            ) : (
                                                <span
                                                    key={`ellipsis-${index}`}
                                                    className="w-10 h-10 flex items-center justify-center bg-white text-sm text-gray-500"
                                                >
                                                    {page}
                                                </span>
                                            )
                                        )}
                                        <div className="w-px h-6 bg-gray-300" />
                                        <button
                                            className="w-10 h-10 flex items-center justify-center bg-white rounded-lg disabled:opacity-40"
                                            onClick={() => {
                                                if (pageNumber < totalPages) {
                                                    const newPage = pageNumber + 1
                                                    setPageNumber(newPage)
                                                    updateUrl(selectedTopic, selectedResourceType, newPage)
                                                }
                                                scrollToTop()
                                            }}
                                            disabled={pageNumber === totalPages}
                                        >
                                            <Image
                                                src="/assets/icons/next-arrow.svg"
                                                alt="arrow-right"
                                                width={16}
                                                height={16}
                                            />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <FooterDev />
        </div>
    )
}

export default LearningCenterFiltered

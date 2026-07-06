import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { CATEGORY_LIST } from '../../constants/learningCenter.constant'
import { buildLearningCenterPath } from '../../utils/filterUtils'
import { ArrowLeft } from '../Icons/ArrowLeft'
import { ArrowRight } from '../Icons/ArrowRight'

const topicItems = CATEGORY_LIST.find((c) => c.header === 'Topics')?.items || []
const resourceTypeItems = CATEGORY_LIST.find((c) => c.header === 'Resource Types')?.items || []

interface CustomDropdownProps {
    label: string
    placeholder: string
    items: string[]
    selected: string
    onSelect: (value: string) => void
    buildHref: (value: string) => string
}

const CustomDropdown = ({
    label,
    placeholder,
    items,
    selected,
    onSelect,
    buildHref,
}: CustomDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const displayValue = selected === 'All' ? placeholder : selected

    return (
        <div ref={dropdownRef}>
            <label className="block text-base font-medium text-gray-700 mb-2">
                {label}
            </label>
            <div className="relative">
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="border border-gray-400 w-full p-[10px] outline-none rounded-[6px] bg-white text-base text-left cursor-pointer text-black"
                >
                    {displayValue}
                </button>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none rotate-90 transition-all">
                    {isOpen ? <ArrowLeft/> : <ArrowRight />}
                </div>
                {isOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-400 rounded-[6px] shadow-lg z-30 max-h-60 overflow-y-auto">
                        <a
                            href={buildHref('All')}
                            onClick={(e) => {
                                e.preventDefault()
                                onSelect('All')
                                setIsOpen(false)
                            }}
                            className={`block w-full text-left px-4 py-2.5 text-base hover:bg-gray-50 transition-colors ${
                                selected === 'All'
                                    ? 'text-[#7147E8] font-medium'
                                    : 'text-gray-600'
                            }`}
                        >
                            {placeholder}
                        </a>
                        {items.map((item) => (
                            <a
                                key={item}
                                href={buildHref(item)}
                                onClick={(e) => {
                                    e.preventDefault()
                                    onSelect(item)
                                    setIsOpen(false)
                                }}
                                className={`block w-full text-left px-4 py-2.5 text-base hover:bg-gray-50 transition-colors ${
                                    selected === item
                                        ? 'text-[#7147E8] font-medium'
                                        : 'text-gray-600'
                                }`}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

interface FiltersProps {
    selectedTopic: string
    selectedResourceType: string
    handleCategoryFilter: (category: string, categoryType: string) => void
    handleInputChange: (value: string) => void
    inputValue: string
}

const Filters = ({
    selectedTopic,
    selectedResourceType,
    handleCategoryFilter,
    handleInputChange,
    inputValue,
}: FiltersProps) => {
    return (
        <div className="flex flex-col gap-6 w-full lg:w-[280px] lg:flex-shrink-0 rounded-xl md:p-6">
            <div className="sr-only" aria-hidden="true">
                {topicItems.map((topic) => (
                    <a
                        key={`seo-topic-${topic}`}
                        href={buildLearningCenterPath(topic, 'All')}
                    >
                        {topic}
                    </a>
                ))}
                {resourceTypeItems.map((resource) => (
                    <a
                        key={`seo-resource-${resource}`}
                        href={buildLearningCenterPath('All', resource)}
                    >
                        {resource}
                    </a>
                ))}
            </div>
            <div>
                <label className="block text-base font-medium text-gray-700 mb-2">
                    Search
                </label>
                <div className="relative">
                    <input
                        className="border border-gray-400 w-full p-[10px] outline-none rounded-[6px] bg-white text-base placeholder-gray-400"
                        placeholder="Enter Keywords"
                        value={inputValue}
                        onChange={(e) => handleInputChange(e.target.value)}
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <Image
                            src="/assets/customer-gallery/search.svg"
                            alt="search"
                            width={18}
                            height={18}
                        />
                    </div>
                </div>
            </div>

            <CustomDropdown
                label="Topics"
                placeholder="All"
                items={topicItems}
                selected={selectedTopic}
                onSelect={(value) => handleCategoryFilter(value, 'topic')}
                buildHref={(topic) =>
                    buildLearningCenterPath(topic, selectedResourceType)
                }
            />

            <CustomDropdown
                label="Resource Types"
                placeholder="All"
                items={resourceTypeItems}
                selected={selectedResourceType}
                onSelect={(value) => handleCategoryFilter(value, 'resourceType')}
                buildHref={(resource) =>
                    buildLearningCenterPath(selectedTopic, resource)
                }
            />
        </div>
    )
}

export default Filters

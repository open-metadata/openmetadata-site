import { LearningCenterItem } from '../utils/filterUtils'

const IMAGE_PATH = '/assets/learning-center/banner'

export interface CategoryItem {
    header: string
    items?: string[]
}

export const LEARNING_CENTER_DATA: LearningCenterItem[] = [
    {
        id: 0,
        title: 'Metadata Management in 2026: Processes, Use Cases & Technologies',
        image: `${IMAGE_PATH}/metadata-management.png`,
        slug: 'metadata-management',
        cluster: 'Metadata Management',
        resourceType: 'Articles',
    },
    {
        id: 1,
        title: 'Metadata Search: How It Works, Types & Best Practices',
        image: `${IMAGE_PATH}/metadata-search.png`,
        slug: 'metadata-search',
        cluster: 'Metadata Management',
        resourceType: 'Articles',
    },
    {
        id: 2,
        title: 'Metadata Automation: Process, Use Cases & Best Practices',
        image: `${IMAGE_PATH}/metadata-automation.png`,
        slug: 'metadata-automation',
        cluster: 'Metadata Management',
        resourceType: 'Articles',
    },
    {
        id: 3,
        title: 'Metadata Services: 7 Key Capabilities and 6 Notable Solutions',
        image: `${IMAGE_PATH}/metadata-services.png`,
        slug: 'metadata-services',
        cluster: 'Metadata Management',
        resourceType: 'Articles',
    },
    {
        id: 4,
        title: 'Metadata Solutions: Capabilities, Architecture & Use Cases',
        image: `${IMAGE_PATH}/metadata-solutions.png`,
        slug: 'metadata-solutions',
        cluster: 'Metadata Management',
        resourceType: 'Articles',
    },
    {
        id: 5,
        title: "Metadata Management Tools: Buyer's Guide and 6 Solutions to Watch",
        image: `${IMAGE_PATH}/metadata-management-tools.png`,
        slug: 'metadata-management-tools',
        cluster: 'Metadata Management',
        resourceType: 'Articles',
    },
    {
        id: 6,
        title: 'Metadata Platforms: Use Cases, Components, and 7 Notable Solutions',
        image: `${IMAGE_PATH}/metadata-platform.png`,
        slug: 'metadata-platform',
        cluster: 'Metadata Management',
        resourceType: 'Articles',
    },
]

export const CATEGORY_LIST: CategoryItem[] = [
    {
        header: 'All',
    },
    {
        header: 'Topics',
        items: ['Metadata Management'],
    },
    {
        header: 'Resource Types',
        items: ['Articles'],
    },
]

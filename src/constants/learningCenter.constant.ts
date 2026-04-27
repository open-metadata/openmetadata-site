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

import { textToSlug } from './slugUtils'

export interface LearningCenterItem {
    id: number
    title: string
    image: string
    slug?: string
    link?: string
    cluster: string
    resourceType: string
}

export const buildLearningCenterPath = (topic: string, resource: string, page = 1): string => {
    let path = '/learning-center'
    if (topic && topic !== 'All') path += `/topic/${textToSlug(topic)}`
    if (resource && resource !== 'All') path += `/resource/${textToSlug(resource)}`
    if (page > 1) path += `/page/${page}`
    return path
}

export const getFilteredData = (
    data: LearningCenterItem[],
    selectedTopic: string,
    selectedResourceType: string,
    searchText: string
): LearningCenterItem[] => {
    let filtered = data

    if (searchText.trim()) {
        const lowercaseSearch = searchText.toLowerCase()
        filtered = filtered.filter(
            (item) =>
                item.title.toLowerCase().includes(lowercaseSearch) ||
                item.cluster.toLowerCase().includes(lowercaseSearch) ||
                item.resourceType.toLowerCase().includes(lowercaseSearch)
        )
    }

    if (selectedTopic && selectedTopic !== 'All') {
        filtered = filtered.filter((item) => {
            const clusters = item.cluster.split(' & ').map((c) => c.trim())
            return clusters.includes(selectedTopic)
        })
    }

    if (selectedResourceType && selectedResourceType !== 'All') {
        filtered = filtered.filter((item) => item.resourceType === selectedResourceType)
    }

    return filtered
}

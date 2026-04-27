export const getPageNumbers = (currentPage: number, totalPages: number, windowSize = 2): (number | string)[] => {
    const pages: (number | string)[] = []

    pages.push(1)

    const rangeStart = Math.max(2, currentPage - windowSize)
    const rangeEnd = Math.min(totalPages - 1, currentPage + windowSize)

    if (rangeStart > 2) {
        pages.push('...')
    }

    for (let i = rangeStart; i <= rangeEnd; i++) {
        if (!pages.includes(i)) {
            pages.push(i)
        }
    }

    if (rangeEnd < totalPages - 1) {
        pages.push('...')
    }

    if (totalPages > 1 && !pages.includes(totalPages)) {
        pages.push(totalPages)
    }

    return pages
}

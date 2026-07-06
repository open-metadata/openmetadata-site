export const textToSlug = (text: string): string => {
    if (typeof text !== 'string') {
        throw new TypeError(`textToSlug expects a string, received ${typeof text}`)
    }
    return text.toLowerCase().replace(/\s+/g, '-').trim()
}

export const slugToText = (slug: string): string => {
    if (typeof slug !== 'string') {
        throw new TypeError(`slugToText expects a string, received ${typeof slug}`)
    }
    return slug
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
}

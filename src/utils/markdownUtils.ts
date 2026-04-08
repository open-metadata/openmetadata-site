export const cleanMarkdownContent = (data: string): string => {
    return data
        .replace(/!\[\]\(([^)]+)\s+align="[^"]*"\)/g, '![]($1)')
        .replace(/!\[\]\(([^)]+)\s+align="[^"]*"/g, '![]($1)')
        .replace(/align="[^"]*"/g, '')
}

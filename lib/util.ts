export function getSlugDate(dateString: string): string {
    const date = new Date(dateString)

    const month = date.getMonth() + 1 // Jan is 0
    const day = date.getDate()
    const year = date.getFullYear()

    return `${year}-${month}-${day}`
}
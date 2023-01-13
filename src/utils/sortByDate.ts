import type { MarkdownInstance } from 'astro'

export const sortByDate = (posts: MarkdownInstance<Record<string, any>>[]) => {
  return posts.sort(
    (a, b) => Date.parse(b.frontmatter.Date) - Date.parse(a.frontmatter.date)
  )
}

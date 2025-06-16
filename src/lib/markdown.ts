import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const articlesDirectory = path.join(process.cwd(), 'src/content/articles')

export interface Article {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
}

export async function getArticleBySlug(slug: string): Promise<Article> {
  const fullPath = path.join(articlesDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt || '',
    content: contentHtml,
  }
}

export async function getAllArticles(): Promise<Article[]> {
  if (!fs.existsSync(articlesDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(articlesDirectory)
  const allArticles = await Promise.all(
    fileNames
      .filter((name) => name.endsWith('.md'))
      .map(async (name) => {
        const slug = name.replace(/\.md$/, '')
        return getArticleBySlug(slug)
      })
  )

  return allArticles.sort((a, b) => (a.date < b.date ? 1 : -1))
}
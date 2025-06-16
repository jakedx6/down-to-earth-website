import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeHighlight from 'rehype-highlight'
import rehypeStringify from 'rehype-stringify'

const articlesDirectory = path.join(process.cwd(), 'content/articles')

export interface ArticleMetadata {
  title: string
  excerpt: string
  category: string
  readTime: string
  publishedAt: string
  author: string
  tags: string[]
  featured: boolean
}

export interface Article extends ArticleMetadata {
  slug: string
  content: string
}

export interface ArticlePreview extends ArticleMetadata {
  slug: string
}

export async function getArticleSlugs(): Promise<string[]> {
  if (!fs.existsSync(articlesDirectory)) {
    return []
  }
  
  const fileNames = fs.readdirSync(articlesDirectory)
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => fileName.replace(/\.md$/, ''))
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.md`)
    
    if (!fs.existsSync(fullPath)) {
      return null
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    // Process markdown content to HTML
    const processedContent = await remark()
      .use(remarkGfm) // GitHub Flavored Markdown
      .use(remarkRehype, { allowDangerousHtml: true }) // Convert to HTML
      .use(rehypeHighlight) // Syntax highlighting
      .use(rehypeStringify, { allowDangerousHtml: true }) // Stringify HTML
      .process(content)
    
    const contentHtml = processedContent.toString()
    
    return {
      slug,
      content: contentHtml,
      title: data.title || '',
      excerpt: data.excerpt || '',
      category: data.category || 'General',
      readTime: data.readTime || '5 min read',
      publishedAt: data.publishedAt || '',
      author: data.author || 'Down to Earth Farmstead',
      tags: data.tags || [],
      featured: data.featured || false,
    }
  } catch (error) {
    console.error(`Error reading article ${slug}:`, error)
    return null
  }
}

export async function getAllArticles(): Promise<ArticlePreview[]> {
  const slugs = await getArticleSlugs()
  const articles: ArticlePreview[] = []
  
  for (const slug of slugs) {
    try {
      const fullPath = path.join(articlesDirectory, `${slug}.md`)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)
      
      articles.push({
        slug,
        title: data.title || '',
        excerpt: data.excerpt || '',
        category: data.category || 'General',
        readTime: data.readTime || '5 min read',
        publishedAt: data.publishedAt || '',
        author: data.author || 'Down to Earth Farmstead',
        tags: data.tags || [],
        featured: data.featured || false,
      })
    } catch (error) {
      console.error(`Error reading article metadata for ${slug}:`, error)
    }
  }
  
  // Sort by publishedAt date (newest first)
  return articles.sort((a, b) => {
    const dateA = new Date(a.publishedAt)
    const dateB = new Date(b.publishedAt)
    return dateB.getTime() - dateA.getTime()
  })
}

export async function getFeaturedArticles(): Promise<ArticlePreview[]> {
  const allArticles = await getAllArticles()
  return allArticles.filter(article => article.featured)
}

export async function getArticlesByCategory(category: string): Promise<ArticlePreview[]> {
  const allArticles = await getAllArticles()
  return allArticles.filter(article => 
    article.category.toLowerCase() === category.toLowerCase()
  )
}

export async function getArticlesByTag(tag: string): Promise<ArticlePreview[]> {
  const allArticles = await getAllArticles()
  return allArticles.filter(article => 
    article.tags.some(articleTag => 
      articleTag.toLowerCase() === tag.toLowerCase()
    )
  )
}

export function getArticleCategories(): string[] {
  return [
    'Education',
    'Process',
    'Farm Updates',
    'Storage',
    'Sustainability',
    'Services',
    'Recipes',
    'Tips'
  ]
}
import { notFound } from 'next/navigation'
import Layout from '@/components/layout/Layout'
import ArticleLayout from '@/components/articles/ArticleLayout'
import { getArticleBySlug, getArticleSlugs, getAllArticles } from '@/lib/articles'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getArticleSlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) {
    return {
      title: 'Article Not Found - Down to Earth Farmstead',
      description: 'The requested article could not be found.',
    }
  }

  return {
    title: `${article.title} - Down to Earth Farmstead`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.publishedAt,
      authors: [article.author],
      tags: article.tags,
    },
  }
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  // Get related articles (same category, excluding current article)
  const allArticles = await getAllArticles()
  const relatedArticles = allArticles
    .filter(a => a.category === article.category && a.slug !== article.slug)
    .slice(0, 3)

  return (
    <Layout>
      <ArticleLayout 
        article={article} 
        relatedArticles={relatedArticles}
      />
    </Layout>
  )
}
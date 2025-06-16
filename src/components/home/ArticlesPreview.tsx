import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, BookOpen } from 'lucide-react'
import { getAllArticles } from '@/lib/articles'

// Fallback articles for when no real articles are available
const fallbackArticles = [
  {
    title: 'Freeze Drying vs Dehydration',
    excerpt: 'Learn the key differences between freeze-drying and dehydration methods for food preservation.',
    category: 'Education',
    readTime: '5 min read',
    slug: null
  },
  {
    title: 'Understanding the Freeze Drying Process',
    excerpt: 'A detailed explanation of how freeze-drying preserves food while maintaining nutritional value.',
    category: 'Process',
    readTime: '7 min read',
    slug: null
  },
  {
    title: 'Seasonal Produce Calendar',
    excerpt: 'Know when to expect fresh garlic, vegetables, and other seasonal items from our farm.',
    category: 'Farm Updates',
    readTime: '3 min read',
    slug: null
  }
]

export default async function ArticlesPreview() {
  const allArticles = await getAllArticles()
  
  // Use real articles if available, otherwise use fallback
  const articles = allArticles.length > 0 
    ? allArticles.slice(0, 3) // Show first 3 articles
    : fallbackArticles

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Learn More
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-contrast-high-light mb-4">
            Educational Resources
          </h2>
          <p className="text-lg text-contrast-medium-light max-w-2xl mx-auto">
            Expand your knowledge about food preservation and sustainable farming practices.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <Card key={article.slug || index} className="border hover:border-gray-300 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {article.category}
                  </Badge>
                  <span className="text-sm text-contrast-low-light flex items-center">
                    <BookOpen className="h-3 w-3 mr-1" />
                    {article.readTime}
                  </span>
                </div>
                <CardTitle className="text-xl">
                  {article.slug ? (
                    <Link 
                      href={`/articles/${article.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {article.title}
                    </Link>
                  ) : (
                    article.title
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-contrast-medium-light mb-4">
                  {article.excerpt}
                </p>
                {article.slug && (
                  <Button asChild variant="ghost" size="sm">
                    <Link href={`/articles/${article.slug}`}>
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/articles">
              {allArticles.length > 0 ? 'View All Articles' : 'Coming Soon'}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
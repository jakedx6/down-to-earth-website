import Layout from '@/components/layout/Layout'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { ArrowRight, BookOpen, Clock, Calendar } from 'lucide-react'
import { getAllArticles } from '@/lib/articles'

// Sample upcoming articles for when we have no published articles yet
const upcomingArticles = [
  {
    title: 'Understanding the Freeze Drying Process',
    excerpt: 'A detailed explanation of the freeze-drying process and how it preserves food while maintaining nutritional value.',
    category: 'Process',
    readTime: '7 min read',
    status: 'Coming Soon'
  },
  {
    title: 'Best Practices for Food Storage',
    excerpt: 'Tips and techniques for properly storing both fresh and freeze-dried foods to maximize shelf life and quality.',
    category: 'Storage',
    readTime: '6 min read',
    status: 'Coming Soon'
  },
  {
    title: 'Sustainable Farming in Iowa',
    excerpt: 'Our approach to sustainable farming practices and how they contribute to better food quality and environmental health.',
    category: 'Sustainability',
    readTime: '8 min read',
    status: 'Coming Soon'
  },
  {
    title: 'Custom Freeze-Drying: What to Expect',
    excerpt: 'A guide to our custom freeze-drying services, including preparation tips and what results you can expect.',
    category: 'Services',
    readTime: '4 min read',
    status: 'Coming Soon'
  }
]

export default async function ArticlesPage() {
  const articles = await getAllArticles()
  const hasPublishedArticles = articles.length > 0

  return (
    <Layout>
      {/* Articles Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4">
            Articles & Guides
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-contrast-high-light mb-4">
            Educational Articles
          </h1>
          <p className="text-lg text-contrast-medium-light max-w-2xl mx-auto">
            {hasPublishedArticles 
              ? `Discover ${articles.length} article${articles.length === 1 ? '' : 's'} about food preservation, farming, and sustainable living.`
              : 'Comprehensive guides on food preservation, farming techniques, and sustainable living coming soon.'
            }
          </p>
        </div>
      </section>

      {hasPublishedArticles ? (
        // Published Articles Section
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Card key={article.slug} className="border hover:border-gray-300 transition-colors">
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
                      <Link 
                        href={`/articles/${article.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {article.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-contrast-medium-light mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-contrast-low-light">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(article.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      <Button asChild variant="ghost" size="sm">
                        <Link href={`/articles/${article.slug}`}>
                          Read More
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ) : (
        // Coming Soon Section (when no articles are published yet)
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                Educational Content
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-contrast-high-light mb-4">
                Articles Coming Soon
              </h2>
              <p className="text-lg text-contrast-medium-light max-w-2xl mx-auto">
                We&apos;re currently developing our educational article system. Check back soon for 
                comprehensive guides on food preservation, farming techniques, and sustainable living.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {upcomingArticles.map((article, index) => (
                <Card key={index} className="border hover:border-gray-300 transition-colors">
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
                    <CardTitle className="text-xl">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-contrast-medium-light mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-contrast-low-light">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.status}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Contact Us for Information
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}
    </Layout>
  )
}
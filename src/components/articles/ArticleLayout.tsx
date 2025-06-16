import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Calendar, BookOpen, Tag, User, ArrowRight } from 'lucide-react'
import { Article, ArticlePreview } from '@/lib/articles'

interface ArticleLayoutProps {
  article: Article
  relatedArticles?: ArticlePreview[]
}

export default function ArticleLayout({ article, relatedArticles = [] }: ArticleLayoutProps) {
  return (
    <>
      {/* Article Header */}
      <section className="bg-gradient-to-b from-gray-50 to-white pt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Navigation */}
          <div className="mb-8">
            <Button asChild variant="ghost" className="pl-0">
              <Link href="/articles">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Articles
              </Link>
            </Button>
          </div>

          {/* Article Meta */}
          <div className="mb-6">
            <Badge variant="secondary" className="mb-4">
              {article.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-contrast-high-light mb-6 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-contrast-medium-light">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                {article.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(article.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="flex items-center">
                <BookOpen className="h-4 w-4 mr-1" />
                {article.readTime}
              </div>
            </div>
            
            {article.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* Article Excerpt */}
          <div className="mb-8">
            <p className="text-lg text-contrast-medium-light leading-relaxed">
              {article.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article 
            className="article-content"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="pb-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                Related Reading
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-contrast-high-light mb-4">
                More from {article.category}
              </h2>
              <p className="text-contrast-medium-light">
                Continue learning with these related articles
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <Card key={relatedArticle.slug} className="border hover:border-gray-300 transition-colors">
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="text-xs mb-3">
                      {relatedArticle.category}
                    </Badge>
                    <h3 className="font-semibold text-contrast-high-light mb-2 leading-tight">
                      <Link 
                        href={`/articles/${relatedArticle.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {relatedArticle.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-contrast-medium-light mb-4 line-clamp-3">
                      {relatedArticle.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-contrast-low-light">
                      <span className="flex items-center">
                        <BookOpen className="h-3 w-3 mr-1" />
                        {relatedArticle.readTime}
                      </span>
                      <Button asChild variant="ghost" size="sm" className="text-xs p-0 h-auto">
                        <Link href={`/articles/${relatedArticle.slug}`}>
                          Read More
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Have Questions About {article.category}?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Our team is here to help with personalized advice and custom solutions for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Contact Our Experts
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
              <Link href="/articles">
                <ArrowLeft className="mr-2 h-4 w-4" />
                More Articles
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
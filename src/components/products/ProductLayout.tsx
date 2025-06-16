import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Check, Package, Clock, Truck, ArrowRight } from 'lucide-react'
import { Product, ProductPreview } from '@/lib/products'

interface ProductLayoutProps {
  product: Product
  relatedProducts?: ProductPreview[]
}

export default function ProductLayout({ product, relatedProducts = [] }: ProductLayoutProps) {
  return (
    <>
      {/* Product Header */}
      <section className="bg-gradient-to-b from-gray-50 to-white pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Navigation */}
          <div className="mb-8">
            <Button asChild variant="ghost" className="pl-0">
              <Link href="/products">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Products
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
                {!product.inStock && (
                  <Badge variant="destructive" className="absolute top-4 left-4">
                    Out of Stock
                  </Badge>
                )}
                {product.featured && (
                  <Badge variant="secondary" className="absolute top-4 right-4">
                    Featured
                  </Badge>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <Badge variant="outline" className="mb-4">
                {product.category}
              </Badge>
              
              <h1 className="text-3xl md:text-4xl font-bold text-contrast-high-light mb-4 leading-tight">
                {product.title}
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-primary">{product.price}</span>
                {product.weight && (
                  <span className="text-contrast-medium-light">
                    ({product.weight})
                  </span>
                )}
              </div>

              <p className="text-lg text-contrast-medium-light leading-relaxed mb-8">
                {product.excerpt}
              </p>

              {/* Product Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {product.shelfLife && (
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-primary mr-2" />
                    <div>
                      <p className="font-semibold text-contrast-high-light">Shelf Life</p>
                      <p className="text-sm text-contrast-medium-light">{product.shelfLife}</p>
                    </div>
                  </div>
                )}
                
                <div className="flex items-center">
                  <Package className="h-5 w-5 text-primary mr-2" />
                  <div>
                    <p className="font-semibold text-contrast-high-light">Availability</p>
                    <p className="text-sm text-contrast-medium-light">
                      {product.inStock ? 'In Stock' : 'Currently Unavailable'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Features */}
              {product.features.length > 0 && (
                <div className="mb-8">
                  <h3 className="font-semibold text-contrast-high-light mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-contrast-medium-light">
                        <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Nutrition Highlights */}
              {product.nutritionHighlights && product.nutritionHighlights.length > 0 && (
                <div className="mb-8">
                  <h3 className="font-semibold text-contrast-high-light mb-4">Nutrition Highlights</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.nutritionHighlights.map((highlight, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="flex-1" disabled={!product.inStock}>
                  <Link href="/contact">
                    <Truck className="mr-2 h-5 w-5" />
                    {product.inStock ? 'Order Now' : 'Get Notified'}
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">
                    Ask Questions
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Content */}
      <section className="pb-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article 
            className="article-content"
            dangerouslySetInnerHTML={{ __html: product.content }}
          />
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="pb-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                You May Also Like
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-contrast-high-light mb-4">
                Related Products
              </h2>
              <p className="text-contrast-medium-light">
                Explore more products from our {product.category.toLowerCase()} collection
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Card key={relatedProduct.slug} className="border hover:border-gray-300 transition-colors overflow-hidden">
                  <div className="relative h-48 bg-gray-100">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.title}
                      fill
                      className="object-cover"
                    />
                    {!relatedProduct.inStock && (
                      <Badge variant="destructive" className="absolute top-2 left-2 text-xs">
                        Out of Stock
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="text-xs mb-3">
                      {relatedProduct.category}
                    </Badge>
                    <h3 className="font-semibold text-contrast-high-light mb-2 leading-tight">
                      <Link 
                        href={`/products/${relatedProduct.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {relatedProduct.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-contrast-medium-light mb-4 line-clamp-2">
                      {relatedProduct.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">
                        {relatedProduct.price}
                      </span>
                      <Button asChild variant="ghost" size="sm" className="text-xs p-0 h-auto">
                        <Link href={`/products/${relatedProduct.slug}`}>
                          View Details
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
      <section className="pb-8 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Order {product.title}?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Contact us today to place your order or ask any questions about this product.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                <Truck className="mr-2 h-5 w-5" />
                Place Order
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
              <Link href="/products">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Browse All Products
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
import Layout from '@/components/layout/Layout'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone, Check, Package } from 'lucide-react'
import { getAllProducts } from '@/lib/products'

export default async function ProductsPage() {
  const products = await getAllProducts()
  const hasProducts = products.length > 0

  return (
    <Layout>
      {/* Clean Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4">
            Farm Fresh Products
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-contrast-high-light mb-6">
            From Farm to Your Family
          </h1>
          <p className="text-xl text-contrast-medium-light max-w-3xl mx-auto">
            Discover our sustainable food solutions with exceptional nutritional value 
            and extended shelf life. From fresh eggs to freeze-dried preservation.
          </p>
        </div>
      </section>

      {hasProducts ? (
        // Products Available Section
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                Our Product Range
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-contrast-high-light mb-4">
                Quality You Can Trust
              </h2>
              <p className="text-lg text-contrast-medium-light max-w-2xl mx-auto">
                Each product is carefully crafted with quality and sustainability in mind, 
                bringing you the best of Iowa farm life with modern preservation techniques.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card key={product.slug} className="overflow-hidden border hover:border-gray-300 transition-colors duration-300">
                  {/* Product Image */}
                  <div className="relative h-64 bg-gray-100">
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

                  {/* Product Info */}
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl text-contrast-high-light">
                        <Link 
                          href={`/products/${product.slug}`}
                          className="hover:text-primary transition-colors"
                        >
                          {product.title}
                        </Link>
                      </CardTitle>
                      <Badge variant="secondary" className="text-lg font-bold px-3 py-1">
                        {product.price}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-contrast-medium-light">{product.excerpt}</p>

                    {/* Features */}
                    {product.features.length > 0 && (
                      <div>
                        <ul className="space-y-2">
                          {product.features.slice(0, 4).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-contrast-medium-light">
                              <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* View Details Button */}
                    <Button 
                      className="w-full"
                      variant={product.inStock ? "default" : "outline"}
                      disabled={!product.inStock}
                      asChild
                    >
                      <Link href={`/products/${product.slug}`}>
                        {product.inStock ? 'View Details' : 'Currently Unavailable'}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ) : (
        // No Products Available Section
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <Badge variant="secondary" className="mb-4">
                Product Catalog
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-contrast-high-light mb-4">
                Products Coming Soon
              </h2>
              <p className="text-lg text-contrast-medium-light max-w-2xl mx-auto mb-8">
                We're currently updating our product catalog with detailed information about our 
                farm-fresh eggs, freeze-dried products, and custom preservation services.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <h3 className="text-xl font-semibold text-contrast-high-light mb-4">
                Available Products & Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-contrast-high-light mb-2">Fresh Products</h4>
                  <ul className="space-y-1 text-contrast-medium-light">
                    <li>• Farm fresh eggs ($5/dozen)</li>
                    <li>• Seasonal fresh produce</li>
                    <li>• Fresh garlic (seasonal)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-contrast-high-light mb-2">Preserved Products</h4>
                  <ul className="space-y-1 text-contrast-medium-light">
                    <li>• Freeze-dried eggs ($12/dozen)</li>
                    <li>• Custom freeze-drying services</li>
                    <li>• Long-term food storage solutions</li>
                  </ul>
                </div>
              </div>
            </div>

            <Button asChild size="lg">
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us for Availability
              </Link>
            </Button>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4">
            Ready to Order?
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-contrast-high-light mb-4">
            Get Started Today
          </h2>
          <p className="text-lg text-contrast-medium-light mb-8">
            Contact us to place your order, inquire about availability, or learn more about our custom freeze-drying services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="shadow-none">
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/what-is-freeze-drying">
                Learn About Freeze-Drying
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}
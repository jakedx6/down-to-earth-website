import Layout from '@/components/layout/Layout'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone, Check } from 'lucide-react'

const products = [
  {
    id: 'freeze-dried-eggs',
    title: 'Freeze-Dried Eggs',
    price: '$12/dozen',
    excerpt: 'Premium freeze-dried eggs with 25-year shelf life. Perfect for emergency preparedness, camping, or convenient cooking. Retains 97% of nutrients.',
    image: '/assets/Photos/PXL_20250513_211446827.jpg',
    category: 'Preserved Products',
    inStock: true,
    featured: true,
    weight: '4 oz (equivalent to 1 dozen)',
    shelfLife: '25 years unopened',
    features: [
      '25-year shelf life',
      '97% nutrient retention',
      'No preservatives or additives',
      'Lightweight for storage/travel',
      'Simple reconstitution with water'
    ],
    tags: ['freeze-dried', 'eggs', 'protein', 'long-term-storage'],
    learnMoreLink: '/what-is-freeze-drying'
  },
  {
    id: 'freeze-dried-strawberries',
    title: 'Freeze-Dried Strawberries',
    price: '$12/bag',
    excerpt: 'Sweet Iowa strawberries freeze-dried at peak ripeness. Just strawberries - no added sugar or ingredients. Perfect for snacking, baking, or adding to cereals and smoothies.',
    image: '/assets/Photos/20250409_172514.jpg',
    category: 'Preserved Products',
    inStock: true,
    featured: true,
    weight: '2 oz',
    shelfLife: '25 years unopened',
    features: [
      'In-season Iowa strawberries',
      'Crispy, sweet flavor',
      'No added sugar or preservatives',
      'Perfect healthy snack',
      'Versatile ingredient'
    ],
    tags: ['freeze-dried', 'fruit', 'strawberries', 'seasonal', 'new'],
    badge: 'NEW',
    learnMoreLink: '/what-is-freeze-drying'
  },
  {
    id: 'farm-fresh-eggs',
    title: 'Fresh Farm Eggs',
    price: '$5/dozen',
    excerpt: 'One dozen fresh eggs from our free-range hens. Collected daily for peak freshness, with rich golden yolks that showcase our hens\' natural diet.',
    image: '/assets/Photos/PXL_20250513_211913056.MP.jpg',
    category: 'Fresh Products',
    inStock: true,
    featured: true,
    weight: '1 dozen',
    shelfLife: '3-4 weeks refrigerated',
    features: [
      'Free-range, pasture-raised hens',
      'Collected fresh daily',
      'No hormones or antibiotics',
      'Rich, golden-orange yolks',
      'Superior taste and nutrition'
    ],
    tags: ['fresh', 'eggs', 'protein', 'daily']
  }
]

export default function ProductsPage() {
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

      {/* Products Section */}
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
              <Card key={product.id} className="overflow-hidden border hover:border-gray-300 transition-colors duration-300">
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
                  {product.badge && (
                    <Badge variant="secondary" className="absolute top-4 left-4">
                      {product.badge}
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
                      {product.title}
                    </CardTitle>
                    <Badge variant="secondary" className="text-lg font-bold px-3 py-1">
                      {product.price}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-contrast-medium-light">{product.excerpt}</p>

                  {/* Product Details */}
                  <div className="space-y-2 text-sm">
                    {product.weight && (
                      <div className="flex justify-between">
                        <span className="text-contrast-medium-light">Weight:</span>
                        <span className="text-contrast-high-light">{product.weight}</span>
                      </div>
                    )}
                    {product.shelfLife && (
                      <div className="flex justify-between">
                        <span className="text-contrast-medium-light">Shelf Life:</span>
                        <span className="text-contrast-high-light">{product.shelfLife}</span>
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  {product.features.length > 0 && (
                    <div>
                      <ul className="space-y-2">
                        {product.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-contrast-medium-light">
                            <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Learn More Link for Freeze-Dried Products */}
                  {product.learnMoreLink && (
                    <Link 
                      href={product.learnMoreLink} 
                      className="text-sm text-primary hover:underline flex items-center justify-center"
                    >
                      Learn about freeze-drying
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  )}

                  {/* Contact Button */}
                  <Button 
                    className="w-full"
                    variant={product.inStock ? "default" : "outline"}
                    disabled={!product.inStock}
                    asChild
                  >
                    <Link href="/contact">
                      {product.inStock ? 'Contact to Order' : 'Currently Unavailable'}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Shipping Information */}
          <div className="mt-16 text-center">
            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <h3 className="text-xl font-semibold text-contrast-high-light mb-4">
                Shipping & Availability
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-contrast-high-light mb-2">Freeze-Dried Products</h4>
                  <ul className="space-y-1 text-contrast-medium-light">
                    <li>• Nationwide shipping available upon request</li>
                    <li>• Perfect for long-distance orders</li>
                    <li>• Lightweight and compact packaging</li>
                    <li>• 25-year shelf life ensures safe delivery</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-contrast-high-light mb-2">Fresh Products</h4>
                  <ul className="space-y-1 text-contrast-medium-light">
                    <li>• Local pickup available</li>
                    <li>• Iowa area delivery options</li>
                    <li>• Contact us for scheduling</li>
                    <li>• Best quality when fresh</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Additional Products Info */}
            <div className="bg-white border rounded-lg p-8 mb-8">
              <h3 className="text-xl font-semibold text-contrast-high-light mb-4">
                Additional Products & Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-contrast-high-light mb-2">Coming Soon</h4>
                  <ul className="space-y-1 text-contrast-medium-light">
                    <li>• Fresh garlic (seasonal)</li>
                    <li>• Seasonal vegetables</li>
                    <li>• Herbs and specialty produce</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-contrast-high-light mb-2">Custom Services</h4>
                  <ul className="space-y-1 text-contrast-medium-light">
                    <li>• Custom freeze-drying services</li>
                    <li>• Bulk order processing</li>
                    <li>• Food preservation consultation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'

const featuredProducts = [
  {
    id: '1',
    name: 'Farm Fresh Eggs',
    price: '$5/dozen',
    description: 'Free-range eggs collected daily from our happy hens.',
    image: '/assets/Photos/20250409_171548.jpg',
    badge: 'Best Seller'
  },
  {
    id: '2',
    name: 'Freeze-Dried Eggs',
    price: '$12/dozen',
    description: '25-year shelf life with 97% nutrition retention.',
    image: '/assets/Photos/20250409_171554.jpg',
    badge: 'Premium'
  },
  {
    id: '3',
    name: 'Custom Freeze-Drying',
    price: '$10/batch',
    description: 'Preserve your harvest with our professional service.',
    image: '/assets/Photos/20250409_172514.jpg',
    badge: 'Service'
  }
]

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Our Products
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-contrast-high-light mb-4">
            Farm Fresh & Preserved
          </h2>
          <p className="text-lg text-contrast-medium-light max-w-2xl mx-auto">
            From daily fresh eggs to long-term food preservation, 
            we offer sustainable solutions for every need.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden border hover:border-gray-300 transition-colors">
              <div className="relative h-48 bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 right-4" variant="secondary">
                  {product.badge}
                </Badge>
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <span className="text-lg font-bold text-primary">{product.price}</span>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-contrast-medium-light">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Shipping Info */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8 text-center">
          <p className="text-contrast-medium-light">
            <span className="font-semibold text-contrast-high-light">Shipping Available:</span> We can ship our freeze-dried products nationwide upon request. 
            Fresh products are available for local pickup only.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/products">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
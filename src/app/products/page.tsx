'use client'

import Layout from '@/components/layout/Layout'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone, Check, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useRef } from 'react'

const products = [
  {
    id: 'freeze-dried-eggs',
    title: 'Freeze-Dried Eggs',
    price: '$8/dozen',
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
    price: '$8/bag',
    excerpt: 'Sweet Iowa strawberries freeze-dried at peak ripeness. Just strawberries - no added sugar or ingredients. Perfect for snacking, baking, or adding to cereals and smoothies.',
    image: '/assets/Photos/20250409_172514.jpg',
    processImages: [
      {
        src: '/assets/Photos/strawberry-harvest.jpg',
        alt: 'Fresh strawberries being harvested',
        caption: 'Hand-picked strawberries ready for processing'
      },
      {
        src: '/assets/Photos/strawberry-field.jpg',
        alt: 'Iowa strawberry field during harvest season',
        caption: 'Strawberries at peak ripeness'
      },
      {
        src: '/assets/Photos/strawberry-tray.jpg',
        alt: 'Strawberries arranged on freeze-drying trays',
        caption: 'Strawberries prepared for freeze-drying'
      }
    ],
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
  }
]

function ProductImageCarousel({ product }: { product: typeof products[0] }) {
  const allImages = product.processImages 
    ? [{ src: product.image, alt: product.title, caption: 'Final Product' }, ...product.processImages]
    : [{ src: product.image, alt: product.title, caption: 'Product Image' }]
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    
    const distance = touchStartX.current - touchEndX.current
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe && allImages.length > 1) {
      nextImage()
    }
    if (isRightSwipe && allImages.length > 1) {
      prevImage()
    }

    touchStartX.current = null
    touchEndX.current = null
  }

  if (allImages.length === 1) {
    return (
      <div className="relative h-64 bg-gray-100">
        <Image
          src={allImages[0].src}
          alt={allImages[0].alt}
          fill
          className="object-cover"
        />
      </div>
    )
  }

  return (
    <div 
      className="relative h-64 bg-gray-100 group touch-pan-y"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <Image
        src={allImages[currentImageIndex].src}
        alt={allImages[currentImageIndex].alt}
        fill
        className="object-cover transition-opacity duration-300"
      />
      
      {/* Navigation arrows */}
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/70"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/70"
        aria-label="Next image"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
        {allImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === currentImageIndex ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Image caption */}
      <div className="absolute bottom-6 left-2 right-2 text-center">
        <span className="bg-black/50 text-white text-xs px-2 py-1 rounded">
          {allImages[currentImageIndex].caption}
        </span>
      </div>
    </div>
  )
}

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
      <section className="py-20 pt-0 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden border hover:border-gray-300 transition-colors duration-300 pt-0 flex flex-col h-full">
                {/* Product Image Carousel */}
                <div className="relative">
                  <ProductImageCarousel product={product} />
                  {!product.inStock && (
                    <Badge variant="destructive" className="absolute top-4 left-4 z-10">
                      Out of Stock
                    </Badge>
                  )}
                  {product.badge && (
                    <Badge variant="secondary" className="absolute top-4 left-4 z-10">
                      {product.badge}
                    </Badge>
                  )}
                  {product.featured && (
                    <Badge variant="secondary" className="absolute top-4 right-4 z-10">
                      Featured
                    </Badge>
                  )}
                </div>

                {/* Product Info */}
                <CardHeader>
                  <CardTitle className="text-xl text-contrast-high-light mb-2">
                    {product.title}
                  </CardTitle>
                  <Badge variant="secondary" className="text-lg font-bold px-3 py-1 w-fit">
                    {product.price}
                  </Badge>
                </CardHeader>

                <CardContent className="flex-grow flex flex-col">
                  <div className="space-y-4 flex-grow">
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
                  </div>

                  {/* Contact Button - Always at bottom */}
                  <div className="mt-4">
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
                  </div>
                </CardContent>
              </Card>
            ))}
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
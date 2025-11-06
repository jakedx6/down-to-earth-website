'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Check, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useRef } from 'react'

const featuredProducts = [
  {
    id: 'freeze-dried-eggs',
    name: 'Freeze-Dried Eggs',
    price: '$8/dozen',
    description: 'Premium freeze-dried eggs with 25-year shelf life. Perfect for emergency preparedness, camping, or convenient cooking.',
    image: '/assets/Photos/PXL_20250513_211446827.jpg',
    badge: 'Featured',
    features: ['25-year shelf life', '97% nutrient retention']
  },
  {
    id: 'freeze-dried-strawberries',
    name: 'Freeze-Dried Strawberries',
    price: '$8/bag',
    description: 'Sweet Iowa strawberries freeze-dried at peak ripeness. Just strawberries - no added sugar or ingredients.',
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
    badge: 'NEW',
    features: ['In-season Iowa strawberries', 'No preservatives']
  },
  {
    id: 'farm-fresh-eggs',
    name: 'Farm Fresh Eggs',
    price: '$4/dozen',
    description: 'Fresh eggs from our free-range hens. Collected daily for peak freshness, with rich golden yolks.',
    image: '/assets/Photos/Fresh-eggs.jpeg',
    badge: 'Daily Fresh',
    features: ['Free-range hens', 'Collected daily']
  }
]

function ProductImageCarousel({ product }: { product: typeof featuredProducts[0] }) {
  const allImages = product.processImages 
    ? [{ src: product.image, alt: product.name, caption: 'Final Product' }, ...product.processImages]
    : [{ src: product.image, alt: product.name, caption: 'Product Image' }]
  
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
      <div className="relative h-48 bg-gray-100">
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
      className="relative h-48 bg-gray-100 group touch-pan-y"
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
            <Card key={product.id} className="overflow-hidden border hover:border-gray-300 transition-colors pt-0">
              <div className="relative">
                <ProductImageCarousel product={product} />
                <Badge className="absolute top-4 right-4 z-10" variant="secondary">
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
                <p className="text-contrast-medium-light mb-4">{product.description}</p>
                
                {/* Key Features */}
                <div className="space-y-2">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-contrast-medium-light">
                      <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
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
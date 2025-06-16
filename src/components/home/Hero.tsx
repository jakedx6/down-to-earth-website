import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-forest-700 to-forest-800 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/Photos/20250409_171532.jpg"
          alt="Down to Earth Farm"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-forest-800/75"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-contrast-high-dark drop-shadow-lg">
            Healthy farm food, 
            <span className="text-brand-light-green drop-shadow-lg"> on your terms</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-contrast-medium-dark leading-relaxed drop-shadow-md">
            Discover Down to Earth Farmstead. We believe healthy, farm-fresh food shouldn&apos;t go to waste, 
            which is why we&apos;re passionate about real food preservation.
          </p>

          <p className="text-lg mb-10 text-contrast-low-dark drop-shadow-md">
            From fresh produce to convenient freeze-dried staples like eggs and fruit, 
            and our canned goods, we&apos;re making the goodness of the farm accessible to everyone, 
            ensuring wholesome options are always within reach.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-lg px-8 py-6 shadow-lg">
              <Link href="/products">
                Shop Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-primary">
              <Link href="/articles">
                Learn More
              </Link>
            </Button>
          </div>

          {/* Key Features */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-light-green rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-contrast-high-light" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-contrast-medium-dark font-medium drop-shadow-md">Farm Fresh</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-light-green rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-contrast-high-light" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-contrast-medium-dark font-medium drop-shadow-md">25-Year Shelf Life</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-light-green rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-contrast-high-light" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-contrast-medium-dark font-medium drop-shadow-md">Iowa Grown</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
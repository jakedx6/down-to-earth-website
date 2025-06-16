import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Leaf, Shield, Clock } from 'lucide-react'

export default function CleanHero() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Large Logo */}
          <div className="mb-8">
            <Image
              src="/assets/DtE-Color-Logo.svg"
              alt="Down to Earth Farmstead"
              width={800}
              height={240}
              className="h-32 md:h-40 lg:h-48 w-auto mx-auto"
              priority
              unoptimized
            />
          </div>
          
          {/* Tagline */}
          <Badge variant="secondary" className="mb-6 px-4 py-1">
            Iowa's Premier Farm-to-Table Experience
          </Badge>
          
          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-contrast-high-light mb-6 leading-tight">
            Farm-Fresh,{' '}
            <span className="text-primary">For Your Real Life.</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-contrast-medium-light mb-8 leading-relaxed max-w-3xl mx-auto">
            Life gets busy. Eating well shouldn't be a chore. At Down to Earth Farmstead, we offer the best of our harvest, both fresh from the field and perfectly preserved. Enjoy healthy, delicious food that fits your schedule, so nothing goes to waste.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button asChild size="lg" className="text-lg px-8 shadow-none">
              <Link href="/products">
                View Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-contrast-high-light mb-1">Farm Fresh</h3>
              <p className="text-sm text-contrast-medium-light">Direct from our Iowa farm</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-contrast-high-light mb-1">25-Year Shelf Life</h3>
              <p className="text-sm text-contrast-medium-light">Premium freeze-dried preservation</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-contrast-high-light mb-1">97% Nutrients</h3>
              <p className="text-sm text-contrast-medium-light">Maximum nutrition retention</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
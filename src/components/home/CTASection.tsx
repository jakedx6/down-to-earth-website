import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Experience Farm-Fresh Quality?
        </h2>
        <p className="text-xl mb-8 text-primary-foreground/90">
          Join our community of customers who value nutrition, sustainability, and local farming.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <Link href="/contact">
              <Phone className="mr-2 h-5 w-5" />
              Contact Us Today
            </Link>
          </Button>
          
          <Button asChild size="lg" variant="outline" className="text-lg bg-transparent text-white border-white hover:bg-white hover:text-primary">
            <Link href="/products">
              Browse Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
        
        <p className="mt-8 text-sm text-primary-foreground/70">
          Custom freeze-drying services available • Seasonal produce updates • Farm visits by appointment
        </p>
      </div>
    </section>
  )
}
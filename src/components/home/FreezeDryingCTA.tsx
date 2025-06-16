import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Clock, Shield, Leaf } from 'lucide-react'

const highlights = [
  {
    icon: Clock,
    text: '25-Year Shelf Life'
  },
  {
    icon: Shield,
    text: '97% Nutrient Retention'
  },
  {
    icon: Leaf,
    text: 'No Preservatives'
  }
]

export default function FreezeDryingCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <Badge variant="secondary" className="mb-4 text-primary bg-white">
              Advanced Food Preservation
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Curious About Freeze-Drying?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-6 leading-relaxed">
              Discover the science behind the ultimate food preservation method. Learn how freeze-drying 
              maintains 97% of nutrients while extending shelf life to 25 years.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon
                return (
                  <div key={index} className="flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm text-primary-foreground/90 font-medium">
                      {highlight.text}
                    </span>
                  </div>
                )
              })}
            </div>

            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link href="/what-is-freeze-drying">
                Learn More About Freeze-Drying
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-white/10 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">25+</div>
                  <p className="text-sm text-primary-foreground/80">Years Shelf Life</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">97%</div>
                  <p className="text-sm text-primary-foreground/80">Nutrients Retained</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">98%</div>
                  <p className="text-sm text-primary-foreground/80">Water Removed</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">0</div>
                  <p className="text-sm text-primary-foreground/80">Preservatives</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
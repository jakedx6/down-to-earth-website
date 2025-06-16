import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Truck, Award, Users, Sparkles } from 'lucide-react'

const values = [
  {
    icon: Award,
    title: 'Owner-Funded Quality',
    description: 'No investors, no compromises. We answer only to our commitment to quality.',
  },
  {
    icon: Truck,
    title: 'Local Iowa Farm',
    description: 'Supporting local agriculture with sustainable farming practices since day one.',
  },
  {
    icon: Sparkles,
    title: 'Advanced Preservation',
    description: 'State-of-the-art freeze-drying technology preserves nutrients for 25 years.',
  },
  {
    icon: Users,
    title: 'Family Values',
    description: 'A family-run operation dedicated to bringing wholesome food to your table.',
  }
]

export default function ValueProposition() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-contrast-high-light mb-4">
            The Down to Earth Difference
          </h2>
          <p className="text-lg text-contrast-medium-light max-w-2xl mx-auto">
            We're not just another farm. We're your partner in sustainable, 
            long-term food security.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <Card key={index} className="border hover:border-gray-300 transition-colors">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-contrast-high-light mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-contrast-medium-light">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">25+</div>
            <p className="text-sm text-contrast-medium-light">Years Shelf Life</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">97%</div>
            <p className="text-sm text-contrast-medium-light">Nutrient Retention</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <p className="text-sm text-contrast-medium-light">Iowa Grown</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">0</div>
            <p className="text-sm text-contrast-medium-light">Preservatives Added</p>
          </div>
        </div>
      </div>
    </section>
  )
}
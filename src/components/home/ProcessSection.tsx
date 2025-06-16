import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Clock, Refrigerator, Calendar } from 'lucide-react'

const solutions = [
  {
    problem: 'Busy Schedule',
    solution: 'Fresh When You Need It',
    description: 'Get farm-fresh eggs and seasonal produce delivered when it works for your schedule. No more spoiled vegetables because you couldn\'t get to the store.',
    icon: Clock,
    image: '/assets/Photos/20250409_171548.jpg',
    timeframe: 'Weekly pickup/delivery'
  },
  {
    problem: 'Food Spoilage',
    solution: 'Preserved for Real Life',
    description: 'Our freeze-dried products give you the nutrition of fresh food with a 25-year shelf life. Stock up without waste, use when needed.',
    icon: Refrigerator,
    image: '/assets/Photos/20250409_171554.jpg',
    timeframe: '25-year shelf life'
  },
  {
    problem: 'Seasonal Availability',
    solution: 'Year-Round Quality',
    description: 'Enjoy peak-season nutrition any time of year. We preserve our harvest at perfect ripeness so you get maximum flavor and nutrients.',
    icon: Calendar,
    image: '/assets/Photos/PXL_20250513_211446827.jpg',
    timeframe: 'Available year-round'
  }
]

export default function ProcessSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            The Problem We Solve
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-contrast-high-light mb-4">
            Fresh Food That Fits Your Life
          </h2>
          <p className="text-lg text-contrast-medium-light max-w-3xl mx-auto">
            We believe healthy eating shouldn&apos;t be a struggle. That&apos;s why we offer both fresh-from-the-farm 
            products and perfectly preserved options that work with your real life, not against it.
          </p>
        </div>

        {/* Problem-Solution Cards */}
        <div className="space-y-16">
          {solutions.map((item, index) => {
            const Icon = item.icon
            return (
              <Card key={index} className="overflow-hidden border-0 shadow-sm">
                <CardContent className="p-0">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}>
                    {/* Image */}
                    <div className={`relative h-64 lg:h-80 ${
                      index % 2 === 1 ? 'lg:order-2' : ''
                    }`}>
                      <Image
                        src={item.image}
                        alt={item.solution}
                        fill
                        className="object-cover"
                      />
                      {/* Overlay with timeframe */}
                      <div className="absolute bottom-4 left-4 bg-white/90 rounded-lg px-3 py-2">
                        <span className="text-sm font-medium text-contrast-high-light">
                          {item.timeframe}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className={`p-8 lg:p-12 flex flex-col justify-center ${
                      index % 2 === 1 ? 'lg:order-1' : ''
                    }`}>
                      {/* Icon and Problem */}
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                          <Icon className="h-6 w-6 text-gray-600" />
                        </div>
                        <div>
                          <span className="text-sm text-gray-600 font-medium">Problem:</span>
                          <p className="text-lg text-contrast-medium-light">{item.problem}</p>
                        </div>
                      </div>

                      {/* Solution */}
                      <h3 className="text-2xl md:text-3xl font-bold text-contrast-high-light mb-4">
                        {item.solution}
                      </h3>
                      <p className="text-lg text-contrast-medium-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-contrast-high-light mb-4">
            Stop Fighting Fresh Food Waste
          </h3>
          <p className="text-lg text-contrast-medium-light mb-6 max-w-2xl mx-auto">
            Whether you need fresh products for this week or preserved options for long-term convenience, 
            we have solutions that work with your lifestyle.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">Fresh</div>
              <p className="text-sm text-contrast-medium-light">Weekly delivery available</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">Preserved</div>
              <p className="text-sm text-contrast-medium-light">Stock up without worry</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
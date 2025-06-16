import Layout from '@/components/layout/Layout'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { ArrowRight, Clock, Shield, Leaf, Zap, CheckCircle, Phone, Package } from 'lucide-react'

const benefits = [
  {
    icon: Clock,
    title: '25-Year Shelf Life',
    description: 'Properly stored freeze-dried foods can last up to 25 years without refrigeration.',
  },
  {
    icon: Shield,
    title: '97% Nutrient Retention',
    description: 'Preserves nearly all vitamins, minerals, and nutritional value of fresh food.',
  },
  {
    icon: Leaf,
    title: 'No Preservatives',
    description: 'Chemical-free preservation process requires no artificial additives.',
  },
  {
    icon: Zap,
    title: 'Lightweight & Portable',
    description: 'Removes 98% of water weight while maintaining original structure.',
  }
]

const process = [
  {
    step: '1',
    title: 'Freezing',
    description: 'Food is rapidly frozen to -40°F or lower to preserve cellular structure.'
  },
  {
    step: '2',
    title: 'Vacuum',
    description: 'Placed in a vacuum chamber where pressure is dramatically reduced.'
  },
  {
    step: '3',
    title: 'Sublimation',
    description: 'Ice crystals transform directly into vapor, bypassing the liquid phase.'
  },
  {
    step: '4',
    title: 'Final Drying',
    description: 'Remaining bound moisture is removed, leaving perfectly preserved food.'
  }
]

const comparisons = [
  {
    method: 'Freeze Drying',
    shelfLife: '25 years',
    nutrients: '97%',
    texture: 'Original',
    weight: '98% reduced',
    color: 'bg-primary'
  },
  {
    method: 'Dehydration',
    shelfLife: '1-2 years',
    nutrients: '60-80%',
    texture: 'Changed',
    weight: '80% reduced',
    color: 'bg-gray-400'
  },
  {
    method: 'Canning',
    shelfLife: '2-5 years',
    nutrients: '40-60%',
    texture: 'Soft',
    weight: 'No change',
    color: 'bg-gray-500'
  }
]

const useCases = [
  {
    icon: Package,
    title: 'Emergency Preparedness',
    description: 'Build a 25-year food storage system for natural disasters or emergencies.',
    examples: ['Bug-out bags', 'Emergency kits', 'Survival food storage']
  },
  {
    icon: Leaf,
    title: 'Garden Preservation',
    description: 'Preserve your harvest at peak ripeness to enjoy year-round nutrition.',
    examples: ['Excess vegetables', 'Seasonal fruits', 'Herb preservation']
  },
  {
    icon: Zap,
    title: 'Outdoor Adventures',
    description: 'Lightweight, nutritious meals perfect for camping, hiking, and travel.',
    examples: ['Backpacking meals', 'RV travel', 'Boat provisions']
  }
]

export default function WhatIsFreezeDryingPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4 px-4 py-1">
              Food Preservation Technology
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-contrast-high-light mb-6 leading-tight">
              What is{' '}
              <span className="text-primary">Freeze-Drying?</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-contrast-medium-light mb-8 leading-relaxed max-w-3xl mx-auto">
              Discover the science behind the ultimate food preservation method that maintains 
              97% of nutrients while extending shelf life to 25 years.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button asChild size="lg" className="text-lg px-8 shadow-none">
                <Link href="/products">
                  See Our Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link href="/contact">
                  Custom Freeze-Drying
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Freeze-Drying Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                The Science
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-contrast-high-light mb-6">
                Advanced Food Preservation
              </h2>
              <div className="space-y-4 text-lg text-contrast-medium-light">
                <p>
                  Freeze-drying, also known as lyophilization, is the most advanced method of food preservation available today. 
                  Unlike traditional dehydration that uses heat, freeze-drying removes moisture through a process called sublimation.
                </p>
                <p>
                  This revolutionary process preserves the cellular structure of food, maintaining its original shape, color, 
                  taste, and nutritional value while removing 98% of its water content.
                </p>
                <p>
                  The result? Food that can last decades without refrigeration while retaining nearly all of its 
                  original nutritional benefits and flavor.
                </p>
              </div>
            </div>
            
            <div className="relative h-96 rounded-lg overflow-hidden border">
              <Image
                src="/assets/Photos/PXL_20250513_211446827.jpg"
                alt="Freeze-drying equipment and process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              How It Works
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-contrast-high-light mb-4">
              The Freeze-Drying Process
            </h2>
            <p className="text-lg text-contrast-medium-light max-w-2xl mx-auto">
              Our state-of-the-art equipment follows a precise 4-step process to perfectly preserve your food.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="border text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-contrast-high-light mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-contrast-medium-light">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Why Choose Freeze-Drying
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-contrast-high-light mb-4">
              Unmatched Benefits
            </h2>
            <p className="text-lg text-contrast-medium-light max-w-2xl mx-auto">
              Freeze-drying offers advantages that no other preservation method can match.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card key={index} className="border hover:border-gray-300 transition-colors text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-contrast-high-light mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-contrast-medium-light">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Comparison Table */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-contrast-high-light mb-6 text-center">
              Preservation Method Comparison
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-semibold text-contrast-high-light">Method</th>
                    <th className="text-center p-4 font-semibold text-contrast-high-light">Shelf Life</th>
                    <th className="text-center p-4 font-semibold text-contrast-high-light">Nutrients</th>
                    <th className="text-center p-4 font-semibold text-contrast-high-light">Texture</th>
                    <th className="text-center p-4 font-semibold text-contrast-high-light">Weight Reduction</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((comparison, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-4">
                        <div className="flex items-center">
                          <div className={`w-3 h-3 rounded-full ${comparison.color} mr-3`}></div>
                          <span className="font-medium text-contrast-high-light">{comparison.method}</span>
                        </div>
                      </td>
                      <td className="text-center p-4 text-contrast-medium-light">{comparison.shelfLife}</td>
                      <td className="text-center p-4 text-contrast-medium-light">{comparison.nutrients}</td>
                      <td className="text-center p-4 text-contrast-medium-light">{comparison.texture}</td>
                      <td className="text-center p-4 text-contrast-medium-light">{comparison.weight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Perfect For
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-contrast-high-light mb-4">
              When to Choose Freeze-Drying
            </h2>
            <p className="text-lg text-contrast-medium-light max-w-2xl mx-auto">
              Discover the situations where freeze-drying provides the best solution for your food preservation needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon
              return (
                <Card key={index} className="border">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-contrast-high-light mb-2 text-xl">
                      {useCase.title}
                    </h3>
                    <p className="text-contrast-medium-light mb-4">
                      {useCase.description}
                    </p>
                    <div className="space-y-2">
                      {useCase.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="flex items-center text-sm text-contrast-medium-light">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          {example}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience Freeze-Drying?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Whether you want to try our freeze-dried products or preserve your own harvest, 
            we're here to help you discover the benefits of this amazing technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/products">
                <Package className="mr-2 h-5 w-5" />
                Shop Freeze-Dried Products
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Custom Preservation Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}
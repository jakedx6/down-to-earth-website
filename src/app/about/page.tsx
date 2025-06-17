import Layout from '@/components/layout/Layout'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { Award, Sparkles, ArrowRight, Phone, Map, CheckCircle } from 'lucide-react'

const values = [
  {
    icon: Award,
    title: 'Honest Quality',
    description: 'We grow and raise food we\'re proud to feed our own family. Zero compromises.',
  },
  {
    icon: Sparkles,
    title: 'Real Innovation',
    description: 'Blending time-honored farming traditions with modern preservation technology.',
  },
  {
    icon: Map,
    title: 'Iowa Roots',
    description: '100% Iowa-grown, and proud to be part of this state\'s incredible agricultural story.',
  }
]

export default function AboutPage() {
  return (
    <Layout>
      {/* Clean Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4">
            About Our Farm
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-contrast-high-light mb-6">
            It All Started on 6 Acres in Iowa
          </h1>
          <p className="text-xl text-contrast-medium-light max-w-3xl mx-auto">
            Just south of Des Moines, you'll find us—Down to Earth Farmstead. We're a family on a small 6-acre plot with a big idea.
          </p>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 pt-0 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden border">
              <Image
                src="/assets/Photos/20250409_171548.jpg"
                alt="Fresh produce at the farm"
                fill
                className="object-cover"
              />
            </div>
            
            <div>
              <Badge variant="secondary" className="mb-4">
                The Problem We Saw
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-contrast-high-light mb-6">
                The &ldquo;Use It or Lose It&rdquo; Problem
              </h2>
              <div className="space-y-4 text-lg text-contrast-medium-light">
                <p>
                  We've been there. You get excited at the farmers market, loading up on beautiful, fresh produce with the best intentions. But life happens. The week gets busy, plans change, and that gorgeous food wilts in the crisper drawer.
                </p>
                <p>
                  It's a frustrating cycle of waste. We knew there had to be a better way to bridge the gap between loving farm-fresh food and living a modern, unpredictable life.
                </p>
                <p className="font-medium text-contrast-high-light">
                  We wanted to offer food you could count on—whether for tonight's dinner or for an emergency down the road.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                Our Solution
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-contrast-high-light mb-6">
                Good Food, On Your Time
              </h2>
              <div className="space-y-4 text-lg text-contrast-medium-light">
                <p>
                  That's why we do what we do. We provide two sides of the same coin: the immediate joy of fresh-from-the-farm eggs and seasonal produce, and the peace of mind that comes with expertly preserved foods.
                </p>
                <p>
                  Our state-of-the-art freeze-drying process locks in the flavor and nutrients of our harvest for up to 25 years. It's the same wholesome food, with zero preservatives, simply made to last.
                </p>
                <p className="font-medium text-contrast-high-light">
                  It's your pantry's secret weapon for quality ingredients that are ready when you are.
                </p>
              </div>
            </div>
            
            <div className="relative h-96 rounded-lg overflow-hidden border">
              <Image
                src="/assets/Photos/PXL_20250513_211446827.jpg"
                alt="Freeze-drying equipment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Growing Our Way Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Our Way
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-contrast-high-light mb-4">
              Growing From the Ground Up, Our Way
            </h2>
            <p className="text-lg text-contrast-medium-light max-w-3xl mx-auto">
              Being a small, owner-funded farmstead means we don't answer to investors or corporate headquarters. Our only boss is our commitment to you and to the land we're working.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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

          {/* Key Stats */}
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">6</div>
                <p className="text-sm text-contrast-medium-light">Acres in Iowa</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">25</div>
                <p className="text-sm text-contrast-medium-light">Year Shelf Life</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">97%</div>
                <p className="text-sm text-contrast-medium-light">Nutrient Retention</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">0</div>
                <p className="text-sm text-contrast-medium-light">Preservatives</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden border">
              <Image
                src="/assets/Photos/20250409_171610.jpg"
                alt="Farm operations"
                fill
                className="object-cover"
              />
            </div>
            
            <div>
              <Badge variant="outline" className="mb-4">
                From Our Family to Yours
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-contrast-high-light mb-6">
                We're Not Just Another Farm
              </h2>
              <div className="space-y-4 text-lg text-contrast-medium-light">
                <p>
                  We're your neighbors, working hard to bring practical, sustainable, and delicious food from our home to yours. We're in the early days, with our hands in the dirt, building a farm that we hope brings real value to real people.
                </p>
                <p>
                  This freedom allows us to focus on what truly matters: growing food we're proud to feed our own family, innovating with real solutions, and staying true to our Iowa roots.
                </p>
                <p className="font-medium text-contrast-high-light">
                  Thanks for being a part of our story.
                </p>
              </div>
              
              <div className="mt-6 flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-sm text-contrast-medium-light">Family-owned and operated since day one</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience Farm-Fresh Quality?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Contact us to learn more about our products and services, or to place your first order.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link href="/products">
                View Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg bg-transparent text-white border-white hover:bg-white hover:text-primary">
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}
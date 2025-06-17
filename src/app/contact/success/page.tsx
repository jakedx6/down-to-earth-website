import Layout from '@/components/layout/Layout'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, ArrowLeft, Mail } from 'lucide-react'
import Link from 'next/link'

export default function ContactSuccessPage() {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white min-h-[70vh] flex items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4">
            Message Sent
          </Badge>
          
          <div className="flex justify-center mb-6">
            <CheckCircle className="h-16 w-16 text-primary" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-contrast-high-light mb-6">
            Thank You!
          </h1>
          
          <p className="text-xl text-contrast-medium-light mb-8 max-w-2xl mx-auto">
            Your message has been successfully sent to Down to Earth Farmstead. 
            We&apos;ll get back to you within 24 hours.
          </p>

          <Card className="max-w-md mx-auto mb-8 border">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-primary mr-2" />
                <span className="font-semibold text-contrast-high-light">What happens next?</span>
              </div>
              <ul className="text-left space-y-2 text-contrast-medium-light">
                <li>• We&apos;ll review your inquiry</li>
                <li>• Check product availability</li>
                <li>• Respond within 24 hours</li>
                <li>• Schedule pickup/delivery if needed</li>
              </ul>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/products">
                Browse Products
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}
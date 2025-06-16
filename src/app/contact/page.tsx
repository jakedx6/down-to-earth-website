import Layout from '@/components/layout/Layout'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { MapPin, Mail, Phone, Clock, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  return (
    <Layout>
      {/* Clean Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4">
            Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-contrast-high-light mb-6">
            Contact Down to Earth Farmstead
          </h1>
          <p className="text-xl text-contrast-medium-light max-w-3xl mx-auto">
            Ready to place an order or have questions about our farm-fresh products? 
            We&apos;re here to help with all your food preservation and farming needs.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Badge variant="secondary" className="mb-4">
                Send a Message
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-contrast-high-light mb-6">
                Let&apos;s Start a Conversation
              </h2>
              <p className="text-lg text-contrast-medium-light mb-8">
                Whether you&apos;re interested in our products, have questions about our services, 
                or want to learn more about our farm, we&apos;d love to hear from you.
              </p>
              
              <Card className="border">
                <CardContent className="p-6">
                  <form 
                    name="contact" 
                    method="POST" 
                    data-netlify="true" 
                    data-netlify-honeypot="bot-field"
                    className="space-y-6"
                  >
                    {/* Hidden field for Netlify Forms */}
                    <input type="hidden" name="form-name" value="contact" />
                    
                    {/* Hidden honeypot field for bot protection */}
                    <div className="hidden">
                      <Label htmlFor="bot-field">Don&apos;t fill this out if you&apos;re human:</Label>
                      <Input id="bot-field" name="bot-field" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          required
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service-type">What can we help you with?</Label>
                      <select 
                        id="service-type"
                        name="service-type"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        defaultValue="general"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="fresh-eggs">Fresh Eggs Order</option>
                        <option value="freeze-dried">Freeze-Dried Products</option>
                        <option value="custom-service">Custom Freeze-Drying Service</option>
                        <option value="wholesale">Wholesale/Bulk Orders</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Brief description of your inquiry"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Tell us more about what you need..."
                        className="min-h-[120px]"
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <Badge variant="outline" className="mb-4">
                Farm Information
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-contrast-high-light mb-6">
                Visit Our Farm
              </h2>
              <p className="text-lg text-contrast-medium-light mb-8">
                Located just south of Des Moines, Iowa, our 6-acre farmstead is where the magic happens. 
                While we primarily work by appointment, we&apos;d love to show you around our operation.
              </p>

              <div className="space-y-6">
                {/* Location */}
                <Card className="border">
                  <CardHeader>
                    <CardTitle className="flex items-center text-contrast-high-light">
                      <MapPin className="mr-3 h-5 w-5 text-primary" />
                      Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-contrast-medium-light">
                      Just south of Des Moines, Iowa<br />
                      <em>Exact address provided upon scheduling visit</em>
                    </p>
                  </CardContent>
                </Card>

                {/* Contact Methods */}
                <Card className="border">
                  <CardHeader>
                    <CardTitle className="flex items-center text-contrast-high-light">
                      <Mail className="mr-3 h-5 w-5 text-primary" />
                      Get In Touch
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="mr-3 h-4 w-4 text-primary" />
                      <span className="text-contrast-medium-light">Contact form preferred</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="mr-3 h-4 w-4 text-primary" />
                      <span className="text-contrast-medium-light">Response within 24 hours</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Hours */}
                <Card className="border">
                  <CardHeader>
                    <CardTitle className="flex items-center text-contrast-high-light">
                      <Clock className="mr-3 h-5 w-5 text-primary" />
                      Farm Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-contrast-medium-light">
                      <div className="flex justify-between">
                        <span>Pickup/Delivery:</span>
                        <span>Tuesday - Saturday</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Farm Visits:</span>
                        <span>By appointment only</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Response Time:</span>
                        <span>Within 24 hours</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* What to Expect */}
                <Card className="border bg-gray-50">
                  <CardHeader>
                    <CardTitle className="flex items-center text-contrast-high-light">
                      <CheckCircle className="mr-3 h-5 w-5 text-primary" />
                      What to Expect
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-contrast-medium-light">
                      <li>• Response within 24 hours</li>
                      <li>• Product availability confirmation</li>
                      <li>• Pickup/delivery scheduling</li>
                      <li>• Custom service consultation</li>
                      <li>• Farm visit coordination</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Quick Answers
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-contrast-high-light mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-contrast-high-light mb-2">
                  How do I place an order?
                </h3>
                <p className="text-contrast-medium-light text-sm">
                  Use the contact form above or call us directly. We&apos;ll confirm availability and arrange pickup or delivery.
                </p>
              </CardContent>
            </Card>

            <Card className="border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-contrast-high-light mb-2">
                  Do you deliver?
                </h3>
                <p className="text-contrast-medium-light text-sm">
                  Yes! We offer local delivery within 15 miles of our farm. Delivery fees may apply based on distance.
                </p>
              </CardContent>
            </Card>

            <Card className="border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-contrast-high-light mb-2">
                  What payment methods do you accept?
                </h3>
                <p className="text-contrast-medium-light text-sm">
                  We accept cash, check, and most major credit cards. Payment is typically collected at pickup or delivery.
                </p>
              </CardContent>
            </Card>

            <Card className="border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-contrast-high-light mb-2">
                  Can I visit the farm?
                </h3>
                <p className="text-contrast-medium-light text-sm">
                  Absolutely! We love showing people our operation. Farm visits are by appointment only for the safety of our animals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  )
}
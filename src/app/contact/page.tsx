'use client'

import Layout from '@/components/layout/Layout'
import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { MapPin, Mail, Phone, Clock, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    serviceType: 'general'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - for now just log the data
    console.log('Form submitted:', formData)
    // In a real app, you would send this to your backend
    alert('Thank you for your message! We will get back to you soon.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Layout>
      {/* Clean Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4">
            Contact Us
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-contrast-high-light mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-contrast-medium-light max-w-3xl mx-auto">
            Ready to place an order or have questions about our farm-fresh products? 
            We're here to help with all your food preservation and farming needs.
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
                Let's Start a Conversation
              </h2>
              <p className="text-lg text-contrast-medium-light mb-8">
                Whether you're interested in our products, have questions about our services, 
                or want to learn more about our farm, we'd love to hear from you.
              </p>
              
              <Card className="border">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="serviceType">What can we help you with?</Label>
                      <Select value={formData.serviceType} onValueChange={(value) => setFormData({...formData, serviceType: value})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="order">Product Order</SelectItem>
                          <SelectItem value="freeze-drying">Custom Freeze-Drying Service</SelectItem>
                          <SelectItem value="seasonal">Seasonal Produce Availability</SelectItem>
                          <SelectItem value="wholesale">Wholesale/Bulk Orders</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your needs, questions, or how we can help..."
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Farm Info */}
              <Card className="border">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-primary" />
                    Farm Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-contrast-high-light">Location</h3>
                      <p className="text-contrast-medium-light">Iowa Farm<br />Contact us for exact address</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-contrast-high-light">Email</h3>
                      <p className="text-contrast-medium-light">Contact us through the form for fastest response</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-contrast-high-light">Phone</h3>
                      <p className="text-contrast-medium-light">Available through contact form</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-contrast-high-light">Response Time</h3>
                      <p className="text-contrast-medium-light">We typically respond within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Services Overview */}
              <Card className="border">
                <CardHeader>
                  <CardTitle>Our Services</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-contrast-medium-light">Fresh farm eggs ($5/dozen)</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-contrast-medium-light">Freeze-dried eggs ($12/dozen)</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-contrast-medium-light">Custom freeze-drying ($10)</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-contrast-medium-light">Seasonal fresh produce</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-contrast-medium-light">Fresh garlic (seasonal)</span>
                  </div>
                </CardContent>
              </Card>

              {/* Why Contact Us */}
              <Card className="bg-secondary border">
                <CardHeader>
                  <CardTitle>Why Contact Us?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-contrast-high-light">
                    <li>• Custom orders and bulk pricing</li>
                    <li>• Seasonal availability updates</li>
                    <li>• Freeze-drying service scheduling</li>
                    <li>• Product recommendations</li>
                    <li>• Farm visits and consultations</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
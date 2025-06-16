import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Check } from 'lucide-react'

interface ProductCardProps {
  name: string
  price: string
  description: string
  image: string
  features?: string[]
  inStock?: boolean
}

export default function ProductCard({ 
  name, 
  price, 
  description, 
  image, 
  features = [], 
  inStock = true 
}: ProductCardProps) {
  return (
    <Card className="overflow-hidden border hover:border-gray-300 transition-colors duration-300">
      {/* Product Image */}
      <div className="relative h-64 bg-gray-100">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
        {!inStock && (
          <Badge variant="destructive" className="absolute top-4 left-4">
            Out of Stock
          </Badge>
        )}
      </div>

      {/* Product Info */}
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl text-contrast-high-light">{name}</CardTitle>
          <Badge variant="secondary" className="text-lg font-bold px-3 py-1">
            {price}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-contrast-medium-light">{description}</p>

        {/* Features */}
        {features.length > 0 && (
          <div>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-sm text-contrast-medium-light">
                  <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Contact Button */}
        <Button 
          className="w-full"
          variant={inStock ? "default" : "outline"}
          disabled={!inStock}
        >
          {inStock ? 'Contact for Order' : 'Currently Unavailable'}
        </Button>
      </CardContent>
    </Card>
  )
}
import ProductCard from './ProductCard'

interface Product {
  id: string
  name: string
  price: string
  description: string
  image: string
  features?: string[]
  inStock?: boolean
}

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
          image={product.image}
          features={product.features}
          inStock={product.inStock}
        />
      ))}
    </div>
  )
}
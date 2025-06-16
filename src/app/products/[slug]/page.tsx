import { notFound } from 'next/navigation'
import Layout from '@/components/layout/Layout'
import ProductLayout from '@/components/products/ProductLayout'
import { getProductBySlug, getProductSlugs, getAllProducts } from '@/lib/products'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getProductSlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const product = await getProductBySlug(slug)

  if (!product) {
    return {
      title: 'Product Not Found - Down to Earth Farmstead',
      description: 'The requested product could not be found.',
    }
  }

  return {
    title: `${product.title} - Down to Earth Farmstead`,
    description: product.excerpt,
    openGraph: {
      title: product.title,
      description: product.excerpt,
      type: 'product',
      images: product.image ? [product.image] : [],
    },
  }
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params
  const product = await getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  // Get related products (same category, excluding current product)
  const allProducts = await getAllProducts()
  const relatedProducts = allProducts
    .filter(p => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3)

  return (
    <Layout>
      <ProductLayout 
        product={product} 
        relatedProducts={relatedProducts}
      />
    </Layout>
  )
}
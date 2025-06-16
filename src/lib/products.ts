import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeHighlight from 'rehype-highlight'
import rehypeStringify from 'rehype-stringify'

const productsDirectory = path.join(process.cwd(), 'content/products')

export interface ProductMetadata {
  title: string
  price: string
  excerpt: string
  image: string
  category: string
  inStock: boolean
  featured: boolean
  weight?: string
  shelfLife?: string
  nutritionHighlights?: string[]
  features: string[]
  tags: string[]
}

export interface Product extends ProductMetadata {
  slug: string
  content: string
}

export interface ProductPreview extends ProductMetadata {
  slug: string
}

export async function getProductSlugs(): Promise<string[]> {
  if (!fs.existsSync(productsDirectory)) {
    return []
  }
  
  const fileNames = fs.readdirSync(productsDirectory)
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => fileName.replace(/\.md$/, ''))
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    const fullPath = path.join(productsDirectory, `${slug}.md`)
    
    if (!fs.existsSync(fullPath)) {
      return null
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    // Process markdown content to HTML
    const processedContent = await remark()
      .use(remarkGfm) // GitHub Flavored Markdown
      .use(remarkRehype, { allowDangerousHtml: true }) // Convert to HTML
      .use(rehypeHighlight) // Syntax highlighting
      .use(rehypeStringify, { allowDangerousHtml: true }) // Stringify HTML
      .process(content)
    
    const contentHtml = processedContent.toString()
    
    return {
      slug,
      content: contentHtml,
      title: data.title || '',
      price: data.price || '',
      excerpt: data.excerpt || '',
      image: data.image || '',
      category: data.category || 'General',
      inStock: data.inStock !== false, // Default to true
      featured: data.featured || false,
      weight: data.weight || '',
      shelfLife: data.shelfLife || '',
      nutritionHighlights: data.nutritionHighlights || [],
      features: data.features || [],
      tags: data.tags || [],
    }
  } catch (error) {
    console.error(`Error reading product ${slug}:`, error)
    return null
  }
}

export async function getAllProducts(): Promise<ProductPreview[]> {
  const slugs = await getProductSlugs()
  const products: ProductPreview[] = []
  
  for (const slug of slugs) {
    try {
      const fullPath = path.join(productsDirectory, `${slug}.md`)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)
      
      products.push({
        slug,
        title: data.title || '',
        price: data.price || '',
        excerpt: data.excerpt || '',
        image: data.image || '',
        category: data.category || 'General',
        inStock: data.inStock !== false, // Default to true
        featured: data.featured || false,
        weight: data.weight || '',
        shelfLife: data.shelfLife || '',
        nutritionHighlights: data.nutritionHighlights || [],
        features: data.features || [],
        tags: data.tags || [],
      })
    } catch (error) {
      console.error(`Error reading product metadata for ${slug}:`, error)
    }
  }
  
  // Sort by featured first, then by title
  return products.sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return a.title.localeCompare(b.title)
  })
}

export async function getFeaturedProducts(): Promise<ProductPreview[]> {
  const allProducts = await getAllProducts()
  return allProducts.filter(product => product.featured)
}

export async function getProductsByCategory(category: string): Promise<ProductPreview[]> {
  const allProducts = await getAllProducts()
  return allProducts.filter(product => 
    product.category.toLowerCase() === category.toLowerCase()
  )
}

export async function getInStockProducts(): Promise<ProductPreview[]> {
  const allProducts = await getAllProducts()
  return allProducts.filter(product => product.inStock)
}

export async function getProductsByTag(tag: string): Promise<ProductPreview[]> {
  const allProducts = await getAllProducts()
  return allProducts.filter(product => 
    product.tags.some(productTag => 
      productTag.toLowerCase() === tag.toLowerCase()
    )
  )
}

export function getProductCategories(): string[] {
  return [
    'Fresh Products',
    'Preserved Products',
    'Services',
    'Seasonal',
    'Custom Orders'
  ]
}
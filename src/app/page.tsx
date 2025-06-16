import Layout from '@/components/layout/Layout'
import CleanHero from '@/components/home/CleanHero'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import ValueProposition from '@/components/home/ValueProposition'
import ProcessSection from '@/components/home/ProcessSection'
import FreezeDryingCTA from '@/components/home/FreezeDryingCTA'
// import ArticlesPreview from '@/components/home/ArticlesPreview' // Hidden for now
import CTASection from '@/components/home/CTASection'

export default function Home() {
  return (
    <Layout>
      <CleanHero />
      <FreezeDryingCTA />
      <FeaturedProducts />
      <ValueProposition />
      <ProcessSection />
      {/* <ArticlesPreview /> */} {/* Hidden for now */}
      <CTASection />
    </Layout>
  )
}

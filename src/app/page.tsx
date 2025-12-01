import HeroSection from '@/components/HeroSection'
import LiveResults from '@/components/LiveResults'
import LotteryGrid from '@/components/LotteryGrid'
import AIPreview from '@/components/AIPreview'
import StatsSection from '@/components/StatsSection'
import PremiumFeatures from '@/components/PremiumFeatures'

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <LiveResults />
      <LotteryGrid />
      <AIPreview />
      <StatsSection />
      <PremiumFeatures />
    </div>
  )
}

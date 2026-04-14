import { HeroSection } from "@/components/hero-section"
import { TrustBadges } from "@/components/trust-badges"
import { StatsCounter } from "@/components/stats-counter"
import { FleetPreview } from "@/components/fleet-preview"
import { WhyChooseUs } from "@/components/why-choose-us"
import { CallToAction } from "@/components/call-to-action"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TrustBadges />
      <StatsCounter />
      <FleetPreview />
      <WhyChooseUs />
      <CallToAction />
    </div>
  )
}

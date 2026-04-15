import { HeroSection } from "@/components/hero-section"
import { BookingForm } from "@/components/booking-form"
import { TrustBadges } from "@/components/trust-badges"
import { StatsCounter } from "@/components/stats-counter"
import { FleetPreview } from "@/components/fleet-preview"
import { Testimonials } from "@/components/testimonials"
import { FAQSection } from "@/components/faq"
import { WhyChooseUs } from "@/components/why-choose-us"
import { CallToAction } from "@/components/call-to-action"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BookingForm />
      <TrustBadges />
      <StatsCounter />
      <FleetPreview />
      <Testimonials />
      <WhyChooseUs />
      <FAQSection />
      <CallToAction />
    </div>
  )
}

import { HeroSection } from "@/components/hero-section"
import { BookingForm } from "@/components/booking-form"
import { TrustBadges } from "@/components/trust-badges"
import { StatsCounter } from "@/components/stats-counter"
import { FleetPreview } from "@/components/fleet-preview"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { FAQSection } from "@/components/faq-fixed"
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
      <TestimonialsCarousel />
      <WhyChooseUs />
      <FAQSection />
      <CallToAction />
    </div>
  )
}

import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { BookingSection } from "@/components/booking-section"
import { AboutSection } from "@/components/about-section"
import { FleetSection } from "@/components/fleet-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
      <main className="relative">
        <Navigation />

        {/* Scroll Snap Sections */}
        <Hero />
        <Services />
        <BookingSection />
        <FleetSection />
        <AboutSection />
        <Footer />
      </main>
  )
}

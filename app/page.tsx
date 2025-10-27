import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { DoctorsSection } from "@/components/doctors-section"
import { PartnersSection } from "@/components/partners-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ClientOnly } from "@/components/client-only"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <ClientOnly>
        <Header />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <DoctorsSection />
        <PartnersSection />
        <ContactSection />
        <Footer />
      </ClientOnly>
    </main>
  )
}

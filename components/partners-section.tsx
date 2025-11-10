"use client"

import { Building2, Shield } from "lucide-react"

const corporateClients = [
  { name: "ATS Logistics" },
  { name: "Goil PLC" },
  { name: "SSNIT" },
  { name: "Sterlin International" },
  { name: "VAV Commodities Company" },
  { name: "Holistic CAre Medical Assistant, UK & Nigeria" },
  { name: "Comfort Health Assistance, Uruguay" },
  { name: "Everpack Company" },
  { name: "AH Hotel" },
]

const insurancePartners = [
  { name: "Acacia Health Insurance", logo: "/insurance partners/acacia-logo.png" },
  { name: "Glico Healthcare", logo: "/insurance partners/glico-logo.png" },
  { name: "Apex Health Insurance", logo: "/insurance partners/apex-logo.jpeg" },
  { name: "Equity Health Insurance", logo: "/insurance partners/equityhealth-logo.png" },
  { name: "Medfocus International", logo: "/insurance partners/medfocus-logo.png" },
  { name: "Nationwide Insurance", logo: "/insurance partners/nationwide-logo.png" },
  { name: "Ace Medical Insurance", logo: "/insurance partners/ace-logo.jpg" },
  { name: "Metropolitan Health Insurance", logo: "/insurance partners/metropolitan-logo.jpg" },
  { name: "Premier Health Insurance", logo: "/insurance partners/premier-logo.png" },
  { name: "Cosmopolitan Health Insurance", logo: "/insurance partners/cosmopolitan-logo.png" },
  { name: "GAB Health Insurance Company", logo: "/insurance partners/GAB-logo.png" },
  { name: "International SOS", logo: "/insurance partners/internationalsos-logo.jpg" },
]

export function PartnersSection() {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">Our Partners</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            We work with leading insurance providers to deliver quality healthcare services.
          </p>
        </div>

        <div className="space-y-12">
          {/* Corporate Clients - Names List */}
          <div>
            <div className="flex items-center justify-center gap-3 mb-6">
              <Building2 className="h-7 w-7 text-red-600" />
              <h3 className="text-2xl lg:text-3xl font-semibold">Corporate Clients</h3>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-center max-w-4xl mx-auto">
              {corporateClients.map((client, index) => (
                <li key={index} className="text-muted-foreground">{client.name}</li>
              ))}
            </ul>
          </div>

          {/* Insurance Partners - Endless Scroll */}
          <div>
            <div className="flex items-center justify-center gap-3 mb-8">
              <Shield className="h-7 w-7 text-emerald-600" />
              <h3 className="text-2xl lg:text-3xl font-semibold">Insurance Partners</h3>
            </div>
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll-right will-change-transform min-w-max">
                {/* Render multiple sets (4x) to ensure all logos are visible immediately on page load */}
                {Array.from({ length: 4 }).map((_, setIndex) =>
                  insurancePartners.map((partner, index) => (
                    <div
                      key={`set-${setIndex}-${index}`}
                      aria-hidden={setIndex > 1}
                      className="flex-shrink-0 px-8 flex items-center justify-center min-w-[120px]"
                    >
                      <img
                        src={partner.logo || "/placeholder.svg"}
                        alt={setIndex === 0 ? partner.name : ""}
                        className="h-16 sm:h-20 w-auto object-contain bg-transparent max-w-full"
                        loading={setIndex > 1 ? "lazy" : "eager"}
                        onError={(e) => {
                          const img = e.currentTarget as HTMLImageElement
                          if (!img.dataset.fallback) {
                            img.dataset.fallback = "1"
                            // Try URL-encoded version as fallback
                            const originalSrc = partner.logo || ""
                            if (originalSrc.includes("insurance partners")) {
                              img.src = originalSrc.replace("insurance partners", "insurance%20partners")
                            }
                          }
                        }}
                      />
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

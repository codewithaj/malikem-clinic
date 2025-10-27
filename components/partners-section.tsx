"use client"

import { Building2, Shield } from "lucide-react"

const corporateClients = [
  { name: "ATS Logistics", logo: "/ats-logistics-company-logo.jpg" },
  { name: "Goil PLC", logo: "/goil-plc-oil-company-logo.jpg" },
  { name: "SSNIT", logo: "/ssnit-ghana-logo.jpg" },
  {
    name: "Sterlin International",
    logo: "/sterlin-international-company-logo.jpg",
  },
  {
    name: "VAV Commodities Company",
    logo: "/vav-commodities-company-logo.jpg",
  },
  {
    name: "Holistic Care Medical Assistant",
    logo: "/holistic-care-medical-logo.jpg",
  },
  {
    name: "Comfort Health Assistance",
    logo: "/comfort-health-assistance-logo.jpg",
  },
  { name: "Everpack Company", logo: "/everpack-company-logo.jpg" },
  { name: "AH Hotel", logo: "/ah-hotel-logo.jpg" },
]

const insurancePartners = [
  {
    name: "Acacia Health Insurance",
    logo: "/acacia-health-insurance-logo.jpg",
  },
  { name: "Glico Healthcare", logo: "/glico-healthcare-ghana-logo.jpg" },
  {
    name: "Apex Health Insurance",
    logo: "/apex-health-insurance-logo.jpg",
  },
  {
    name: "Equity Health Insurance",
    logo: "/equity-health-insurance-logo.jpg",
  },
  {
    name: "Medfocus International",
    logo: "/medfocus-international-logo.jpg",
  },
  {
    name: "Nationwide Insurance",
    logo: "/nationwide-insurance-ghana-logo.jpg",
  },
  {
    name: "Ace Medical Insurance",
    logo: "/placeholder.svg?height=80&width=160",
  },
  {
    name: "Metropolitan Health Insurance",
    logo: "/placeholder.svg?height=80&width=160",
  },
  {
    name: "Premier Health Insurance",
    logo: "/placeholder.svg?height=80&width=160",
  },
  {
    name: "Cosmopolitan Health Insurance",
    logo: "/placeholder.svg?height=80&width=160",
  },
  {
    name: "GAB Health Insurance Company",
    logo: "/placeholder.svg?height=80&width=160",
  },
  { name: "International SOS", logo: "/placeholder.svg?height=80&width=160" },
]

export function PartnersSection() {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">Our Partners</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            We work with leading corporate clients and insurance providers to deliver quality healthcare services.
          </p>
        </div>

        <div className="space-y-12">
          {/* Corporate Clients - Slides Left to Right */}
          <div>
            <div className="flex items-center justify-center gap-3 mb-8">
              <Building2 className="h-7 w-7 text-red-600" />
              <h3 className="text-2xl lg:text-3xl font-semibold">Corporate Clients</h3>
            </div>
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll-left">
                {/* First set of logos */}
                {corporateClients.map((client, index) => (
                  <div key={index} className="flex-shrink-0 mx-8 flex items-center justify-center">
                    <img
                      src={client.logo || "/placeholder.svg"}
                      alt={client.name}
                      className="h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {corporateClients.map((client, index) => (
                  <div key={`duplicate-${index}`} className="flex-shrink-0 mx-8 flex items-center justify-center">
                    <img
                      src={client.logo || "/placeholder.svg"}
                      alt={client.name}
                      className="h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Insurance Partners - Slides Right to Left */}
          <div>
            <div className="flex items-center justify-center gap-3 mb-8">
              <Shield className="h-7 w-7 text-emerald-600" />
              <h3 className="text-2xl lg:text-3xl font-semibold">Insurance Partners</h3>
            </div>
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll-right">
                {/* First set of logos */}
                {insurancePartners.map((partner, index) => (
                  <div key={index} className="flex-shrink-0 mx-8 flex items-center justify-center">
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      className="h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {insurancePartners.map((partner, index) => (
                  <div key={`duplicate-${index}`} className="flex-shrink-0 mx-8 flex items-center justify-center">
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      className="h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

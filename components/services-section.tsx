"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Baby,
  Heart,
  Stethoscope,
  Microscope,
  Ambulance,
  UserCheck,
  Activity,
  Pill,
  Eye,
  Ear,
  Brain,
  Utensils,
  Home,
  Briefcase,
  ClipboardCheck,
  ChevronDown,
  ChevronUp,
} from "lucide-react"

const services = [
  {
    icon: Stethoscope,
    title: "General Practice",
    description:
      "Comprehensive primary healthcare for individuals and families, ensuring early diagnosis and effective treatment of medical conditions.",
    image: "/services/general practice.jpg",
  },
  {
    icon: Ambulance,
    title: "Emergency",
    description:
      "24/7 urgent medical care for accidents, sudden illnesses, and life-threatening conditions, with quick response.",
    image: "/services/Emergency.jpg",
  },
  {
    icon: Baby,
    title: "Obstetrics & Gynaecology",
    description:
      "Expert care for women's health, from prenatal services to gynecological consultations and specialized treatments.",
    image: "/services/Obstetrics & Gynecology.jpg",
  },
  {
    icon: Activity,
    title: "General Surgery",
    description:
      "Specialist surgical care for a wide range of conditions, from minor procedures to major operations, ensuring safe treatment and recovery.",
    image: "/services/General Surgery.jpg",
  },
  {
    icon: Heart,
    title: "ANC Services",
    description: "Supporting expectant mothers with antenatal care, ensuring a healthy pregnancy journey.",
    image: "/services/ANC (Antenatal Care) Services.jpg",
  },
  {
    icon: UserCheck,
    title: "Paediatric",
    description:
      "Dedicated to the health and well-being of children, providing expert pediatric consultations, immunizations, and specialized care.",
    image: "/services/Pediatric.jpg",
  },
  {
    icon: Ear,
    title: "ENT Services",
    description:
      "Specialized care for ear, nose, and throat conditions, from allergies to complex surgical interventions.",
    image: "/services/ENT (Ear, Nose & Throat).jpg",
  },
  {
    icon: Utensils,
    title: "Dietetic Service",
    description: "Expert nutritional guidance for better health, weight management, and disease prevention.",
    image: "/services/Dietetic Service.jpg",
  },
  {
    icon: Brain,
    title: "Psychiatric Services",
    description:
      "Offering mental health support, counseling, and treatment plans to help patients achieve emotional and psychological well-being.",
    image: "/services/Psychiatric Services.jpg",
  },
  {
    icon: Eye,
    title: "Optometric Services",
    description: "Providing advanced eye care, vision correction, and treatment for various eye conditions.",
    image: "/services/Optometric Services.jpg",
  },
  {
    icon: Stethoscope,
    title: "Dental Services",
    description:
      "Expert dental care ranging from routine check-ups to specialized treatments, ensuring bright and healthy smiles.",
    image: "/services/ Dental Services.jpg",
  },
  {
    icon: Microscope,
    title: "Laboratory Services",
    description: "State-of-the-art diagnostic testing to support accurate and timely medical decisions.",
    image: "/services/Laboratory Services.jpg",
  },
  {
    icon: Pill,
    title: "Pharmacy",
    description:
      "Hospital and community pharmacy providing safe medicines, prescriptions, over-the-counter drugs, and guidance for effective treatment.",
    image: "/services/Pharmacy.jpg",
  },
  {
    icon: Activity,
    title: "ECG & Ultrasound Scan",
    description: "Advanced diagnostic imaging to detect and monitor various health conditions.",
    image: "/services/ECG & Ultrasound Scan.jpg",
  },
  {
    icon: Home,
    title: "Home Services",
    description:
      "Bringing quality healthcare to your doorstep with home consultations, nursing care, and diagnostic services.",
    image: "/services/Home services.jpg",
  },
  {
    icon: ClipboardCheck,
    title: "Student Medical Examination",
    description: "Ensuring students meet health requirements with comprehensive medical check-ups.",
    image: "/services/Student Medical Examination.jpg",
  },
  {
    icon: Briefcase,
    title: "Corporate/Occupational Health",
    description: "Tailored healthcare solutions for businesses to maintain a healthy and productive workforce.",
    image: "/services/Corporate:Occupational Health Services.jpg",
  },
]

export function ServicesSection() {
  const [showAll, setShowAll] = useState(false)
  const displayedServices = showAll ? services : services.slice(0, 3)

  return (
    <section id="services" className="py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-balance mb-3">Our Medical Services</h2>
          <p className="text-base text-muted-foreground text-pretty max-w-2xl mx-auto">
            We offer comprehensive healthcare services with modern equipment and experienced medical professionals to
            ensure the best care for you and your family.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {displayedServices.map((service, index) => (
            <Card key={index} className="group overflow-hidden bg-card border-border hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative w-full aspect-[4/3]">
                  <img
                    src={service.image || "/placeholder.jpg"}
                    alt={service.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute inset-0 flex items-end p-4 sm:p-5">
                    <CardTitle className="text-white text-lg sm:text-xl font-extrabold tracking-tight">
                      {service.title}
                    </CardTitle>
                  </div>

                  {/* Hover reveal content */}
                  <div className="absolute inset-0 bg-background/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 sm:p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                        <service.icon className="h-5 w-5" />
                      </div>
                      <span className="font-semibold">{service.title}</span>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button onClick={() => setShowAll(!showAll)} variant="outline" size="lg" className="gap-2">
            {showAll ? (
              <>
                See Less <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                See More <ChevronDown className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </div>
    </section>
  )
}

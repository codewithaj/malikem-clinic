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
  },
  {
    icon: Ambulance,
    title: "Emergency",
    description:
      "24/7 urgent medical care for accidents, sudden illnesses, and life-threatening conditions, with quick response.",
  },
  {
    icon: Baby,
    title: "Obstetrics & Gynaecology",
    description:
      "Expert care for women's health, from prenatal services to gynecological consultations and specialized treatments.",
  },
  {
    icon: Activity,
    title: "General Surgery",
    description:
      "Specialist surgical care for a wide range of conditions, from minor procedures to major operations, ensuring safe treatment and recovery.",
  },
  {
    icon: Heart,
    title: "ANC Services",
    description: "Supporting expectant mothers with antenatal care, ensuring a healthy pregnancy journey.",
  },
  {
    icon: UserCheck,
    title: "Paediatric",
    description:
      "Dedicated to the health and well-being of children, providing expert pediatric consultations, immunizations, and specialized care.",
  },
  {
    icon: Ear,
    title: "ENT Services",
    description:
      "Specialized care for ear, nose, and throat conditions, from allergies to complex surgical interventions.",
  },
  {
    icon: Utensils,
    title: "Dietetic Service",
    description: "Expert nutritional guidance for better health, weight management, and disease prevention.",
  },
  {
    icon: Brain,
    title: "Psychiatric Services",
    description:
      "Offering mental health support, counseling, and treatment plans to help patients achieve emotional and psychological well-being.",
  },
  {
    icon: Eye,
    title: "Optometric Services",
    description: "Providing advanced eye care, vision correction, and treatment for various eye conditions.",
  },
  {
    icon: Stethoscope,
    title: "Dental Services",
    description:
      "Expert dental care ranging from routine check-ups to specialized treatments, ensuring bright and healthy smiles.",
  },
  {
    icon: Microscope,
    title: "Laboratory Services",
    description: "State-of-the-art diagnostic testing to support accurate and timely medical decisions.",
  },
  {
    icon: Pill,
    title: "Pharmacy",
    description:
      "Hospital and community pharmacy providing safe medicines, prescriptions, over-the-counter drugs, and guidance for effective treatment.",
  },
  {
    icon: Activity,
    title: "ECG & Ultrasound Scan",
    description: "Advanced diagnostic imaging to detect and monitor various health conditions.",
  },
  {
    icon: Home,
    title: "Home Services",
    description:
      "Bringing quality healthcare to your doorstep with home consultations, nursing care, and diagnostic services.",
  },
  {
    icon: ClipboardCheck,
    title: "Student Medical Examination",
    description: "Ensuring students meet health requirements with comprehensive medical check-ups.",
  },
  {
    icon: Briefcase,
    title: "Corporate/Occupational Health",
    description: "Tailored healthcare solutions for businesses to maintain a healthy and productive workforce.",
  },
]

export function ServicesSection() {
  const [showAll, setShowAll] = useState(false)
  const displayedServices = showAll ? services : services.slice(0, 4)

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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {displayedServices.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <service.icon className="h-8 w-8 text-primary mb-1" />
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
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

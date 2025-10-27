"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const administrativeTeam = [
  {
    name: "Dinah Akorfa Glover",
    specialty: "Chief Executive Officer / Director",
    description:
      "Provides strategic leadership and oversees the overall operations of the hospital, ensuring quality healthcare services and organizational growth.",
    image: "/admin team/Dinah.jpeg",
    imagePosition: "object-[center_25%]",
  },
  {
    name: "Bright Kojo Elinam Blavo",
    specialty: "General Manager",
    description:
      "Responsible for managing daily operations, business development, and ensuring smooth coordination across all departments to enhance patient care and hospital efficiency.",
    image: "/admin team/Bright.jpeg",
  },
  {
    name: "Sefakor Darkah Adufuli",
    specialty: "Administrator",
    description:
      "Oversees administrative functions, staff welfare, and hospital policies, ensuring effective support systems for both patients and healthcare professionals.",
    image: "/admin team/Sefakor.jpg",
  },
  {
    name: "Helen Amoako Mensah",
    specialty: "HR & Admin Assistant",
    description:
      "Supports human resources and administrative functions, including recruitment, staff management, and day-to-day office operations.",
    image: "/admin team/Helen.png",
  },
]

const medicalTeam = [
  {
    name: "Dr. Leslie Ben Davis",
    specialty: "OB/GYN Consultant",
    description:
      "Specialist in obstetrics and gynecology, providing expert care in women's health, pregnancy, and reproductive health.",
    image: "/medical team/dr. Leslie.jpeg",
    imagePosition: "object-[center_15%]",
  },
  {
    name: "Dr. Albert Sedohia",
    specialty: "Specialist Psychiatrist",
    description:
      "Provides specialist psychiatric evaluation, treatment, and counseling for individuals and families on OPD and In-patient (VIP) basis.",
    image: "/medical team/dr.Albert.png",
  },
  {
    name: "Dr. Eyram Kekeli Afutu",
    specialty: "Medical Officer",
    description:
      "Delivers comprehensive medical care, diagnosis, and treatment, supporting patients across different hospital departments.",
    image: "/medical team/dr.Eyram.jpeg",
  },
  {
    name: "Setornyo Aku Heh",
    specialty: "Medical Officer",
    description:
      "Supports patient care through medical assessments, diagnosis, treatment, and follow-up under the supervision of senior physicians.",
    image: "/medical team/dr. Setornyo.jpg",
  },
  {
    name: "Isabella Osei",
    specialty: "Medical Officer",
    description:
      "Supports patient care through medical assessments, diagnosis, treatment, and follow-up under the supervision of senior physicians.",
    image: "/medical team/dr.Isabella.png",
  },
  {
    name: "Kimberly Barnes",
    specialty: "Nursing and Midwifery Manager",
    description:
      "Leads the nursing and midwifery teams, ensuring high standards of patient care, clinical practice, and professional development.",
    image: "/medical team/kimberly.jpeg",
    imagePosition: "object-[center_30%]",
  },
  {
    name: "Abdul Hakim Iddrisu",
    specialty: "Laboratory Manager",
    description:
      "Leads the hospital's laboratory services, ensuring accurate diagnostics, quality testing, and reliable results to support patient care.",
    image: "/medical team/Abdul.jpg",
    imagePosition: "object-[center_30%]",
  },
  {
    name: "Esther Tetteh",
    specialty: "Pharmacy Manager",
    description:
      "Oversees the hospital and community pharmacy, ensuring the safe dispensing of medicines, pharmaceutical counseling, and effective medication management for patients.",
    image: "/medical team/Esther.jpg",
    imagePosition: "object-[center_30%]",
  },
]

export function DoctorsSection() {
  return (
    <section id="doctors" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            At Malikem Hospital, our strength comes from a dedicated leadership team committed to providing excellent
            healthcare services and ensuring patient-centered care.
          </p>
        </div>

        <Tabs defaultValue="medical" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="medical">Medical Team</TabsTrigger>
            <TabsTrigger value="administrative">Administrative Team</TabsTrigger>
          </TabsList>

          <TabsContent value="medical">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {medicalTeam.map((member, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="mb-6">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className={`w-56 h-56 rounded-lg mx-auto object-cover ${member.imagePosition || "object-center"} transition-all duration-300 hover:scale-105 shadow-lg`}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.specialty}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="administrative">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {administrativeTeam.map((member, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="mb-6">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className={`w-56 h-56 rounded-lg mx-auto object-cover ${member.imagePosition || "object-center"} transition-all duration-300 hover:scale-105 shadow-lg`}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.specialty}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

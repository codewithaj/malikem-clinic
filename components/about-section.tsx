"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Heart, Target, Award } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">About Malikem Hospital</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Malikem Hospital is a primary healthcare facility committed to delivering top-tier medical services. Since
              our inception, we have remained dedicated to providing exceptional care, combining medical expertise with
              modern technology to meet the needs of our clients.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              At Malikem Hospital, we prioritize quality, compassion, and professionalism, ensuring every client
              receives personalized attention and treatment. Our team of skilled specialists and healthcare
              professionals work together to create a safe, welcoming, and patient-centered environment.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We continue to grow as a trusted provider of healthcare services, striving to improve lives and promote
              wellness within our community and beyond.
            </p>
          </div>

          {/* Mission, Vision & Values Cards */}
          <div className="space-y-6">
            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Target className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">Our Vision</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To be a patient-centered, affordable and accessible Hospital for all.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Heart className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">Our Mission</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To provide patient focused, accessible primary care, acute and chronic conditions at affordable
                      rates for all patients of all ages.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Award className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">Our Core Values</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                        Compassion
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                        Excellence
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                        Integrity
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                        Teamwork
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                        Innovation
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

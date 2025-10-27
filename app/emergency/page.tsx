import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Phone, Clock, MapPin, AlertTriangle, Heart, Zap, Users, Ambulance, Shield, CheckCircle } from "lucide-react"

export default function EmergencyPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Emergency Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="bg-primary/10 p-4 rounded-full">
                <AlertTriangle className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-balance">
              <span className="text-primary">Emergency</span> Services
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              24/7 emergency medical care when you need it most. Our experienced emergency team is ready to provide
              immediate, life-saving treatment.
            </p>

            {/* Emergency Contact */}
            <Alert className="max-w-md mx-auto border-primary/20 bg-primary/5">
              <Phone className="h-4 w-4 text-primary" />
              <AlertDescription className="text-center">
                <strong className="text-primary">Emergency Hotline: +233 24 911 0000</strong>
                <br />
                Available 24/7 for immediate assistance
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      {/* Emergency Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Emergency Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive emergency medical care with state-of-the-art equipment and highly trained medical
              professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="border-[oklch(0.65_0.18_145)]/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-[oklch(0.65_0.18_145)]/10 p-2 rounded-lg">
                    <Heart className="h-6 w-6 text-[oklch(0.65_0.18_145)]" />
                  </div>
                  <CardTitle className="text-lg">Cardiac Emergency</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Immediate treatment for heart attacks, chest pain, and cardiac emergencies with advanced cardiac life
                  support.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Trauma Care</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Expert trauma treatment for accidents, injuries, and critical conditions requiring immediate
                  intervention.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[oklch(0.65_0.18_145)]/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-[oklch(0.65_0.18_145)]/10 p-2 rounded-lg">
                    <Users className="h-6 w-6 text-[oklch(0.65_0.18_145)]" />
                  </div>
                  <CardTitle className="text-lg">Pediatric Emergency</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Specialized emergency care for children and infants with pediatric-trained emergency physicians.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Ambulance className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Ambulance Service</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Rapid response ambulance service with paramedics and advanced life support equipment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[oklch(0.65_0.18_145)]/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-[oklch(0.65_0.18_145)]/10 p-2 rounded-lg">
                    <Shield className="h-6 w-6 text-[oklch(0.65_0.18_145)]" />
                  </div>
                  <CardTitle className="text-lg">Critical Care</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Intensive care unit with 24/7 monitoring for critically ill patients requiring constant medical
                  attention.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">24/7 Availability</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Round-the-clock emergency services with fully staffed emergency department every day of the year.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Contact Information */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Emergency Contact Information</h2>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <Phone className="h-5 w-5" />
                      Emergency Hotline
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-primary">+233 24 911 0000</p>
                    <p className="text-muted-foreground">Available 24/7 for life-threatening emergencies</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-[oklch(0.65_0.18_145)]">
                      <MapPin className="h-5 w-5" />
                      Emergency Department Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold">Malikem Hospital Emergency Department</p>
                    <p className="text-muted-foreground">123 Hospital Road, Accra, Ghana</p>
                    <p className="text-muted-foreground">Main entrance - follow red emergency signs</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <Clock className="h-5 w-5" />
                      Response Times
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span>Critical emergencies</span>
                      <span className="font-semibold text-[oklch(0.65_0.18_145)]">Immediate</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Urgent cases</span>
                      <span className="font-semibold text-[oklch(0.65_0.18_145)]">Within 15 minutes</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Ambulance dispatch</span>
                      <span className="font-semibold text-[oklch(0.65_0.18_145)]">5-10 minutes</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* When to Call Emergency */}
            <div>
              <h2 className="text-3xl font-bold mb-6">When to Call Emergency Services</h2>
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Call Immediately If You Experience:</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[oklch(0.65_0.18_145)] mt-0.5 flex-shrink-0" />
                      <span>Chest pain or difficulty breathing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[oklch(0.65_0.18_145)] mt-0.5 flex-shrink-0" />
                      <span>Severe bleeding or trauma</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[oklch(0.65_0.18_145)] mt-0.5 flex-shrink-0" />
                      <span>Loss of consciousness</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[oklch(0.65_0.18_145)] mt-0.5 flex-shrink-0" />
                      <span>Severe allergic reactions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[oklch(0.65_0.18_145)] mt-0.5 flex-shrink-0" />
                      <span>Signs of stroke or heart attack</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[oklch(0.65_0.18_145)] mt-0.5 flex-shrink-0" />
                      <span>Severe burns or poisoning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[oklch(0.65_0.18_145)] mt-0.5 flex-shrink-0" />
                      <span>Pregnancy complications</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="mt-6">
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Emergency: +233 24 911 0000
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

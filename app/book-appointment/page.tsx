"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Phone, Mail, FileText, CheckCircle } from "lucide-react"

export default function BookAppointmentPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    department: "",
    doctor: "",
    date: "",
    time: "",
    reason: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const mailtoLink = `mailto:malikemclinic@gmail.com?subject=${encodeURIComponent(
      "Appointment Booking Request"
    )}&body=${encodeURIComponent(
      `APPOINTMENT BOOKING REQUEST

Personal Information:
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}

Appointment Details:
Department: ${formData.department || "Not specified"}
Preferred Doctor: ${formData.doctor || "Not specified"}
Preferred Date: ${formData.date || "Not specified"}
Preferred Time: ${formData.time || "Not specified"}

Reason for Visit:
${formData.reason || "Not specified"}`
    )}`
    
    window.location.href = mailtoLink
    
    // Reset form after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      department: "",
      doctor: "",
      date: "",
      time: "",
      reason: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  const handleSelectChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    })
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-card to-background py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-balance">
              Book Your <span className="text-primary">Appointment</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Schedule your visit with our experienced medical professionals. We're here to provide you with the best
              healthcare services.
            </p>
          </div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Appointment Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Appointment Details
                  </CardTitle>
                  <CardDescription>Please fill out the form below to schedule your appointment</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input 
                          id="firstName" 
                          placeholder="Enter your first name"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input 
                          id="lastName" 
                          placeholder="Enter your last name"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    {/* Appointment Details */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="department">Department</Label>
                        <Select onValueChange={(value) => handleSelectChange("department", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select department" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Medicine</SelectItem>
                            <SelectItem value="maternity">Maternity Care</SelectItem>
                            <SelectItem value="pediatrics">Pediatrics</SelectItem>
                            <SelectItem value="surgery">Surgery</SelectItem>
                            <SelectItem value="cardiology">Cardiology</SelectItem>
                            <SelectItem value="orthopedics">Orthopedics</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="doctor">Preferred Doctor</Label>
                        <Select onValueChange={(value) => handleSelectChange("doctor", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select doctor (optional)" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="dr-leslie">Dr. Leslie Ben Davis</SelectItem>
                            <SelectItem value="dr-albert">Dr. Albert Sedohia</SelectItem>
                            <SelectItem value="dr-eyram">Dr. Eyram Kekeli Afutu</SelectItem>
                            <SelectItem value="dr-setornyo">Setornyo Aku Heh</SelectItem>
                            <SelectItem value="dr-isabella">Isabella Osei</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date">Preferred Date</Label>
                        <Input 
                          id="date" 
                          type="date"
                          value={formData.date}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time">Preferred Time</Label>
                        <Select onValueChange={(value) => handleSelectChange("time", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="09:00">9:00 AM</SelectItem>
                            <SelectItem value="10:00">10:00 AM</SelectItem>
                            <SelectItem value="11:00">11:00 AM</SelectItem>
                            <SelectItem value="14:00">2:00 PM</SelectItem>
                            <SelectItem value="15:00">3:00 PM</SelectItem>
                            <SelectItem value="16:00">4:00 PM</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="reason">Reason for Visit</Label>
                      <Textarea
                        id="reason"
                        placeholder="Please describe your symptoms or reason for the appointment"
                        rows={4}
                        value={formData.reason}
                        onChange={handleChange}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[oklch(0.65_0.18_145)] hover:bg-[oklch(0.65_0.18_145)]/90 text-white"
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Appointment
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Information */}
            <div className="space-y-6">
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-[oklch(0.65_0.18_145)]" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>+233 24 123 4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>malikemclinic@gmail.com</span>
                  </div>
                </CardContent>
              </Card>

              {/* Operating Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Operating Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-sm font-semibold text-muted-foreground mb-1">Branch</div>
                    <div className="flex justify-between">
                      <span>Everyday</span>
                      <span>8:00 AM - 5:00 PM</span>
                    </div>
                  </div>
                  <div className="pt-3 border-t">
                    <div className="text-sm font-semibold text-muted-foreground mb-1">Main Hospital</div>
                    <div className="flex justify-between">
                      <span>Open</span>
                      <span>24 Hours</span>
                    </div>
                  </div>
                  <div className="pt-3 border-t">
                    <div className="flex items-center gap-2 text-[oklch(0.65_0.18_145)]">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-sm font-medium">24/7 Emergency Services</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* What to Bring */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-[oklch(0.65_0.18_145)]" />
                    What to Bring
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-[oklch(0.65_0.18_145)]" />
                      Valid ID or passport
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-[oklch(0.65_0.18_145)]" />
                      Insurance card (if applicable)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-[oklch(0.65_0.18_145)]" />
                      Previous medical records
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-[oklch(0.65_0.18_145)]" />
                      List of current medications
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Shield, Clock } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/malikem hospital.png"
          alt="Malikem Hospital"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-2xl py-8 sm:py-12 lg:py-16 lg:py-20">
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            <span className="text-white text-xs sm:text-sm font-medium tracking-wide uppercase">Welcome to Malikem Hospital</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white text-balance leading-tight mb-4 sm:mb-6">
            Taking care of your health is our top priority.
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-white/90 text-pretty leading-relaxed mb-6 sm:mb-8">
            Being healthy is more than just not getting sick. It entails mental, physical, and social well-being. It's
            not just about treatment, it's about healing.
          </p>

          <Link href="/book-appointment">
            <Button size="lg" className="bg-white text-red-600 font-medium px-6 py-4 sm:px-8 sm:py-6 text-sm sm:text-base transition-transform duration-200 hover:scale-105 hover:bg-white w-full sm:w-auto">
              Book An Appointment
            </Button>
          </Link>
        </div>

        <div className="relative -mb-4 sm:-mb-6 lg:-mb-12">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg sm:rounded-xl lg:rounded-2xl shadow-2xl">
            <div className="px-3 py-3 sm:px-6 sm:py-5 lg:px-8 lg:py-6">
              <div className="grid grid-cols-4 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6">
                <div className="text-center">
                  <Heart className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white mx-auto mb-1 sm:mb-2 lg:mb-3" />
                  <div className="text-sm sm:text-lg lg:text-2xl font-bold text-white mb-0.5 sm:mb-1 lg:mb-2">15+</div>
                  <div className="text-xs font-medium text-white/90">Years</div>
                </div>
                <div className="text-center">
                  <Users className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white mx-auto mb-1 sm:mb-2 lg:mb-3" />
                  <div className="text-sm sm:text-lg lg:text-2xl font-bold text-white mb-0.5 sm:mb-1 lg:mb-2">50+</div>
                  <div className="text-xs font-medium text-white/90">Staff</div>
                </div>
                <div className="text-center">
                  <Shield className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white mx-auto mb-1 sm:mb-2 lg:mb-3" />
                  <div className="text-sm sm:text-lg lg:text-2xl font-bold text-white mb-0.5 sm:mb-1 lg:mb-2">10K+</div>
                  <div className="text-xs font-medium text-white/90">Patients</div>
                </div>
                <div className="text-center">
                  <Clock className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white mx-auto mb-1 sm:mb-2 lg:mb-3" />
                  <div className="text-sm sm:text-lg lg:text-2xl font-bold text-white mb-0.5 sm:mb-1 lg:mb-2">24/7</div>
                  <div className="text-xs font-medium text-white/90">Emergency</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

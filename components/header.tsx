"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Clock, MapPin } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    
    // Check if we're on the home page
    const isHomePage = window.location.pathname === '/'
    
    if (isHomePage) {
      // If on home page, scroll to the section
      const element = document.getElementById(targetId)
      if (element) {
        // Get the header height to account for sticky positioning
        const header = document.querySelector('header')
        const headerHeight = header ? header.offsetHeight : 0
        
        // Calculate the position with offset
        const elementPosition = element.offsetTop - headerHeight - 20 // 20px extra padding
        
        // Smooth scroll to the calculated position
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
      }
    } else {
      // If not on home page, navigate to home page with hash
      window.location.href = `/#${targetId}`
      // After navigation, scroll to the section
      setTimeout(() => {
        const element = document.getElementById(targetId)
        if (element) {
          const header = document.querySelector('header')
          const headerHeight = header ? header.offsetHeight : 0
          const elementPosition = element.offsetTop - headerHeight - 20
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          })
        }
      }, 100)
    }
    
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-primary text-primary-foreground py-0.5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs gap-0.5 sm:gap-2">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex items-center gap-1">
                <Phone className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                <span>+233 24 123 4567</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                <span>24/7 Emergency</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
              <span>Accra, Ghana</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-0.5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/malikem-logo.jpg"
              alt="Malikem Hospital and Maternity Home Ltd"
              width={380}
              height={160}
              className="h-12 sm:h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-foreground hover:text-primary transition-colors text-sm">
              Home
            </Link>
            <a
              href="#services"
              onClick={(e) => handleSmoothScroll(e, "services")}
              className="text-foreground hover:text-primary transition-colors cursor-pointer text-sm"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, "about")}
              className="text-foreground hover:text-primary transition-colors cursor-pointer text-sm"
            >
              About Us
            </a>
            <a
              href="#doctors"
              onClick={(e) => handleSmoothScroll(e, "doctors")}
              className="text-foreground hover:text-primary transition-colors cursor-pointer text-sm"
            >
              Our Team
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "contact")}
              className="text-foreground hover:text-primary transition-colors cursor-pointer text-sm"
            >
              Contact
            </a>
            <Link href="/book-appointment">
              <Button className="bg-primary hover:bg-primary/90 text-sm h-8 px-4">Book Appointment</Button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-2 pb-2 border-t border-border pt-2">
            <div className="flex flex-col space-y-2">
              <Link 
                href="/" 
                className="text-foreground hover:text-primary transition-colors py-2 px-3 rounded-md hover:bg-muted"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <a
                href="#services"
                onClick={(e) => handleSmoothScroll(e, "services")}
                className="text-foreground hover:text-primary transition-colors cursor-pointer py-2 px-3 rounded-md hover:bg-muted"
              >
                Services
              </a>
              <a
                href="#about"
                onClick={(e) => handleSmoothScroll(e, "about")}
                className="text-foreground hover:text-primary transition-colors cursor-pointer py-2 px-3 rounded-md hover:bg-muted"
              >
                About Us
              </a>
              <a
                href="#doctors"
                onClick={(e) => handleSmoothScroll(e, "doctors")}
                className="text-foreground hover:text-primary transition-colors cursor-pointer py-2 px-3 rounded-md hover:bg-muted"
              >
                Our Team
              </a>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "contact")}
                className="text-foreground hover:text-primary transition-colors cursor-pointer py-2 px-3 rounded-md hover:bg-muted"
              >
                Contact
              </a>
              <Link href="/book-appointment" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-primary hover:bg-primary/90 w-full mt-2">Book Appointment</Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

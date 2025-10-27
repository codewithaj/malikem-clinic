"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hospital Info */}
          <div className="space-y-4">
            <Link href="/" onClick={(e) => {
              e.preventDefault()
              if (window.location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' })
              } else {
                window.location.href = '/'
              }
            }}>
              <Image
                src="/images/malikem-logo.png"
                alt="Malikem Hospital"
                width={150}
                height={60}
                className="h-10 w-auto brightness-0 invert cursor-pointer"
              />
            </Link>
            <p className="text-sm text-background/80 leading-relaxed">
              Providing quality healthcare services to the people of Ghana with compassion, excellence, and modern
              medical facilities.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com/MalikemHospital"
                target="_blank"
                className="text-background/80 hover:text-background transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com/MalikemHospital"
                target="_blank"
                className="text-background/80 hover:text-background transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-background/80 hover:text-background transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-background/80 hover:text-background transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-background/80 hover:text-background transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#doctors" className="text-background/80 hover:text-background transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-background/80 hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Insurance Partners</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Acacia Health Insurance</li>
              <li>Glico Healthcare</li>
              <li>Apex Health Insurance</li>
              <li>Premier Health Insurance</li>
              <li>Metropolitan Health</li>
              <li className="text-xs pt-2">+ 7 more partners</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-sm text-background/80">
              <p>
                Ixora Roundabout
                <br />
                West Trassaco, Accra, Ghana
              </p>
              <p>Phone: 0248299930</p>
              <p>WhatsApp: 0248299930</p>
              <p>Email: malikemclinic@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-sm text-background/80">
            © 2025 Malikem Hospital and Maternity Home Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

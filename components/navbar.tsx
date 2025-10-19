"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, MapPin, Facebook, MessageCircle } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const services = [
    { name: "Order from Stores", href: "/stores" },
    { name: "Papalit Service", href: "/papalit" },
    { name: "Pick Up & Delivery", href: "/pickup-deliver" },
    { name: "Angkas Service", href: "/angkas" },
    { name: "Custom Orders", href: "/custom-orders" },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[#021348] to-[#0ea4f9] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Phone size={14} />
                <span>09569414260</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={14} />
                <span>Serving Naga City</span>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-4">
              <span className="hidden md:block">Fast & Reliable Delivery Service</span>
              <div className="flex items-center gap-2">
                <a
                href="https://www.facebook.com/profile.php?id=100064173395989&sk=mentions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 p-1.5 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook size={14} />
                </a>
                <a
                  href="https://m.me/105985294772305"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 p-1.5 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="Message us on Messenger"
                >
                  <MessageCircle size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 font-bold text-xl text-[#021348] hover:text-[#0ea4f9] transition-colors">
              <div className="relative w-10 h-10">
                <Image
                  src="/favicon_io/favicon-32x32.png"
                  alt="DAPLASH Logo"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-[#021348]">DAPLASH</span>
                <span className="text-xs text-[#0ea4f9] font-normal">DELIVERY</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="text-[#021348] hover:text-[#0ea4f9] font-medium transition-colors text-sm relative group"
                >
                  {service.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ffde59] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="/careers"
              className="hidden sm:inline-block bg-gradient-to-r from-[#ffde59] to-[#f4d03f] text-[#021348] px-6 py-3 rounded-lg hover:from-[#f4d03f] hover:to-[#ffde59] font-semibold transition-all duration-300 text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Join Our Team
            </a>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} className="text-[#021348]" /> : <Menu size={24} className="text-[#021348]" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden pb-6 space-y-2 animate-in slide-in-from-top duration-300">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block px-4 py-3 text-[#021348] hover:bg-[#ffde59]/10 hover:text-[#0ea4f9] rounded-lg transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
              <a
                href="/careers"
                className="block px-4 py-3 bg-gradient-to-r from-[#ffde59] to-[#f4d03f] text-[#021348] rounded-lg hover:from-[#f4d03f] hover:to-[#ffde59] font-semibold transition-all duration-300 text-center shadow-md"
              >
                Join Our Team
              </a>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

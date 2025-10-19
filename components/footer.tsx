"use client"

import { Facebook, Instagram, MessageCircle, Phone, MapPin, Clock, Zap } from "lucide-react"
import { useEffect, useState } from "react"
import { BusinessHoursModal } from "./business-hours-modal"
import QRCode from "react-qr-code"

export function Footer() {
  const [isHoursOpen, setIsHoursOpen] = useState(false)
  const [pageUrl, setPageUrl] = useState<string>("")
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    // Capture URL on client to avoid SSR mismatches
    if (typeof window !== "undefined") {
      setPageUrl(window.location.href)
    }
  }, [])

  return (
    <footer className="bg-gradient-to-b from-[#021348] to-[#021348]/90 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#ffde59] to-[#ffc107] rounded-xl flex items-center justify-center shadow-lg">
                <Zap size={24} className="text-[#021348]" />
              </div>
              <h3 className="text-xl font-bold">DAPLASH</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your reliable delivery partner serving Naga City with excellence, speed, and dedication. Fast, secure, and affordable delivery solutions.
            </p>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="/stores" className="text-slate-400 hover:text-[#0ea4f9] transition-colors text-sm">
                  Order from Stores
                </a>
              </li>
              <li>
                <a href="/papalit" className="text-slate-400 hover:text-[#0ea4f9] transition-colors text-sm">
                  Papalit Service
                </a>
              </li>
              <li>
                <a href="/pickup-deliver" className="text-slate-400 hover:text-[#0ea4f9] transition-colors text-sm">
                  Pick Up & Delivery
                </a>
              </li>
              <li>
                <a href="/angkas" className="text-slate-400 hover:text-[#0ea4f9] transition-colors text-sm">
                  Angkas Service
                </a>
              </li>
              <li>
                <a href="/custom-orders" className="text-slate-400 hover:text-[#0ea4f9] transition-colors text-sm">
                  Custom Orders
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-slate-400 hover:text-[#0ea4f9] transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="/careers" className="text-slate-400 hover:text-[#0ea4f9] transition-colors text-sm">
                  Join Our Team
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-[#0ea4f9] transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-[#0ea4f9] transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-[#0ea4f9] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-400 text-sm">09569414260</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#0ea4f9] mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="https://www.google.com/maps?q=Naga+City,+Camarines+Sur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-[#0ea4f9] transition-colors text-sm underline decoration-dotted underline-offset-4"
                  >
                    Naga City, Camarines Sur
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-[#0ea4f9] mt-1 flex-shrink-0" />
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="text-slate-400 text-sm">24/7 Service</p>
                  <button
                    onClick={() => setIsHoursOpen(true)}
                    className="text-xs text-[#0ea4f9] hover:text-[#38bdf8] bg-[#0ea4f9]/10 hover:bg-[#0ea4f9]/20 px-2 py-1 rounded-md transition-colors"
                    aria-label="View business hours"
                  >
                    View Business Hours
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* QR Code Section */}
          <div className="flex flex-col items-center">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-4">Quick Access</h4>
            <div className="bg-white p-4 rounded-xl shadow-lg">
              {pageUrl ? (
                <QRCode
                  value={pageUrl}
                  size={120}
                  style={{ height: "auto", maxWidth: "100%", width: "120px" }}
                  viewBox={`0 0 120 120`}
                />
              ) : (
                <div className="h-[120px] w-[120px]" />
              )}
            </div>
            <p className="text-slate-400 text-xs mt-3 text-center">Scan to open this page</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-12"></div>

        {/* Social Media Section */}
        <div className="mb-12">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-6 text-center">Connect With Us</h4>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://www.facebook.com/profile.php?id=100064173395989&sk=mentions"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-600/50"
              aria-label="Follow us on Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/daflashdelivery"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-tr from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/40"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://m.me/105985294772305"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
              aria-label="Message us on Messenger"
            >
              <MessageCircle size={20} />
            </a>
            <a
              href="tel:09569414260"
              className="bg-gradient-to-r from-[#ffde59] to-[#ffc107] hover:from-[#ffc107] hover:to-[#ff9800] p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-yellow-500/50"
              aria-label="Call us"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8"></div>

        {/* Copyright Section */}
        <div className="text-center">
          <p className="text-slate-500 text-sm">&copy; {currentYear} DAPLASH Delivery. All rights reserved.</p>
          <p className="text-slate-600 text-xs mt-2">Serving Naga City with excellence and reliability</p>
          <p className="text-slate-600 text-xs mt-2">
            Developed by{" "}
            <a
              href="https://lance28-beep.github.io/portfolio-website/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0ea4f9] hover:text-[#38bdf8] transition-colors underline decoration-dotted underline-offset-4"
            >
              Lance Valle
            </a>
          </p>
        </div>
      </div>
      <BusinessHoursModal isOpen={isHoursOpen} onClose={() => setIsHoursOpen(false)} />
    </footer>
  )
}

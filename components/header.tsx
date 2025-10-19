"use client"

import { Clock, Phone, MapPin, Star } from "lucide-react"
import { useState } from "react"
import { BusinessHoursModal } from "./business-hours-modal"

export function Header() {
  const [showHours, setShowHours] = useState(false)

  return (
    <>
      <header className="w-full sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200/80 shadow-sm">
        {/* Main Header */}
        <div className="px-4 py-3 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
              {/* Logo and Brand Section */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="relative">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#ffde59] via-[#ffc107] to-[#ff9800] rounded-2xl flex items-center justify-center text-[#021348] font-bold text-xl sm:text-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <span className="relative z-10">✓</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                <div className="min-w-0 flex-1">
                  <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#021348] truncate">
                    DAPLASH Delivery
                  </h1>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-[#021348]/70 font-medium">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="truncate">Naga City</span>
                    <div className="hidden sm:flex items-center gap-1 ml-2">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-semibold">4.9</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Contact Button - Hidden on mobile, shown on larger screens */}
                <a
                  href="tel:09569414260"
                  className="hidden sm:flex items-center gap-2 bg-[#021348] text-white px-3 py-2 rounded-xl text-sm font-semibold hover:bg-[#021348]/90 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
                  aria-label="Call 09569414260"
                >
                  <Phone className="w-4 h-4" />
                  <span className="hidden lg:inline">Call Now</span>
                </a>

                {/* Business Hours Button */}
                <button
                  onClick={() => setShowHours(true)}
                  className="flex items-center gap-2 bg-gradient-to-r from-[#ffde59] to-[#ffc107] text-[#021348] font-semibold hover:from-[#ffc107] hover:to-[#ff9800] px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
                  aria-label="View business hours"
                >
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  <span className="hidden sm:inline">Business Hours</span>
                  <span className="sm:hidden">Hours</span>
                </button>
              </div>
            </div>

            {/* Status Bar - Mobile Only */}
            <div className="sm:hidden mt-3 pt-3 border-t border-gray-200/60">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-green-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-medium">Online & Available</span>
                </div>
                <a
                  href="tel:09569414260"
                  className="flex items-center gap-1 text-[#021348] hover:text-[#021348]/80 transition-colors"
                  aria-label="Call 09569414260"
                >
                  <Phone className="w-3 h-3" />
                  <span className="font-medium">Call</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <BusinessHoursModal isOpen={showHours} onClose={() => setShowHours(false)} />
    </>
  )
}

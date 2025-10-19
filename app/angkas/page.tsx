"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AngkasForm } from "@/components/angkas-form"
import { Bike, Clock, MapPin } from "lucide-react"
import Link from "next/link"

export default function AngkasPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#ffde59]/20 via-white to-[#0ea4f9]/10 px-4 sm:px-6 py-12 sm:py-16 md:py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 sm:w-32 sm:h-32 bg-[#ffde59] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 sm:w-40 sm:h-40 bg-[#0ea4f9] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-6 sm:mb-8">
            <span className="inline-block bg-gradient-to-r from-[#ffde59] to-[#ffc107] text-[#021348] px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6 shadow-lg animate-pulse">
              ✓ DAPLASH Delivery – Naga
            </span>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#ffde59] to-[#ffc107] rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform duration-300 touch-manipulation">
                  <Bike size={32} className="sm:w-10 sm:h-10 text-[#021348]" />
                </div>
                <div className="text-center sm:text-left">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#021348] mb-2">
                    Angkas <span className="text-[#0ea4f9]">Delivery</span>
                  </h1>
                  <p className="text-[#021348]/80 text-base sm:text-lg md:text-xl font-medium max-w-2xl">
                    Fast, reliable motorcycle delivery service across Naga City
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl px-4 sm:px-6 py-3 sm:py-4 shadow-lg border border-[#ffde59]/20">
                  <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
                    <Clock size={18} className="sm:w-5 sm:h-5 text-[#0ea4f9]" />
                    <span className="text-[#021348] font-semibold text-sm sm:text-base">15-30 min delivery</span>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl px-4 sm:px-6 py-3 sm:py-4 shadow-lg border border-[#ffde59]/20">
                  <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
                    <MapPin size={18} className="sm:w-5 sm:h-5 text-[#0ea4f9]" />
                    <span className="text-[#021348] font-semibold text-sm sm:text-base">City-wide coverage</span>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl px-4 sm:px-6 py-3 sm:py-4 shadow-lg border border-[#ffde59]/20">
                  <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
                    <span className="text-[#0ea4f9] text-lg sm:text-xl font-bold">₱</span>
                    <span className="text-[#021348] font-semibold text-sm sm:text-base">Affordable rates</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Hero Image/Illustration */}
            <div className="flex-1 max-w-sm sm:max-w-md lg:max-w-lg">
              <div className="relative">
                <div className="bg-gradient-to-br from-[#ffde59]/20 to-[#0ea4f9]/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl">
                  <div className="text-center">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-[#ffde59] to-[#ffc107] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-xl">
                      <Bike size={48} className="sm:w-15 sm:h-15 text-[#021348]" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#021348] mb-2">Ready to Ride?</h3>
                    <p className="text-[#021348]/70 mb-4 sm:mb-6 text-sm sm:text-base">Book your motorcycle delivery now</p>
                    <button 
                      onClick={() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })}
                      className="bg-gradient-to-r from-[#0ea4f9] to-[#0284c7] hover:from-[#0284c7] hover:to-[#0369a1] text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base touch-manipulation active:scale-95"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#021348] mb-3 sm:mb-4">Why Choose Angkas?</h2>
            <p className="text-[#021348]/70 text-base sm:text-lg max-w-2xl mx-auto">
              Experience the fastest and most reliable motorcycle delivery service in Naga City
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="group bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:border-[#0ea4f9]/30 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#ffde59]/20 to-[#0ea4f9]/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock size={20} className="sm:w-7 sm:h-7 text-[#0ea4f9]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#021348] mb-2 sm:mb-3">Lightning Fast</h3>
              <p className="text-[#021348]/70 text-xs sm:text-sm leading-relaxed">Quick motorcycle delivery for urgent packages and time-sensitive deliveries</p>
            </div>

            <div className="group bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:border-[#0ea4f9]/30 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#ffde59]/20 to-[#0ea4f9]/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin size={20} className="sm:w-7 sm:h-7 text-[#0ea4f9]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#021348] mb-2 sm:mb-3">Wide Coverage</h3>
              <p className="text-[#021348]/70 text-xs sm:text-sm leading-relaxed">Comprehensive delivery coverage across Naga City and surrounding areas</p>
            </div>

            <div className="group bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:border-[#0ea4f9]/30 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#ffde59]/20 to-[#0ea4f9]/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-[#0ea4f9] text-xl sm:text-2xl font-bold">₱</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#021348] mb-2 sm:mb-3">Budget Friendly</h3>
              <p className="text-[#021348]/70 text-xs sm:text-sm leading-relaxed">Competitive pricing that won't break your budget for all delivery needs</p>
            </div>

            <div className="group bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:border-[#0ea4f9]/30 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#ffde59]/20 to-[#0ea4f9]/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Bike size={20} className="sm:w-7 sm:h-7 text-[#0ea4f9]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#021348] mb-2 sm:mb-3">Expert Riders</h3>
              <p className="text-[#021348]/70 text-xs sm:text-sm leading-relaxed">Professional, trained and reliable delivery riders you can trust</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#021348] mb-3 sm:mb-4">Transparent Pricing</h2>
            <p className="text-[#021348]/70 text-base sm:text-lg max-w-2xl mx-auto">
              Fair and competitive rates for all your delivery needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-[#ffde59]/10 to-white border border-[#ffde59]/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#ffde59] to-[#ffc107] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <MapPin size={20} className="sm:w-7 sm:h-7 text-[#021348]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#021348] mb-2">Short Distance</h3>
              <p className="text-[#021348]/70 mb-3 sm:mb-4 text-sm sm:text-base">Within city center</p>
              <div className="text-2xl sm:text-3xl font-bold text-[#0ea4f9] mb-2">₱50-80</div>
              <p className="text-xs sm:text-sm text-[#021348]/60">Starting price</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#0ea4f9]/10 to-white border border-[#0ea4f9]/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center transform sm:scale-105 shadow-xl">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#0ea4f9] to-[#0284c7] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <MapPin size={20} className="sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#021348] mb-2">Medium Distance</h3>
              <p className="text-[#021348]/70 mb-3 sm:mb-4 text-sm sm:text-base">City outskirts</p>
              <div className="text-2xl sm:text-3xl font-bold text-[#0ea4f9] mb-2">₱80-120</div>
              <p className="text-xs sm:text-sm text-[#021348]/60">Most popular</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#ffde59]/10 to-white border border-[#ffde59]/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#ffde59] to-[#ffc107] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <MapPin size={20} className="sm:w-7 sm:h-7 text-[#021348]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#021348] mb-2">Long Distance</h3>
              <p className="text-[#021348]/70 mb-3 sm:mb-4 text-sm sm:text-base">Outside city limits</p>
              <div className="text-2xl sm:text-3xl font-bold text-[#0ea4f9] mb-2">₱120-200</div>
              <p className="text-xs sm:text-sm text-[#021348]/60">Extended range</p>
            </div>
          </div>
          
          <div className="mt-8 sm:mt-12 bg-gradient-to-r from-[#ffde59]/10 to-[#0ea4f9]/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center">
            <h3 className="text-lg sm:text-xl font-bold text-[#021348] mb-3 sm:mb-4">Additional Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-left">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#0ea4f9] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs sm:text-sm font-bold">+</span>
                </div>
                <span className="text-[#021348] text-sm sm:text-base">Baggage/Cargo: +₱20-50</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#0ea4f9] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs sm:text-sm font-bold">+</span>
                </div>
                <span className="text-[#021348] text-sm sm:text-base">Multiple passengers: +₱30 each</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#0ea4f9] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs sm:text-sm font-bold">+</span>
                </div>
                <span className="text-[#021348] text-sm sm:text-base">Express delivery: +₱50</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#0ea4f9] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs sm:text-sm font-bold">+</span>
                </div>
                <span className="text-[#021348] text-sm sm:text-base">Night service (10PM-6AM): +₱30</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section id="booking-form" className="bg-gradient-to-br from-gray-50 to-white px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#021348] mb-3 sm:mb-4">Book Your Angkas Ride</h2>
            <p className="text-[#021348]/70 text-base sm:text-lg max-w-2xl mx-auto">
              Fill out the form below and we'll connect you with a professional rider
            </p>
          </div>
          <AngkasForm />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#021348] to-[#021348]/90 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">What Our Customers Say</h2>
            <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto">
              Real experiences from satisfied customers across Naga City
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/20">
              <div className="flex items-center gap-1 mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#ffde59] text-sm sm:text-lg">★</span>
                ))}
              </div>
              <p className="text-white/90 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                "Super fast delivery! My package arrived in just 20 minutes. The rider was professional and the service was excellent."
              </p>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#ffde59] to-[#ffc107] rounded-full flex items-center justify-center">
                  <span className="text-[#021348] font-bold text-sm sm:text-lg">M</span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">Maria Santos</h4>
                  <p className="text-white/70 text-xs sm:text-sm">Downtown Naga</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/20">
              <div className="flex items-center gap-1 mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#ffde59] text-sm sm:text-lg">★</span>
                ))}
              </div>
              <p className="text-white/90 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                "Affordable rates and reliable service. I use Angkas for all my urgent deliveries. Highly recommended!"
              </p>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#ffde59] to-[#ffc107] rounded-full flex items-center justify-center">
                  <span className="text-[#021348] font-bold text-sm sm:text-lg">J</span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">John Cruz</h4>
                  <p className="text-white/70 text-xs sm:text-sm">Pacol, Naga</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/20">
              <div className="flex items-center gap-1 mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#ffde59] text-sm sm:text-lg">★</span>
                ))}
              </div>
              <p className="text-white/90 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                "Great service! The rider was on time and handled my fragile items with care. Will definitely use again."
              </p>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#ffde59] to-[#ffc107] rounded-full flex items-center justify-center">
                  <span className="text-[#021348] font-bold text-sm sm:text-lg">A</span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">Ana Rodriguez</h4>
                  <p className="text-white/70 text-xs sm:text-sm">Concepcion Pequeña</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8 sm:mt-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-white/20">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#ffde59] text-xs sm:text-sm">★</span>
                ))}
              </div>
              <span className="text-white font-semibold text-sm sm:text-base">4.9/5 Average Rating</span>
              <span className="text-white/70 text-xs sm:text-sm">(500+ reviews)</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

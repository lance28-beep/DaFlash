"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PickupDeliveryForm } from "@/components/pickup-delivery-form"
import { Lock, Zap, Globe, Clock, Shield, Truck, Star, CheckCircle, Package, ArrowRight, Users, Award, Heart, Sparkles, Phone } from "lucide-react"

export default function PickupDeliverPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#ffde59]/10 to-white">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#021348] to-[#0ea4f9] text-white py-12 sm:py-16 md:py-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#ffde59]/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#ffde59]/30 rounded-full blur-lg animate-bounce delay-500"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="mb-4 sm:mb-6">
            <span className="inline-block bg-gradient-to-r from-[#ffde59] to-[#ffc107] text-[#021348] px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <Sparkles size={14} className="inline mr-1 sm:w-4 sm:h-4 animate-pulse" />
              ✓ DAPLASH Delivery – Naga City
              <Star size={12} className="inline ml-1 sm:w-[14px] sm:h-[14px] text-[#021348]" />
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-[#ffde59] bg-clip-text text-transparent">
              Pick Up & Delivery Service
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed mb-6 sm:mb-8">
            Send or receive packages anywhere in Naga City with confidence. Fast, secure, and reliable service with
            real-time tracking and guaranteed packages. Your trusted delivery partner.
          </p>
          
          {/* Enhanced Quick Stats with Animations */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-2xl">
            <div className="text-center p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl hover:bg-white/20 transition-all duration-300 group">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#ffde59] group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-xs sm:text-sm text-white/80">Service</div>
            </div>
            <div className="text-center p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl hover:bg-white/20 transition-all duration-300 group">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#ffde59] group-hover:scale-110 transition-transform duration-300">100%</div>
              <div className="text-xs sm:text-sm text-white/80">Guarantee</div>
            </div>
            <div className="text-center p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl hover:bg-white/20 transition-all duration-300 group">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#ffde59] group-hover:scale-110 transition-transform duration-300">Fast</div>
              <div className="text-xs sm:text-sm text-white/80">Delivery</div>
            </div>
            <div className="text-center p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl hover:bg-white/20 transition-all duration-300 group">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#ffde59] group-hover:scale-110 transition-transform duration-300">✓</div>
              <div className="text-xs sm:text-sm text-white/80">Tracking</div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-10">
            <button 
              onClick={() => document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-[#ffde59] to-[#ffc107] text-[#021348] px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 text-sm sm:text-base touch-manipulation"
            >
              <Truck size={18} className="sm:w-5 sm:h-5" />
              Schedule Pickup Now
            </button>
            <a 
              href="tel:09569414260"
              aria-label="Call 09569414260"
              className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base touch-manipulation"
            >
              <Phone size={18} className="sm:w-5 sm:h-5" />
              Call Now
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Form Section */}
          <div className="lg:col-span-2" id="order-form">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border border-gray-100">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 text-[#021348]">Schedule Pick Up & Delivery</h2>
                <p className="text-[#021348]/70 text-base sm:text-lg">
                  Complete the form below and we'll handle your package with care and professionalism
                </p>
              </div>
              <PickupDeliveryForm />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            {/* Service Coverage */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#0ea4f9]/10 to-transparent rounded-full blur-xl group-hover:scale-110 transition-transform duration-300"></div>
              <div className="relative z-10">
                <h3 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 text-[#021348] flex items-center gap-2 group-hover:text-[#0ea4f9] transition-colors duration-300">
                  <Globe className="text-[#0ea4f9] sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" size={18} />
                  Service Coverage
                </h3>
                <p className="text-xs sm:text-sm text-[#021348]/70 mb-3 sm:mb-4">We deliver to all areas in Naga City including:</p>
                <ul className="space-y-2">
                  {["Residential Areas", "Business Districts", "Barangays", "Remote Areas", "Schools & Universities", "Hospitals & Clinics"].map((area, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[#021348]/70 group/item hover:text-[#021348] transition-colors duration-200">
                      <CheckCircle className="text-[#0ea4f9] sm:w-4 sm:h-4 group-hover/item:scale-110 transition-transform duration-200" size={14} />
                      <span className="group-hover/item:font-medium">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Package Safety */}
            <div className="bg-gradient-to-br from-[#ffde59]/20 to-[#ffde59]/10 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 border border-[#ffde59]/30 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-[#ffde59]/30 to-transparent rounded-full blur-lg group-hover:scale-110 transition-transform duration-300"></div>
              <div className="relative z-10">
                <h3 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 text-[#021348] flex items-center gap-2 group-hover:text-[#0ea4f9] transition-colors duration-300">
                  <Shield className="text-[#0ea4f9] sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" size={18} />
                  Package Safety
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {["Guaranteed packages", "Real-time tracking", "Secure handling", "Proof of delivery", "Temperature control", "Fragile handling"].map(
                    (feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[#021348]/70 group/item hover:text-[#021348] transition-colors duration-200">
                        <CheckCircle className="text-[#0ea4f9] sm:w-4 sm:h-4 group-hover/item:scale-110 transition-transform duration-200" size={14} />
                        <span className="group-hover/item:font-medium">{feature}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>

            {/* Delivery Times */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 border border-blue-200 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#0ea4f9]/10 to-transparent rounded-full blur-xl group-hover:scale-110 transition-transform duration-300"></div>
              <div className="relative z-10">
                <h3 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 text-[#021348] flex items-center gap-2 group-hover:text-[#0ea4f9] transition-colors duration-300">
                  <Clock className="text-[#0ea4f9] sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" size={18} />
                  Delivery Times
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between items-center p-2 rounded-lg hover:bg-white/50 transition-colors duration-200">
                    <span className="text-xs sm:text-sm text-[#021348]/70">Same Day</span>
                    <span className="text-xs sm:text-sm font-semibold text-[#0ea4f9] bg-white/50 px-2 py-1 rounded-full">2-4 hours</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg hover:bg-white/50 transition-colors duration-200">
                    <span className="text-xs sm:text-sm text-[#021348]/70">Next Day</span>
                    <span className="text-xs sm:text-sm font-semibold text-[#0ea4f9] bg-white/50 px-2 py-1 rounded-full">24 hours</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg hover:bg-white/50 transition-colors duration-200">
                    <span className="text-xs sm:text-sm text-[#021348]/70">Express</span>
                    <span className="text-xs sm:text-sm font-semibold text-[#0ea4f9] bg-white/50 px-2 py-1 rounded-full">1-2 hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#ffde59]/10 to-transparent rounded-full blur-xl group-hover:scale-110 transition-transform duration-300"></div>
              <div className="relative z-10">
                <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-[#021348] flex items-center gap-2 group-hover:text-[#0ea4f9] transition-colors duration-300">
                  <Star className="text-[#0ea4f9] sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" size={18} />
                  Why Choose Us
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-[#021348]/70">
                  <li className="flex items-center gap-2 group/item hover:text-[#021348] transition-colors duration-200">
                    <CheckCircle className="text-[#0ea4f9] sm:w-4 sm:h-4 group-hover/item:scale-110 transition-transform duration-200" size={14} />
                    <span className="group-hover/item:font-medium">Fast & Reliable</span>
                  </li>
                  <li className="flex items-center gap-2 group/item hover:text-[#021348] transition-colors duration-200">
                    <CheckCircle className="text-[#0ea4f9] sm:w-4 sm:h-4 group-hover/item:scale-110 transition-transform duration-200" size={14} />
                    <span className="group-hover/item:font-medium">Professional Drivers</span>
                  </li>
                  <li className="flex items-center gap-2 group/item hover:text-[#021348] transition-colors duration-200">
                    <CheckCircle className="text-[#0ea4f9] sm:w-4 sm:h-4 group-hover/item:scale-110 transition-transform duration-200" size={14} />
                    <span className="group-hover/item:font-medium">Affordable Rates</span>
                  </li>
                  <li className="flex items-center gap-2 group/item hover:text-[#021348] transition-colors duration-200">
                    <CheckCircle className="text-[#0ea4f9] sm:w-4 sm:h-4 group-hover/item:scale-110 transition-transform duration-200" size={14} />
                    <span className="group-hover/item:font-medium">24/7 Support</span>
                  </li>
                  <li className="flex items-center gap-2 group/item hover:text-[#021348] transition-colors duration-200">
                    <CheckCircle className="text-[#0ea4f9] sm:w-4 sm:h-4 group-hover/item:scale-110 transition-transform duration-200" size={14} />
                    <span className="group-hover/item:font-medium">Messenger Integration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 sm:mt-20">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ffde59]/20 to-[#ffc107]/20 text-[#021348] px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-4 shadow-lg">
              <Award size={14} className="sm:w-4 sm:h-4" />
              Trusted by Thousands
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#021348] mb-3 sm:mb-4">Why Choose DAPLASH Delivery?</h2>
            <p className="text-base sm:text-lg text-[#021348]/70 max-w-2xl mx-auto">
              Experience the difference with our professional pickup and delivery service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center border border-blue-200 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-600/20 to-transparent rounded-full blur-xl group-hover:scale-110 transition-transform duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Truck className="text-white sm:w-8 sm:h-8 group-hover:rotate-12 transition-transform duration-300" size={24} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#021348] mb-3 sm:mb-4 group-hover:text-blue-700 transition-colors duration-300">Fast & Reliable</h3>
                <p className="text-sm sm:text-base text-[#021348]/70">
                  Same-day delivery available with real-time tracking and professional drivers
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center border border-green-200 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-600/20 to-transparent rounded-full blur-xl group-hover:scale-110 transition-transform duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="text-white sm:w-8 sm:h-8 group-hover:rotate-12 transition-transform duration-300" size={24} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#021348] mb-3 sm:mb-4 group-hover:text-green-700 transition-colors duration-300">100% Guaranteed</h3>
                <p className="text-sm sm:text-base text-[#021348]/70">
                  All packages are fully guaranteed with secure handling and proof of delivery
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center border border-purple-200 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-600/20 to-transparent rounded-full blur-xl group-hover:scale-110 transition-transform duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="text-white sm:w-8 sm:h-8 group-hover:rotate-12 transition-transform duration-300" size={24} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#021348] mb-3 sm:mb-4 group-hover:text-purple-700 transition-colors duration-300">Citywide Coverage</h3>
                <p className="text-sm sm:text-base text-[#021348]/70">
                  We deliver to all areas in Naga City including remote locations and barangays
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center border border-yellow-200 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-600/20 to-transparent rounded-full blur-xl group-hover:scale-110 transition-transform duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="text-white sm:w-8 sm:h-8 group-hover:rotate-12 transition-transform duration-300" size={24} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#021348] mb-3 sm:mb-4 group-hover:text-yellow-700 transition-colors duration-300">24/7 Service</h3>
                <p className="text-sm sm:text-base text-[#021348]/70">
                  Round-the-clock service with WhatsApp integration for instant communication
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center border border-red-200 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-600/20 to-transparent rounded-full blur-xl group-hover:scale-110 transition-transform duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Package className="text-white sm:w-8 sm:h-8 group-hover:rotate-12 transition-transform duration-300" size={24} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#021348] mb-3 sm:mb-4 group-hover:text-red-700 transition-colors duration-300">All Package Types</h3>
                <p className="text-sm sm:text-base text-[#021348]/70">
                  Handle any package size from documents to heavy items with specialized care
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center border border-indigo-200 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-600/20 to-transparent rounded-full blur-xl group-hover:scale-110 transition-transform duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Star className="text-white sm:w-8 sm:h-8 group-hover:rotate-12 transition-transform duration-300" size={24} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#021348] mb-3 sm:mb-4 group-hover:text-indigo-700 transition-colors duration-300">Professional Service</h3>
                <p className="text-sm sm:text-base text-[#021348]/70">
                  Trained drivers with excellent customer service and competitive pricing
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-20 sm:mt-24">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ffde59]/20 to-[#ffc107]/20 text-[#021348] px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-4 shadow-lg">
              <Heart size={14} className="sm:w-4 sm:h-4" />
              Customer Love
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#021348] mb-3 sm:mb-4">What Our Customers Say</h2>
            <p className="text-base sm:text-lg text-[#021348]/70 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers who trust DAPLASH for their delivery needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Maria Santos",
                location: "Naga City",
                rating: 5,
                text: "Excellent service! My package was delivered on time and in perfect condition. The driver was very professional and friendly.",
                service: "Document Delivery"
              },
              {
                name: "John Dela Cruz",
                location: "Naga City", 
                rating: 5,
                text: "Fast and reliable delivery service. I've been using DAPLASH for months now and they never disappoint. Highly recommended!",
                service: "Package Pickup"
              },
              {
                name: "Sarah Garcia",
                location: "Naga City",
                rating: 5,
                text: "The real-time tracking feature is amazing. I always know exactly where my package is. Great customer service too!",
                service: "Express Delivery"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#0ea4f9]/10 to-transparent rounded-full blur-xl group-hover:scale-110 transition-transform duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-[#ffde59] fill-current" />
                    ))}
                  </div>
                  <p className="text-[#021348]/80 mb-4 italic text-sm sm:text-base">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#0ea4f9] to-[#021348] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="text-[#021348] font-semibold text-sm sm:text-base">{testimonial.name}</p>
                      <p className="text-[#021348]/60 text-xs sm:text-sm">{testimonial.location}</p>
                      <p className="text-[#0ea4f9] text-xs font-medium">{testimonial.service}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 sm:mt-24 bg-gradient-to-r from-[#021348] to-[#0ea4f9] rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#ffde59]/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="relative z-10 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Ready to Experience Reliable Delivery?
            </h2>
            <p className="text-white/90 text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust DAPLASH for their pickup and delivery needs in Naga City
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-[#ffde59] to-[#ffc107] text-[#021348] px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 text-sm sm:text-base touch-manipulation"
              >
                <Truck size={20} className="sm:w-5 sm:h-5" />
                Schedule Your Delivery Now
              </button>
              <a 
                href="tel:09569414260"
                aria-label="Call 09569414260"
                className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base touch-manipulation"
              >
                <Phone size={20} className="sm:w-5 sm:h-5" />
                Call Us Today
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

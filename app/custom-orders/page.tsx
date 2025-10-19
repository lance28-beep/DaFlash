"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CustomOrdersForm } from "@/components/custom-orders-form"
import { Star, Lightbulb, Users, Zap, Clock, Shield, Truck, CheckCircle, ArrowRight, Sparkles } from "lucide-react"

export default function CustomOrdersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#ffde59]/10 to-white">
      <Header />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#021348] to-[#0ea4f9] text-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-12 h-12 sm:w-20 sm:h-20 border border-white/20 rounded-full"></div>
          <div className="absolute top-32 right-20 w-10 h-10 sm:w-16 sm:h-16 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-8 h-8 sm:w-12 sm:h-12 border border-white/20 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="mb-6 sm:mb-8">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ffde59] to-[#ffc107] text-[#021348] px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6 shadow-lg">
              <Sparkles size={14} className="sm:w-4 sm:h-4" />
              DAPLASH Delivery – Naga's Premium Service
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Custom Orders Made
            <span className="block text-[#ffde59]">Effortlessly Simple</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl leading-relaxed mb-6 sm:mb-8">
            From bulk corporate orders to unique personal requests – we make custom deliveries happen. 
            Just tell us what you need, and we'll source, package, and deliver it right to your doorstep.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4">
              <Clock className="text-[#ffde59] sm:w-6 sm:h-6" size={20} />
              <div>
                <div className="font-bold text-base sm:text-lg">Same-Day</div>
                <div className="text-xs sm:text-sm text-white/80">Delivery Available</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4">
              <Shield className="text-[#ffde59] sm:w-6 sm:h-6" size={20} />
              <div>
                <div className="font-bold text-base sm:text-lg">Guaranteed</div>
                <div className="text-xs sm:text-sm text-white/80">Proven Service</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 sm:col-span-2 lg:col-span-1">
              <Truck className="text-[#ffde59] sm:w-6 sm:h-6" size={20} />
              <div>
                <div className="font-bold text-base sm:text-lg">24/7</div>
                <div className="text-xs sm:text-sm text-white/80">Customer Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#021348] mb-4 sm:mb-6">
              Why Choose Our Custom Order Service?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#021348]/70 max-w-3xl mx-auto">
              We don't just deliver packages – we deliver solutions tailored to your unique needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {[
              {
                icon: <Lightbulb className="text-[#0ea4f9] sm:w-8 sm:h-8" size={24} />,
                title: "Creative Solutions",
                description: "We think outside the box to fulfill even the most unique requests"
              },
              {
                icon: <Clock className="text-[#0ea4f9] sm:w-8 sm:h-8" size={24} />,
                title: "Flexible Timing",
                description: "Schedule deliveries when it works best for you – even weekends"
              },
              {
                icon: <Truck className="text-[#0ea4f9] sm:w-8 sm:h-8" size={24} />,
                title: "Professional Team",
                description: "Experienced drivers who handle your items with care and respect"
              },
              {
                icon: <Shield className="text-[#0ea4f9] sm:w-8 sm:h-8" size={24} />,
                title: "Trustworthy Service",
                description: "Insured, transparent, and reliable from pickup to drop-off"
              }
            ].map((feature, i) => (
              <div key={i} className="text-center p-4 sm:p-6 bg-gradient-to-br from-[#ffde59]/10 to-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex justify-center mb-3 sm:mb-4">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-[#021348] mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-[#021348]/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 md:p-8 border border-gray-100">
              <div className="mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-[#021348]">Create Your Custom Order</h2>
                <p className="text-base sm:text-lg text-[#021348]/70 mb-4 sm:mb-6">
                  Tell us exactly what you need – we'll source it, package it, and deliver it safely to your door
                </p>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#0ea4f9] font-medium">
                  <CheckCircle size={14} className="sm:w-4 sm:h-4" />
                  <span>No minimum order • Free consultation • Instant quotes</span>
                </div>
              </div>
              <CustomOrdersForm />
            </div>
          </div>

          {/* Enhanced Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            {/* Popular Services */}
            <div className="bg-gradient-to-br from-[#0ea4f9]/10 to-[#0ea4f9]/5 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 border border-[#0ea4f9]/20">
              <h3 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-[#021348] flex items-center gap-2 sm:gap-3">
                <Sparkles className="text-[#0ea4f9] sm:w-6 sm:h-6" size={20} />
                Popular Services
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  { service: "Corporate Bulk Orders", desc: "Office supplies, equipment" },
                  { service: "Event Catering Delivery", desc: "Weddings, parties, meetings" },
                  { service: "Grocery Shopping Service", desc: "Fresh produce, household items" },
                  { service: "Pharmacy & Medical", desc: "Prescriptions, health supplies" },
                  { service: "Gift & Surprise Delivery", desc: "Special occasions made memorable" },
                  { service: "Emergency Deliveries", desc: "Urgent items when you need them" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-white/50 rounded-lg hover:bg-white/80 transition-colors">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#0ea4f9] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                    <div>
                      <div className="font-semibold text-xs sm:text-sm text-[#021348]">{item.service}</div>
                      <div className="text-xs text-[#021348]/60">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process Steps */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-100">
              <h3 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-[#021348] flex items-center gap-2 sm:gap-3">
                <ArrowRight className="text-[#0ea4f9] sm:w-6 sm:h-6" size={20} />
                How It Works
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {[
                  { step: "1", title: "Submit Request", desc: "Fill out the form with your needs" },
                  { step: "2", title: "Get Quote", desc: "We'll provide pricing within 2 hours" },
                  { step: "3", title: "Confirm Order", desc: "Approve the quote and schedule delivery" },
                  { step: "4", title: "Relax & Receive", desc: "We handle everything from sourcing to delivery" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 sm:gap-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-[#0ea4f9] to-[#021348] text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <div className="font-semibold text-sm sm:text-base text-[#021348]">{item.title}</div>
                      <div className="text-xs sm:text-sm text-[#021348]/70">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-gradient-to-br from-[#ffde59]/20 to-[#ffde59]/10 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 border border-[#ffde59]/30">
              <h3 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-[#021348] flex items-center gap-2 sm:gap-3">
                <Star className="text-[#0ea4f9] sm:w-6 sm:h-6" size={20} />
                Why Trust Us?
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {[
                  { icon: <Users size={18} className="sm:w-5 sm:h-5" />, text: "500+ Happy Customers" },
                  { icon: <Zap size={18} className="sm:w-5 sm:h-5" />, text: "2-Hour Response Time" },
                  { icon: <CheckCircle size={18} className="sm:w-5 sm:h-5" />, text: "100% Satisfaction Guarantee" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 sm:gap-3">
                    <div className="text-[#0ea4f9]">{item.icon}</div>
                    <span className="text-xs sm:text-sm font-medium text-[#021348]">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-[#021348] to-[#0ea4f9] rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 text-white">
              <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                <Zap size={20} className="sm:w-6 sm:h-6" />
                Ready to Get Started?
              </h3>
              <p className="text-white/90 mb-3 sm:mb-4 text-sm sm:text-base">
                Join hundreds of satisfied customers who trust us with their custom delivery needs.
              </p>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium">
                <Clock size={14} className="sm:w-4 sm:h-4" />
                <span>Average response time: 30 minutes</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gradient-to-r from-[#ffde59]/10 to-[#0ea4f9]/10 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#021348] mb-3 sm:mb-4">What Our Customers Say</h2>
            <p className="text-base sm:text-lg md:text-xl text-[#021348]/70">Real stories from real customers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Rosa May Pano",
                role: "Event Coordinator",
                content: "DAPLASH made our wedding reception perfect! They delivered everything from decorations to catering supplies exactly when we needed them.",
                rating: 5
              },
              {
                name: "John Rodriguez",
                role: "Office Manager",
                content: "Our monthly office supply deliveries are seamless. They understand our needs and always deliver on time with competitive pricing.",
                rating: 5
              },
              {
                name: "Rolando Valle",
                role: "Small Business Owner",
                content: "When I needed emergency inventory delivered for my store opening, they went above and beyond. Truly reliable partners!",
                rating: 5
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6">
                <div className="flex items-center gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} size={14} className="sm:w-4 sm:h-4 text-[#ffde59] fill-current" />
                  ))}
                </div>
                <p className="text-[#021348]/80 mb-3 sm:mb-4 italic text-sm sm:text-base">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-[#021348] text-sm sm:text-base">{testimonial.name}</div>
                  <div className="text-xs sm:text-sm text-[#021348]/60">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

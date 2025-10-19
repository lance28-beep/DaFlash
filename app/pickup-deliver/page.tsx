import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PickupDeliveryForm } from "@/components/pickup-delivery-form"
import { Lock, Zap, Globe, Clock, Shield, Truck, Star, CheckCircle, Package } from "lucide-react"

export default function PickupDeliverPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#ffde59]/10 to-white">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#021348] to-[#0ea4f9] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="mb-6">
            <span className="inline-block bg-gradient-to-r from-[#ffde59] to-[#ffc107] text-[#021348] px-6 py-3 rounded-full text-sm font-bold mb-4 shadow-lg">
              ✓ DAPLASH Delivery – Naga City
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Pick Up & Delivery Service</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed mb-8">
            Send or receive packages anywhere in Naga City with confidence. Fast, secure, and reliable service with
            real-time tracking and insured packages. Your trusted delivery partner.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#ffde59]">24/7</div>
              <div className="text-sm text-white/80">Service</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#ffde59]">100%</div>
              <div className="text-sm text-white/80">Insured</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#ffde59]">Fast</div>
              <div className="text-sm text-white/80">Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#ffde59]">✓</div>
              <div className="text-sm text-white/80">Tracking</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2 text-[#021348]">Schedule Pick Up & Delivery</h2>
                <p className="text-[#021348]/70 text-lg">
                  Complete the form below and we'll handle your package with care and professionalism
                </p>
              </div>
              <PickupDeliveryForm />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Service Coverage */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="font-bold text-lg mb-6 text-[#021348] flex items-center gap-2">
                <Globe className="text-[#0ea4f9]" size={20} />
                Service Coverage
              </h3>
              <p className="text-sm text-[#021348]/70 mb-4">We deliver to all areas in Naga City including:</p>
              <ul className="space-y-2">
                {["Residential Areas", "Business Districts", "Barangays", "Remote Areas", "Schools & Universities", "Hospitals & Clinics"].map((area, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-[#021348]/70">
                    <CheckCircle className="text-[#0ea4f9]" size={16} />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Package Safety */}
            <div className="bg-gradient-to-br from-[#ffde59]/20 to-[#ffde59]/10 rounded-2xl shadow-lg p-6 border border-[#ffde59]/30">
              <h3 className="font-bold text-lg mb-6 text-[#021348] flex items-center gap-2">
                <Shield className="text-[#0ea4f9]" size={20} />
                Package Safety
              </h3>
              <ul className="space-y-3">
                {["Insured packages", "Real-time tracking", "Secure handling", "Proof of delivery", "Temperature control", "Fragile handling"].map(
                  (feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[#021348]/70">
                      <CheckCircle className="text-[#0ea4f9]" size={16} />
                      <span>{feature}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Delivery Times */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-6 border border-blue-200">
              <h3 className="font-bold text-lg mb-6 text-[#021348] flex items-center gap-2">
                <Clock className="text-[#0ea4f9]" size={20} />
                Delivery Times
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#021348]/70">Same Day</span>
                  <span className="text-sm font-semibold text-[#0ea4f9]">2-4 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#021348]/70">Next Day</span>
                  <span className="text-sm font-semibold text-[#0ea4f9]">24 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#021348]/70">Express</span>
                  <span className="text-sm font-semibold text-[#0ea4f9]">1-2 hours</span>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="font-bold text-lg mb-4 text-[#021348] flex items-center gap-2">
                <Star className="text-[#0ea4f9]" size={20} />
                Why Choose Us
              </h3>
              <ul className="space-y-2 text-sm text-[#021348]/70">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-[#0ea4f9]" size={16} />
                  <span>Fast & Reliable</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-[#0ea4f9]" size={16} />
                  <span>Professional Drivers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-[#0ea4f9]" size={16} />
                  <span>Affordable Rates</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-[#0ea4f9]" size={16} />
                  <span>24/7 Support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-[#0ea4f9]" size={16} />
                  <span>WhatsApp Integration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#021348] mb-4">Why Choose DAPLASH Delivery?</h2>
            <p className="text-lg text-[#021348]/70 max-w-2xl mx-auto">
              Experience the difference with our professional pickup and delivery service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center border border-blue-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#021348] mb-4">Fast & Reliable</h3>
              <p className="text-[#021348]/70">
                Same-day delivery available with real-time tracking and professional drivers
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center border border-green-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#021348] mb-4">100% Insured</h3>
              <p className="text-[#021348]/70">
                All packages are fully insured with secure handling and proof of delivery
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center border border-purple-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#021348] mb-4">Citywide Coverage</h3>
              <p className="text-[#021348]/70">
                We deliver to all areas in Naga City including remote locations and barangays
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 text-center border border-yellow-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#021348] mb-4">24/7 Service</h3>
              <p className="text-[#021348]/70">
                Round-the-clock service with WhatsApp integration for instant communication
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 text-center border border-red-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Package className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#021348] mb-4">All Package Types</h3>
              <p className="text-[#021348]/70">
                Handle any package size from documents to heavy items with specialized care
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 text-center border border-indigo-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#021348] mb-4">Professional Service</h3>
              <p className="text-[#021348]/70">
                Trained drivers with excellent customer service and competitive pricing
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

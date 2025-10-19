import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EnhancedOrderForm } from "@/components/enhanced-order-form"
import { Zap, Package, Smile, Star, Clock, Shield, TrendingUp, Users, CheckCircle2, ArrowRight, Sparkles } from "lucide-react"

export default function PapilitPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#ffde59]/5 via-white to-[#0ea4f9]/5">
      <Header />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#021348] via-[#0ea4f9] to-[#021348] opacity-95"></div>
        <div className="absolute inset-0 bg-[url('/images/bg-photo.png')] opacity-10 bg-cover bg-center"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-12 sm:top-20 left-6 sm:left-10 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#ffde59]/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-12 sm:bottom-20 right-6 sm:right-10 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-[#ffde59]/30 rounded-full blur-lg animate-bounce delay-500"></div>
        
        <div className="relative z-10 text-white py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ffde59] to-[#ffc107] text-[#021348] px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <Sparkles size={14} className="sm:w-4 sm:h-4 animate-pulse" />
                ✓ DAPLASH Delivery – Naga
                <Star size={12} className="sm:w-[14px] sm:h-[14px] text-[#021348]" />
              </div>
            </div>
            
            <div className="max-w-4xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white to-[#ffde59] bg-clip-text text-transparent">
                  Papalit Service
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl leading-relaxed mb-6 sm:mb-8">
                Tell us what you need, and we'll find it for you at the best prices. From groceries to gadgets, medicines to
                fashion—we handle the shopping so you don't have to.
              </p>
              
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 sm:gap-4 md:gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="sm:w-5 sm:h-5 text-[#ffde59]" />
                  <span className="font-medium text-sm sm:text-base">Reliable delivery partner</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="sm:w-5 sm:h-5 text-[#ffde59]" />
                  <span className="font-medium text-sm sm:text-base">Best prices guaranteed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="sm:w-5 sm:h-5 text-[#ffde59]" />
                  <span className="font-medium text-sm sm:text-base">Fast & secure service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {[
            { icon: Users, label: "Happy Customers", value: "10K+" },
            { icon: Package, label: "Items Delivered", value: "50K+" },
            { icon: Clock, label: "Avg. Delivery Time", value: "30min" },
            { icon: Star, label: "Customer Rating", value: "4.9/5" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-[#0ea4f9] to-[#021348] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <stat.icon size={20} className="sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#021348] mb-1 sm:mb-2">{stat.value}</h3>
              <p className="text-[#021348]/70 text-xs sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 border border-gray-100 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-[#ffde59]/20 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-tr from-[#0ea4f9]/20 to-transparent rounded-full blur-xl"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#0ea4f9] to-[#021348] rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <Package size={20} className="sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#021348] mb-1 sm:mb-2">Request Papalit Service</h2>
                    <p className="text-[#021348]/70 text-sm sm:text-base">
                      Tell us what you need and we'll find it for you at the best prices
                    </p>
                  </div>
                </div>
                <EnhancedOrderForm serviceType="Papalit Order" />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            {/* What We Can Get */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 border border-gray-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#0ea4f9]/10 to-transparent rounded-full blur-xl"></div>
              <div className="relative z-10">
                <h3 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-[#021348] flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[#0ea4f9] to-[#021348] rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <Package className="text-white sm:w-5 sm:h-5" size={16} />
                  </div>
                  What We Can Get
                </h3>
                <ul className="space-y-3 sm:space-y-4">
                  {[
                    "Groceries & Food Items",
                    "Medicines & Pharmacy Items",
                    "Electronics & Gadgets",
                    "Clothing & Accessories",
                    "Books & School Supplies",
                    "And much more!",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-[#021348]/80 group/item hover:text-[#021348] transition-colors duration-200">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-[#0ea4f9] to-[#021348] rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={12} className="sm:w-[14px] sm:h-[14px] text-white" />
                      </div>
                      <span className="group-hover/item:font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Service Benefits */}
            <div className="bg-gradient-to-br from-[#ffde59]/20 via-[#ffde59]/15 to-[#ffc107]/10 rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 border border-[#ffde59]/30 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#ffde59]/30 to-transparent rounded-full blur-lg"></div>
              <div className="relative z-10">
                <h3 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-[#021348] flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[#ffde59] to-[#ffc107] rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="text-[#021348] sm:w-5 sm:h-5" size={16} />
                  </div>
                  Service Benefits
                </h3>
                <ul className="space-y-3 sm:space-y-4">
                  {[
                    { text: "Save time shopping", icon: Clock },
                    { text: "Convenient delivery", icon: Package },
                    { text: "Competitive pricing", icon: TrendingUp },
                    { text: "Fast & reliable service", icon: Shield }
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-[#021348]/80 group/item hover:text-[#021348] transition-colors duration-200">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-[#ffde59] to-[#ffc107] rounded-full flex items-center justify-center flex-shrink-0">
                        <benefit.icon size={12} className="sm:w-[14px] sm:h-[14px] text-[#021348]" />
                      </div>
                      <span className="group-hover/item:font-medium">{benefit.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 border border-gray-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="absolute bottom-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-tl from-[#0ea4f9]/10 to-transparent rounded-full blur-xl"></div>
              <div className="relative z-10">
                <h3 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-[#021348] flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[#0ea4f9] to-[#021348] rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="text-white sm:w-5 sm:h-5" size={16} />
                  </div>
                  Quick Process
                </h3>
                <ol className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
                  {[
                    { step: "1", text: "Tell us what you need", icon: ArrowRight },
                    { step: "2", text: "We find the best deals", icon: ArrowRight },
                    { step: "3", text: "Fast delivery to you", icon: CheckCircle2 }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 sm:gap-4 group/step">
                      <div className="relative">
                        <span className="font-bold text-white bg-gradient-to-r from-[#0ea4f9] to-[#021348] w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs shadow-lg">
                          {item.step}
                        </span>
                        {i < 2 && (
                          <div className="absolute top-6 sm:top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-3 sm:h-4 bg-gradient-to-b from-[#0ea4f9] to-transparent"></div>
                        )}
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2 flex-1">
                        <span className="text-[#021348]/80 group-hover/step:text-[#021348] group-hover/step:font-medium transition-all duration-200">{item.text}</span>
                        {i < 2 && <ArrowRight size={12} className="sm:w-[14px] sm:h-[14px] text-[#0ea4f9] opacity-50" />}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gradient-to-r from-[#021348] to-[#0ea4f9] py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              What Our Customers Say
            </h2>
            <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers who love our papalit service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Maria Santos",
                location: "Naga City",
                rating: 5,
                text: "Amazing service! They found my prescription medicine when no other pharmacy had it. Fast and reliable delivery."
              },
              {
                name: "John Dela Cruz",
                location: "Naga City",
                rating: 5,
                text: "Saved me so much time! Got my groceries delivered within 30 minutes. The prices were even better than I expected."
              },
              {
                name: "Sarah Garcia",
                location: "Naga City",
                rating: 5,
                text: "Perfect for busy professionals like me. They handle everything - from finding the best deals to delivering to my doorstep."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} className="sm:w-4 sm:h-4 text-[#ffde59] fill-current" />
                  ))}
                </div>
                <p className="text-white/90 mb-3 sm:mb-4 italic text-sm sm:text-base">"{testimonial.text}"</p>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[#ffde59] to-[#ffc107] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#021348] font-bold text-xs sm:text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm sm:text-base">{testimonial.name}</p>
                    <p className="text-white/70 text-xs sm:text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#ffde59]/20 to-[#ffc107]/20 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#021348] mb-3 sm:mb-4">
            Ready to Experience Convenient Shopping?
          </h2>
          <p className="text-[#021348]/80 text-base sm:text-lg mb-6 sm:mb-8">
            Join thousands of satisfied customers who trust DAPLASH for their papalit needs
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="bg-gradient-to-r from-[#0ea4f9] to-[#021348] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 text-sm sm:text-base touch-manipulation">
              <Package size={18} className="sm:w-5 sm:h-5" />
              Start Your Order Now
            </button>
            <button className="bg-white text-[#021348] px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold border-2 border-[#021348] hover:bg-[#021348] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base touch-manipulation">
              <Star size={18} className="sm:w-5 sm:h-5" />
              Learn More
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

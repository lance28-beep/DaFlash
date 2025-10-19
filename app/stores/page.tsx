"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StoreCarousel } from "@/components/store-carousel"
import { EnhancedOrderForm } from "@/components/enhanced-order-form"
import { ShoppingBag, Clock, Zap, Shield, Star, ArrowRight, CheckCircle, Sparkles, TrendingUp, Users, Award, MapPin } from "lucide-react"

export default function StoresPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#ffde59]/10 to-white">
      <Header />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#021348] via-[#0ea4f9] to-[#021348] text-white py-20 md:py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-[#ffde59] rounded-full blur-xl"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-[#ffc107] rounded-full blur-lg"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-[#ffde59] rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-1/3 w-12 h-12 bg-[#ffc107] rounded-full blur-md"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ffde59] to-[#ffc107] text-[#021348] px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CheckCircle size={18} />
              <span>DAPLASH Delivery – Naga</span>
              <Sparkles size={16} className="text-[#021348]/70" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Shop from Your 
                <span className="block bg-gradient-to-r from-[#ffde59] to-[#ffc107] bg-clip-text text-transparent">
                  Favorite Stores
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed mb-8">
                No more waiting in long lines or dealing with traffic. Browse and order from popular stores in Naga City. We
                handle the shopping, you enjoy the convenience.
              </p>
              
              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Clock size={18} className="text-[#ffde59]" />
                  <span className="text-sm font-semibold">30-60 min delivery</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <ShoppingBag size={18} className="text-[#ffde59]" />
                  <span className="text-sm font-semibold">100+ stores</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Star size={18} className="text-[#ffde59]" />
                  <span className="text-sm font-semibold">4.9★ rating</span>
                </div>
              </div>
              
              <button 
                onClick={() => {
                  const formSection = document.getElementById('order-form');
                  if (formSection) {
                    formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="group bg-gradient-to-r from-[#ffde59] to-[#ffc107] text-[#021348] px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 touch-manipulation"
              >
                <span>Start Shopping Now</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            {/* Hero Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {[
                    { icon: ShoppingBag, label: "Browse Stores", color: "from-blue-500 to-blue-600" },
                    { icon: Clock, label: "Quick Delivery", color: "from-green-500 to-green-600" },
                    { icon: Shield, label: "Quality Guaranteed", color: "from-purple-500 to-purple-600" },
                    { icon: Zap, label: "Real-time Updates", color: "from-orange-500 to-orange-600" },
                  ].map((item, i) => (
                    <div key={i} className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 text-center hover:scale-105 active:scale-95 transition-transform duration-300 touch-manipulation">
                      <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3`}>
                        <item.icon size={20} className="md:w-6 md:h-6 text-white" />
                      </div>
                      <p className="text-xs md:text-sm font-semibold text-white/90">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Featured Stores */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ffde59]/20 to-[#ffc107]/20 text-[#021348] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <TrendingUp size={16} />
              <span>Most Popular</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#021348]">
              Featured Stores
            </h2>
            <p className="text-xl text-[#021348]/70 max-w-2xl mx-auto">
              Slide through our partner stores and choose what you need. From groceries to fashion, we've got you covered.
            </p>
          </div>
          <StoreCarousel />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Form Section */}
          <div className="lg:col-span-2" id="order-form">
            <div className="bg-gradient-to-br from-white via-gray-50/50 to-white rounded-3xl shadow-2xl border border-gray-200/50 p-8 md:p-12 hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0ea4f9]/5 to-[#021348]/5 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#ffde59]/5 to-[#ffc107]/5 rounded-full blur-xl"></div>
              
              <div className="relative mb-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#0ea4f9] to-[#021348] rounded-2xl flex items-center justify-center shadow-lg">
                      <ShoppingBag size={28} className="text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#ffde59] to-[#ffc107] rounded-full flex items-center justify-center">
                      <CheckCircle size={14} className="text-[#021348]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#021348] mb-2">
                      Place Your Order
                    </h2>
                    <p className="text-[#021348]/70 text-lg leading-relaxed">
                      Tell us what you need from which store, and we'll deliver it to your doorstep
                    </p>
                  </div>
                </div>
                
                {/* Quick Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-xl p-4 text-center">
                    <Clock size={20} className="text-green-600 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-green-800">30-60 min</p>
                    <p className="text-xs text-green-600">Delivery Time</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-4 text-center">
                    <Shield size={20} className="text-blue-600 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-blue-800">Quality</p>
                    <p className="text-xs text-blue-600">Guaranteed</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-4 text-center">
                    <Zap size={20} className="text-purple-600 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-purple-800">Real-time</p>
                    <p className="text-xs text-purple-600">Updates</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <EnhancedOrderForm serviceType="Store Order" />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* How It Works */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0ea4f9] to-[#021348] rounded-xl flex items-center justify-center">
                  <Zap size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-xl text-[#021348]">How It Works</h3>
              </div>
              <ol className="space-y-6">
                {[
                  { 
                    step: "Choose Your Store", 
                    description: "Select from our partner stores like SM City Naga, Robinson, Emall, or pharmacies",
                    icon: ShoppingBag,
                    color: "from-blue-500 to-blue-600"
                  },
                  { 
                    step: "Add Items to Order", 
                    description: "Manually enter the items you need with descriptions and quantities",
                    icon: Clock,
                    color: "from-green-500 to-green-600"
                  },
                  { 
                    step: "Pin Your Location", 
                    description: "Use our map to pinpoint your exact delivery address",
                    icon: MapPin,
                    color: "from-purple-500 to-purple-600"
                  },
                  { 
                    step: "Submit Order", 
                    description: "Send your order via WhatsApp and get instant confirmation",
                    icon: CheckCircle,
                    color: "from-orange-500 to-orange-600"
                  },
                  { 
                    step: "We Shop & Deliver", 
                    description: "Our team shops from your chosen store and delivers to your door",
                    icon: Zap,
                    color: "from-red-500 to-red-600"
                  },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 md:gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <span className="font-bold text-white text-sm md:text-lg">{i + 1}</span>
                        </div>
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
                          <item.icon size={12} className="text-gray-600" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[#021348] font-bold text-base md:text-lg mb-2 group-hover:text-[#0ea4f9] transition-colors duration-300">
                        {item.step}
                      </h4>
                      <p className="text-[#021348]/70 leading-relaxed text-sm md:text-base">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-[#ffde59] to-[#ffc107] rounded-xl flex items-center justify-center">
                  <Award size={24} className="text-[#021348]" />
                </div>
                <h3 className="font-bold text-xl text-[#021348]">Why Choose Us</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { icon: Clock, text: "30-60 min delivery", color: "text-green-600" },
                  { icon: ShoppingBag, text: "100+ partner stores", color: "text-blue-600" },
                  { icon: Zap, text: "Real-time updates", color: "text-orange-600" },
                  { icon: Shield, text: "Quality guaranteed", color: "text-purple-600" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 md:gap-4 p-3 rounded-xl hover:bg-white/50 active:bg-white/70 transition-colors duration-300 touch-manipulation">
                    <div className={`w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center`}>
                      <item.icon className={`${item.color} md:w-5 md:h-5`} size={18} />
                    </div>
                    <span className="text-[#021348]/80 font-medium text-sm md:text-base">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Stores */}
            <div className="bg-gradient-to-br from-[#ffde59]/20 via-[#ffc107]/20 to-[#ffde59]/10 rounded-3xl shadow-xl border border-[#ffde59]/30 p-8 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#ffde59] to-[#ffc107] rounded-xl flex items-center justify-center">
                  <Star size={24} className="text-[#021348]" />
                </div>
                <h3 className="font-bold text-xl text-[#021348]">Popular Stores</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "SM City Naga",
                  "Robinson Naga", 
                  "Emall Shopping Mall",
                  "Naga Peoples Mall",
                  "South Star Drug",
                  "Mercury Drug",
                  "Jollibee",
                  "McDonald's",
                ].map((store, i) => (
                  <li key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/30 active:bg-white/50 transition-colors duration-300 group touch-manipulation">
                    <div className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-br from-[#0ea4f9] to-[#021348] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-xs font-bold">{i + 1}</span>
                    </div>
                    <span className="text-[#021348]/80 font-medium text-sm md:text-base">{store}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="relative bg-gradient-to-br from-[#ffde59]/20 via-[#ffc107]/20 to-[#0ea4f9]/20 rounded-3xl p-12 md:p-16 border border-[#ffde59]/30 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 right-10 w-32 h-32 bg-[#021348] rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-[#0ea4f9] rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#ffde59] rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ffde59] to-[#ffc107] text-[#021348] px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <Users size={18} />
              <span>Customer Satisfaction</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#021348]">
              Why Our Customers 
              <span className="block bg-gradient-to-r from-[#0ea4f9] to-[#021348] bg-clip-text text-transparent">
                Love Us
              </span>
            </h2>
            <p className="text-xl text-[#021348]/70 max-w-3xl mx-auto">
              Experience the difference with our commitment to excellence, speed, and customer satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "No Hassle", 
                desc: "We do the shopping for you", 
                icon: CheckCircle,
                color: "from-green-500 to-green-600",
                bgColor: "from-green-50 to-green-100"
              },
              { 
                title: "Save Time", 
                desc: "More time for what matters", 
                icon: Clock,
                color: "from-blue-500 to-blue-600",
                bgColor: "from-blue-50 to-blue-100"
              },
              { 
                title: "Best Prices", 
                desc: "Competitive rates guaranteed", 
                icon: TrendingUp,
                color: "from-purple-500 to-purple-600",
                bgColor: "from-purple-50 to-purple-100"
              },
              { 
                title: "Always Available", 
                desc: "Order anytime, anywhere", 
                icon: Zap,
                color: "from-orange-500 to-orange-600",
                bgColor: "from-orange-50 to-orange-100"
              },
            ].map((benefit, i) => (
              <div key={i} className="group text-center">
                <div className={`bg-gradient-to-br ${benefit.bgColor} rounded-3xl p-6 md:p-8 mb-6 hover:scale-105 active:scale-95 transition-all duration-300 hover:shadow-xl touch-manipulation`}>
                  <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon size={24} className="md:w-8 md:h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-[#021348] mb-2 group-hover:scale-110 transition-transform duration-300">
                    {i + 1}
                  </div>
                </div>
                <h4 className="font-bold text-lg md:text-xl text-[#021348] mb-2">{benefit.title}</h4>
                <p className="text-[#021348]/70 leading-relaxed text-sm md:text-base">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

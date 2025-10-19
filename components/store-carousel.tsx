"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star, MapPin, Clock } from "lucide-react"

interface Store {
  id: number
  name: string
  image: string
  category: string
  rating?: number
  deliveryTime?: string
  distance?: string
}

const stores: Store[] = [
  { id: 1, name: "Emall", image: "/emall-shopping-mall-naga-city.png", category: "Shopping Mall", rating: 4.8, deliveryTime: "25-35 min", distance: "2.1 km" },
  { id: 2, name: "SM City Naga", image: "/sm-city-naga-shopping-mall.png", category: "Shopping Mall", rating: 4.9, deliveryTime: "30-45 min", distance: "3.2 km" },
  { id: 3, name: "Robinson Naga", image: "/robinson-naga-department-store.png", category: "Department Store", rating: 4.7, deliveryTime: "20-30 min", distance: "1.8 km" },
  { id: 4, name: "Naga Peoples Mall", image: "/naga-peoples-mall-shopping-center.jpg", category: "Shopping Mall", rating: 4.6, deliveryTime: "15-25 min", distance: "1.2 km" },
  { id: 5, name: "South Star Drug", image: "/south-star-drug-pharmacy.jpg", category: "Pharmacy", rating: 4.8, deliveryTime: "10-20 min", distance: "0.8 km" },
  { id: 6, name: "Mercury Drug", image: "/mercury-drug-pharmacy-store.jpg", category: "Pharmacy", rating: 4.7, deliveryTime: "12-22 min", distance: "1.1 km" },
  { id: 7, name: "Jollibee", image: "/jollibee-fast-food-restaurant.jpg", category: "Fast Food", rating: 4.9, deliveryTime: "15-25 min", distance: "1.5 km" },
  { id: 8, name: "McDonald's", image: "/mcdonald-s-fast-food-restaurant.jpg", category: "Fast Food", rating: 4.8, deliveryTime: "18-28 min", distance: "1.7 km" },
]

export function StoreCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goToPrevious = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? stores.length - 1 : prevIndex - 1))
    setTimeout(() => setIsAnimating(false), 300)
  }

  const goToNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === stores.length - 1 ? 0 : prevIndex + 1))
    setTimeout(() => setIsAnimating(false), 300)
  }

  const visibleStores = [
    stores[currentIndex],
    stores[(currentIndex + 1) % stores.length],
    stores[(currentIndex + 2) % stores.length],
  ]

  return (
    <div className="w-full bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
      <div className="relative">
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 transition-all duration-500 ${isAnimating ? 'opacity-70 scale-95' : 'opacity-100 scale-100'}`}>
          {visibleStores.map((store, index) => (
            <div
              key={`${store.id}-${currentIndex}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <img 
                  src={store.image || "/placeholder.svg"} 
                  alt={store.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star size={14} className="text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-bold text-gray-800">{store.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-gradient-to-r from-[#0ea4f9] to-[#021348] text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {store.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-[#0ea4f9] transition-colors duration-300">
                  {store.name}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock size={16} className="text-green-600" />
                    <span className="font-medium">{store.deliveryTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} className="text-blue-600" />
                    <span className="font-medium">{store.distance}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={goToPrevious}
            disabled={isAnimating}
            className="group bg-gradient-to-r from-[#0ea4f9] to-[#021348] hover:from-[#021348] hover:to-[#0ea4f9] text-white p-3 md:p-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
            aria-label="Previous stores"
          >
            <ChevronLeft size={20} className="md:w-6 md:h-6 group-hover:-translate-x-1 transition-transform duration-300" />
          </button>

          {/* Enhanced Dots Indicator */}
          <div className="flex gap-3">
            {stores.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (isAnimating) return
                  setIsAnimating(true)
                  setCurrentIndex(index)
                  setTimeout(() => setIsAnimating(false), 300)
                }}
                disabled={isAnimating}
                className={`h-3 rounded-full transition-all duration-500 hover:scale-125 ${
                  index === currentIndex 
                    ? "bg-gradient-to-r from-[#0ea4f9] to-[#021348] w-12 shadow-lg" 
                    : "bg-gray-300 w-3 hover:bg-gray-400"
                }`}
                aria-label={`Go to store ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            disabled={isAnimating}
            className="group bg-gradient-to-r from-[#0ea4f9] to-[#021348] hover:from-[#021348] hover:to-[#0ea4f9] text-white p-3 md:p-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
            aria-label="Next stores"
          >
            <ChevronRight size={20} className="md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  )
}

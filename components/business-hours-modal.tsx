"use client"

import { X, Clock, MapPin, Phone, MessageCircle, Star } from "lucide-react"
import { useEffect } from "react"

interface BusinessHoursModalProps {
  isOpen: boolean
  onClose: () => void
}

export function BusinessHoursModal({ isOpen, onClose }: BusinessHoursModalProps) {
  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const businessHours = [
    { day: "Everyday", hours: "Open 24 hours", isToday: true }
  ]

  const getCurrentStatus = () => {
    return 'open'
  }

  const status = getCurrentStatus()

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl animate-in zoom-in-95 duration-300 transform">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-[#ffde59] to-[#ffc107] rounded-t-2xl p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <Clock className="w-5 h-5 text-[#021348]" />
              </div>
              <div>
                <h2 id="modal-title" className="text-xl font-bold text-[#021348]">
                  Business Hours
                </h2>
                <div className="flex items-center gap-2 mt-1">
                  <div className={`w-2 h-2 rounded-full ${status === 'open' ? 'bg-green-500' : 'bg-red-500'} animate-pulse`}></div>
                  <span className="text-sm font-medium text-[#021348]/80">
                    {status === 'open' ? 'Open 24/7' : 'Currently Closed'}
                  </span>
                </div>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="text-[#021348]/70 hover:text-[#021348] hover:bg-white/20 rounded-lg p-2 transition-all duration-200 hover:scale-110"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Business Hours */}
          <div className="space-y-3 mb-6">
            {businessHours.map((schedule, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#021348]/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-4 h-4 text-[#021348]" />
                  </div>
                  <span className="font-semibold text-gray-800">{schedule.day}</span>
                </div>
                <span className="text-gray-600 font-medium">{schedule.hours}</span>
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-[#021348]/5 to-[#ffde59]/10 rounded-xl p-4 mb-6">
            <h3 className="font-semibold text-[#021348] mb-3 flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Need Help Anytime?
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              We’re available 24/7. Message or call us anytime for urgent deliveries.
            </p>
            
            <div className="flex gap-2">
              <a
                href="https://m.me/105985294772305"
                className="flex-1 flex items-center justify-center gap-2 bg-[#0084FF] text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#0077E6] transition-all duration-200 hover:scale-105"
                aria-label="Message us on Messenger"
              >
                <MessageCircle className="w-4 h-4" />
                Chat Now
              </a>
              <a
                href="tel:09569414260"
                className="flex-1 flex items-center justify-center gap-2 bg-[#021348] text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#021348]/90 transition-all duration-200 hover:scale-105"
                aria-label="Call 09569414260"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>

          {/* Location Info */}
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
            <div className="w-8 h-8 bg-[#021348]/10 rounded-lg flex items-center justify-center">
              <MapPin className="w-4 h-4 text-[#021348]" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800">Service Area</p>
              <p className="text-xs text-gray-600">Naga City & Surrounding Areas</p>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs font-semibold text-gray-700">4.9</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 pb-6">
          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-[#ffde59] to-[#ffc107] text-[#021348] font-semibold py-3 px-4 rounded-xl hover:from-[#ffc107] hover:to-[#ff9800] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
          >
            Got it, thanks!
          </button>
        </div>
      </div>
    </div>
  )
}

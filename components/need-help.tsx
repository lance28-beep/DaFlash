"use client"

import { MessageCircle, Phone } from "lucide-react"

export function NeedHelp() {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Need Help?</h2>
        <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8">
          If you wish to follow up or request the tracking link for your order, you can reach us through multiple
          channels.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a
            href="https://m.me/105985294772305"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base touch-manipulation"
          >
            <MessageCircle size={18} className="sm:w-5 sm:h-5" />
            Facebook Messenger
          </a>

          <a
            href="tel:09569414260"
            className="inline-flex items-center justify-center gap-2 bg-orange-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg hover:bg-orange-700 transition-colors text-sm sm:text-base touch-manipulation"
          >
            <Phone size={18} className="sm:w-5 sm:h-5" />
            Call Us
          </a>
        </div>
      </div>
    </section>
  )
}

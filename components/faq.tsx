"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How fast is the delivery?",
    answer:
      "Most deliveries in Naga City are completed within 30-60 minutes. For Angkas service, we guarantee delivery within 15-20 minutes. Exact timing depends on location and current demand.",
  },
  {
    question: "What areas do you deliver to?",
    answer:
      "We deliver to all areas within Naga City, Camarines Sur, including residential areas, business districts, and remote barangays. You can pin your exact location on our map during checkout.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Once your order is confirmed, we'll send you real-time updates via Messenger. You can also pin your location on the map to see exactly where your delivery is.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash on delivery (COD), GCash, and PayMaya for all orders. You can pay when your order arrives at your doorstep or send payment via GCash/PayMaya for faster processing.",
  },
  {
    question: "Can I cancel or modify my order?",
    answer:
      "Yes, you can cancel or modify your order within 5 minutes of placing it. Contact us immediately via Messenger for quick assistance.",
  },
  {
    question: "Is my package insured?",
    answer:
      "Yes, all packages are insured during transit. We handle your items with care and provide proof of delivery for your peace of mind.",
  },
  {
    question: "What if I'm not satisfied with the service?",
    answer:
      "Your satisfaction is our priority. If you're not happy with your order, contact us immediately and we'll make it right. We offer a satisfaction guarantee on all services.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can reach us 24/7 via Messenger or phone at 09569414260. We typically respond within 5 minutes.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Frequently Asked Questions</h2>
          <p className="text-base sm:text-lg text-gray-600">Everything you need to know about our delivery services</p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-blue-300 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left touch-manipulation"
              >
                <span className="font-semibold text-gray-900 text-sm sm:text-base pr-2">{faq.question}</span>
                <ChevronDown
                  size={18}
                  className={`text-blue-600 transition-transform flex-shrink-0 sm:w-5 sm:h-5 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 bg-blue-50 rounded-lg p-4 sm:p-6 md:p-8 text-center border border-blue-200">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Still have questions?</h3>
          <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Our customer support team is available 24/7 to help you</p>
          <a
            href="https://m.me/105985294772305"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm sm:text-base touch-manipulation"
          >
            Chat with us on Messenger
          </a>
        </div>
      </div>
    </section>
  )
}

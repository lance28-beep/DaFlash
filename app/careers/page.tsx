"use client"

import type React from "react"

import { useState } from "react"
import { Footer } from "@/components/footer"
import { Bike, Send, CheckCircle } from "lucide-react"

export default function CareersPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    description: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const buildMessage = () => {
    return `Hi One Click Delivery,\n\nI would like to apply for the Rider position.\n\nName: ${formData.fullName}\nPhone: ${formData.phoneNumber}\n\nAbout Me:\n${formData.description}`
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.fullName || !formData.phoneNumber || !formData.description) {
      alert("Please fill in all fields")
      return
    }

    try {
      await navigator.clipboard.writeText(buildMessage())
    } catch {}

    const messengerUrl = `https://m.me/105985294772305`
    window.open(messengerUrl, "_blank")

    setSubmitted(true)
    setFormData({ fullName: "", phoneNumber: "", description: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ffde59]/10 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#021348] via-[#0ea4f9] to-[#021348] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Bike className="w-16 h-16" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Join Our Team</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Be part of Naga City's fastest growing delivery service. We're looking for passionate riders who are
              committed to excellence and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-gradient-to-br from-[#ffde59]/20 to-[#ffde59]/10 p-8 rounded-xl border border-[#ffde59]/30">
              <h2 className="text-3xl font-bold text-[#021348] mb-4">Our Mission</h2>
              <p className="text-lg text-[#021348]/80 leading-relaxed">
                To revolutionize delivery services in Naga City by providing fast, reliable, and customer-centric
                solutions. We empower our riders to be the face of excellence, ensuring every delivery is handled with
                care and professionalism.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-[#0ea4f9]/20 to-[#0ea4f9]/10 p-8 rounded-xl border border-[#0ea4f9]/30">
              <h2 className="text-3xl font-bold text-[#021348] mb-4">Our Vision</h2>
              <p className="text-lg text-[#021348]/80 leading-relaxed">
                To become the most trusted and preferred delivery service in Bicol, known for our reliability, speed,
                and exceptional customer service. We aim to create opportunities for our riders to build successful
                careers while serving our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rider Position Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-[#021348] to-[#0ea4f9] p-8 text-white">
              <div className="flex items-center gap-4 mb-4">
                <Bike className="w-10 h-10" />
                <h2 className="text-3xl font-bold">Rider Position</h2>
              </div>
              <p className="text-white/90 text-lg">Full-time • Naga City, Camarines Sur</p>
            </div>

            <div className="p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#021348] mb-4">About the Role</h3>
                <p className="text-[#021348]/70 text-lg leading-relaxed">
                  Join our team as a Rider and be the backbone of One Click Delivery. You'll be responsible for
                  delivering orders quickly and safely across Naga City. We're looking for reliable, professional riders
                  who take pride in their work and are committed to customer satisfaction.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#021348] mb-4">Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#0ea4f9] flex-shrink-0 mt-1" />
                    <span className="text-[#021348]/70 text-lg">
                      <strong>Own Motorcycle:</strong> You must have your own motorcycle in good working condition
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#0ea4f9] flex-shrink-0 mt-1" />
                    <span className="text-[#021348]/70 text-lg">
                      <strong>Valid License:</strong> Current and valid motorcycle driver's license
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#0ea4f9] flex-shrink-0 mt-1" />
                    <span className="text-[#021348]/70 text-lg">
                      <strong>Knowledge of City:</strong> Familiarity with Naga City routes and areas
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#0ea4f9] flex-shrink-0 mt-1" />
                    <span className="text-[#021348]/70 text-lg">
                      <strong>Reliability:</strong> Punctual, responsible, and committed to excellence
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#ffde59]/20 border-l-4 border-[#0ea4f9] p-6 rounded">
                <p className="text-[#021348]/80 text-lg">
                  <strong>Why Join Us?</strong> Competitive compensation, flexible hours, professional support, and the
                  opportunity to be part of a growing company that values its team members.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-[#021348] mb-2">Apply Now</h2>
            <p className="text-[#021348]/70 mb-8 text-lg">
              Ready to join our team? Fill out the form below and we'll get back to you soon.
            </p>

            {submitted && (
              <div className="mb-6 bg-[#ffde59]/20 border border-[#0ea4f9] rounded-lg p-4 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-[#0ea4f9]" />
                <p className="text-[#021348] font-medium">Application sent successfully! We'll contact you soon.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-[#021348] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ea4f9] focus:border-transparent"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-semibold text-[#021348] mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="09XX-XXX-XXXX"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ea4f9] focus:border-transparent"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-semibold text-[#021348] mb-2">
                  Tell us about yourself *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Share your experience, why you want to join us, and what makes you a great rider..."
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ea4f9] focus:border-transparent resize-none"
                  required
                />
              </div>

              {/* Startup Instruction Label */}
              <div className="bg-yellow-50 border border-yellow-200 text-yellow-900 rounded-lg p-4">
                <p className="text-sm font-medium">
                  Really sorry — we're a startup. Please tap "Copy application text", then "Open Messenger", and paste the message there.
                </p>
              </div>

              {/* Message Preview and Copy */}
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-bold text-[#021348]">Application Preview</h3>
                  <button
                    type="button"
                    onClick={async () => { try { await navigator.clipboard.writeText(buildMessage()) } catch {} }}
                    className="bg-[#021348] hover:bg-black text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                  >
                    Copy application text
                  </button>
                </div>
                <textarea
                  readOnly
                  value={buildMessage()}
                  className="w-full h-40 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm"
                />
                <p className="text-xs text-gray-500 mt-2">Paste the copied text into the Messenger chat.</p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#021348] to-[#0ea4f9] text-white font-bold py-3 px-6 rounded-lg hover:from-[#0ea4f9] hover:to-[#021348] transition-all duration-200 flex items-center justify-center gap-2 text-lg"
              >
                <Send className="w-5 h-5" />
                Open Messenger
              </button>
            </form>

            <p className="text-center text-[#021348]/70 text-sm mt-6">Your information will be sent via Messenger. Copy and paste the previewed text.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

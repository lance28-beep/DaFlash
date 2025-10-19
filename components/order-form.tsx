"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"

interface OrderFormProps {
  serviceType: string
  onSubmit?: (data: any) => void
}

export function OrderForm({ serviceType, onSubmit }: OrderFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    details: "",
    preferredTime: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const buildMessage = () => {
    return `
*New ${serviceType} Order*

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Address: ${formData.address}
Preferred Time: ${formData.preferredTime}

Details:
${formData.details}
    `.trim()
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(buildMessage())
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {}
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Create message
      const message = buildMessage()

      try {
        await navigator.clipboard.writeText(message)
      } catch {}

      const messengerUrl = `https://m.me/105985294772305`
      window.open(messengerUrl, "_blank")

      setSubmitted(true)
      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
        details: "",
        preferredTime: "",
      })

      setTimeout(() => setSubmitted(false), 5000)
      onSubmit?.(formData)
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-lg p-8 max-w-2xl">
      {submitted && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 font-semibold">Thank you! Your order message was copied. We've opened Messenger for you.</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="09XXXXXXXXX"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Time *</label>
          <select
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a time</option>
            <option value="morning">Morning (8 AM - 12 PM)</option>
            <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
            <option value="evening">Evening (4 PM - 8 PM)</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Delivery Address *</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your delivery address"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Order Details *</label>
        <textarea
          name="details"
          value={formData.details}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Describe what you need delivered..."
        />
      </div>

      {/* Startup Instruction Label */}
      <div className="mb-6 bg-yellow-50 border border-yellow-200 text-yellow-900 rounded-lg p-4">
        <p className="text-sm font-medium">
          Really sorry — we're a startup. Please tap "Copy order text", then "Open Messenger", and paste the message there.
        </p>
      </div>

      {/* Message Preview and Copy */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-base font-bold text-gray-900">Message Preview</h3>
          <button
            type="button"
            onClick={handleCopy}
            className="bg-gray-900 hover:bg-black text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            {copied ? "Copied" : "Copy order text"}
          </button>
        </div>
        <textarea
          readOnly
          value={buildMessage()}
          className="w-full h-40 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm"
        />
        <p className="text-xs text-gray-500 mt-2">Paste the copied text into the Messenger chat.</p>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
      >
        <Send size={20} />
        {loading ? "Sending..." : "Open Messenger"}
      </button>
    </form>
  )
}

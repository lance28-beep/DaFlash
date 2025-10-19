"use client"

import type React from "react"
import { useState } from "react"
import { Send, MapPin, Package, User, Phone, MessageSquare, ArrowRight, CheckCircle } from "lucide-react"
import { LocationModal } from "./location-modal"

interface PickupDeliveryFormProps {
  onSubmit?: (data: any) => void
}

interface LocationData {
  address: string
  latitude: string
  longitude: string
  contactName: string
  mobileNumber: string
  instructions: string
}

interface PackageData {
  weightCategory: string
  description: string
}

const weightCategories = [
  { value: "light", label: "Light", range: "0-2 kg", color: "bg-green-100 text-green-800" },
  { value: "medium", label: "Medium", range: "2-10 kg", color: "bg-yellow-100 text-yellow-800" },
  { value: "heavy", label: "Heavy", range: "10+ kg", color: "bg-red-100 text-red-800" }
]

export function PickupDeliveryForm({ onSubmit }: PickupDeliveryFormProps) {
  const [formData, setFormData] = useState({
    pickup: {
      address: "",
      latitude: "",
      longitude: "",
      contactName: "",
      mobileNumber: "",
      instructions: ""
    } as LocationData,
    dropoff: {
      address: "",
      latitude: "",
      longitude: "",
      contactName: "",
      mobileNumber: "",
      instructions: ""
    } as LocationData,
    package: {
      weightCategory: "",
      description: ""
    } as PackageData
  })
  
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [showLocationModal, setShowLocationModal] = useState(false)
  const [locationModalType, setLocationModalType] = useState<"pickup" | "dropoff">("pickup")
  const [copied, setCopied] = useState(false)

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    const [section, field] = name.split('.')
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value
      }
    }))
  }

  const handleLocationSelect = (address: string, lat: number, lng: number) => {
    setFormData(prev => ({
      ...prev,
      [locationModalType]: {
        ...prev[locationModalType],
        address: address,
        latitude: lat.toString(),
        longitude: lng.toString()
      }
    }))
  }

  const handlePackageChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      package: {
        ...prev.package,
        [name]: value
      }
    }))
  }

  const openLocationModal = (type: "pickup" | "dropoff") => {
    setLocationModalType(type)
    setShowLocationModal(true)
  }

  const isFormValid = () => {
    return (
      formData.pickup.address &&
      formData.pickup.contactName &&
      formData.pickup.mobileNumber &&
      formData.dropoff.address &&
      formData.dropoff.contactName &&
      formData.dropoff.mobileNumber &&
      formData.package.weightCategory &&
      formData.package.description
    )
  }

  const buildMessage = () => {
    const selectedWeightCategory = weightCategories.find(cat => cat.value === formData.package.weightCategory)
    return `
*🚚 New Pick Up & Delivery Order*\n\n📍 *PICK UP DETAILS:*\n• Address: ${formData.pickup.address}\n• Contact: ${formData.pickup.contactName}\n• Mobile: ${formData.pickup.mobileNumber}\n${formData.pickup.instructions ? `• Instructions: ${formData.pickup.instructions}` : ""}\n${formData.pickup.latitude && formData.pickup.longitude ? `• Location: Lat ${formData.pickup.latitude}, Lng ${formData.pickup.longitude}` : ""}\n\n🎯 *DROP OFF DETAILS:*\n• Address: ${formData.dropoff.address}\n• Contact: ${formData.dropoff.contactName}\n• Mobile: ${formData.dropoff.mobileNumber}\n${formData.dropoff.instructions ? `• Instructions: ${formData.dropoff.instructions}` : ""}\n${formData.dropoff.latitude && formData.dropoff.longitude ? `• Location: Lat ${formData.dropoff.latitude}, Lng ${formData.dropoff.longitude}` : ""}\n\n📦 *PACKAGE DETAILS:*\n• Weight Category: ${selectedWeightCategory?.label} (${selectedWeightCategory?.range})\n• Description: ${formData.package.description}\n\n---\n*Thank you for choosing DAPLASH Delivery!*`.trim()
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
      const message = buildMessage()

      try {
        await navigator.clipboard.writeText(message)
      } catch {}

      const messengerUrl = `https://m.me/105985294772305`
      window.open(messengerUrl, "_blank")

      setSubmitted(true)
      setFormData({
        pickup: {
          address: "",
          latitude: "",
          longitude: "",
          contactName: "",
          mobileNumber: "",
          instructions: ""
        },
        dropoff: {
          address: "",
          latitude: "",
          longitude: "",
          contactName: "",
          mobileNumber: "",
          instructions: ""
        },
        package: {
          weightCategory: "",
          description: ""
        }
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
    <>
      <form onSubmit={handleSubmit} className="space-y-8">
        {submitted && (
          <div className="p-6 bg-green-50 border-2 border-green-200 rounded-xl">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-600" size={24} />
              <p className="text-green-800 font-semibold text-lg">Thank you! Your order message was copied. We've opened Messenger for you.</p>
            </div>
          </div>
        )}

        {/* Startup Instruction Label */}
        <div className="bg-yellow-50 border-2 border-yellow-200 text-yellow-900 rounded-xl p-4">
          <p className="text-sm font-medium">
            Really sorry — we're a startup. Please tap "Copy order text", then "Open Messenger", and paste the message there.
          </p>
        </div>

        {/* Step 1: Pick Up Details */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-8 border-2 border-blue-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
              1
            </div>
            <h3 className="text-2xl font-bold text-blue-900 flex items-center gap-2">
              <MapPin className="text-blue-600" size={24} />
              Pick Up Details
            </h3>
          </div>

          <div className="space-y-6">
            {/* Address */}
            <div>
              <label className="block text-sm font-semibold text-blue-800 mb-2">Pick Up Address *</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="pickup.address"
                  value={formData.pickup.address}
                  onChange={handleLocationChange}
                  required
                  className="flex-1 px-4 py-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
                  placeholder="Select pickup location"
                  readOnly
                />
                <button
                  type="button"
                  onClick={() => openLocationModal("pickup")}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <MapPin size={20} />
                  Pin Location
                </button>
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-blue-800 mb-2">Contact Name *</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600" size={20} />
                  <input
                    type="text"
                    name="pickup.contactName"
                    value={formData.pickup.contactName}
                    onChange={handleLocationChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
                    placeholder="Full name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-blue-800 mb-2">Mobile Number *</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600" size={20} />
                  <input
                    type="tel"
                    name="pickup.mobileNumber"
                    value={formData.pickup.mobileNumber}
                    onChange={handleLocationChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
                    placeholder="09XXXXXXXXX"
                  />
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div>
              <label className="block text-sm font-semibold text-blue-800 mb-2">Pick Up Instructions (Optional)</label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 text-blue-600" size={20} />
                <textarea
                  name="pickup.instructions"
                  value={formData.pickup.instructions}
                  onChange={handleLocationChange}
                  rows={3}
                  className="w-full pl-10 pr-4 py-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white resize-none"
                  placeholder="Any special instructions for pickup? (e.g., Ring doorbell twice, Call before arriving)"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Step 2: Drop Off Details */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-lg p-8 border-2 border-green-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
              2
            </div>
            <h3 className="text-2xl font-bold text-green-900 flex items-center gap-2">
              <ArrowRight className="text-green-600" size={24} />
              Drop Off Details
            </h3>
          </div>

          <div className="space-y-6">
            {/* Address */}
            <div>
              <label className="block text-sm font-semibold text-green-800 mb-2">Drop Off Address *</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="dropoff.address"
                  value={formData.dropoff.address}
                  onChange={handleLocationChange}
                  required
                  className="flex-1 px-4 py-3 border-2 border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors bg-white"
                  placeholder="Select drop off location"
                  readOnly
                />
                <button
                  type="button"
                  onClick={() => openLocationModal("dropoff")}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <MapPin size={20} />
                  Pin Location
                </button>
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-green-800 mb-2">Contact Person *</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600" size={20} />
                  <input
                    type="text"
                    name="dropoff.contactName"
                    value={formData.dropoff.contactName}
                    onChange={handleLocationChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border-2 border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors bg-white"
                    placeholder="Recipient's name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-green-800 mb-2">Mobile Number *</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600" size={20} />
                  <input
                    type="tel"
                    name="dropoff.mobileNumber"
                    value={formData.dropoff.mobileNumber}
                    onChange={handleLocationChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border-2 border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors bg-white"
                    placeholder="09XXXXXXXXX"
                  />
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div>
              <label className="block text-sm font-semibold text-green-800 mb-2">Drop Off Instructions (Optional)</label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 text-green-600" size={20} />
                <textarea
                  name="dropoff.instructions"
                  value={formData.dropoff.instructions}
                  onChange={handleLocationChange}
                  rows={3}
                  className="w-full pl-10 pr-4 py-3 border-2 border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors bg-white resize-none"
                  placeholder="Any special instructions for delivery? (e.g., Leave at gate, Call recipient, Office hours only)"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: Package Details */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-lg p-8 border-2 border-purple-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
              3
            </div>
            <h3 className="text-2xl font-bold text-purple-900 flex items-center gap-2">
              <Package className="text-purple-600" size={24} />
              Package Details
            </h3>
          </div>

          <div className="space-y-6">
            {/* Weight Category */}
            <div>
              <label className="block text-sm font-semibold text-purple-800 mb-4">Package Weight Category *</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {weightCategories.map((category) => (
                  <button
                    key={category.value}
                    type="button"
                    onClick={() => handlePackageChange({ target: { name: "weightCategory", value: category.value } } as any)}
                    className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                      formData.package.weightCategory === category.value
                        ? `border-purple-500 ${category.color} shadow-lg`
                        : "border-purple-300 bg-white hover:bg-purple-50"
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-900">{category.label}</div>
                      <div className="text-sm text-purple-700">{category.range}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Package Description */}
            <div>
              <label className="block text-sm font-semibold text-purple-800 mb-2">Package Description *</label>
              <div className="relative">
                <Package className="absolute left-3 top-3 text-purple-600" size={20} />
                <textarea
                  name="description"
                  value={formData.package.description}
                  onChange={handlePackageChange}
                  required
                  rows={4}
                  className="w-full pl-10 pr-4 py-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors bg-white resize-none"
                  placeholder="Describe your package (e.g., Documents, Electronics, Clothing, Food, etc.)"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Message Preview and Copy */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold text-gray-900">Message Preview</h3>
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
            className="w-full h-48 px-4 py-3 border-2 border-gray-300 rounded-lg bg-gray-50 text-sm"
          />
          <p className="text-xs text-gray-500 mt-2">Paste the copied text into the Messenger chat.</p>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <div className="text-center">
            <button
              type="submit"
              disabled={loading || !isFormValid()}
              className="bg-gradient-to-r from-[#021348] to-[#0ea4f9] hover:from-[#0ea4f9] hover:to-[#021348] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 disabled:transform-none"
            >
              <Send size={24} />
              {loading ? "Sending Order..." : "Open Messenger"}
            </button>
            
            {!isFormValid() && (
              <p className="text-sm text-gray-500 mt-3">
                Please fill in all required fields to proceed
              </p>
            )}
          </div>
        </div>
      </form>

      <LocationModal
        isOpen={showLocationModal}
        onClose={() => setShowLocationModal(false)}
        onLocationSelect={handleLocationSelect}
      />
    </>
  )
}

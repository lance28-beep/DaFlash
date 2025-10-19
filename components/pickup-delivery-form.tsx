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
      <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
        {submitted && (
          <div className="p-4 sm:p-6 bg-green-50 border-2 border-green-200 rounded-lg sm:rounded-xl">
            <div className="flex items-start sm:items-center gap-3">
              <CheckCircle className="text-green-600 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5 sm:mt-0" size={20} />
              <p className="text-green-800 font-semibold text-sm sm:text-base lg:text-lg">Thank you! Your order message was copied. We've opened Messenger for you.</p>
            </div>
          </div>
        )}

        {/* Startup Instruction Label */}
        <div className="bg-yellow-50 border-2 border-yellow-200 text-yellow-900 rounded-lg sm:rounded-xl p-3 sm:p-4">
          <p className="text-xs sm:text-sm font-medium">
            Really sorry — we're a startup. Please tap "Copy order text", then "Open Messenger", and paste the message there.
          </p>
        </div>

        {/* Step 1: Pick Up Details */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border-2 border-blue-200">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-lg">
              1
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 flex items-center gap-2">
              <MapPin className="text-blue-600 sm:w-6 sm:h-6" size={20} />
              Pick Up Details
            </h3>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {/* Address */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-blue-800 mb-2">Pick Up Address *</label>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  name="pickup.address"
                  value={formData.pickup.address}
                  onChange={handleLocationChange}
                  required
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white text-sm sm:text-base"
                  placeholder="Select pickup location"
                  readOnly
                />
                <button
                  type="button"
                  onClick={() => openLocationModal("pickup")}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 sm:py-3 px-3 sm:px-4 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-sm sm:text-base touch-manipulation"
                >
                  <MapPin size={16} className="sm:w-5 sm:h-5" />
                  <span className="hidden sm:inline">Pin Location</span>
                  <span className="sm:hidden">Pin</span>
                </button>
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-blue-800 mb-2">Contact Name *</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600 sm:w-5 sm:h-5" size={18} />
                  <input
                    type="text"
                    name="pickup.contactName"
                    value={formData.pickup.contactName}
                    onChange={handleLocationChange}
                    required
                    className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white text-sm sm:text-base"
                    placeholder="Full name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-blue-800 mb-2">Mobile Number *</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600 sm:w-5 sm:h-5" size={18} />
                  <input
                    type="tel"
                    name="pickup.mobileNumber"
                    value={formData.pickup.mobileNumber}
                    onChange={handleLocationChange}
                    required
                    className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white text-sm sm:text-base"
                    placeholder="09XXXXXXXXX"
                  />
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-blue-800 mb-2">Pick Up Instructions (Optional)</label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 text-blue-600 sm:w-5 sm:h-5" size={18} />
                <textarea
                  name="pickup.instructions"
                  value={formData.pickup.instructions}
                  onChange={handleLocationChange}
                  rows={3}
                  className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white resize-none text-sm sm:text-base"
                  placeholder="Any special instructions for pickup? (e.g., Ring doorbell twice, Call before arriving)"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Step 2: Drop Off Details */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border-2 border-green-200">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-lg">
              2
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-green-900 flex items-center gap-2">
              <ArrowRight className="text-green-600 sm:w-6 sm:h-6" size={20} />
              Drop Off Details
            </h3>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {/* Address */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-green-800 mb-2">Drop Off Address *</label>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  name="dropoff.address"
                  value={formData.dropoff.address}
                  onChange={handleLocationChange}
                  required
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border-2 border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors bg-white text-sm sm:text-base"
                  placeholder="Select drop off location"
                  readOnly
                />
                <button
                  type="button"
                  onClick={() => openLocationModal("dropoff")}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 sm:py-3 px-3 sm:px-4 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-sm sm:text-base touch-manipulation"
                >
                  <MapPin size={16} className="sm:w-5 sm:h-5" />
                  <span className="hidden sm:inline">Pin Location</span>
                  <span className="sm:hidden">Pin</span>
                </button>
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-green-800 mb-2">Contact Person *</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600 sm:w-5 sm:h-5" size={18} />
                  <input
                    type="text"
                    name="dropoff.contactName"
                    value={formData.dropoff.contactName}
                    onChange={handleLocationChange}
                    required
                    className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border-2 border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors bg-white text-sm sm:text-base"
                    placeholder="Recipient's name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-green-800 mb-2">Mobile Number *</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600 sm:w-5 sm:h-5" size={18} />
                  <input
                    type="tel"
                    name="dropoff.mobileNumber"
                    value={formData.dropoff.mobileNumber}
                    onChange={handleLocationChange}
                    required
                    className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border-2 border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors bg-white text-sm sm:text-base"
                    placeholder="09XXXXXXXXX"
                  />
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-green-800 mb-2">Drop Off Instructions (Optional)</label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 text-green-600 sm:w-5 sm:h-5" size={18} />
                <textarea
                  name="dropoff.instructions"
                  value={formData.dropoff.instructions}
                  onChange={handleLocationChange}
                  rows={3}
                  className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border-2 border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors bg-white resize-none text-sm sm:text-base"
                  placeholder="Any special instructions for delivery? (e.g., Leave at gate, Call recipient, Office hours only)"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: Package Details */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border-2 border-purple-200">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-lg">
              3
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-900 flex items-center gap-2">
              <Package className="text-purple-600 sm:w-6 sm:h-6" size={20} />
              Package Details
            </h3>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {/* Weight Category */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-purple-800 mb-3 sm:mb-4">Package Weight Category *</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                {weightCategories.map((category) => (
                  <button
                    key={category.value}
                    type="button"
                    onClick={() => handlePackageChange({ target: { name: "weightCategory", value: category.value } } as any)}
                    className={`p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 transition-all duration-200 touch-manipulation ${
                      formData.package.weightCategory === category.value
                        ? `border-purple-500 ${category.color} shadow-lg`
                        : "border-purple-300 bg-white hover:bg-purple-50"
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-base sm:text-lg font-bold text-purple-900">{category.label}</div>
                      <div className="text-xs sm:text-sm text-purple-700">{category.range}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Package Description */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-purple-800 mb-2">Package Description *</label>
              <div className="relative">
                <Package className="absolute left-3 top-3 text-purple-600 sm:w-5 sm:h-5" size={18} />
                <textarea
                  name="description"
                  value={formData.package.description}
                  onChange={handlePackageChange}
                  required
                  rows={4}
                  className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors bg-white resize-none text-sm sm:text-base"
                  placeholder="Describe your package (e.g., Documents, Electronics, Clothing, Food, etc.)"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Message Preview and Copy */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border-2 border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">Message Preview</h3>
            <button
              type="button"
              onClick={handleCopy}
              className="bg-gray-900 hover:bg-black text-white font-semibold py-2 sm:py-3 px-3 sm:px-4 rounded-lg transition-colors text-sm sm:text-base touch-manipulation"
            >
              {copied ? "Copied" : "Copy order text"}
            </button>
          </div>
          <textarea
            readOnly
            value={buildMessage()}
            className="w-full h-40 sm:h-48 px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-300 rounded-lg bg-gray-50 text-xs sm:text-sm"
          />
          <p className="text-xs text-gray-500 mt-2">Paste the copied text into the Messenger chat.</p>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <div className="text-center">
            <button
              type="submit"
              disabled={loading || !isFormValid()}
              className="bg-gradient-to-r from-[#021348] to-[#0ea4f9] hover:from-[#0ea4f9] hover:to-[#021348] text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg sm:rounded-xl transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 disabled:opacity-50 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 disabled:transform-none text-sm sm:text-base touch-manipulation"
            >
              <Send size={20} className="sm:w-6 sm:h-6" />
              {loading ? "Sending Order..." : "Open Messenger"}
            </button>
            
            {!isFormValid() && (
              <p className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-3">
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

"use client"

import type React from "react"

import { useState } from "react"
import { LocationModal } from "./location-modal"
import { MapPin, Users, Luggage, MessageCircle } from "lucide-react"

export function AngkasForm() {
  const [pickupLocation, setPickupLocation] = useState("")
  const [destination, setDestination] = useState("")
  const [passengers, setPassengers] = useState(1)
  const [hasBaggage, setHasBaggage] = useState(false)
  const [contactName, setContactName] = useState("")
  const [contactPhone, setContactPhone] = useState("")
  const [notes, setNotes] = useState("")
  const [locationModalOpen, setLocationModalOpen] = useState(false)
  const [activeLocationField, setActiveLocationField] = useState<"pickup" | "destination">("pickup")
  const [copied, setCopied] = useState(false)

  const handleLocationSelect = (address: string) => {
    if (activeLocationField === "pickup") {
      setPickupLocation(address)
    } else {
      setDestination(address)
    }
    setLocationModalOpen(false)
  }

  const buildMessage = () => {
    return `
*Angkas Delivery Request*\n\n📍 *Pickup Location:* ${pickupLocation}\n📍 *Destination:* ${destination}\n👥 *Passengers:* ${passengers}\n🧳 *Baggage:* ${hasBaggage ? "Yes" : "No"}\n\n👤 *Name:* ${contactName}\n📱 *Phone:* ${contactPhone}\n${notes ? `📝 *Notes:* ${notes}` : ""}\n\nPlease confirm this delivery request.`.trim()
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

    if (!pickupLocation || !destination || !contactName || !contactPhone) {
      alert("Please fill in all required fields")
      return
    }

    try {
      await navigator.clipboard.writeText(buildMessage())
    } catch {}

    const messengerUrl = `https://m.me/105985294772305`
    window.open(messengerUrl, "_blank")
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 space-y-8 border border-gray-100">
        {/* Pickup Location */}
        <div className="space-y-3">
          <label className="block text-sm font-bold text-[#021348] mb-3 flex items-center gap-2">
            <MapPin size={18} className="text-[#0ea4f9]" />
            Pickup Location *
          </label>
          <div className="flex gap-3">
            <input
              type="text"
              value={pickupLocation}
              readOnly
              placeholder="Select your pickup location"
              className="flex-1 px-5 py-4 border-2 border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0ea4f9] focus:border-[#0ea4f9] transition-all duration-300 text-[#021348] font-medium"
            />
            <button
              type="button"
              onClick={() => {
                setActiveLocationField("pickup")
                setLocationModalOpen(true)
              }}
              className="bg-gradient-to-r from-[#0ea4f9] to-[#0284c7] hover:from-[#0284c7] hover:to-[#0369a1] text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <MapPin size={20} />
              Pin
            </button>
          </div>
        </div>

        {/* Destination */}
        <div className="space-y-3">
          <label className="block text-sm font-bold text-[#021348] mb-3 flex items-center gap-2">
            <MapPin size={18} className="text-[#0ea4f9]" />
            Destination *
          </label>
          <div className="flex gap-3">
            <input
              type="text"
              value={destination}
              readOnly
              placeholder="Select your destination"
              className="flex-1 px-5 py-4 border-2 border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0ea4f9] focus:border-[#0ea4f9] transition-all duration-300 text-[#021348] font-medium"
            />
            <button
              type="button"
              onClick={() => {
                setActiveLocationField("destination")
                setLocationModalOpen(true)
              }}
              className="bg-gradient-to-r from-[#0ea4f9] to-[#0284c7] hover:from-[#0284c7] hover:to-[#0369a1] text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <MapPin size={20} />
              Pin
            </button>
          </div>
        </div>

        {/* Passengers */}
        <div className="space-y-3">
          <label className="block text-sm font-bold text-[#021348] mb-3 flex items-center gap-2">
            <Users size={18} className="text-[#0ea4f9]" />
            Number of Passengers *
          </label>
          <div className="flex items-center gap-4">
            <div className="flex items-center border-2 border-gray-200 rounded-xl overflow-hidden bg-white">
              <button
                type="button"
                onClick={() => setPassengers(Math.max(1, passengers - 1))}
                className="px-5 py-4 text-gray-600 hover:bg-gray-100 transition-colors font-bold text-lg"
              >
                −
              </button>
              <span className="px-8 py-4 font-bold text-[#021348] border-l border-r border-gray-200 bg-gray-50 text-xl">
                {passengers}
              </span>
              <button
                type="button"
                onClick={() => setPassengers(passengers + 1)}
                className="px-5 py-4 text-gray-600 hover:bg-gray-100 transition-colors font-bold text-lg"
              >
                +
              </button>
            </div>
            <div className="flex items-center gap-2 bg-[#ffde59]/20 px-4 py-3 rounded-xl">
              <Users size={20} className="text-[#0ea4f9]" />
              <span className="text-[#021348] font-medium text-sm">Passenger{passengers > 1 ? 's' : ''}</span>
            </div>
          </div>
        </div>

        {/* Baggage */}
        <div className="space-y-3">
          <label className="block text-sm font-bold text-[#021348] mb-3 flex items-center gap-2">
            <Luggage size={18} className="text-[#0ea4f9]" />
            Baggage/Cargo
          </label>
          <div
            className="flex items-center gap-4 p-5 border-2 border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer transition-all duration-300 hover:border-[#0ea4f9]/30"
            onClick={() => setHasBaggage(!hasBaggage)}
          >
            <input
              type="checkbox"
              checked={hasBaggage}
              onChange={(e) => setHasBaggage(e.target.checked)}
              className="w-6 h-6 text-[#0ea4f9] rounded-lg focus:ring-2 focus:ring-[#0ea4f9] cursor-pointer"
            />
            <div className="flex items-center gap-3">
              <Luggage size={24} className="text-[#0ea4f9]" />
              <span className="text-[#021348] font-semibold text-lg">I have baggage/cargo to transport</span>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t-2 border-gray-100 pt-8">
          <h3 className="text-xl font-bold text-[#021348] mb-6 flex items-center gap-2">
            <MessageCircle size={20} className="text-[#0ea4f9]" />
            Contact Information
          </h3>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-[#021348] mb-3">Full Name *</label>
              <input
                type="text"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0ea4f9] focus:border-[#0ea4f9] transition-all duration-300 text-[#021348] font-medium"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-[#021348] mb-3">Phone Number *</label>
              <input
                type="tel"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
                placeholder="09XX-XXX-XXXX"
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0ea4f9] focus:border-[#0ea4f9] transition-all duration-300 text-[#021348] font-medium"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-[#021348] mb-3">Additional Notes (Optional)</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Any special instructions or notes for the driver..."
                rows={4}
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0ea4f9] focus:border-[#0ea4f9] transition-all duration-300 text-[#021348] font-medium resize-none"
              />
            </div>
          </div>
        </div>

        {/* Startup Instruction Label */}
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-900 rounded-xl p-4">
          <p className="text-sm font-medium">
            Really sorry — we're a startup. Please tap "Copy order text", then "Open Messenger", and paste the message there.
          </p>
        </div>

        {/* Message Preview and Copy */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-[#021348]">Message Preview</h3>
            <button
              type="button"
              onClick={handleCopy}
              className="bg-[#021348] hover:bg-black text-white font-semibold py-2 px-4 rounded-lg transition-colors"
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

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#0ea4f9] to-[#0284c7] hover:from-[#0284c7] hover:to-[#0369a1] text-white font-bold py-5 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 text-xl shadow-xl hover:shadow-2xl"
        >
          <MessageCircle size={28} />
          Open Messenger
        </button>
      </form>

      <LocationModal
        isOpen={locationModalOpen}
        onClose={() => setLocationModalOpen(false)}
        onLocationSelect={(address) => handleLocationSelect(address)}
      />
    </>
  )
}

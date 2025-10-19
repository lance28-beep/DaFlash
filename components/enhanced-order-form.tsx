"use client"

import type React from "react"
import { useState } from "react"
import { Send, MapPin, Plus, Trash2 } from "lucide-react"
import { LocationModal } from "./location-modal"

interface OrderItem {
  id: string
  name: string
  quantity: number
}

interface EnhancedOrderFormProps {
  serviceType: string
  onSubmit?: (data: any) => void
}

export function EnhancedOrderForm({ serviceType, onSubmit }: EnhancedOrderFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    latitude: "",
    longitude: "",
    deliveryInstructions: "",
    store: "",
  })
  const [items, setItems] = useState<OrderItem[]>([])
  const [newItem, setNewItem] = useState({ name: "", quantity: 1 })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [showLocationModal, setShowLocationModal] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleLocationSelect = (address: string, lat: number, lng: number) => {
    setFormData((prev) => ({
      ...prev,
      address: address,
      latitude: lat.toString(),
      longitude: lng.toString(),
    }))
  }

  const handleAddItem = () => {
    if (newItem.name.trim()) {
      const item: OrderItem = {
        id: Date.now().toString(),
        name: newItem.name,
        quantity: newItem.quantity,
      }
      setItems([...items, item])
      setNewItem({ name: "", quantity: 1 })
    }
  }

  const handleRemoveItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setItems(items.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const buildMessage = () => {
    const itemsList = items.map((item) => `• ${item.name} (Qty: ${item.quantity})`).join("\n")

    return `
*New ${serviceType} Order*\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nStore: ${formData.store}\nAddress: ${formData.address}\n${formData.latitude && formData.longitude ? `Location: Lat ${formData.latitude}, Lng ${formData.longitude}` : ""}\n\n*Items to Order:*\n${itemsList}\n\n${formData.deliveryInstructions ? `Delivery Instructions:\n${formData.deliveryInstructions}` : ""}
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
        latitude: "",
        longitude: "",
        deliveryInstructions: "",
        store: "",
      })
      setItems([])

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
      <form onSubmit={handleSubmit} className="space-y-6">
        {submitted && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 font-semibold">Thank you! Your order message was copied. We've opened Messenger for you.</p>
          </div>
        )}

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Order Details</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Select Store *</label>
              <select
                name="store"
                value={formData.store}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              >
                <option value="">Choose a store</option>
                <option value="Emall">Emall</option>
                <option value="SM City Naga">SM City Naga</option>
                <option value="Robinson Naga">Robinson Naga</option>
                <option value="Naga Peoples Mall">Naga Peoples Mall</option>
                <option value="South Star Drug">South Star Drug</option>
                <option value="Mercury Drug">Mercury Drug</option>
                <option value="Jollibee">Jollibee</option>
                <option value="McDonald's">McDonald's</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Delivery Address *</label>
            <div className="flex gap-2">
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                placeholder="Your delivery address"
                readOnly
              />
              <button
                type="button"
                onClick={() => setShowLocationModal(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center gap-2"
              >
                <MapPin size={20} />
                Pin
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Items to Order *</h3>

          <div className="space-y-4 mb-6">
            <div className="flex gap-2">
              <input
                type="text"
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                placeholder="Item name (e.g., Fried Chicken, Milk, Shirt)"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                onKeyPress={(e) => e.key === "Enter" && handleAddItem()}
              />
              <input
                type="number"
                min="1"
                value={newItem.quantity}
                onChange={(e) => setNewItem({ ...newItem, quantity: Number.parseInt(e.target.value) || 1 })}
                className="w-20 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              />
              <button
                type="button"
                onClick={handleAddItem}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center gap-2"
              >
                <Plus size={20} />
                Add
              </button>
            </div>

            {items.length === 0 && (
              <p className="text-gray-500 text-sm italic">No items added yet. Add items to your order above.</p>
            )}

            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-gray-50 p-4 rounded-lg border border-gray-200"
              >
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{item.name}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded"
                    >
                      −
                    </button>
                    <span className="w-8 text-center font-semibold">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded"
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveItem(item.id)}
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-3 rounded-lg transition-colors flex items-center gap-1"
                  >
                    <Trash2 size={16} />
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {items.length > 0 && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-blue-900 font-semibold">
                Total Items: {items.length} | Total Quantity: {items.reduce((sum, item) => sum + item.quantity, 0)}
              </p>
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Delivery Instructions</h3>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Special Instructions (Optional)</label>
            <textarea
              name="deliveryInstructions"
              value={formData.deliveryInstructions}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              placeholder="Any special instructions? (e.g., No onions, Ring doorbell twice, Leave at gate)"
            />
          </div>
        </div>

        {/* Startup Instruction Label */}
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-900 rounded-xl p-4">
          <p className="text-sm font-medium">
            Really sorry — we're a startup. Please tap "Copy order text", then "Open Messenger", and paste the message there.
          </p>
        </div>

        {/* Message Preview and Copy */}
        <div className="bg-white rounded-xl shadow-lg p-8">
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
            className="w-full h-48 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm"
          />
          <p className="text-xs text-gray-500 mt-2">Copied text can be pasted into the Messenger chat.</p>
        </div>

        <button
          type="submit"
          disabled={loading || items.length === 0}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg"
        >
          <Send size={20} />
          {loading ? "Sending..." : "Open Messenger"}
        </button>
      </form>

      <LocationModal
        isOpen={showLocationModal}
        onClose={() => setShowLocationModal(false)}
        onLocationSelect={handleLocationSelect}
      />
    </>
  )
}

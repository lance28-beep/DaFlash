"use client"

import type React from "react"

import { useState } from "react"
import { LocationModal } from "./location-modal"
import { Trash2, Plus, MapPin, User, Phone, Package, Calendar, Clock, CheckCircle } from "lucide-react"

interface OrderItem {
  id: string
  description: string
  quantity: number
  estimatedPrice: number
}

export function CustomOrdersForm() {
  const [fullName, setFullName] = useState("")
  const [phone, setPhone] = useState("")
  const [deliveryAddress, setDeliveryAddress] = useState("")
  const [items, setItems] = useState<OrderItem[]>([])
  const [itemDescription, setItemDescription] = useState("")
  const [itemQuantity, setItemQuantity] = useState(1)
  const [itemPrice, setItemPrice] = useState("")
  const [showLocationModal, setShowLocationModal] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [copied, setCopied] = useState(false)

  const addItem = () => {
    if (!itemDescription.trim() || !itemPrice.trim()) {
      alert("Please fill in item description and estimated price")
      return
    }

    const newItem: OrderItem = {
      id: Date.now().toString(),
      description: itemDescription,
      quantity: itemQuantity,
      estimatedPrice: Number.parseFloat(itemPrice),
    }

    setItems([...items, newItem])
    setItemDescription("")
    setItemQuantity(1)
    setItemPrice("")
  }

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const updateItemQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return
    setItems(items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const totalAmount = items.reduce((sum, item) => sum + item.estimatedPrice * item.quantity, 0)

  const buildMessage = () => {
    const itemsList = items
      .map((item) => `• ${item.description} (Qty: ${item.quantity}) - ₱${(item.estimatedPrice * item.quantity).toFixed(2)}`)
      .join("\n")

    return `*Custom Order Request*\n\n*Customer Details:*\nName: ${fullName}\nPhone: ${phone}\nDelivery Address: ${deliveryAddress}\n\n*Items Requested:*\n${itemsList}\n\n*Estimated Total Amount: ₱${totalAmount.toFixed(2)}*\n\nPlease confirm availability and final pricing.`
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

    if (!fullName.trim() || !phone.trim() || !deliveryAddress.trim() || items.length === 0) {
      alert("Please fill in all required fields and add at least one item")
      return
    }

    setIsSubmitting(true)

    const message = buildMessage()

    try {
      await navigator.clipboard.writeText(message)
    } catch {}

    const messengerUrl = `https://m.me/105985294772305`
    window.open(messengerUrl, "_blank")

    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Customer Information */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-[#0ea4f9] to-[#021348] rounded-full flex items-center justify-center">
            <User className="text-white" size={20} />
          </div>
          <h3 className="text-2xl font-bold text-[#021348]">Your Information</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-[#021348] flex items-center gap-2">
              <User size={16} />
              Full Name *
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0ea4f9] focus:border-[#0ea4f9] outline-none transition-all duration-200 bg-gray-50 focus:bg-white"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-[#021348] flex items-center gap-2">
              <Phone size={16} />
              Phone Number *
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="09XX-XXX-XXXX"
              className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0ea4f9] focus:border-[#0ea4f9] outline-none transition-all duration-200 bg-gray-50 focus:bg-white"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-[#021348] flex items-center gap-2">
            <MapPin size={16} />
            Delivery Address *
          </label>
          <div className="flex gap-3">
            <input
              type="text"
              value={deliveryAddress}
              onChange={(e) => setDeliveryAddress(e.target.value)}
              placeholder="Click 'Pin Location' to select address or type manually"
              className="flex-1 px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0ea4f9] focus:border-[#0ea4f9] outline-none transition-all duration-200 bg-gray-50 focus:bg-white"
              required
            />
            <button
              type="button"
              onClick={() => setShowLocationModal(true)}
              className="px-6 py-4 bg-gradient-to-r from-[#0ea4f9] to-[#021348] text-white rounded-xl hover:from-[#021348] hover:to-[#0ea4f9] transition-all duration-200 font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              <MapPin size={18} />
              Pin Location
            </button>
          </div>
        </div>
      </div>

      {/* Items List */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-[#ffde59] to-[#ffc107] rounded-full flex items-center justify-center">
            <Package className="text-[#021348]" size={20} />
          </div>
          <h3 className="text-2xl font-bold text-[#021348]">Items to Request</h3>
        </div>

        {/* Add Item Form */}
        <div className="bg-gradient-to-br from-[#ffde59]/10 to-white p-8 rounded-2xl border-2 border-[#ffde59]/20 space-y-6">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold text-[#021348] mb-2">Add New Item</h4>
            <p className="text-sm text-[#021348]/70">Describe what you need and provide an estimated price</p>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-[#021348] mb-2 flex items-center gap-2">
                <Package size={16} />
                Item Description *
              </label>
              <input
                type="text"
                value={itemDescription}
                onChange={(e) => setItemDescription(e.target.value)}
                placeholder="e.g., 2 boxes of office supplies, 5kg rice, wedding decorations, etc."
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0ea4f9] focus:border-[#0ea4f9] outline-none transition-all duration-200 bg-white"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#021348] mb-2 flex items-center gap-2">
                  <Calendar size={16} />
                  Quantity *
                </label>
                <input
                  type="number"
                  value={itemQuantity}
                  onChange={(e) => setItemQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))}
                  min="1"
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0ea4f9] focus:border-[#0ea4f9] outline-none transition-all duration-200 bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#021348] mb-2 flex items-center gap-2">
                  Estimated Price (₱) *
                </label>
                <input
                  type="number"
                  value={itemPrice}
                  onChange={(e) => setItemPrice(e.target.value)}
                  placeholder="0.00"
                  step="0.01"
                  min="0"
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0ea4f9] focus:border-[#0ea4f9] outline-none transition-all duration-200 bg-white"
                />
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={addItem}
            className="w-full px-6 py-4 bg-gradient-to-r from-[#ffde59] to-[#ffc107] text-[#021348] rounded-xl hover:from-[#ffc107] hover:to-[#ffde59] transition-all duration-200 font-bold text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
          >
            <Plus size={20} />
            Add Item to Order
          </button>
        </div>

        {/* Items List Display */}
        {items.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold text-[#021348]">Your Order Items</h4>
              <span className="text-sm text-[#021348]/70">{items.length} item{items.length !== 1 ? 's' : ''}</span>
            </div>
            
            {items.map((item, index) => (
              <div
                key={item.id}
                className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-[#0ea4f9]/30 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-[#0ea4f9] to-[#021348] text-white rounded-full flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </div>
                      <p className="font-semibold text-[#021348] text-lg">{item.description}</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-[#021348]/70">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        Qty: {item.quantity}
                      </span>
                      <span className="flex items-center gap-1">₱{item.estimatedPrice.toFixed(2)} each</span>
                      <span className="font-semibold text-[#0ea4f9]">
                        Total: ₱{(item.quantity * item.estimatedPrice).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="p-3 text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200 hover:scale-110"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}

            {/* Total Amount */}
            <div className="bg-gradient-to-r from-[#0ea4f9]/10 to-[#ffde59]/10 border-2 border-[#0ea4f9]/20 rounded-xl p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xl font-bold text-[#021348]">Estimated Total Amount:</span>
                <span className="text-3xl font-bold text-[#0ea4f9]">₱{totalAmount.toFixed(2)}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#021348]/70">
                <Clock size={14} />
                <span>Final pricing will be confirmed after review (usually within 2 hours)</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Startup Instruction Label */}
      <div className="bg-yellow-50 border border-yellow-200 text-yellow-900 rounded-xl p-4">
        <p className="text-sm font-medium">
          Really sorry — we're a startup. Please tap "Copy order text", then "Open Messenger", and paste the message there.
        </p>
      </div>

      {/* Message Preview and Copy */}
      <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
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
          className="w-full h-48 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm"
        />
        <p className="text-xs text-gray-500 mt-2">Paste the copied text into the Messenger chat.</p>
      </div>

      {/* Submit Button */}
      <div className="pt-6">
        <button
          type="submit"
          disabled={isSubmitting || items.length === 0}
          className="w-full px-8 py-5 bg-gradient-to-r from-[#0ea4f9] to-[#021348] text-white rounded-xl hover:from-[#021348] hover:to-[#0ea4f9] transition-all duration-200 font-bold text-xl disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Sending Request...
            </>
          ) : (
            <>
              <CheckCircle size={24} />
              Open Messenger
            </>
          )}
        </button>
        
        <div className="mt-4 text-center">
          <p className="text-sm text-[#021348]/70 flex items-center justify-center gap-2">
            <Clock size={14} />
            We'll respond via Messenger within 30 minutes
          </p>
        </div>
      </div>

      {/* Location Modal */}
      <LocationModal
        isOpen={showLocationModal}
        onLocationSelect={(address) => {
          setDeliveryAddress(address)
          setShowLocationModal(false)
        }}
        onClose={() => setShowLocationModal(false)}
      />
    </form>
  )
}

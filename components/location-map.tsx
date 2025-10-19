"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Loader, Navigation, CheckCircle, AlertCircle, Star } from "lucide-react"

declare global {
  interface Window {
    L: any
  }
}

interface LocationMapProps {
  onLocationSelect?: (lat: number, lng: number, address: string) => void
}

export function LocationMap({ onLocationSelect }: LocationMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<any>(null)
  const marker = useRef<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedLocation, setSelectedLocation] = useState<{ lat: number; lng: number; address: string } | null>(null)
  const [isGeocodingLoading, setIsGeocodingLoading] = useState(false)
  const [isValidLocation, setIsValidLocation] = useState<boolean | null>(null)
  const [showLocationInfo, setShowLocationInfo] = useState(false)

  // Validate if location is within service area (Naga City bounds)
  const validateLocation = (lat: number, lng: number): boolean => {
    const nagaBounds = {
      north: 13.66,
      south: 13.55,
      east: 123.23,
      west: 123.1
    }
    
    return lat >= nagaBounds.south && lat <= nagaBounds.north && 
           lng >= nagaBounds.west && lng <= nagaBounds.east
  }

  const reverseGeocode = async (lat: number, lng: number): Promise<string> => {
    try {
      setIsGeocodingLoading(true)
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`)
      const data = await response.json()

      const addressParts: string[] = []

      // Add street address (road number and name)
      if (data.address?.road) {
        addressParts.push(data.address.road)
      }

      // Add barangay (neighbourhood)
      if (data.address?.neighbourhood) {
        addressParts.push(data.address.neighbourhood)
      }

      // Add city/municipality
      if (data.address?.city) {
        addressParts.push(data.address.city)
      } else if (data.address?.town) {
        addressParts.push(data.address.town)
      }

      // Add province
      if (data.address?.state) {
        addressParts.push(data.address.state)
      }

      // Return formatted address or fallback to coordinates
      return addressParts.length > 0 ? addressParts.join(", ") : `${lat.toFixed(4)}, ${lng.toFixed(4)}`
    } catch (error) {
      console.error("Geocoding error:", error)
      return `${lat.toFixed(4)}, ${lng.toFixed(4)}`
    } finally {
      setIsGeocodingLoading(false)
    }
  }

  useEffect(() => {
    // Load Leaflet CSS and JS
    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css"
    document.head.appendChild(link)

    const script = document.createElement("script")
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js"
    script.async = true
    script.onload = () => {
      initializeMap()
    }
    document.body.appendChild(script)

    return () => {
      if (map.current) {
        map.current.remove()
      }
    }
  }, [])

  const initializeMap = () => {
    if (!mapContainer.current) return

    const nagaCityLat = 13.6059
    const nagaCityLng = 123.1683

    map.current = window.L.map(mapContainer.current).setView([nagaCityLat, nagaCityLng], 14)

    window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map.current)

    const southWest = window.L.latLng(13.55, 123.1)
    const northEast = window.L.latLng(13.66, 123.23)
    const bounds = window.L.latLngBounds(southWest, northEast)
    map.current.setMaxBounds(bounds)
    map.current.on("drag", () => {
      map.current.panInsideBounds(bounds, { animate: false })
    })

    // Add click event to map
    map.current.on("click", async (e: any) => {
      const { lat, lng } = e.latlng

      // Get address from coordinates
      const address = await reverseGeocode(lat, lng)
      const isValid = validateLocation(lat, lng)
      
      setSelectedLocation({ lat, lng, address })
      setIsValidLocation(isValid)
      setShowLocationInfo(true)

      // Remove previous marker
      if (marker.current) {
        map.current.removeLayer(marker.current)
      }

      // Create custom icon based on validation
      const iconColor = isValid ? '#10b981' : '#ef4444'
      const customIcon = window.L.divIcon({
        html: `<div style="background-color: ${iconColor}; width: 24px; height: 24px; border-radius: 50%; border: 3px solid white; box-shadow: 0 4px 8px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center;"><div style="color: white; font-size: 12px; font-weight: bold;">${isValid ? '✓' : '!'}</div></div>`,
        className: 'custom-marker',
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      })

      // Add new marker with custom icon
      marker.current = window.L.marker([lat, lng], { icon: customIcon })
        .addTo(map.current)
        .bindPopup(`
          <div style="text-align: center; padding: 12px; min-width: 200px;">
            <div style="font-weight: bold; margin-bottom: 8px; color: #1f2937;">Selected Location</div>
            <div style="color: #6b7280; font-size: 14px; margin-bottom: 8px; line-height: 1.4;">${address}</div>
            <div style="color: ${isValid ? '#10b981' : '#ef4444'}; font-weight: bold; font-size: 12px;">
              ${isValid ? '✓ Within service area' : '⚠ Outside service area'}
            </div>
          </div>
        `)
        .openPopup()

      // Call callback with address
      onLocationSelect?.(lat, lng, address)
    })

    marker.current = window.L.marker([nagaCityLat, nagaCityLng])
      .addTo(map.current)
      .bindPopup("<b>Naga City, Camarines Sur</b><br>Click on the map to select your location")
      .openPopup()

    setIsLoading(false)
  }

  const handleUseCurrentLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords

        // Get address from coordinates
        const address = await reverseGeocode(latitude, longitude)
        const isValid = validateLocation(latitude, longitude)
        
        setSelectedLocation({ lat: latitude, lng: longitude, address })
        setIsValidLocation(isValid)
        setShowLocationInfo(true)

        if (map.current) {
          map.current.setView([latitude, longitude], 15)

          if (marker.current) {
            map.current.removeLayer(marker.current)
          }

          // Create custom icon based on validation
          const iconColor = isValid ? '#10b981' : '#ef4444'
          const customIcon = window.L.divIcon({
            html: `<div style="background-color: ${iconColor}; width: 24px; height: 24px; border-radius: 50%; border: 3px solid white; box-shadow: 0 4px 8px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center;"><div style="color: white; font-size: 12px; font-weight: bold;">${isValid ? '✓' : '!'}</div></div>`,
            className: 'custom-marker',
            iconSize: [24, 24],
            iconAnchor: [12, 12]
          })

          marker.current = window.L.marker([latitude, longitude], { icon: customIcon })
            .addTo(map.current)
            .bindPopup(`
              <div style="text-align: center; padding: 12px; min-width: 200px;">
                <div style="font-weight: bold; margin-bottom: 8px; color: #1f2937;">Your Current Location</div>
                <div style="color: #6b7280; font-size: 14px; margin-bottom: 8px; line-height: 1.4;">${address}</div>
                <div style="color: ${isValid ? '#10b981' : '#ef4444'}; font-weight: bold; font-size: 12px;">
                  ${isValid ? '✓ Within service area' : '⚠ Outside service area'}
                </div>
              </div>
            `)
            .openPopup()

          onLocationSelect?.(latitude, longitude, address)
        }
      })
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <MapPin className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Select Your Location</h3>
              <p className="text-blue-100 text-sm">Naga City, Camarines Sur</p>
            </div>
          </div>
          <button
            onClick={handleUseCurrentLocation}
            disabled={isGeocodingLoading}
            className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 disabled:opacity-50 flex items-center gap-2 backdrop-blur-sm border border-white/30"
          >
            {isGeocodingLoading && <Loader size={16} className="animate-spin" />}
            <Navigation size={16} />
            Use Current Location
          </button>
        </div>
        <p className="text-blue-100 text-sm">
          Click on the map to pin your delivery location. Green pins indicate locations within our service area.
        </p>
      </div>

      {isLoading && (
        <div className="h-96 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent mx-auto mb-4"></div>
            <p className="text-gray-600 font-medium">Loading interactive map...</p>
            <p className="text-gray-400 text-sm mt-1">Please wait while we prepare your location selector</p>
          </div>
        </div>
      )}

      <div ref={mapContainer} className="h-96 w-full relative" />

      {selectedLocation && showLocationInfo && (
        <div className={`p-6 border-t-2 transition-all duration-300 ${
          isValidLocation ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
        }`}>
          <div className="flex items-start gap-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
              isValidLocation ? 'bg-green-100' : 'bg-red-100'
            }`}>
              {isValidLocation ? (
                <CheckCircle size={24} className="text-green-600" />
              ) : (
                <AlertCircle size={24} className="text-red-600" />
              )}
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Selected Location</h4>
              <p className="text-gray-700 mb-3 leading-relaxed">{selectedLocation.address}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star size={16} className="text-yellow-400" />
                  <p className={`text-sm font-semibold ${
                    isValidLocation ? 'text-green-700' : 'text-red-700'
                  }`}>
                    {isValidLocation ? '✓ Within delivery service area' : '⚠ Outside delivery service area'}
                  </p>
                </div>
                <p className="text-xs text-gray-500">
                  {selectedLocation.lat.toFixed(4)}, {selectedLocation.lng.toFixed(4)}
                </p>
              </div>
              {!isValidLocation && (
                <div className="mt-3 p-3 bg-red-100 rounded-lg border border-red-200">
                  <p className="text-sm text-red-800">
                    <strong>Note:</strong> This location is outside our delivery service area. Please select a location within Naga City, Camarines Sur.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

"use client"
import { useState, useRef, useEffect } from "react"
import { createPortal } from "react-dom"
import { MapPin, Loader, X, Navigation, Map, Type, Search, Star, Clock, CheckCircle, AlertCircle } from "lucide-react"

declare global {
  interface Window {
    L: any
  }
}

interface LocationModalProps {
  isOpen: boolean
  onClose: () => void
  onLocationSelect: (address: string, lat: number, lng: number) => void
}

interface RecentLocation {
  id: string
  address: string
  lat: number
  lng: number
  timestamp: number
}

export function LocationModal({ isOpen, onClose, onLocationSelect }: LocationModalProps) {
  const [activeTab, setActiveTab] = useState<"current" | "map" | "manual" | "recent">("current")
  const [manualAddress, setManualAddress] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState<{ lat: number; lng: number; address: string } | null>(null)
  const [recentLocations, setRecentLocations] = useState<RecentLocation[]>([])
  const [searchResults, setSearchResults] = useState<RecentLocation[]>([])
  const [isValidLocation, setIsValidLocation] = useState<boolean | null>(null)
  const [isMapLoading, setIsMapLoading] = useState(true)
  const [isMounted, setIsMounted] = useState(false)
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<any>(null)
  const marker = useRef<any>(null)

  // Component mount effect
  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  // Load recent locations from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('recentLocations')
    if (saved) {
      setRecentLocations(JSON.parse(saved))
    }
  }, [])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      // Store original overflow value
      const originalStyle = window.getComputedStyle(document.body).overflow
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = '0px' // Prevent layout shift
      
      // Handle escape key
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose()
        }
      }
      
      document.addEventListener('keydown', handleEscape)
      
      return () => {
        document.body.style.overflow = originalStyle
        document.body.style.paddingRight = '0px'
        document.removeEventListener('keydown', handleEscape)
      }
    }
  }, [isOpen, onClose])

  // Save location to recent locations
  const saveToRecentLocations = (address: string, lat: number, lng: number) => {
    const newLocation: RecentLocation = {
      id: Date.now().toString(),
      address,
      lat,
      lng,
      timestamp: Date.now()
    }
    
    const updated = [newLocation, ...recentLocations.filter(loc => 
      loc.address !== address
    )].slice(0, 5) // Keep only 5 recent locations
    
    setRecentLocations(updated)
    localStorage.setItem('recentLocations', JSON.stringify(updated))
  }

  // Search for addresses
  const searchAddresses = async (query: string) => {
    if (!query.trim()) {
      setSearchResults([])
      return
    }

    setIsSearching(true)
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&countrycodes=ph&limit=5&addressdetails=1`
      )
      const data = await response.json()
      
      const results = data.map((item: any, index: number) => ({
        id: `search-${index}`,
        address: item.display_name,
        lat: parseFloat(item.lat),
        lng: parseFloat(item.lon),
        timestamp: Date.now()
      }))
      
      setSearchResults(results)
    } catch (error) {
      console.error("Search error:", error)
      setSearchResults([])
    } finally {
      setIsSearching(false)
    }
  }

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
    }
  }

  useEffect(() => {
    if (!isOpen || activeTab !== "map") return

    // Check if Leaflet is already loaded
    if (window.L) {
      initializeMap()
      return
    }

    // Load Leaflet CSS
    const existingCSS = document.querySelector('link[href*="leaflet"]')
    if (!existingCSS) {
      const link = document.createElement("link")
      link.rel = "stylesheet"
      link.href = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css"
      document.head.appendChild(link)
    }

    // Load Leaflet JS
    const existingScript = document.querySelector('script[src*="leaflet"]')
    if (!existingScript) {
      const script = document.createElement("script")
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js"
      script.async = true
      script.onload = () => {
        setTimeout(() => initializeMap(), 100) // Small delay to ensure DOM is ready
      }
      document.body.appendChild(script)
    }

    return () => {
      if (map.current) {
        map.current.remove()
        map.current = null
        marker.current = null
      }
    }
  }, [isOpen, activeTab])

  const initializeMap = () => {
    if (!mapContainer.current || !window.L) return

    // Clear existing map if it exists
    if (map.current) {
      map.current.remove()
      map.current = null
      marker.current = null
    }

    const nagaCityLat = 13.6059
    const nagaCityLng = 123.1683

    try {
      // Initialize map
      map.current = window.L.map(mapContainer.current, {
        center: [nagaCityLat, nagaCityLng],
        zoom: 14,
        zoomControl: true,
        scrollWheelZoom: true,
        doubleClickZoom: true,
        boxZoom: false,
        dragging: true,
        keyboard: true,
        touchZoom: true
      })

      // Add tile layer
      window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
        minZoom: 10
      }).addTo(map.current)

      // Add bounds for Naga City
      const southWest = window.L.latLng(13.55, 123.1)
      const northEast = window.L.latLng(13.66, 123.23)
      const bounds = window.L.latLngBounds(southWest, northEast)
      map.current.setMaxBounds(bounds)
      
      // Pan inside bounds if dragged outside
      map.current.on("drag", () => {
        map.current.panInsideBounds(bounds, { animate: false })
      })

      // Add initial marker
      const initialIcon = window.L.divIcon({
        html: `<div style="background-color: #3b82f6; width: 24px; height: 24px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center;"><div style="color: white; font-size: 12px; font-weight: bold;">📍</div></div>`,
        className: 'custom-marker',
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      })

      marker.current = window.L.marker([nagaCityLat, nagaCityLng], { icon: initialIcon })
        .addTo(map.current)
        .bindPopup(`
          <div style="text-align: center; padding: 12px; min-width: 200px;">
            <b>Naga City, Camarines Sur</b><br>
            <small style="color: #666;">Click anywhere on the map to select your delivery location</small>
          </div>
        `)
        .openPopup()

      // Add click event
      map.current.on("click", async (e: any) => {
        const { lat, lng } = e.latlng
        const address = await reverseGeocode(lat, lng)
        const isValid = validateLocation(lat, lng)
        
        setSelectedLocation({ lat, lng, address })
        setIsValidLocation(isValid)

        // Remove existing marker
        if (marker.current) {
          map.current.removeLayer(marker.current)
        }

        // Create custom icon based on validation
        const iconColor = isValid ? '#10b981' : '#ef4444'
        const iconSymbol = isValid ? '✓' : '!'
        const customIcon = window.L.divIcon({
          html: `<div style="background-color: ${iconColor}; width: 28px; height: 28px; border-radius: 50%; border: 3px solid white; box-shadow: 0 4px 8px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center;"><div style="color: white; font-size: 14px; font-weight: bold;">${iconSymbol}</div></div>`,
          className: 'custom-marker',
          iconSize: [28, 28],
          iconAnchor: [14, 14]
        })

        // Add new marker
        marker.current = window.L.marker([lat, lng], { icon: customIcon })
          .addTo(map.current)
          .bindPopup(`
            <div style="text-align: center; padding: 12px; min-width: 220px;">
              <div style="font-weight: bold; margin-bottom: 8px; color: #1f2937;">Selected Location</div>
              <div style="color: #6b7280; font-size: 14px; margin-bottom: 8px; line-height: 1.4;">${address}</div>
              <div style="color: ${isValid ? '#10b981' : '#ef4444'}; font-weight: bold; font-size: 12px;">
                ${isValid ? '✓ Within service area' : '⚠ Outside service area'}
              </div>
            </div>
          `)
          .openPopup()
      })

    } catch (error) {
      console.error("Error initializing map:", error)
    } finally {
      setIsMapLoading(false)
    }
  }

  const handleUseCurrentLocation = async () => {
    setIsLoading(true)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords
          const address = await reverseGeocode(latitude, longitude)
          const isValid = validateLocation(latitude, longitude)
          
          setSelectedLocation({ lat: latitude, lng: longitude, address })
          setIsValidLocation(isValid)
          
          // Update map if it exists
          if (map.current) {
            map.current.setView([latitude, longitude], 15)
            
            // Remove existing marker
            if (marker.current) {
              map.current.removeLayer(marker.current)
            }

            // Create custom icon based on validation
            const iconColor = isValid ? '#10b981' : '#ef4444'
            const iconSymbol = isValid ? '✓' : '!'
            const customIcon = window.L.divIcon({
              html: `<div style="background-color: ${iconColor}; width: 28px; height: 28px; border-radius: 50%; border: 3px solid white; box-shadow: 0 4px 8px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center;"><div style="color: white; font-size: 14px; font-weight: bold;">${iconSymbol}</div></div>`,
              className: 'custom-marker',
              iconSize: [28, 28],
              iconAnchor: [14, 14]
            })

            // Add new marker
            marker.current = window.L.marker([latitude, longitude], { icon: customIcon })
              .addTo(map.current)
              .bindPopup(`
                <div style="text-align: center; padding: 12px; min-width: 220px;">
                  <div style="font-weight: bold; margin-bottom: 8px; color: #1f2937;">Your Current Location</div>
                  <div style="color: #6b7280; font-size: 14px; margin-bottom: 8px; line-height: 1.4;">${address}</div>
                  <div style="color: ${isValid ? '#10b981' : '#ef4444'}; font-weight: bold; font-size: 12px;">
                    ${isValid ? '✓ Within service area' : '⚠ Outside service area'}
                  </div>
                </div>
              `)
              .openPopup()
          }
          
          setIsLoading(false)
        },
        (error) => {
          console.error("Geolocation error:", error)
          alert("Unable to get your location. Please enable location services or select a location manually.")
          setIsLoading(false)
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 60000
        }
      )
    } else {
      alert("Geolocation is not supported by this browser.")
      setIsLoading(false)
    }
  }

  const handleLocationSelect = (location: RecentLocation) => {
    const isValid = validateLocation(location.lat, location.lng)
    setSelectedLocation({ lat: location.lat, lng: location.lng, address: location.address })
    setIsValidLocation(isValid)
    setActiveTab("map")
    
    // Update map view if it exists
    if (map.current) {
      map.current.setView([location.lat, location.lng], 15)
      
      if (marker.current) {
        map.current.removeLayer(marker.current)
      }

      const iconColor = isValid ? '#10b981' : '#ef4444'
      const customIcon = window.L.divIcon({
        html: `<div style="background-color: ${iconColor}; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>`,
        className: 'custom-marker',
        iconSize: [20, 20],
        iconAnchor: [10, 10]
      })

      marker.current = window.L.marker([location.lat, location.lng], { icon: customIcon })
        .addTo(map.current)
        .bindPopup(`
          <div style="text-align: center; padding: 8px;">
            <b>Selected Location</b><br>
            <small style="color: #666;">${location.address}</small><br>
            <small style="color: ${isValid ? '#10b981' : '#ef4444'}; font-weight: bold;">
              ${isValid ? '✓ Within service area' : '⚠ Outside service area'}
            </small>
          </div>
        `)
        .openPopup()
    }
  }

  const handleConfirmLocation = () => {
    if (activeTab === "current" && selectedLocation) {
      saveToRecentLocations(selectedLocation.address, selectedLocation.lat, selectedLocation.lng)
      onLocationSelect(selectedLocation.address, selectedLocation.lat, selectedLocation.lng)
      onClose()
    } else if (activeTab === "map" && selectedLocation) {
      saveToRecentLocations(selectedLocation.address, selectedLocation.lat, selectedLocation.lng)
      onLocationSelect(selectedLocation.address, selectedLocation.lat, selectedLocation.lng)
      onClose()
    } else if (activeTab === "manual" && manualAddress.trim()) {
      onLocationSelect(manualAddress.trim(), 0, 0)
      onClose()
    }
  }

  if (!isOpen || !isMounted) return null

  return createPortal(
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-md flex items-center justify-center p-4 overflow-hidden"
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 99999,
        overflow: 'hidden'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
    >
      <div 
        className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[95vh] overflow-y-auto relative"
        style={{
          position: 'relative',
          zIndex: 100000,
          margin: 'auto'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin size={24} />
            <h2 className="text-2xl font-bold">Select Delivery Location</h2>
          </div>
          <button onClick={onClose} className="hover:bg-blue-800 p-2 rounded-lg transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 overflow-x-auto">
          <button
            onClick={() => setActiveTab("current")}
            className={`flex-shrink-0 py-4 px-4 font-semibold flex items-center justify-center gap-2 transition-colors ${
              activeTab === "current"
                ? "bg-blue-50 text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <Navigation size={18} />
            <span className="hidden sm:inline">Current Location</span>
            <span className="sm:hidden">Current</span>
          </button>
          <button
            onClick={() => setActiveTab("map")}
            className={`flex-shrink-0 py-4 px-4 font-semibold flex items-center justify-center gap-2 transition-colors ${
              activeTab === "map"
                ? "bg-blue-50 text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <Map size={18} />
            <span className="hidden sm:inline">Pin on Map</span>
            <span className="sm:hidden">Map</span>
          </button>
          <button
            onClick={() => setActiveTab("recent")}
            className={`flex-shrink-0 py-4 px-4 font-semibold flex items-center justify-center gap-2 transition-colors ${
              activeTab === "recent"
                ? "bg-blue-50 text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <Clock size={18} />
            <span className="hidden sm:inline">Recent</span>
            <span className="sm:hidden">Recent</span>
          </button>
          <button
            onClick={() => setActiveTab("manual")}
            className={`flex-shrink-0 py-4 px-4 font-semibold flex items-center justify-center gap-2 transition-colors ${
              activeTab === "manual"
                ? "bg-blue-50 text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <Type size={18} />
            <span className="hidden sm:inline">Type Address</span>
            <span className="sm:hidden">Type</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Current Location Tab */}
          {activeTab === "current" && (
            <div className="space-y-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Navigation size={32} className="text-blue-600" />
                </div>
                <p className="text-gray-600 mb-6">Use your device's GPS to get your current location automatically.</p>
              </div>
              <button
                onClick={handleUseCurrentLocation}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {isLoading && <Loader size={20} className="animate-spin" />}
                {isLoading ? "Getting Location..." : "Get My Current Location"}
              </button>
              {selectedLocation && (
                <div className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                  isValidLocation ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
                }`}>
                  <div className="flex items-start gap-3">
                    {isValidLocation ? (
                      <CheckCircle size={20} className="text-green-600 mt-0.5" />
                    ) : (
                      <AlertCircle size={20} className="text-red-600 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 mb-1">Selected Address:</p>
                      <p className="text-lg font-semibold text-gray-900">{selectedLocation.address}</p>
                      {isValidLocation !== null && (
                        <p className={`text-sm font-medium mt-1 ${
                          isValidLocation ? 'text-green-700' : 'text-red-700'
                        }`}>
                          {isValidLocation ? '✓ Within delivery service area' : '⚠ Outside delivery service area'}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Map Tab */}
          {activeTab === "map" && (
            <div className="space-y-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Map size={32} className="text-green-600" />
                </div>
                <p className="text-gray-600 mb-6">Click on the map to pin your delivery location. Green pins indicate locations within our service area.</p>
              </div>
              <div className="relative">
                <div ref={mapContainer} className="h-96 w-full rounded-xl border-2 border-gray-200 shadow-lg overflow-hidden bg-gray-100" />
                {isMapLoading && (
                  <div className="absolute inset-0 bg-gray-100 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                      <p className="text-gray-600 font-medium">Loading interactive map...</p>
                      <p className="text-gray-400 text-sm mt-1">Please wait while we prepare your location selector</p>
                    </div>
                  </div>
                )}
              </div>
              {selectedLocation && (
                <div className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                  isValidLocation ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
                }`}>
                  <div className="flex items-start gap-3">
                    {isValidLocation ? (
                      <CheckCircle size={20} className="text-green-600 mt-0.5" />
                    ) : (
                      <AlertCircle size={20} className="text-red-600 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 mb-1">Selected Address:</p>
                      <p className="text-lg font-semibold text-gray-900">{selectedLocation.address}</p>
                      {isValidLocation !== null && (
                        <p className={`text-sm font-medium mt-1 ${
                          isValidLocation ? 'text-green-700' : 'text-red-700'
                        }`}>
                          {isValidLocation ? '✓ Within delivery service area' : '⚠ Outside delivery service area'}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Recent Locations Tab */}
          {activeTab === "recent" && (
            <div className="space-y-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock size={32} className="text-purple-600" />
                </div>
                <p className="text-gray-600 mb-6">Select from your recently used delivery locations.</p>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search addresses..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value)
                    searchAddresses(e.target.value)
                  }}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                />
                {isSearching && (
                  <Loader size={20} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 animate-spin" />
                )}
              </div>

              {/* Search Results */}
              {searchResults.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <Search size={16} />
                    Search Results
                  </h4>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {searchResults.map((result) => (
                      <button
                        key={result.id}
                        onClick={() => handleLocationSelect(result)}
                        className="w-full p-3 text-left bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <p className="text-sm font-medium text-gray-900">{result.address}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Recent Locations */}
              {recentLocations.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <Clock size={16} />
                    Recent Locations
                  </h4>
                  <div className="space-y-2">
                    {recentLocations.map((location) => (
                      <button
                        key={location.id}
                        onClick={() => handleLocationSelect(location)}
                        className="w-full p-3 text-left bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">{location.address}</p>
                            <p className="text-xs text-gray-500">
                              {new Date(location.timestamp).toLocaleDateString()}
                            </p>
                          </div>
                          <Star size={16} className="text-yellow-400" />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* No Recent Locations */}
              {recentLocations.length === 0 && searchResults.length === 0 && (
                <div className="text-center py-8">
                  <Clock size={48} className="text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">No recent locations found.</p>
                  <p className="text-sm text-gray-400">Use other methods to select your location.</p>
                </div>
              )}
            </div>
          )}

          {/* Manual Entry Tab */}
          {activeTab === "manual" && (
            <div className="space-y-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Type size={32} className="text-orange-600" />
                </div>
                <p className="text-gray-600 mb-6">Type your complete delivery address manually.</p>
              </div>
              <textarea
                value={manualAddress}
                onChange={(e) => setManualAddress(e.target.value)}
                placeholder="Enter your complete delivery address (e.g., 123 Main Street, Barangay Tinago, Naga City, Camarines Sur)"
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
              />
              {manualAddress && (
                <div className="p-4 bg-blue-50 border-2 border-blue-200 rounded-xl">
                  <div className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-blue-600 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 mb-1">Your Address:</p>
                      <p className="text-lg font-semibold text-gray-900">{manualAddress}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200 p-6 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all duration-200 border-2 border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirmLocation}
            disabled={
              (activeTab === "current" && !selectedLocation) ||
              (activeTab === "map" && !selectedLocation) ||
              (activeTab === "manual" && !manualAddress.trim())
            }
            className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 disabled:opacity-50 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none"
          >
            Confirm Location
          </button>
        </div>
      </div>
    </div>,
    document.body
  )
}

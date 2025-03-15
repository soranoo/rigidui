"use client"

import * as React from "react"
import { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { MapPin, LoaderCircle, Search, MapPinned, Locate } from 'lucide-react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

type LocationSuggestion = {
  display_name: string;
  place_id: number;
  address: {
    city?: string;
    county?: string;
    state?: string;
    country?: string;
    [key: string]: string | undefined;
  };
}

interface LocationPickerProps {
  className?: string;
  autoDetectOnLoad?: boolean;
  defaultLocation?: string;
}

export function LocationPicker({
  className,
  autoDetectOnLoad = false,
  defaultLocation = "",
}: LocationPickerProps) {
  const [activeCity, setActiveCity] = useState(defaultLocation)
  const [isLoading, setIsLoading] = useState(false)
  const [locationSearch, setLocationSearch] = useState('')
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  const [suggestions, setSuggestions] = useState<LocationSuggestion[]>([])
  const [isFetchingSuggestions, setIsFetchingSuggestions] = useState(false)

  const API_URL = "https://nominatim.openstreetmap.org"

  const getLocation = async (lat: number, long: number) => {
    setIsLoading(true)
    try {
      const res = await fetch(`${API_URL}/reverse?lat=${lat}&lon=${long}&format=json`)
      const data = await res.json()
      const city = data.address?.county || data.address?.city || data.address?.state || ''

      if (city) {
        setActiveCity(city)
      }
    } catch (error) {
      console.log("Error fetching location:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const searchLocation = async () => {
    if (!locationSearch.trim()) return

    setIsLoading(true)
    try {
      const res = await fetch(
        `${API_URL}/search?q=${encodeURIComponent(locationSearch)}&format=json&addressdetails=1`
      )
      const data = await res.json()

      if (data && data.length > 0) {
        const place = data[0]
        const city = place.address?.city || place.address?.county || place.address?.state || ''

        setActiveCity(city)
        setIsPopoverOpen(false)
      } else {
        console.log("No location found")
      }
    } catch (error) {
      console.log("Error searching location:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const getCurrentLocation = () => {
    setIsLoading(true)
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        getLocation(latitude, longitude)
      },
      (error) => {
        console.log("Unable to retrieve location:", error)
        setIsLoading(false)
      }
    )
  }

  const fetchSuggestions = async (query: string) => {
    if (!query.trim() || query.length < 2) {
      setSuggestions([]);
      return;
    }

    setIsFetchingSuggestions(true);
    try {
      const res = await fetch(
        `${API_URL}/search?q=${encodeURIComponent(query)}&format=json&addressdetails=1&limit=5`
      );
      const data = await res.json();
      setSuggestions(data);
    } catch (error) {
      console.log("Error fetching suggestions:", error);
      setSuggestions([]);
    } finally {
      setIsFetchingSuggestions(false);
    }
  };

  const selectSuggestion = (suggestion: LocationSuggestion) => {
    const city = suggestion.address?.city || suggestion.address?.county || suggestion.address?.state || '';
    setActiveCity(city);
    setLocationSearch(city);
    setSuggestions([]);
  };

  const formatLocationName = (suggestion: LocationSuggestion) => {
    const mainName = suggestion.address?.city || suggestion.address?.county || suggestion.address?.state || '';
    const region = suggestion.address?.state || suggestion.address?.country || '';

    if (mainName && region && mainName !== region) {
      return `${mainName}, ${region}`;
    }
    return mainName || suggestion.display_name.split(',')[0];
  };


  useEffect(() => {
    const handler = setTimeout(() => {
      fetchSuggestions(locationSearch);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [locationSearch]);

  useEffect(() => {
    if (!isPopoverOpen) {
      setSuggestions([]);
    }
  }, [isPopoverOpen]);

  useEffect(() => {
    if (autoDetectOnLoad && !activeCity) {
      getCurrentLocation();
    }
  }, [autoDetectOnLoad]);


  return (
    <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <PopoverTrigger asChild>
        <div className={`flex items-center gap-2 text-gray-700 hover:text-gray-900 border border-transparent hover:border-b-black cursor-pointer px-2 py-1 hover:bg-gray-50 transition-colors ${className}`}>
          <MapPin size={16} className="text-swadeyellow" />
          {isLoading ? (
            <div className="flex items-center gap-1">
              <LoaderCircle size={14} className="animate-spin" />
              <span className="text-sm">Locating...</span>
            </div>
          ) : (
            <span className="text-sm font-medium">
              {activeCity.length > 15 ? activeCity.slice(0, 15) + '...' : activeCity || 'Select Location'}
            </span>
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0 shadow-lg border-0 border-swade border-t-2" side="bottom" align="start" sideOffset={20}>
        <div className="p-4 border-b">
          <h4 className="font-medium text-lg mb-1">Change location</h4>
          <p className="text-sm text-gray-500">Find products near you</p>
        </div>

        <div className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Enter city, district, or area"
                value={locationSearch}
                onChange={(e) => setLocationSearch(e.target.value)}
                onKeyUp={(e) => e.key === 'Enter' && suggestions.length === 0 && searchLocation()}
                className="pl-10 pr-10 rounded-full border-gray-300 focus:border-swadeyellow focus:ring-1 focus:ring-swadeyellow"
              />
            </div>

            <Button
              className="rounded-full h-10 w-10 p-0"
              variant="outline"
              onClick={searchLocation}
              disabled={isLoading || !locationSearch.trim()}
              title="Search Location"
            >
              {isLoading ? (
                <LoaderCircle className="h-4 w-4 animate-spin" />
              ) : (
                <Search className="h-4 w-4" />
              )}
            </Button>

            <Button
              variant="outline"
              onClick={getCurrentLocation}
              className="rounded-full h-10 w-10 p-0"
              title="Use Current Location"
            >
              <Locate className="h-4 w-4" />
            </Button>
          </div>

          {suggestions.length > 0 && (
            <div className="z-50 w-full bg-white rounded-md border border-gray-200 shadow-lg max-h-60 overflow-y-auto mt-1 mb-4">
              {suggestions.map((suggestion) => (
                <div
                  key={suggestion.place_id}
                  className="px-4 py-2 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-0 transition-colors"
                  onClick={() => selectSuggestion(suggestion)}
                >
                  <div className="flex items-start">
                    <MapPinned size={16} className="text-swadeyellow mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">
                        {formatLocationName(suggestion)}
                      </p>
                      <p className="text-xs text-gray-500 truncate max-w-[250px]">
                        {suggestion.display_name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {isFetchingSuggestions && locationSearch.length >= 2 && suggestions.length === 0 && (
            <div className="z-50 w-full bg-white rounded-md border border-gray-200 shadow-md p-4 text-center mt-1 mb-4">
              <LoaderCircle size={20} className="animate-spin mx-auto text-swadeyellow" />
              <p className="text-sm text-gray-500 mt-1">Searching locations...</p>
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}

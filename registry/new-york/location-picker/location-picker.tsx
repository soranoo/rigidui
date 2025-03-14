"use client"

import * as React from "react"
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Input } from '@/components/ui/input'
import { MapPin, LoaderCircle, Search, X, MapPinned, Locate } from 'lucide-react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

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

type LocationContextType = {
  activeCity: string;
  isLoading: boolean;
  locationSearch: string;
  setLocationSearch: (value: string) => void;
  suggestions: LocationSuggestion[];
  isFetchingSuggestions: boolean;
  searchLocation: () => void;
  getCurrentLocation: () => void;
  selectSuggestion: (suggestion: LocationSuggestion) => void;
  formatLocationName: (suggestion: LocationSuggestion) => string;
  isPopoverOpen: boolean;
  setIsPopoverOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

function useLocationContext() {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error("Location components must be used within a LocationPicker");
  }
  return context;
}

interface LocationPickerProps {
  children?: ReactNode;
  defaultLocation?: string;
  onLocationChange?: (location: string) => void;
  className?: string;
}

function LocationPicker({
  children,
  defaultLocation = "",
  onLocationChange,
}: LocationPickerProps) {
  const [activeCity, setActiveCity] = useState(defaultLocation)
  const [isLoading, setIsLoading] = useState(!defaultLocation)
  const [locationSearch, setLocationSearch] = useState('')
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  const [suggestions, setSuggestions] = useState<LocationSuggestion[]>([])
  const [isFetchingSuggestions, setIsFetchingSuggestions] = useState(false)

  const getLocation = async (lat: number, long: number) => {
    setIsLoading(true)
    try {
      const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${long}&format=json`)
      const data = await res.json()
      const city = data.address?.county || data.address?.city || data.address?.state || ''

      if (city) {
        setActiveCity(city)
        onLocationChange?.(city)
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
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(locationSearch)}&format=json&addressdetails=1`
      )
      const data = await res.json()

      if (data && data.length > 0) {
        const place = data[0]
        const city = place.address?.city || place.address?.county || place.address?.state || ''

        setActiveCity(city)
        onLocationChange?.(city)
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
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&addressdetails=1&limit=5`
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
    onLocationChange?.(city);
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
    if (!defaultLocation) {
      getCurrentLocation()
    }
  }, [defaultLocation])

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

  const contextValue = {
    activeCity,
    isLoading,
    locationSearch,
    setLocationSearch,
    suggestions,
    isFetchingSuggestions,
    searchLocation,
    getCurrentLocation,
    selectSuggestion,
    formatLocationName,
    isPopoverOpen,
    setIsPopoverOpen
  };

  return (
    <LocationContext.Provider value={contextValue}>
      <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
        {children || (
          <>
            <LocationPickerTrigger />
            <LocationPickerContent />
          </>
        )}
      </Popover>
    </LocationContext.Provider>
  );
}

interface LocationPickerTriggerProps {
  className?: string;
  children?: ReactNode;
  icon?: ReactNode;
  displayLocationIn?: string;
  loadingText?: string;
  defaultText?: string;
}

const LocationPickerTrigger = React.forwardRef<
  HTMLDivElement,
  LocationPickerTriggerProps
>(({
  className,
  children,
  icon = <MapPin size={16} className="text-swadeyellow" />,
  displayLocationIn,
  loadingText = "Locating...",
  defaultText = "Select Location"
}, ref) => {
  const { activeCity, isLoading } = useLocationContext();

  if (children) {
    if (displayLocationIn) {
      const injectLocationIntoChildren = (child: React.ReactElement): React.ReactElement => {
        // @ts-expect-error-ignore
        if (child.props && child.props['data-location-display'] === displayLocationIn) {
          const displayText = isLoading
            ? loadingText
            : (activeCity || defaultText);

          const newProps = { ...child.props };

          return React.cloneElement(
            child,
            newProps,
            displayText
          );
        }
        // @ts-expect-error-ignore
        if (child.props && child.props.children) {
        // @ts-expect-error-ignore
          const newChildren = React.Children.map(child.props.children, (nestedChild) => {
            if (React.isValidElement(nestedChild)) {
              return injectLocationIntoChildren(nestedChild);
            }
            return nestedChild;
          });

          return React.cloneElement(child, child.props, newChildren);
        }

        return child;
      };

      const processedChildren = React.Children.map(children as React.ReactElement, (child) => {
        if (React.isValidElement(child)) {
          return injectLocationIntoChildren(child);
        }
        return child;
      });

      return (
        <PopoverTrigger asChild>
          <div ref={ref}>{processedChildren}</div>
        </PopoverTrigger>
      );
    }

    return (
      <PopoverTrigger asChild>
        <div ref={ref}>{children}</div>
      </PopoverTrigger>
    );
  }

  return (
    <PopoverTrigger asChild>
      <div
        ref={ref}
        className={`flex items-center gap-2 text-gray-700 hover:text-gray-900 border border-transparent hover:border-b-black cursor-pointer px-2 py-1 hover:bg-gray-50 transition-colors ${className}`}
      >
        {icon}
        {isLoading ? (
          <div className="flex items-center gap-1">
            <LoaderCircle size={14} className="animate-spin" />
            <span className="text-sm">{loadingText}</span>
          </div>
        ) : (
          <span className="text-sm font-medium">
            {activeCity.length > 15 ? activeCity.slice(0, 15) + '...' : activeCity || defaultText}
          </span>
        )}
      </div>
    </PopoverTrigger>
  );
});
LocationPickerTrigger.displayName = "LocationPickerTrigger";

interface LocationPickerContentProps {
  className?: string;
  children?: ReactNode;
  title?: string;
  description?: string;
  placeholder?: string;
}

const LocationPickerContent = React.forwardRef<
  HTMLDivElement,
  LocationPickerContentProps
>(({
  className,
  children,
  title = "Change Location",
  description = "Select your location to see relevant content",
  placeholder = "Enter city, district, or area"
}, ref) => {
  const {
    locationSearch,
    setLocationSearch,
    searchLocation,
    getCurrentLocation,
    suggestions,
    isFetchingSuggestions,
    selectSuggestion,
    formatLocationName,
    isLoading
  } = useLocationContext();

  if (children) {
    return (
      <PopoverContent className={className} ref={ref} side="bottom" align="start" sideOffset={20}>
        {children}
      </PopoverContent>
    );
  }

  return (
    <PopoverContent
      className={`w-80 p-0 shadow-lg border-0 border-swade border-t-2 ${className}`}
      ref={ref}
      side="bottom"
      align="start"
      sideOffset={20}
    >
      <div className="p-4 border-b">
        <h4 className="font-medium text-lg mb-1">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
      </div>

      <div className="p-4">
        <div className="relative mb-4">
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder={placeholder}
                value={locationSearch}
                onChange={(e) => setLocationSearch(e.target.value)}
                onKeyUp={(e) => e.key === 'Enter' && suggestions.length === 0 && searchLocation()}
                className="pl-10 pr-10 rounded-full border-gray-300 focus:border-swadeyellow focus:ring-1 focus:ring-swadeyellow"
              />
              {locationSearch && (
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 p-0 text-gray-400 hover:text-gray-600"
                  onClick={() => setLocationSearch('')}
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <button
              onClick={searchLocation}
              disabled={isLoading || !locationSearch.trim()}
              className="h-9 w-9 rounded-full text-black border border-gray-300 cursor-pointer hover:bg-gray-50 flex items-center justify-center transition-colors"
            >
              {isLoading ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
            </button>

            <button
              onClick={getCurrentLocation}
              className="h-9 w-9 rounded-full border border-gray-300 hover:bg-gray-50 hover:text-swadeyellow flex items-center justify-center transition-colors"
            >
              <Locate className="h-4 w-4" />
            </button>
          </div>

          {suggestions.length > 0 && (
            <div className="absolute z-50 mt-1 w-full bg-white rounded-md border border-gray-200 shadow-lg max-h-60 overflow-y-auto">
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
            <div className="absolute z-50 mt-1 w-full bg-white rounded-md border border-gray-200 shadow-md p-4 text-center">
              <LoaderCircle size={20} className="animate-spin mx-auto text-swadeyellow" />
              <p className="text-sm text-gray-500 mt-1">Searching locations...</p>
            </div>
          )}
        </div>
      </div >
    </PopoverContent >
  );
});
LocationPickerContent.displayName = "LocationPickerContent";

interface LocationPickerSearchProps {
  className?: string;
  placeholder?: string;
  buttonClassName?: string;
  buttonText?: string;
  children?: ReactNode;
  searchIconClassName?: string;
  searchIcon?: ReactNode;
  loadingIcon?: ReactNode;
  inputClassName?: string;
  containerClassName?: string;
}

const LocationPickerSearch = React.forwardRef<
  HTMLDivElement,
  LocationPickerSearchProps
>(({
  className,
  placeholder = "Search for location",
  buttonClassName,
  buttonText = "Search",
  children,
  searchIconClassName,
  searchIcon = <Search className={`h-4 w-4 ${searchIconClassName}`} />,
  loadingIcon = <LoaderCircle className="h-4 w-4 animate-spin" />,
  inputClassName,
  containerClassName
}, ref) => {
  const { locationSearch, setLocationSearch, searchLocation, isLoading } = useLocationContext();

  if (children) {
    return (
      <div ref={ref} className={containerClassName}>
        {React.cloneElement(children as React.ReactElement, {
        // @ts-expect-error-ignore
          value: locationSearch,
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => setLocationSearch(e.target.value),
          onKeyUp: (e: React.KeyboardEvent) => e.key === 'Enter' && searchLocation(),
          onSearch: searchLocation,
          isLoading,
          clearSearch: () => setLocationSearch(''),
        })}
      </div>
    );
  }

  return (
    <div ref={ref} className={`flex items-center gap-2 ${containerClassName}`}>
      <div className="relative flex-1">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          {searchIcon}
        </div>
        <Input
          placeholder={placeholder}
          value={locationSearch}
          onChange={(e) => setLocationSearch(e.target.value)}
          onKeyUp={(e) => e.key === 'Enter' && searchLocation()}
          className={`pl-10 ${className} ${inputClassName}`}
        />
        {locationSearch && (
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 p-0 text-gray-400 hover:text-gray-600"
            onClick={() => setLocationSearch('')}
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
      <button
        onClick={searchLocation}
        disabled={isLoading || !locationSearch.trim()}
        className={`p-2 bg-primary text-white rounded-md ${buttonClassName}`}
      >
        {isLoading ? loadingIcon : buttonText}
      </button>
    </div>
  );
});
LocationPickerSearch.displayName = "LocationPickerSearch";

interface LocationPickerCurrentProps {
  className?: string;
  children?: ReactNode;
}

const LocationPickerCurrent = React.forwardRef<
  HTMLButtonElement,
  LocationPickerCurrentProps
>(({ className, children }, ref) => {
  const { getCurrentLocation } = useLocationContext();

  return (
    <button
      ref={ref}
      onClick={getCurrentLocation}
      className={`flex items-center gap-2 ${className}`}
    >
      {children || (
        <>
          <Locate className="h-4 w-4" />
          <span>Use my location</span>
        </>
      )}
    </button>
  );
});
LocationPickerCurrent.displayName = "LocationPickerCurrent";

export {
  LocationPicker,
  LocationPickerTrigger,
  LocationPickerContent,
  LocationPickerSearch,
  LocationPickerCurrent
};

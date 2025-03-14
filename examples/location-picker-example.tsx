import {
  LocationPicker,
  LocationPickerTrigger,
  LocationPickerContent,
  LocationPickerSearch,
  LocationPickerCurrent
} from "@/registry/new-york/location-picker/location-picker";
import { Button } from "@/components/ui/button";
import { MapPin, Search, Navigation } from "lucide-react";
import { Input } from "@/components/ui/input";

function CustomSearchInput({ value, onChange, onKeyUp, onSearch, isLoading, clearSearch }: {
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void,
  onSearch: () => void,
  isLoading: boolean,
  clearSearch: () => void
}) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex gap-2">
        <Input
          value={value}
          onChange={onChange}
          onKeyUp={onKeyUp}
          className="bg-gray-50 border-gray-300"
          placeholder="Find your city..."
        />
        <Button
          onClick={clearSearch}
          variant="ghost"
          size="sm"
          className="px-2"
        >
          Clear
        </Button>
      </div>
      <Button
        onClick={onSearch}
        disabled={isLoading}
        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white"
      >
        {isLoading ? "Searching..." : "Find Location"}
      </Button>
    </div>
  );
}

export function LocationPickerExamples() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h3>Default LocationPicker</h3>
        <LocationPicker />
      </div>

      <div>
        <h3>LocationPicker with customized props</h3>
        <LocationPicker >
          <LocationPickerTrigger>
            <Button variant="outline">
              <MapPin className="mr-2 h-4 w-4" />
              Select location
            </Button>
          </LocationPickerTrigger>
          <LocationPickerContent
            title="Where are you located?"
            description="Help us find events near you"
            placeholder="Enter your city"
          />
        </LocationPicker>
      </div>

      <div>
        <h3>Fully customized LocationPicker</h3>
        <LocationPicker >
          <LocationPickerTrigger>
            <Button>
              <MapPin className="mr-2 h-4 w-4" />
              Choose your location
            </Button>
          </LocationPickerTrigger>
          <LocationPickerContent className="w-96">
            <div className="p-6">
              <h4 className="text-xl font-bold mb-1">Find locations near you</h4>
              <p className="text-sm text-gray-500 mb-4">
                Select your location to see personalized content
              </p>

              <LocationPickerSearch
                placeholder="Search cities, districts or zip codes"
                buttonClassName="bg-blue-600 hover:bg-blue-700"
              />

              <div className="mt-4 flex justify-center">
                <LocationPickerCurrent className="text-blue-600 hover:text-blue-800">
                  <MapPin className="h-4 w-4 mr-2" />
                  Use my current location
                </LocationPickerCurrent>
              </div>
            </div>
          </LocationPickerContent>
        </LocationPicker>
      </div>

      <div>
        <h3>LocationPicker with Custom Search Component</h3>
        <LocationPicker>
          <LocationPickerTrigger>
            <Button variant="outline">
              <MapPin className="mr-2 h-4 w-4" />
              Pick Location
            </Button>
          </LocationPickerTrigger>
          <LocationPickerContent className="w-96">
            <div className="p-6">
              <h4 className="text-xl font-bold mb-1">Search for your area</h4>
              <p className="text-sm text-gray-500 mb-4">
                Enter your location to see nearby options
              </p>

              <LocationPickerSearch>
                {/* @ts-expect-error-ignore */}
                <CustomSearchInput />
              </LocationPickerSearch>

              <div className="mt-4 flex justify-center">
                <LocationPickerCurrent className="text-blue-600 hover:underline">
                  <MapPin className="h-4 w-4 mr-2" />
                  Detect my location automatically
                </LocationPickerCurrent>
              </div>
            </div>
          </LocationPickerContent>
        </LocationPicker>
      </div>

      <div>
        <h3>LocationPicker with Inline Custom Search</h3>
        <LocationPicker>
          <LocationPickerTrigger>
            <Button>Select Area</Button>
          </LocationPickerTrigger>
          <LocationPickerContent>
            <div className="p-4">
              <h3 className="font-bold">Where are you?</h3>

              <LocationPickerSearch>
                <div className="flex flex-col mt-3">
                  <div className="relative">
                    <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <Input
                      className="pl-8 rounded-t-md rounded-b-none border-b-0"
                      placeholder="Type city or zip code"
                    />
                  </div>
                  <Button className="rounded-t-none">
                    Find
                  </Button>
                </div>
              </LocationPickerSearch>

              <div className="mt-3 text-center">
                <LocationPickerCurrent>
                  Use GPS location
                </LocationPickerCurrent>
              </div>
            </div>
          </LocationPickerContent>
        </LocationPicker>
      </div>

      <div>
        <h3>LocationPicker with Location Displayed in Child Element</h3>
        <LocationPicker defaultLocation="New York">
          <LocationPickerTrigger displayLocationIn="location-text" loadingText="Finding your location...">
            <Button variant="outline" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Your location: </span>
              <span data-location-display="location-text" className="font-bold text-blue-600">
                Select Location
              </span>
            </Button>
          </LocationPickerTrigger>
          <LocationPickerContent />
        </LocationPicker>
      </div>

      <div>
        <h3>Complex Button with Location Display</h3>
        <LocationPicker>
          <LocationPickerTrigger displayLocationIn="location-display">
            <div className="bg-white border rounded-lg p-3 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Navigation className="text-blue-500" />
                  <div>
                    <div className="font-medium text-sm">Deliver to:</div>
                    <div data-location-display="location-display" className="text-gray-700">
                      Loading...
                    </div>
                  </div>
                </div>
                <div className="text-blue-600 text-sm">Change</div>
              </div>
            </div>
          </LocationPickerTrigger>
          <LocationPickerContent />
        </LocationPicker>
      </div>
    </div>
  );
}

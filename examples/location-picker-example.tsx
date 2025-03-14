import {
  LocationPicker,
  LocationPickerTrigger,
  LocationPickerContent,
  LocationPickerSearch,
  LocationPickerCurrent
} from "@/registry/new-york/location-picker";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export function LocationPickerExamples() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h3>Default LocationPicker</h3>
        <LocationPicker  />
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
    </div>
  );
}

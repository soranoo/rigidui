
import { Button } from "@/components/ui/button";
import { MapPin, Search, Navigation } from "lucide-react";
import { Input } from "@/components/ui/input";
import { LocationPicker } from "@/registry/new-york/location-picker/location-picker";

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
        <LocationPicker autoDetectOnLoad />
      </div>
    </div>
  );
}

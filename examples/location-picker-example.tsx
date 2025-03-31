
import { LocationPicker } from "@/registry/new-york/location-picker/location-picker";

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

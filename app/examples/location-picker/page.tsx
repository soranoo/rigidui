import ExampleTemplate from "@/components/example-template"
import { LocationPicker } from "@/registry/new-york/location-picker/location-picker"

export default function LocationPickerExample() {
  return (
    <ExampleTemplate
      title="Location Picker"
      description="An interactive location picker component with search functionality and map integration support."
      component={LocationPicker}
      badges={["React", "TypeScript", "Geolocation", "Search"]}
    />
  )
}
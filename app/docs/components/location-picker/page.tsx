import React from 'react'
import { ComponentHeader } from '../../_components/ComponentHeader'
import { CodeBlock } from '../../_components/CodeBlock'
// import { ComponentDemo } from '../../_components/ComponentDemo'
import { PropsTable } from '../../_components/PropsTable'
import { Check, X } from 'lucide-react'

export default function LocationPickerPage() {
  const propsData = [
    {
      name: 'defaultLocation',
      type: 'string',
      defaultValue: "''",
      description: 'The default location to display',
    },
    {
      name: 'onLocationChange',
      type: '(location: string) => void',
      description: 'Callback that fires when the location changes',
      required: true,
    },
    {
      name: 'placeholder',
      type: 'string',
      defaultValue: "'Search location...'",
      description: 'Placeholder text for the location input',
    },
  ]

  return (
    <div className="max-w-full space-y-10">
      <ComponentHeader
        title="Location Picker"
        description="A location picker component that allows users to search and select locations."
        previewComponent={
          <div className="flex flex-col items-center justify-center">
            <div className="rounded-md border border-gray-300 p-2 text-center text-sm">
              Location Picker Preview
            </div>
          </div>
        }
        githubPath="registry/new-york/location-picker/location-picker.tsx"
      />

      <section className="space-y-6">
        <h2 id="usage" className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Usage</h2>
        <p className="text-gray-700 dark:text-gray-300">
          The Location Picker component provides an interface for searching and selecting locations.
        </p>

        <CodeBlock
          code={`import { LocationPicker } from "@/components/ui/location-picker"

export default function MyComponent() {
  const handleLocationChange = (location) => {
    console.log("Selected location:", location)
  }

  return (
    <LocationPicker
      defaultLocation="New York, NY"
      onLocationChange={handleLocationChange}
      placeholder="Enter your location"
    />
  )
}`}
          filename="LocationPickerExample.tsx"
        />
      </section>

      <section className="space-y-6">
        <h2 id="features" className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Features</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          The Location Picker component offers several features to enhance the location selection experience.
        </p>

        <div className="space-y-6">
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="text-lg font-medium mb-3 dark:text-white">Location Search</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Users can search for locations by name, address, or postal code.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="text-lg font-medium mb-3 dark:text-white">Autocomplete Suggestions</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              As users type, the component provides autocomplete suggestions for locations.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="text-lg font-medium mb-3 dark:text-white">Geolocation Support</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Allows users to quickly use their current location with browser geolocation.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 id="api-reference" className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">API Reference</h2>
        <PropsTable props={propsData} />
      </section>

      <section className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-800 space-y-6">
        <h2 id="best-practices" className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Best Practices</h2>

        <div className="space-y-6">
          <div className="rounded-lg border border-green-100 dark:border-green-900/30 bg-green-50/50 dark:bg-green-900/10 p-6">
            <h3 className="flex items-center text-base font-medium text-green-800 dark:text-green-400 mb-4">
              <Check className="text-green-500 mr-2 h-5 w-5" /> Do
            </h3>
            <ul className="space-y-3 ml-7 list-disc text-green-800 dark:text-green-400 text-sm">
              <li>Provide clear instructions on how to use the location picker</li>
              <li>Handle errors gracefully when geolocation fails</li>
              <li>Consider privacy implications when using geolocation</li>
              <li>Provide feedback when the location is being loaded</li>
            </ul>
          </div>

          <div className="rounded-lg border border-red-100 dark:border-red-900/30 bg-red-50/50 dark:bg-red-900/10 p-6">
            <h3 className="flex items-center text-base font-medium text-red-800 dark:text-red-400 mb-4">
              <X className="text-red-500 mr-2 h-5 w-5" /> Don&apos;t
            </h3>
            <ul className="space-y-3 ml-7 list-disc text-red-800 dark:text-red-400 text-sm">
              <li>Automatically access user&apos;s location without permission</li>
              <li>Store location data without user consent</li>
              <li>Make the location search process complicated</li>
              <li>Ignore accessibility considerations for location input</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

import React from 'react'
import { LocationPicker } from '@/registry/new-york/location-picker/location-picker'
import ComponentDocTemplate from '../../_components/ComponentDocTemplate'

export default function LocationPickerPage() {
  const propsData = [
    {
      name: 'defaultLocation',
      type: 'string',
      defaultValue: "''",
      description: 'The default location to display',
    },
    {
      name: 'autoDetectOnLoad',
      type: 'boolean',
      defaultValue: 'false',
      description: 'Whether to automatically detect location on component load',
    },
    {
      name: 'className',
      type: 'string',
      defaultValue: "''",
      description: 'Additional class names for styling',
    },
  ]

  const features = [
    {
      icon: (
        <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: "Location Search",
      description: "Users can search for locations by name, address, or postal code."
    },
    {
      icon: (
        <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
        </svg>
      ),
      title: "Autocomplete Suggestions",
      description: "As users type, the component provides autocomplete suggestions for locations."
    },
    {
      icon: (
        <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Geolocation Support",
      description: "Allows users to quickly use their current location with browser geolocation."
    }
  ]

  const bestPractices = [
    {
      type: 'do' as const,
      items: [
        'Provide clear instructions on how to use the location picker',
        'Handle errors gracefully when geolocation fails',
        'Consider privacy implications when using geolocation',
        'Provide feedback when the location is being loaded',
      ]
    },
    {
      type: 'dont' as const,
      items: [
        'Automatically access user\'s location without permission',
        'Store location data without user consent',
        'Make the location search process complicated',
        'Ignore accessibility considerations for location input',
      ]
    }
  ]

  const usageCode = `import { LocationPicker } from "@/components/ui/location-picker"

export default function MyComponent() {
  const handleLocationChange = (location) => {
    console.log("Selected location:", location)
  }

  return (
    <LocationPicker
      onLocationChange={handleLocationChange}
      placeholder="Enter your location"
    />
  )
}`

  return (
    <ComponentDocTemplate
      title="Location Picker"
      description="A location picker component that allows users to search and select locations."
      previewComponent={<LocationPicker className='w-fit' />}
      githubPath="registry/new-york/location-picker/location-picker.tsx"
      usageCode={usageCode}
      usageDescription="The Location Picker component provides an interface for searching and selecting locations."
      propsData={propsData}
      features={features}
      bestPractices={bestPractices}
      componentName="https://rigidui.vercel.app/registry/location-picker"
    />
  )
}

import React from 'react'
import ComponentDocTemplate from '../../_components/ComponentDocTemplate'

export default function CurrencyManagerPage() {
  const providerPropsData = [
    {
      name: 'defaultCurrency',
      type: 'string',
      defaultValue: "'USD'",
      description: 'The default currency to use',
    },
    {
      name: 'children',
      type: 'React.ReactNode',
      description: 'The content to wrap with the currency provider',
      required: true,
    }
  ]

  const selectorPropsData = [
    {
      name: 'className',
      type: 'string',
      description: 'Additional CSS class for the selector',
    }
  ]

  const displayPropsData = [
    {
      name: 'value',
      type: 'number',
      description: 'The monetary value to display',
      required: true,
    },
    {
      name: 'sourceCurrency',
      type: 'string',
      description: 'The source currency of the value',
      required: true,
    },
    {
      name: 'className',
      type: 'string',
      description: 'Additional CSS class for the display',
    }
  ]

  const bestPractices = [
    {
      type: "do" as const,
      items: [
        'Place the CurrencyProvider at a high level in your component tree',
        'Always specify the source currency for values',
        'Consider using local storage to persist currency preference',
        'Format currency values appropriately for different regions',
      ]
    },
    {
      type: "dont" as const,
      items: [
        'Use CurrencyDisplay outside of a CurrencyProvider',
        'Hardcode currency symbols in your application',
        'Assume all users prefer the same currency',
        'Forget to handle loading states for exchange rates',
      ]
    }
  ]

  const usageCode = `import {
  CurrencyProvider,
  CurrencySelector,
  CurrencyDisplay
} from "@/components/ui/currency-manager"

export default function MyComponent() {
  return (
    <CurrencyProvider defaultCurrency="USD">
      <div>
        <h2>Select Currency</h2>
        <CurrencySelector />

        <h2>Product Prices</h2>
        <p>Product A: <CurrencyDisplay value={99.99} sourceCurrency="USD" /></p>
        <p>Product B: <CurrencyDisplay value={89.99} sourceCurrency="EUR" /></p>
      </div>
    </CurrencyProvider>
  )
}`

  const subComponents = [
    {
      name: 'CurrencyProvider',
      description: 'A context provider that manages the current currency selection and conversion rates.',
      propsData: providerPropsData
    },
    {
      name: 'CurrencySelector',
      description: 'A dropdown component that allows users to select their preferred currency.',
      propsData: selectorPropsData
    },
    {
      name: 'CurrencyDisplay',
      description: 'A component that displays monetary values in the user\'s selected currency.',
      propsData: displayPropsData
    }
  ]

  return (
    <ComponentDocTemplate
      title="Currency Manager"
      description="A set of components for managing currency display and selection in your application."
      previewComponent={
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="text-sm font-medium">USD $100.00</div>
          <div className="rounded-md border border-gray-300 px-3 py-1 text-center text-xs">
            Change Currency
          </div>
        </div>
      }
      githubPath="registry/new-york/currency-manager/currency-manager.tsx"
      usageCode={usageCode}
      usageDescription="The Currency Manager provides a set of components for currency management and display."
      propsData={[]}
      bestPractices={bestPractices}
      componentName="currency-manager"
      subComponents={subComponents}
    />
  )
}

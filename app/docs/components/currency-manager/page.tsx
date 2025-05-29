import React from 'react'
import ComponentDocTemplate from '../../_components/ComponentDocTemplate'
import { CurrencyDisplay, CurrencyProvider, CurrencySelector } from '@/registry/new-york/currency-manager/currency-manager'

export default function CurrencyManagerPage() {
  const providerPropsData = [
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
      defaultValue: 'INR',
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

  const usageCode = `import { CurrencyDisplay, CurrencyProvider, CurrencySelector } from "@/components/ui/currency-manager"

export default function MyComponent() {
  return (
   <CurrencyProvider>
      <div className="max-w-4xl mx-auto space-y-6 px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b">
          <h2 className="text-xl font-semibold">Shopping Cart</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">Currency:</span>
            <CurrencySelector className="w-full sm:w-40" />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg gap-3">
            <div className="flex-1">
              <h3 className="font-medium">MacBook Pro 14&quot;</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Qty: 1</p>
            </div>
            <div className="text-left sm:text-right">
              <div className="font-semibold text-lg">
                <CurrencyDisplay value={1999} sourceCurrency="USD" />
              </div>
              <div className="text-xs text-gray-500">Originally $1,999 USD</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg gap-3">
            <div className="flex-1">
              <h3 className="font-medium">Wireless Mouse</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Qty: 2</p>
            </div>
            <div className="text-left sm:text-right">
              <div className="font-semibold text-lg">
                <CurrencyDisplay value={158} sourceCurrency="EUR" />
              </div>
              <div className="text-xs text-gray-500">Originally €79 EUR each</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg gap-3">
            <div className="flex-1">
              <h3 className="font-medium">Premium Headphones</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Qty: 1</p>
            </div>
            <div className="text-left sm:text-right">
              <div className="font-semibold text-lg">
                <CurrencyDisplay value={249} sourceCurrency="GBP" />
              </div>
              <div className="text-xs text-gray-500">Originally £249 GBP</div>
            </div>
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-xl font-bold">Total:</span>
            <CurrencyDisplay
              value={2406}
              sourceCurrency="USD"
              className="text-2xl font-bold text-green-600 dark:text-green-400"
            />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            * Prices automatically converted from original currencies
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Try it:</strong> Change the currency above to see all prices automatically convert in real-time using live exchange rates!
          </p>
        </div>
      </div>
    </CurrencyProvider>
  )
}`

  const previewComponent = (
    <CurrencyProvider>
      <div className="max-w-4xl mx-auto space-y-6 px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b">
          <h2 className="text-xl font-semibold">Shopping Cart</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">Currency:</span>
            <CurrencySelector className="w-full sm:w-40" />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg gap-3">
            <div className="flex-1">
              <h3 className="font-medium">MacBook Pro 14&quot;</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Qty: 1</p>
            </div>
            <div className="text-left sm:text-right">
              <div className="font-semibold text-lg">
                <CurrencyDisplay value={1999} sourceCurrency="USD" />
              </div>
              <div className="text-xs text-gray-500">Originally $1,999 USD</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg gap-3">
            <div className="flex-1">
              <h3 className="font-medium">Wireless Mouse</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Qty: 2</p>
            </div>
            <div className="text-left sm:text-right">
              <div className="font-semibold text-lg">
                <CurrencyDisplay value={158} sourceCurrency="EUR" />
              </div>
              <div className="text-xs text-gray-500">Originally €79 EUR each</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg gap-3">
            <div className="flex-1">
              <h3 className="font-medium">Premium Headphones</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Qty: 1</p>
            </div>
            <div className="text-left sm:text-right">
              <div className="font-semibold text-lg">
                <CurrencyDisplay value={249} sourceCurrency="GBP" />
              </div>
              <div className="text-xs text-gray-500">Originally £249 GBP</div>
            </div>
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-xl font-bold">Total:</span>
            <CurrencyDisplay
              value={2406}
              sourceCurrency="USD"
              className="text-2xl font-bold text-green-600 dark:text-green-400"
            />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            * Prices automatically converted from original currencies
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Try it:</strong> Change the currency above to see all prices automatically convert in real-time using live exchange rates!
          </p>
        </div>
      </div>
    </CurrencyProvider>
  );

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
      previewComponent={previewComponent}
      githubPath="registry/new-york/currency-manager/currency-manager.tsx"
      usageCode={usageCode}
      usageDescription="The Currency Manager provides a set of components for currency management and display. It allows users to select their preferred currency and automatically converts all displayed values."
      propsData={[]}
      bestPractices={bestPractices}
      componentName="https://rigidui.vercel.app/registry/currency-manager"
      subComponents={subComponents}
    />
  )
}

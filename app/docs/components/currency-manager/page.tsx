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
    <CurrencyProvider defaultCurrency="USD">
      <div className="space-y-4">
        <header className="flex justify-between items-center">
          <h1 className="text-xl font-bold">My Store</h1>
          <CurrencySelector className="w-32" />
        </header>

        <div className="space-y-4">
          <h2 className="text-lg font-medium">Product Catalog</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="border p-4 rounded-md">
              <h3>Premium Headphones</h3>
              <p className="text-lg font-bold">
                <CurrencyDisplay value={129.99} sourceCurrency="USD" />
              </p>
            </div>
            <div className="border p-4 rounded-md">
              <h3>Wireless Keyboard</h3>
              <p className="text-lg font-bold">
                <CurrencyDisplay value={79.99} sourceCurrency="EUR" />
              </p>
            </div>
          </div>
        </div>

        <div className="border-t pt-4">
          <h3 className="font-medium">Cart Total</h3>
          <p className="text-xl font-bold">
            <CurrencyDisplay value={209.98} sourceCurrency="USD" />
          </p>
        </div>
      </div>
    </CurrencyProvider>
  )
}`

  const previewComponent = (
    <CurrencyProvider>
      <div className="border rounded-lg shadow-sm overflow-hidden max-w-3xl mx-auto">
        <header className="flex justify-between items-center p-4 border-b bg-gray-50 dark:bg-gray-800/50">
          <h1 className="text-xl font-bold">E-commerce Store</h1>
          <CurrencySelector />
        </header>

        <main className="p-6 bg-white dark:bg-background">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-medium mb-4">Featured Products</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-gray-100 dark:bg-gray-800 h-32 flex items-center justify-center">
                    <div className="text-gray-400">Product Image</div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">Premium Headphones</h3>
                    <p className="text-lg font-bold mt-1">
                      <CurrencyDisplay value={129.99} sourceCurrency="USD" />
                    </p>
                  </div>
                </div>

                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-gray-100 dark:bg-gray-800 h-32 flex items-center justify-center">
                    <div className="text-gray-400">Product Image</div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">Wireless Keyboard</h3>
                    <p className="text-lg font-bold mt-1">
                      <CurrencyDisplay value={79.99} sourceCurrency="EUR" />
                    </p>
                  </div>
                </div>

                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-gray-100 dark:bg-gray-800 h-32 flex items-center justify-center">
                    <div className="text-gray-400">Product Image</div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">Smart Watch</h3>
                    <p className="text-lg font-bold mt-1">
                      <CurrencyDisplay value={199.99} sourceCurrency="GBP" />
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t">
              <h2 className="text-lg font-medium">Exchange Rate Information</h2>
              <div className="grid gap-3">
                {["USD", "EUR", "GBP", "JPY", "INR"].map((currency) => (
                  <div key={currency} className="flex items-center justify-between border-b pb-2">
                    <span className="font-medium">{currency}:</span>
                    <CurrencyDisplay
                      value={1}
                      sourceCurrency={currency}
                      className="font-mono text-right"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Change your preferred currency using the selector in the header to see all values update automatically.
              </p>
            </div>
          </div>
        </main>
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

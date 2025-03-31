import React from 'react'
import { ComponentHeader } from '../../_components/ComponentHeader'
import { CodeBlock } from '../../_components/CodeBlock'
// import { ComponentDemo } from '../../_components/ComponentDemo'
import { PropsTable } from '../../_components/PropsTable'
import { Check, X } from 'lucide-react'

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

  return (
    <div className="max-w-full space-y-10">
      <ComponentHeader
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
      />

      <section className="space-y-6">
        <h2 id="usage" className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Usage</h2>
        <p className="text-gray-700 dark:text-gray-300">
          The Currency Manager provides a set of components for currency management and display.
        </p>

        <CodeBlock
          code={`import {
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
}`}
          filename="CurrencyExample.tsx"
        />
      </section>

      <section className="space-y-6">
        <h2 id="components" className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Components</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          The Currency Manager consists of three main components:
        </p>

        <div className="space-y-6">
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="text-lg font-medium mb-3 dark:text-white">CurrencyProvider</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              A context provider that manages the current currency selection and conversion rates.
            </p>
            <h4 className="text-md font-medium mb-2 dark:text-white">Props</h4>
            <PropsTable props={providerPropsData} />
          </div>

          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="text-lg font-medium mb-3 dark:text-white">CurrencySelector</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              A dropdown component that allows users to select their preferred currency.
            </p>
            <h4 className="text-md font-medium mb-2 dark:text-white">Props</h4>
            <PropsTable props={selectorPropsData} />
          </div>

          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="text-lg font-medium mb-3 dark:text-white">CurrencyDisplay</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              A component that displays monetary values in the user&apos;s selected currency.
            </p>
            <h4 className="text-md font-medium mb-2 dark:text-white">Props</h4>
            <PropsTable props={displayPropsData} />
          </div>
        </div>
      </section>

      <section className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-800 space-y-6">
        <h2 id="best-practices" className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Best Practices</h2>

        <div className="space-y-6">
          <div className="rounded-lg border border-green-100 dark:border-green-900/30 bg-green-50/50 dark:bg-green-900/10 p-6">
            <h3 className="flex items-center text-base font-medium text-green-800 dark:text-green-400 mb-4">
              <Check className="text-green-500 mr-2 h-5 w-5" /> Do
            </h3>
            <ul className="space-y-3 ml-7 list-disc text-green-800 dark:text-green-400 text-sm">
              <li>Place the CurrencyProvider at a high level in your component tree</li>
              <li>Always specify the source currency for values</li>
              <li>Consider using local storage to persist currency preference</li>
              <li>Format currency values appropriately for different regions</li>
            </ul>
          </div>

          <div className="rounded-lg border border-red-100 dark:border-red-900/30 bg-red-50/50 dark:bg-red-900/10 p-6">
            <h3 className="flex items-center text-base font-medium text-red-800 dark:text-red-400 mb-4">
              <X className="text-red-500 mr-2 h-5 w-5" /> Don&apos;t
            </h3>
            <ul className="space-y-3 ml-7 list-disc text-red-800 dark:text-red-400 text-sm">
              <li>Use CurrencyDisplay outside of a CurrencyProvider</li>
              <li>Hardcode currency symbols in your application</li>
              <li>Assume all users prefer the same currency</li>
              <li>Forget to handle loading states for exchange rates</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

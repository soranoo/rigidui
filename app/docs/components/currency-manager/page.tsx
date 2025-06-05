"use client"
import React from 'react'
import ComponentDocTemplate from '../../_components/ComponentDocTemplate'
import { CurrencyDisplay, CurrencyProvider, CurrencySelector } from '@/registry/new-york/currency-manager/currency-manager'

export default function CurrencyManagerPage() {
  const providerPropsData = [
    {
      name: 'children',
      type: 'React.ReactNode',
      description: 'The content to wrap with the currency provider.',
      required: true,
    },
    {
      name: 'fixedBaseCurrencyCode',
      type: 'string',
      description: 'The currency code (e.g., "USD") against which all provided exchange rates are relative. This is required.',
      required: true,
    },
    {
      name: 'initialRates',
      type: 'Record<string, number>',
      description: 'An initial object of exchange rates, relative to `fixedBaseCurrencyCode`. Example: `{ "EUR": 0.92, "INR": 83.5 }` if `fixedBaseCurrencyCode` is "USD".',
      defaultValue: '{}',
    },
    {
      name: 'fetchRatesFunction',
      type: '() => Promise<Record<string, number>>',
      description: 'A user-provided async function that returns a promise resolving to an object of exchange rates, relative to `fixedBaseCurrencyCode`.',
    },
    {
      name: 'refetchIntervalMs',
      type: 'number',
      description: 'Interval in milliseconds to call `fetchRatesFunction`. Requires `fetchRatesFunction` to be set.',
    },
    {
      name: 'defaultSelectedCurrencyCode',
      type: 'string',
      description: 'The currency code to be selected by default. The component will try to find this code in the fetched list of available currencies.',
      defaultValue: '"INR"',
    },
    {
      name: 'loaderComponent',
      type: 'ComponentType',
      description: 'A custom component to display while loading data (e.g., currency names or exchange rates).',
      defaultValue: 'Internal <Loader /> icon',
    }
  ]

  const selectorPropsData = [
    {
      name: 'className',
      type: 'string',
      description: 'Additional CSS class for the selector.',
    }
  ]

  const displayPropsData = [
    {
      name: 'value',
      type: 'number',
      description: 'The monetary value to display.',
      required: true,
    },
    {
      name: 'sourceCurrency',
      type: 'string',
      description: 'The currency code of the input `value`. If not provided, the `value` is assumed to be in the `fixedBaseCurrencyCode` set in the `CurrencyProvider`.',
      defaultValue: '`fixedBaseCurrencyCode` from Provider',
    },
    {
      name: 'className',
      type: 'string',
      description: 'Additional CSS class for the display.',
    }
  ]


  const usageCode = `import { CurrencyDisplay, CurrencyProvider, CurrencySelector } from "@/components/ui/currency-manager"

const LIVE_API_KEY = "fb4a1b3c17c74a147b758edb";
const LIVE_API_URL = \`https://v6.exchangerate-api.com/v6/\${LIVE_API_KEY}/latest/USD\`;

async function liveRateFetcher(): Promise<Record<string, number>> {
  try {
    const response = await fetch(LIVE_API_URL);
    if (!response.ok) {
      throw new Error(\`API request failed with status \${response.status}: \${response.statusText}\`);
    }
    const data = await response.json();
    if (data.result === "success" && data.base_code === "USD") {
      console.log("Fetched live rates from exchangerate-api.com:", data.conversion_rates);
      return data.conversion_rates;
    } else {
      throw new Error(data["error-type"] || "Failed to fetch valid exchange rates from API.");
    }
  } catch (error) {
    console.error("Error fetching live rates:", error);
    return {};
  }
}

export function MyDynamicRatesComponent() {
  return (
   <CurrencyProvider
      fixedBaseCurrencyCode="USD"
      fetchRatesFunction={liveRateFetcher}
      defaultSelectedCurrencyCode="INR"
      refetchIntervalMs={900000}
    >
      <ShoppingCartLayout />
    </CurrencyProvider>
  )

    function ShoppingCartLayout() {
    return (
      <div className="max-w-4xl mx-auto space-y-6 px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b">
          <h2 className="text-xl font-semibold">Shopping Cart</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">Currency:</span>
            <CurrencySelector className="w-full sm:w-48" />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg gap-3">
            <div className="flex-1">
              <h3 className="font-medium">Laptop Pro X</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Qty: 1</p>
            </div>
            <div className="text-left sm:text-right">
              <div className="font-semibold text-lg">
                <CurrencyDisplay value={1999} />
              </div>
              <div className="text-xs text-gray-500">Originally $1,999 USD</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg gap-3">
            <div className="flex-1">
              <h3 className="font-medium">Wireless Keyboard (EUR)</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Qty: 1</p>
            </div>
            <div className="text-left sm:text-right">
              <div className="font-semibold text-lg">
                <CurrencyDisplay value={79} />
              </div>
              <div className="text-xs text-gray-500">Originally $79 USD</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg gap-3">
            <div className="flex-1">
              <h3 className="font-medium">Coffee Mug (INR)</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Qty: 2</p>
            </div>
            <div className="text-left sm:text-right">
              <div className="font-semibold text-lg">
                <CurrencyDisplay value={998} />
              </div>
              <div className="text-xs text-gray-500">Originally $998 USD</div>
            </div>
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-xl font-bold">Estimated Total (converted to selected currency):</span>
            <CurrencyDisplay
              value={1999}
              sourceCurrency="USD"
              className="text-2xl font-bold text-green-600 dark:text-green-400"
            />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Individual item prices are converted from their source currency to your selected display currency.
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Try it:</strong> Change the currency selector. The rates are fetched live from exchangerate-api.com (USD base).
            The component also fetches currency names (e.g., &quot;Indian Rupee&quot; for &quot;INR&quot;) from a CDN.
          </p>
        </div>
      </div>
    )
  }


}`


  function ShoppingCartLayout() {
    return (
      <div className="max-w-4xl mx-auto space-y-6 px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b">
          <h2 className="text-xl font-semibold">Shopping Cart</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">Currency:</span>
            <CurrencySelector className="w-full sm:w-48" />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg gap-3">
            <div className="flex-1">
              <h3 className="font-medium">Laptop Pro X</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Qty: 1</p>
            </div>
            <div className="text-left sm:text-right">
              <div className="font-semibold text-lg">
                <CurrencyDisplay value={1999} />
              </div>
              <div className="text-xs text-gray-500">Originally $1,999 USD</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg gap-3">
            <div className="flex-1">
              <h3 className="font-medium">Wireless Keyboard</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Qty: 1</p>
            </div>
            <div className="text-left sm:text-right">
              <div className="font-semibold text-lg">
                <CurrencyDisplay value={79} />
              </div>
              <div className="text-xs text-gray-500">Originally $79 USD</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg gap-3">
            <div className="flex-1">
              <h3 className="font-medium">Coffee Mug</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Qty: 2</p>
            </div>
            <div className="text-left sm:text-right">
              <div className="font-semibold text-lg">
                <CurrencyDisplay value={998} />
              </div>
              <div className="text-xs text-gray-500">Originally $998 USD</div>
            </div>
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-xl font-bold">Estimated Total (converted to selected currency):</span>
            <CurrencyDisplay
              value={1999}
              sourceCurrency="USD"
              className="text-2xl font-bold text-green-600 dark:text-green-400"
            />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Individual item prices are converted from their source currency to your selected display currency.
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Try it:</strong> Change the currency selector. The rates are fetched live from exchangerate-api.com (USD base).
            The component also fetches currency names (e.g., &quot;Indian Rupee&quot; for &quot;INR&quot;) from a CDN.
          </p>
        </div>
      </div>
    )
  }

  const previewLiveRateFetcher = async (): Promise<Record<string, number>> => {
    const apiKey = "fb4a1b3c17c74a147b758edb";
    const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;
    try {
      console.log("Fetching live rates from exchangerate-api.com:", apiUrl);
      const response = await fetch(apiUrl);
      if (!response.ok) {
        console.error(`Preview API request failed: \${response.status}`);
        return { USD: 1.0 };
      }
      const data = await response.json();
      if (data.result === "success" && data.base_code === "USD") {
        return data.conversion_rates;
      }
      console.error("Preview API returned non-success or wrong base code");
      return { USD: 1.0 };
    } catch (error) {
      console.error("Error in previewLiveRateFetcher:", error);
      return { USD: 1.0 };
    }
  };

  const previewComponent = (
    <CurrencyProvider
      fixedBaseCurrencyCode="USD"
      fetchRatesFunction={previewLiveRateFetcher}
      defaultSelectedCurrencyCode="INR"
      refetchIntervalMs={900000}
    >
      <ShoppingCartLayout />
    </CurrencyProvider>
  );

  const subComponents = [
    {
      name: 'CurrencyProvider',
      description: 'A context provider that manages currency selection, conversion rates (user-provided), and formatting. Fetches available currency names dynamically.',
      propsData: providerPropsData
    },
    {
      name: 'CurrencySelector',
      description: 'A dropdown component that allows users to select their preferred currency from a dynamically fetched list.',
      propsData: selectorPropsData
    },
    {
      name: 'CurrencyDisplay',
      description: 'A component that displays monetary values, converting them based on user-provided rates and selected currency.',
      propsData: displayPropsData
    }
  ]

  const features = [
    {
      icon: (
        <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: "Real-time Currency Conversion",
      description: "Convert monetary values between 180+ currencies with live exchange rates or your custom rates."
    },
    {
      icon: (
        <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4" />
        </svg>
      ),
      title: "Smart Caching & Persistence",
      description: "Automatically caches exchange rates and currency data for faster loading and offline resilience."
    },
    {
      icon: (
        <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      ),
      title: "Flexible Rate Sources",
      description: "Use static rates, live API data, or your custom rate fetching function with configurable refresh intervals."
    },
    {
      icon: (
        <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
        </svg>
      ),
      title: "Global Currency Support",
      description: "Supports 180+ currencies with proper symbols, names, and locale-aware formatting for international use."
    },
    {
      icon: (
        <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Production Ready",
      description: "SSR-safe, TypeScript support, error handling, fallback mechanisms, and optimized performance."
    },
    {
      icon: (
        <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Smart Refresh Logic",
      description: "Intelligent rate refreshing that only fetches when needed, respecting your specified intervals."
    }
  ]

  return (
    <ComponentDocTemplate
      title="Currency Manager"
      description="A flexible set of components for managing currency display and selection. Users provide exchange rates relative to a fixed base currency, and the component handles fetching currency names and performing conversions."
      previewComponent={previewComponent}
      githubPath="registry/new-york/currency-manager/currency-manager.tsx"
      usageCode={usageCode}
      features={features}
      usageDescription="The Currency Manager allows users to select their preferred currency and see values converted in real-time. You must provide a `fixedBaseCurrencyCode\` (e.g., 'USD') and either \`initialRates\` (an object like \`{ EUR: 0.92, INR: 83.5 } \`) or an async \`fetchRatesFunction\` that returns such an object. All rates are relative to your \`fixedBaseCurrencyCode\`. The component dynamically fetches a list of over 180 currency names and codes (e.g., from \`'INR'\` to \`'Indian Rupee'\`) for the selector and display."
      propsData={[]}
      componentName="https://rigidui.vercel.app/registry/currency-manager"
      subComponents={subComponents}
    />
  )
}


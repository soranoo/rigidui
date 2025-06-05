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

export function MyStaticRatesComponent() {
  // Rates are relative to USD
  const staticUsdRates = {
    EUR: 0.925, // Example static rate
    GBP: 0.790, // Example static rate
    JPY: 157.50, // Example static rate
    INR: 83.60, // Example static rate
    USD: 1.0,
  };

  return (
    <CurrencyProvider
      fixedBaseCurrencyCode="USD"
      initialRates={staticUsdRates}
      defaultSelectedCurrencyCode="INR"
    >
      <ShoppingCartLayout />
    </CurrencyProvider>
  )
}

const LIVE_API_KEY = "fb4a1b3c17c74a147b758edb"; // Replace with your own key for production
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
    // Fallback to empty rates or re-throw, depending on desired error handling
    // For this example, we'll return empty to prevent app crash, but log the error.
    return {};
  }
}

export function MyDynamicRatesComponent() {
  return (
    <CurrencyProvider
      fixedBaseCurrencyCode="USD" // Must match the base_code from the API
      fetchRatesFunction={liveRateFetcher}
      refetchIntervalMs={3600000} // Refetch every hour (adjust as needed)
      defaultSelectedCurrencyCode="EUR"
    >
      <ShoppingCartLayout />
    </CurrencyProvider>
  )
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
                <CurrencyDisplay value={1999} sourceCurrency="USD" />
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
                <CurrencyDisplay value={79} sourceCurrency="EUR" />
              </div>
              <div className="text-xs text-gray-500">Originally €79 EUR</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg gap-3">
            <div className="flex-1">
              <h3 className="font-medium">Coffee Mug (INR)</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Qty: 2</p>
            </div>
            <div className="text-left sm:text-right">
              <div className="font-semibold text-lg">
                <CurrencyDisplay value={998} sourceCurrency="INR" /> {/* Approx 500 INR * 2 */}
              </div>
              <div className="text-xs text-gray-500">Originally ₹998 INR</div>
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

  return (
    <ComponentDocTemplate
      title="Currency Manager"
      description="A flexible set of components for managing currency display and selection. Users provide exchange rates relative to a fixed base currency, and the component handles fetching currency names and performing conversions."
      previewComponent={previewComponent}
      githubPath="registry/new-york/currency-manager/currency-manager.tsx"
      usageCode={usageCode}
      usageDescription="The Currency Manager allows users to select their preferred currency and see values converted in real-time. You must provide a `fixedBaseCurrencyCode\` (e.g., 'USD') and either \`initialRates\` (an object like \`{ EUR: 0.92, INR: 83.5 } \`) or an async \`fetchRatesFunction\` that returns such an object. All rates are relative to your \`fixedBaseCurrencyCode\`. The component dynamically fetches a list of over 180 currency names and codes (e.g., from \`'INR'\` to \`'Indian Rupee'\`) for the selector and display."
      propsData={[]}
      componentName="https://rigidui.vercel.app/registry/currency-manager"
      subComponents={subComponents}
    />
  )
}


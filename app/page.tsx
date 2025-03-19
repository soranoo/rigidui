import * as React from "react"
import { OpenInV0Button } from "@/components/open-in-v0-button"
import { LocationPickerExamples } from "@/examples/location-picker-example"
import { CurrencyDisplay, CurrencyProvider, CurrencySelector } from "@/registry/new-york/currency-manager/currency-manager"
import { CustomLoaderExample } from "@/examples/custom-loader-example"

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Custom Registry</h1>
        <p className="text-muted-foreground">
          A custom registry for distribution code using shadcn.
        </p>
      </header>
      <main className="flex flex-col flex-1 gap-8">
        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A location locator component
            </h2>
            <OpenInV0Button name="location-locator" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <LocationPickerExamples />
          </div>
        </div>
        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A currency manager component
            </h2>
            <OpenInV0Button name="currency-manager" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <CurrencyProvider>
              <div className="space-y-4">
                <h1 className="text-2xl font-bold">Currency Manager</h1>

                <div className="space-y-2">
                  <h2 className="text-lg font-medium">Currency Selection</h2>
                  <CurrencySelector />
                </div>

                <div className="space-y-2">
                  <h2 className="text-lg font-medium">Example Values</h2>
                  <div className="grid gap-2">
                    <p>Product A (USD): <CurrencyDisplay value={9.99} sourceCurrency="USD" /></p>
                    <p>Product B (EUR): <CurrencyDisplay value={24.99} sourceCurrency="EUR" /></p>
                    <p>Product C (GBP): <CurrencyDisplay value={99.99} sourceCurrency="GBP" /></p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h2 className="text-lg font-medium">Custom Loader Examples</h2>
                  <CustomLoaderExample />
                </div>
              </div>
            </CurrencyProvider>
          </div>
        </div>
      </main>
    </div>
  )
}

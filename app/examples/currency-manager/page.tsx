import ExampleTemplate from "@/components/example-template"
import { CurrencyProvider, CurrencySelector, CurrencyDisplay } from "@/registry/new-york/currency-manager/currency-manager"

function CurrencyManagerDemo() {
  return (
    <CurrencyProvider fixedBaseCurrencyCode="usd">
      <div className="space-y-6 p-6 max-w-md mx-auto">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Currency Selector</h3>
          <CurrencySelector />
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Currency Display</h3>
          <div className="space-y-2">
            <CurrencyDisplay value={100} />
            <CurrencyDisplay value={250.75} />
            <CurrencyDisplay value={1000} />
          </div>
        </div>

        <div className="text-sm text-muted-foreground">
          Select a currency above to see real-time conversion rates
        </div>
      </div>
    </CurrencyProvider>
  )
}

export default function CurrencyManagerExample() {
  return (
    <ExampleTemplate
      title="Currency Manager"
      description="A comprehensive currency conversion and management component with real-time rates and multiple currency support."
      component={CurrencyManagerDemo}
      badges={["React", "TypeScript", "Currency API", "Real-time"]}
    />
  )
}
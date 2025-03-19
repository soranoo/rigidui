"use client"

import { RefreshCw, Clock, Hourglass, Activity } from "lucide-react"
import { CurrencyProvider, CurrencyDisplay, CurrencySelector } from "@/registry/new-york/currency-manager/currency-manager"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const SpinningLoader = () => <RefreshCw className="w-4 h-4 animate-spin inline" />
const ClockLoader = () => <Clock className="w-4 h-4 animate-pulse inline" />
const HourglassLoader = () => <Hourglass className="w-4 h-4 animate-ping inline" />
const ActivityLoader = () => <Activity className="w-4 h-4 animate-bounce inline" />

const TextLoader = () => <span className="text-xs animate-pulse">loading...</span>

const DotsLoader = () => (
  <span className="inline-flex gap-0.5">
    <span className="animate-bounce delay-0">.</span>
    <span className="animate-bounce delay-150">.</span>
    <span className="animate-bounce delay-300">.</span>
  </span>
)

export function CustomLoaderExample() {
  return (
    <Tabs defaultValue="icon">
      <TabsList className="mb-4">
        <TabsTrigger value="icon">Icon Loaders</TabsTrigger>
        <TabsTrigger value="text">Text Loaders</TabsTrigger>
      </TabsList>

      <TabsContent value="icon" className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <LoaderExample name="Spinning Refresh" loader={SpinningLoader} />
          <LoaderExample name="Pulsing Clock" loader={ClockLoader} />
          <LoaderExample name="Ping Hourglass" loader={HourglassLoader} />
          <LoaderExample name="Bouncing Activity" loader={ActivityLoader} />
        </div>
      </TabsContent>

      <TabsContent value="text" className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <LoaderExample name="Text Loader" loader={TextLoader} />
          <LoaderExample name="Dots Loader" loader={DotsLoader} />
        </div>
      </TabsContent>
    </Tabs>
  )
}

function LoaderExample({ name, loader }: { name: string, loader: React.ComponentType }) {
  return (
    <div className="p-4 border rounded-md">
      <h3 className="font-medium text-sm mb-2">{name}</h3>
      <CurrencyProvider loaderComponent={loader}>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <CurrencySelector />
          </div>
          <p>USD: <CurrencyDisplay value={19.99} sourceCurrency="USD" /></p>
        </div>
      </CurrencyProvider>
    </div>
  )
}

"use client"

import { createContext, useContext, useState, ReactNode, useEffect, ComponentType } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Loader } from 'lucide-react'

export type Currency = {
  code: string
  symbol: string
  name: string
}

export const currencies: Currency[] = [
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'GBP', symbol: '£', name: 'British Pound' },
  { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
  { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
]

const DefaultLoader = () => <Loader className='w-4 h-4 animate-spin' />;

type CurrencyContextType = {
  currency: Currency
  setCurrency: (currency: Currency) => void
  formatValue: (value: number) => string
  convertValue: (value: number, fromCurrency?: string) => number
  rates: Record<string, number>
  loading: boolean
  error: string | null
  LoaderComponent: ComponentType
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined)

interface CurrencyProviderProps {
  children: ReactNode;
  apiKey?: string;
  position?: 'left' | 'right';
  loaderComponent?: ComponentType;
}

export function CurrencyProvider({
  children,
  apiKey = "fb4a1b3c17c74a147b758edb",
  loaderComponent = DefaultLoader
}: CurrencyProviderProps) {
  const [currency, setCurrency] = useState<Currency>(currencies[4])
  const [rates, setRates] = useState<Record<string, number>>({})
  const [baseCurrency, setBaseCurrency] = useState<string>(currencies[4].code)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRates = async () => {
      if (!apiKey) return

      setLoading(true)
      try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency.code}`)
        const data = await response.json()

        if (data.result === "success") {
          setRates(data.conversion_rates)
          setBaseCurrency(currency.code)
          setError(null)
          console.log(`Fetched new rates with base: ${currency.code}`, data.conversion_rates)
        } else {
          setError(data["error-type"] || "Failed to fetch exchange rates")
        }
      } catch (err) {
        console.error("Exchange rate API error:", err)
        setError("Failed to fetch exchange rates")
      } finally {
        setLoading(false)
      }
    }

    fetchRates()
  }, [currency.code, apiKey])

  const convertValue = (value: number, fromCurrency?: string) => {
    if (!fromCurrency) fromCurrency = "USD";

    if (fromCurrency === currency.code) return value;

    if (Object.keys(rates).length > 0) {
      let valueInBaseCurrency;
      if (fromCurrency === baseCurrency) {
        valueInBaseCurrency = value;
      } else {
        valueInBaseCurrency = value / rates[fromCurrency];
      }

      if (currency.code === baseCurrency) {
        return valueInBaseCurrency;
      } else {
        return valueInBaseCurrency * rates[currency.code];
      }
    }

    return value;
  }

  const formatValue = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.code,
      currencyDisplay: 'symbol',
    }).format(value)
  }

  const handleCurrencyChange = (newCurrency: Currency) => {
    setCurrency(newCurrency);
  }

  return (
    <CurrencyContext.Provider value={{
      currency,
      setCurrency: handleCurrencyChange,
      formatValue,
      convertValue,
      rates,
      loading,
      error,
      LoaderComponent: loaderComponent
    }}>
      {children}
    </CurrencyContext.Provider>
  )
}

function useCurrency() {
  const context = useContext(CurrencyContext)
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider')
  }
  return context
}

export function CurrencySelector() {
  const { currency, setCurrency, loading } = useCurrency()

  return (
    <Select
      value={currency.code}
      onValueChange={(value) => {
        const selectedCurrency = currencies.find((c) => c.code === value)
        if (selectedCurrency) {
          setCurrency(selectedCurrency)
        }
      }}
      disabled={loading}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select currency" />
      </SelectTrigger>
      <SelectContent>
        {currencies.map((c) => (
          <SelectItem key={c.code} value={c.code}>
            {c.symbol} {c.name} ({c.code})
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

interface CurrencyDisplayProps {
  value: number
  className?: string
  sourceCurrency?: string
}

export function CurrencyDisplay({
  value,
  className,
  sourceCurrency = "USD"
}: CurrencyDisplayProps) {
  const { formatValue, convertValue, loading, LoaderComponent } = useCurrency()

  const effectiveSourceCurrency = sourceCurrency || "USD";
  const convertedValue = convertValue(value, effectiveSourceCurrency);

  return (
    <span className={className}>
      {loading ? <span className='inline'><LoaderComponent /></span> : formatValue(convertedValue)}
    </span>
  );
}

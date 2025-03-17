"use client"

import { createContext, useContext, useState, ReactNode } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

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

type CurrencyContextType = {
  currency: Currency
  setCurrency: (currency: Currency) => void
  formatValue: (value: number) => string
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined)

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>(currencies[0])

  const formatValue = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.code,
    }).format(value)
  }

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatValue }}>
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
  const { currency, setCurrency } = useCurrency()

  return (
    <Select
      value={currency.code}
      onValueChange={(value) => {
        const selectedCurrency = currencies.find((c) => c.code === value)
        if (selectedCurrency) {
          setCurrency(selectedCurrency)
        }
      }}
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
}

export function CurrencyDisplay({ value, className }: CurrencyDisplayProps) {
  const { formatValue } = useCurrency()

  return <span className={className}>{formatValue(value)}</span>
}

"use client"

import { createContext, useContext, useState, ReactNode, useEffect, ComponentType, useCallback } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Loader } from 'lucide-react'
import { cn } from '@/lib/utils'

export type Currency = {
  code: string
  name: string
}

const CURRENCY_NAMES_API_URL = "https://cdn.jsdelivr.net/npm/@fgrreloaded/currencies@latest/v1/currencies.json";

const DefaultLoader = () => <Loader className='w-4 h-4 animate-spin dark:text-gray-300' />;

type CurrencyContextType = {
  currency: Currency | undefined
  setCurrency: (currency: Currency) => void
  formatValue: (value: number) => string
  convertValue: (value: number, fromCurrencyCode?: string) => number
  rates: Record<string, number>
  loadingRates: boolean
  ratesError: string | null
  LoaderComponent: ComponentType
  availableCurrencies: Currency[]
  loadingCurrencies: boolean
  currenciesError: string | null
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined)

interface CurrencyProviderProps {
  children: ReactNode;
  loaderComponent?: ComponentType;
  fixedBaseCurrencyCode: string;
  initialRates?: Record<string, number>;
  fetchRatesFunction?: () => Promise<Record<string, number>>;
  refetchIntervalMs?: number;
  defaultSelectedCurrencyCode?: string;
}

export function CurrencyProvider({
  children,
  loaderComponent = DefaultLoader,
  fixedBaseCurrencyCode,
  initialRates,
  fetchRatesFunction,
  refetchIntervalMs,
  defaultSelectedCurrencyCode = "INR",
}: CurrencyProviderProps) {
  const [availableCurrencies, setAvailableCurrencies] = useState<Currency[]>([])
  const [loadingCurrencies, setLoadingCurrencies] = useState(true);
  const [currenciesError, setCurrenciesError] = useState<string | null>(null);

  const [currency, setCurrency] = useState<Currency | undefined>(undefined)
  const [rates, setRates] = useState<Record<string, number>>(initialRates || {})
  const [loadingRates, setLoadingRates] = useState(false)
  const [ratesError, setRatesError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCurrencyNames = async () => {
      setLoadingCurrencies(true);
      setCurrenciesError(null);
      try {
        const response = await fetch(CURRENCY_NAMES_API_URL);
        if (!response.ok) {
          throw new Error(`Failed to fetch currency names: ${response.statusText}`);
        }
        const data: Record<string, string> = await response.json();
        const loadedCurrencies: Currency[] = Object.entries(data).map(([code, name]) => ({
          code,
          name,
        }));
        setAvailableCurrencies(loadedCurrencies);

        const defaultCurrency = loadedCurrencies.find(c => c.code === defaultSelectedCurrencyCode) || loadedCurrencies[0];
        if (defaultCurrency) {
          setCurrency(defaultCurrency);
        }

      } catch (err) {
        console.error("Currency names API error:", err);
        setCurrenciesError(err instanceof Error ? err.message : "Failed to fetch currency names");
      } finally {
        setLoadingCurrencies(false);
      }
    };
    fetchCurrencyNames();
  }, [defaultSelectedCurrencyCode]);


  const handleFetchRates = useCallback(async () => {
    if (!fetchRatesFunction) {
      if (initialRates) {
        setRates(initialRates);
      }
      return;
    }

    setLoadingRates(true)
    setRatesError(null)
    try {
      const newRates = await fetchRatesFunction()
      setRates(newRates)
      console.log(`Fetched new rates relative to base: ${fixedBaseCurrencyCode}`, newRates)
    } catch (err) {
      console.error("User provided fetchRatesFunction error:", err)
      setRatesError(err instanceof Error ? err.message : "Failed to fetch exchange rates via provided function")
    } finally {
      setLoadingRates(false)
    }
  }, [fetchRatesFunction, fixedBaseCurrencyCode, initialRates]);

  useEffect(() => {
    handleFetchRates();

    if (fetchRatesFunction && refetchIntervalMs && refetchIntervalMs > 0) {
      const intervalId = setInterval(handleFetchRates, refetchIntervalMs)
      return () => clearInterval(intervalId)
    }
  }, [handleFetchRates, refetchIntervalMs, fetchRatesFunction])


  const convertValue = useCallback((value: number, fromCurrencyCode?: string) => {
    if (!currency || Object.keys(rates).length === 0) return value;

    const toCurrencyCode = currency.code;
    const sourceCurrencyCode = fromCurrencyCode || fixedBaseCurrencyCode;

    if (sourceCurrencyCode === toCurrencyCode) return value;

    const effectiveRates = { ...rates, [fixedBaseCurrencyCode]: 1.0 };

    const fromRate = effectiveRates[sourceCurrencyCode];
    const toRate = effectiveRates[toCurrencyCode];

    if (typeof fromRate !== 'number' || typeof toRate !== 'number') {
      console.warn(`Cannot convert: Missing rate for ${sourceCurrencyCode} or ${toCurrencyCode}. Rates available:`, effectiveRates);
      return value;
    }

    const valueInBase = value / fromRate;
    return valueInBase * toRate;

  }, [currency, rates, fixedBaseCurrencyCode]);


  const formatValue = (value: number) => {
    if (!currency) return String(value);
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.code,
      currencyDisplay: 'symbol',
    }).format(value)
  }

  const handleCurrencyChange = (newCurrency: Currency) => {
    setCurrency(newCurrency);
  }

  const LoaderToShow = loaderComponent;

  if (loadingCurrencies) {
    return <div className="flex justify-center items-center h-screen"><LoaderToShow /> <span className="ml-2">Loading currencies...</span></div>;
  }

  if (currenciesError) {
    return <div className="text-red-500 p-4">Error loading currencies: {currenciesError}</div>;
  }

  if (!currency && !loadingCurrencies && availableCurrencies.length > 0) {
    setCurrency(availableCurrencies.find(c => c.code === defaultSelectedCurrencyCode) || availableCurrencies[0]);
  }


  return (
    <CurrencyContext.Provider value={{
      currency,
      setCurrency: handleCurrencyChange,
      formatValue,
      convertValue,
      rates,
      loadingRates,
      ratesError,
      LoaderComponent: loaderComponent,
      availableCurrencies,
      loadingCurrencies,
      currenciesError
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

export function CurrencySelector({ className }: { className?: string }) {
  const { currency, setCurrency, loadingRates, availableCurrencies, loadingCurrencies } = useCurrency()

  if (loadingCurrencies || !currency) {
    return <Select disabled={true}><SelectTrigger className={cn("w-[180px]", className)}><SelectValue placeholder="Loading currencies..." /></SelectTrigger></Select>;
  }

  return (
    <Select
      value={currency.code}
      onValueChange={(value) => {
        const selectedCurrency = availableCurrencies.find((c) => c.code === value)
        if (selectedCurrency) {
          setCurrency(selectedCurrency)
        }
      }}
      disabled={loadingRates || availableCurrencies.length === 0}
    >
      <SelectTrigger className={cn("w-[180px]", className)}>
        <SelectValue placeholder="Select currency" />
      </SelectTrigger>
      <SelectContent>
        {availableCurrencies.map((c) => (
          <SelectItem key={c.code} value={c.code}>
            {c.name} ({c.code})
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
  sourceCurrency = "INR"
}: CurrencyDisplayProps) {
  const { formatValue, convertValue, loadingRates, LoaderComponent, currency } = useCurrency()

  const convertedValue = currency ? convertValue(value, sourceCurrency) : value;

  return (
    <span className={cn("dark:text-gray-100", className)}>
      {loadingRates ? <span className='inline dark:text-gray-300'><LoaderComponent /></span> : formatValue(convertedValue)}
    </span>
  );
}

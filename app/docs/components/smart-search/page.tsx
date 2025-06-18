"use client"
import React from 'react'
import { SmartSearch } from '@/registry/new-york/smart-search/smart-search'
import ComponentDocTemplate from '../../_components/ComponentDocTemplate'

export default function SmartSearchPage() {
  const propsData = [
    {
      name: 'className',
      type: 'string',
      defaultValue: "''",
      description: 'Additional class names for styling',
    },
    {
      name: 'placeholder',
      type: 'string',
      defaultValue: "'Search...'",
      description: 'Placeholder text for the search input',
    },
    {
      name: 'debounceMs',
      type: 'number',
      defaultValue: '300',
      description: 'Debounce delay in milliseconds for search queries',
    },
    {
      name: 'urlSync',
      type: 'boolean',
      defaultValue: 'true',
      description: 'Whether to sync search query with URL parameters',
    },
    {
      name: 'onSearch',
      type: '(query: string, filters?: string[]) => void',
      defaultValue: 'undefined',
      description: 'Callback function called when search query changes',
    },
    {
      name: 'searchHistory',
      type: 'boolean',
      defaultValue: 'false',
      description: 'Whether to enable search history functionality',
    },
    {
      name: 'suggestions',
      type: 'string[]',
      defaultValue: '[]',
      description: 'Array of search suggestions to display',
    },
    {
      name: 'onSuggestionSelect',
      type: '(suggestion: string) => void',
      defaultValue: 'undefined',
      description: 'Callback function called when a suggestion is selected',
    },
    {
      name: 'searchFilters',
      type: 'SearchFilter[]',
      defaultValue: '[]',
      description: 'Array of filter buttons to display above the search input',
    },
    {
      name: 'onFilterChange',
      type: '(filters: string[]) => void',
      defaultValue: 'undefined',
      description: 'Callback function called when search filters change',
    },
    {
      name: 'resultCount',
      type: 'number',
      defaultValue: 'undefined',
      description: 'Number of search results to display as a badge',
    },
    {
      name: 'maxHistoryItems',
      type: 'number',
      defaultValue: '10',
      description: 'Maximum number of history items to store',
    },
  ]

  const features = [
    {
      icon: (
        <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: "Real-time Search",
      description: "Debounced search input with real-time results and visual feedback for search states."
    },
    {
      icon: (
        <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Search History",
      description: "Optional search history with local storage persistence and easy access to recent searches."
    },
    {
      icon: (
        <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z" />
        </svg>
      ),
      title: "Smart Filters",
      description: "Configurable filter chips and advanced query parsing with filter:value syntax support."
    },
    {
      icon: (
        <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Keyboard Navigation",
      description: "Full keyboard support with arrow keys for navigation, Enter to select, and Ctrl+/ to focus."
    }
  ]

  const usageCode = `import { SmartSearch } from "@/components/smart-search"

export default function MyComponent() {
  return (
    <SmartSearch />
  )
}`

  return (
    <ComponentDocTemplate
      title="Smart Search"
      description="An intelligent search component with suggestions, history, filters, and keyboard navigation."
      previewComponent={<SmartSearch className='w-full max-w-md' />}
      githubPath="registry/new-york/smart-search/smart-search.tsx"
      usageCode={usageCode}
      usageDescription="The Smart Search component provides a comprehensive search interface with features like debounced input, search suggestions, history tracking, and customizable filters."
      propsData={propsData}
      features={features}
      componentName="https://rigidui.com/registry/smart-search"
    />
  )
}
'use client'

import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

const componentsData = [
  {
    category: 'Core',
    items: [
      {
        name: 'Location Picker',
        href: '/docs/components/location-picker',
        description: 'Interactive component for selecting geographic locations with map integration',
        image: '/images/components/location-picker.png'
      },
      {
        name: 'Currency Manager',
        href: '/docs/components/currency-manager',
        description: 'Manage and convert between different currencies with real-time exchange rates',
        image: '/images/components/currency-manager.png'
      },
      {
        name: 'Language Switcher',
        href: '/docs/components/language-switcher',
        description: 'Seamlessly switch between multiple languages in your application',
        image: '/images/components/language-switcher.png'
      },
    ]
  },
  {
    category: 'Form Elements',
    items: [
      {
        name: 'Button',
        href: '/docs/components/button',
        description: 'Customizable button component with various states and styles',
        image: '/images/components/button.png'
      },
      {
        name: 'Input',
        href: '/docs/components/input',
        description: 'Text field component with validation and formatting options',
        image: '/images/components/input.png'
      },
      {
        name: 'Select',
        href: '/docs/components/select',
        description: 'Dropdown selection component with search and multi-select capabilities',
        image: '/images/components/select.png'
      },
      {
        name: 'Checkbox',
        href: '/docs/components/checkbox',
        description: 'Interactive checkbox component with support for indeterminate state',
        image: '/images/components/checkbox.png'
      },
    ]
  },
  {
    category: 'Feedback',
    items: [
      {
        name: 'Alert',
        href: '/docs/components/alert',
        description: 'Informational alert component for user notifications',
        image: '/images/components/alert.png'
      },
      {
        name: 'Toast',
        href: '/docs/components/toast',
        description: 'Temporary notification messages that appear and disappear automatically',
        image: '/images/components/toast.png'
      },
      {
        name: 'Progress',
        href: '/docs/components/progress',
        description: 'Visual indicator for displaying progress of operations',
        image: '/images/components/progress.png'
      },
    ]
  }
]

interface ComponentCardProps {
  name: string
  description: string
  image: string
  href?: string
}

const ComponentCard = ({ name, description, image, href }: ComponentCardProps) => {
  return (
    <Link href={href || '#'} className="block">
      <div className="group border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-primary/50 hover:scale-[1.02] bg-card h-full">
        <div className="bg-muted/40 p-6 h-48 flex items-center justify-center relative overflow-hidden">
          <div className="w-full h-full bg-contain bg-center bg-no-repeat transform group-hover:scale-105 transition-transform duration-500"
            style={{ backgroundImage: `url(${image})` }} />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-5 border-t border-border/50">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{name}</h3>
            <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:transform group-hover:translate-x-1 transition-all" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        </div>
      </div>
    </Link>
  )
}

const Components = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredCategories = componentsData
    .map(category => ({
      ...category,
      items: category.items.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }))
    .filter(category => category.items.length > 0)

  return (
    <div className="container max-w-7xl mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
          Components
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore our library of beautifully crafted UI components designed for building
          modern, responsive interfaces with minimal effort.
        </p>
      </div>

      <div className="mb-10 flex justify-center">
        <div className="relative w-full max-w-md">
          <Input
            type="search"
            placeholder="Search components..."
            className="w-full pr-10 shadow-sm focus-visible:ring-primary/50"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <svg
            className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {filteredCategories.length > 0 ? (
        <>
          {filteredCategories.map((category) => (
            <div key={category.category} className="mb-16">
              <div className="flex items-center mb-6">
                <h2 className="text-2xl font-bold">{category.category}</h2>
                <div className="ml-3 h-px bg-border flex-grow"></div>
                <Badge variant="outline" className="ml-2">{category.items.length}</Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item) => (
                  <ComponentCard key={item.name} {...item} />
                ))}
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="text-center py-20 bg-muted/30 rounded-lg">
          <svg
            className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-lg font-medium text-muted-foreground">No components found matching your search.</p>
          <p className="text-muted-foreground mt-1">Try a different search term or browse all components.</p>
        </div>
      )}
    </div>
  )
}

export default Components
'use client'

import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { PasswordStrengthMeter } from '@/registry/new-york/strength-meter/strength-meter'
import { Check, FileCode, FolderClosed, FolderOpen, Globe, MapPin } from 'lucide-react'

const componentsData = [
  {
    category: 'Core',
    items: [
      {
        name: 'Location Picker',
        href: '/docs/components/location-picker',
        description: 'Interactive component for selecting geographic locations with map integration',
        image: '/globe.svg'
      },
      {
        name: 'Currency Manager',
        href: '/docs/components/currency-manager',
        description: 'Manage and convert between different currencies with real-time exchange rates',
        image: '/window.svg'
      },
      {
        name: 'Language Switcher',
        href: '/docs/components/language-switcher',
        description: 'Seamlessly switch between multiple languages in your application',
        image: '/globe.svg'
      },
    ]
  },
  {
    category: 'Form Elements',
    items: [
      {
        name: 'Password Strength Meter',
        href: '/docs/components/strength-meter',
        description: 'Interactive password strength meter with customizable requirements and visual feedback',
        image: '/images/components/strength-meter.png'
      },
      {
        name: 'File Uploader',
        href: '/docs/components/file-uploader',
        description: 'Drag and drop file uploader with progress indicators and validation',
        image: '/file.svg'
      },
      {
        name: 'Multi-Step Form Wrapper',
        href: '/docs/components/multi-step-form-wrapper',
        description: 'Guide users through complex forms with a structured step-by-step interface',
        image: '/window.svg'
      },
    ]
  },
  {
    category: 'Data Display',
    items: [
      {
        name: 'File Explorer',
        href: '/docs/components/file-explorer',
        description: 'Interactive file system explorer with syntax highlighting and directory navigation',
        image: '/file.svg'
      }
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
  const renderDemo = () => {
    switch (name) {
      case 'Password Strength Meter':
        return (
          <div className="p-4 flex items-center justify-center">
            <PasswordStrengthMeter
              placeholder="Enter password"
              showRequirements={false}
              segments={4}
              className="max-w-[220px]"
            />
          </div>
        )
      case 'File Explorer':
        return (
          <div className="p-2">
            <Card className="p-3">
              <div className="flex items-center justify-between mb-3 border-b pb-2">
                <div className="flex items-center">
                  <FolderOpen className="h-4 w-4 mr-2 text-yellow-500" />
                  <span className="text-sm font-medium">Project Files</span>
                </div>
                <div className="text-xs text-muted-foreground">3 items</div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center pl-2 py-1 rounded-md hover:bg-muted/50 cursor-pointer">
                  <FolderClosed className="h-4 w-4 mr-2 text-yellow-500" />
                  <span className="text-sm">src</span>
                </div>
                <div className="flex items-center pl-6 py-1 rounded-md hover:bg-muted/50 cursor-pointer">
                  <FileCode className="h-4 w-4 mr-2 text-blue-500" />
                  <span className="text-sm">app.js</span>
                </div>
                <div className="flex items-center pl-2 py-1 rounded-md hover:bg-muted/50 cursor-pointer">
                  <FileCode className="h-4 w-4 mr-2 text-green-500" />
                  <span className="text-sm">README.md</span>
                </div>
              </div>
            </Card>
          </div>
        )
      case 'Multi-Step Form Wrapper':
        return (
          <div className="p-2">
            <Card className="p-3">
              <div className="flex justify-between items-center mb-2">
                {[1, 2, 3].map((step) => (
                  <div key={step} className={`flex items-center ${step === 1 ? 'text-primary' : 'text-muted-foreground'}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${step === 1 ? 'bg-primary text-white' : 'border border-muted-foreground'}`}>
                      {step === 1 ? <Check className="w-3 h-3" /> : step}
                    </div>
                    {step < 3 && <div className={`w-8 h-px mx-1 ${step === 1 ? 'bg-primary' : 'bg-muted-foreground'}`} />}
                  </div>
                ))}
              </div>
              <h4 className="text-sm font-medium">Personal Info</h4>
              <div className="mt-2">
                <Input placeholder="Name" className="mb-2 h-8 text-sm" />
                <Input placeholder="Email" className="h-8 text-sm" />
              </div>
              <div className="mt-3 flex justify-between">
                <Button size="sm" variant="outline" disabled>Back</Button>
                <Button size="sm">Next</Button>
              </div>
            </Card>
          </div>
        )
      case 'File Uploader':
        return (
          <div className="p-3">
            <Card className="flex items-center justify-center p-4 border-dashed border-2 text-center">
              <div>
                <div className="mx-auto w-10 h-10 rounded-full bg-muted flex items-center justify-center mb-2">
                  <svg className="w-5 h-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <div className="text-xs text-muted-foreground">
                  Drag & Drop or Browse
                </div>
              </div>
            </Card>
          </div>
        )
      case 'Currency Manager':
        return (
          <div className="p-3">
            <Card className="p-3">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-medium">Currency Dashboard</h3>
                <div className="flex items-center space-x-1 bg-muted rounded-full px-2 py-1">
                  <span className="text-xs font-medium">USD</span>
                  <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center border-b pb-1">
                  <span className="text-xs">Product:</span>
                  <Badge variant="outline" className="text-xs">$199.99</Badge>
                </div>
                <div className="flex justify-between items-center border-b pb-1">
                  <span className="text-xs">€ (EUR):</span>
                  <span className="text-xs">€185.40</span>
                </div>
                <div className="flex justify-between items-center border-b pb-1">
                  <span className="text-xs">£ (GBP):</span>
                  <span className="text-xs">£158.65</span>
                </div>
                <Button size="sm" variant="outline" className="w-full text-xs h-7 mt-1">Change Currency</Button>
              </div>
            </Card>
          </div>
        )
      case 'Language Switcher':
        return (
          <div className="p-3">
            <Card className="p-3">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <Globe className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm font-medium">Language</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="justify-start text-sm h-8" size="sm">
                  <span className="mr-2 opacity-70">🇺🇸</span> English
                </Button>
                <Button variant="ghost" className="justify-start text-sm h-8" size="sm">
                  <span className="mr-2 opacity-70">🇪🇸</span> Español
                </Button>
              </div>
            </Card>
          </div>
        )
      case 'Location Picker':
        return (
          <div className="p-3">
            <Card className="p-3">
              <div className="mb-3 text-sm font-medium flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                Select Location
              </div>
              <Input className="text-sm h-8" placeholder="Search location..." />
            </Card>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <Link href={href || '#'} className="block">
      <div className="group border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-primary/50 hover:scale-[1.02] bg-card h-full">
        <div className="bg-muted/40 p-4 min-h-48 flex items-center justify-center relative overflow-hidden">
          {renderDemo() || (
            <div className="w-full h-full bg-contain bg-center bg-no-repeat transform group-hover:scale-105 transition-transform duration-500"
              style={{ backgroundImage: `url(${image})` }} />
          )}
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
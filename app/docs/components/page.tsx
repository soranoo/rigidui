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
          <div className="p-4 flex items-center justify-center bg-slate-50 dark:bg-slate-800/50 rounded-lg h-full">
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
          <div className="p-2 h-full">
            <Card className="p-3 shadow-sm bg-white dark:bg-slate-900 h-full">
              <div className="flex items-center justify-between mb-3 border-b border-slate-200 dark:border-slate-700 pb-2">
                <div className="flex items-center">
                  <FolderOpen className="h-4 w-4 mr-2 text-amber-500" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Project Files</span>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">3 items</div>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center pl-2 py-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">
                  <FolderClosed className="h-4 w-4 mr-2 text-amber-500" />
                  <span className="text-sm text-slate-600 dark:text-slate-300">src</span>
                </div>
                <div className="flex items-center pl-6 py-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">
                  <FileCode className="h-4 w-4 mr-2 text-sky-500" />
                  <span className="text-sm text-slate-600 dark:text-slate-300">app.js</span>
                </div>
                <div className="flex items-center pl-2 py-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">
                  <FileCode className="h-4 w-4 mr-2 text-emerald-500" />
                  <span className="text-sm text-slate-600 dark:text-slate-300">README.md</span>
                </div>
              </div>
            </Card>
          </div>
        )
      case 'Multi-Step Form Wrapper':
        return (
          <div className="p-2 h-full">
            <Card className="p-3 shadow-sm bg-white dark:bg-slate-900 h-full flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-2.5">
                  {[1, 2, 3].map((step) => (
                    <React.Fragment key={step}>
                      <div className={`flex items-center ${step === 1 ? 'text-primary' : 'text-slate-500 dark:text-slate-400'}`}>
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${step === 1 ? 'bg-primary text-white' : 'border border-slate-400 dark:border-slate-600'}`}>
                          {step === 1 ? <Check className="w-3 h-3" /> : step}
                        </div>
                      </div>
                      {step < 3 && <div className={`flex-1 h-0.5 mx-1.5 ${step === 1 ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-700'}`} />}
                    </React.Fragment>
                  ))}
                </div>
                <h4 className="text-sm font-medium text-slate-700 dark:text-slate-200">Personal Info</h4>
                <div className="mt-2 space-y-1.5">
                  <Input placeholder="Name" className="mb-1.5 h-8 text-xs" />
                  <Input placeholder="Email" className="h-8 text-xs" />
                </div>
              </div>
              <div className="mt-3 flex justify-end">
                <Button size="sm" className="text-xs">Next</Button>
              </div>
            </Card>
          </div>
        )
      case 'File Uploader':
        return (
          <div className="p-3 h-full">
            <Card className="flex items-center justify-center p-4 border-dashed border-2 border-slate-300 dark:border-slate-700 text-center hover:border-primary/70 transition-colors duration-200 bg-slate-50 dark:bg-slate-800/50 h-full">
              <div>
                <div className="mx-auto w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center mb-2 text-primary">
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Drag & Drop or <span className="text-primary font-medium">Browse</span>
                </div>
              </div>
            </Card>
          </div>
        )
      case 'Currency Manager':
        return (
          <div className="p-3 h-full">
            <Card className="p-3 shadow-sm bg-white dark:bg-slate-900 h-full">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-medium text-slate-700 dark:text-slate-200">Currency Dashboard</h3>
                <div className="flex items-center space-x-1 bg-slate-100 dark:bg-slate-800 rounded-full px-2 py-0.5 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-300">USD</span>
                  <svg className="w-3 h-3 text-slate-500 dark:text-slate-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-700 pb-1.5">
                  <span className="text-xs text-slate-500 dark:text-slate-400">Product:</span>
                  <Badge variant="outline" className="text-xs px-1.5 py-0.5 border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300">$199.99</Badge>
                </div>
                <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-700 pb-1.5">
                  <span className="text-xs text-slate-500 dark:text-slate-400">€ (EUR):</span>
                  <span className="text-xs text-slate-700 dark:text-slate-200">€185.40</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-700 pb-1.5">
                  <span className="text-xs text-slate-500 dark:text-slate-400">£ (GBP):</span>
                  <span className="text-xs text-slate-700 dark:text-slate-200">£158.65</span>
                </div>
                <Button size="sm" variant="outline" className="w-full text-xs h-7 mt-1.5 border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300">Change Currency</Button>
              </div>
            </Card>
          </div>
        )
      case 'Language Switcher':
        return (
          <div className="p-3 h-full">
            <Card className="p-3 shadow-sm bg-white dark:bg-slate-900 h-full">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <Globe className="h-4 w-4 mr-2 text-slate-500 dark:text-slate-400" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Language</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="justify-start text-xs h-8 border-primary/50 bg-primary/5 text-primary hover:bg-primary/10" size="sm">
                  <span className="mr-1.5 opacity-90 text-sm">🇺🇸</span> English
                </Button>
                <Button variant="ghost" className="justify-start text-xs h-8 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800" size="sm">
                  <span className="mr-1.5 opacity-90 text-sm">🇪🇸</span> Español
                </Button>
              </div>
            </Card>
          </div>
        )
      case 'Location Picker':
        return (
          <div className="p-3 h-full">
            <Card className="p-3 shadow-sm bg-white dark:bg-slate-900 h-full">
              <div className="mb-2.5 text-sm font-medium flex items-center text-slate-700 dark:text-slate-200">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                Select Location
              </div>
              <Input className="text-xs h-8" placeholder="Search location..." />
            </Card>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <Link href={href || '#'} className="block h-full">
      <div className="group border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-primary/30 bg-white dark:bg-transparent h-full flex flex-col">
        <div className="bg-transparent p-1 min-h-[180px] md:min-h-[200px] flex items-center justify-center relative overflow-hidden group-hover:opacity-95 transition-opacity duration-300">
          {renderDemo() || (
            <div className="w-full h-full bg-contain bg-center bg-no-repeat transform group-hover:scale-105 transition-transform duration-500"
              style={{ backgroundImage: `url(${image})` }} />
          )}
        </div>
        <div className="p-4 md:p-5 border-t border-slate-200 dark:border-slate-800/60 flex-grow">
          <div className="flex items-start justify-between">
            <h3 className="text-base md:text-lg font-semibold text-slate-800 dark:text-slate-100 group-hover:text-primary transition-colors">{name}</h3>
            <svg className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-primary group-hover:transform group-hover:translate-x-0.5 transition-all mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">{description}</p>
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
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 min-h-screen">
      <div className="mb-12 md:mb-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-slate-900 dark:text-slate-50">
          Components
        </h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
          Explore our library of beautifully crafted UI components designed for building
          modern, responsive interfaces with minimal effort.
        </p>
      </div>

      <div className="mb-10 md:mb-12 flex justify-center">
        <div className="relative w-full max-w-lg">
          <Input
            type="search"
            placeholder="Search components (e.g., 'File Uploader', 'Location Picker')"
            className="w-full pr-12 py-2.5 text-sm shadow-sm border-slate-300 dark:border-slate-700 focus-visible:ring-primary/80 bg-white dark:bg-slate-800 placeholder-slate-400 dark:placeholder-slate-500 rounded-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <svg
            className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 dark:text-slate-500"
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
            <div key={category.category} className="mb-12 md:mb-16">
              <div className="flex items-center mb-6 md:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100">{category.category}</h2>
                <div className="ml-4 h-px bg-slate-200 dark:bg-slate-700/50 flex-grow"></div>
                <Badge variant="outline" className="ml-3 px-2.5 py-1 text-sm border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800">{category.items.length}</Badge>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {category.items.map((item) => (
                  <ComponentCard key={item.name} {...item} />
                ))}
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="text-center py-16 md:py-20 bg-white dark:bg-slate-800/30 rounded-xl shadow-sm">
          <svg
            className="w-16 h-16 mx-auto text-slate-400 dark:text-slate-500/70 mb-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-lg font-medium text-slate-600 dark:text-slate-300">No components found matching your search.</p>
          <p className="text-slate-500 dark:text-slate-400 mt-1.5 text-sm">Try a different search term or explore all components.</p>
        </div>
      )}
    </div>
  )
}

export default Components
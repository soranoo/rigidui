'use client'
import React from 'react'
import Link from 'next/link'
import { Search } from './_components/Search'

const Docs = () => {
  const categories = [
    { name: 'Getting Started', href: '/docs/getting-started', description: 'Installation and basic usage of RigidUI' },
    { name: 'Components', href: '/docs/components', description: 'UI components available in RigidUI' },
    { name: 'Hooks', href: '/docs/hooks', description: 'Custom hooks for state management and more' },
    { name: 'Utilities', href: '/docs/utilities', description: 'Helper functions and utilities' },
  ]

  return (
    <div className="w-full">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">RigidUI Documentation</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          A comprehensive guide to using RigidUI components and utilities for building
          beautiful and accessible user interfaces.
        </p>
        <div className="mt-8 max-w-md mx-auto">
          <Search placeholder="Search documentation..." />
        </div>
      </div>

      <div className="space-y-4">
        {categories.map((category) => (
          <Link href={category.href} key={category.name}>
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition duration-200 dark:hover:shadow-gray-800/30">
              <h2 className="text-xl font-semibold mb-2 dark:text-white">{category.name}</h2>
              <p className="text-gray-600 dark:text-gray-300">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 border-t border-gray-200 dark:border-gray-700 pt-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">Popular Components</h2>
        <div className="space-y-3">
          {['Button', 'Card', 'Modal', 'Dropdown', 'Tabs', 'Form'].map((component) => (
            <Link href={`/docs/components/${component.toLowerCase()}`} key={component}>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md dark:hover:shadow-gray-800/30 transition duration-200">
                <h3 className="font-medium dark:text-white">{component}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Docs
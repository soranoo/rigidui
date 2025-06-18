'use client'

import React, { useState } from 'react'
import { SmartSearch } from '@/registry/new-york/smart-search/smart-search'
import { FileText, Image as ImageIcon, Video, User, Tag, Calendar } from 'lucide-react'

// Demo data types
interface DemoItem {
  id: string
  title: string
  description: string
  type: 'documents' | 'images' | 'videos' | 'users' | 'tags'
  author: string
  category: string
  tags: string[]
  createdAt: Date
  content: string
}

const DemoPage = () => {
  const [searchResults, setSearchResults] = useState<DemoItem[]>([])
  const [searchCount, setSearchCount] = useState(0)
  const [lastSearchTime, setLastSearchTime] = useState<string>('')
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [selectedSuggestion, setSelectedSuggestion] = useState<string>('')

  // Comprehensive demo data
  const demoData: DemoItem[] = [
    {
      id: '1',
      title: 'React Component Best Practices',
      description: 'A comprehensive guide to building reusable React components',
      type: 'documents',
      author: 'john_doe',
      category: 'tutorial',
      tags: ['react', 'javascript', 'frontend', 'components'],
      createdAt: new Date('2024-01-15'),
      content: 'Learn how to create maintainable and reusable React components with TypeScript'
    },
    {
      id: '2',
      title: 'TypeScript Advanced Patterns',
      description: 'Deep dive into advanced TypeScript patterns and utilities',
      type: 'documents',
      author: 'jane_smith',
      category: 'advanced',
      tags: ['typescript', 'patterns', 'advanced', 'programming'],
      createdAt: new Date('2024-02-10'),
      content: 'Explore conditional types, mapped types, and utility types in TypeScript'
    },
    {
      id: '3',
      title: 'UI Component Library',
      description: 'Beautiful and accessible UI components for modern web apps',
      type: 'images',
      author: 'design_team',
      category: 'design',
      tags: ['ui', 'design', 'components', 'accessibility'],
      createdAt: new Date('2024-01-20'),
      content: 'A collection of carefully crafted UI components with dark mode support'
    },
    {
      id: '4',
      title: 'Next.js Routing Tutorial',
      description: 'Complete guide to Next.js App Router and dynamic routing',
      type: 'videos',
      author: 'dev_academy',
      category: 'tutorial',
      tags: ['nextjs', 'routing', 'react', 'tutorial'],
      createdAt: new Date('2024-03-05'),
      content: 'Master the new App Router in Next.js 13+ with practical examples'
    },
    {
      id: '5',
      title: 'CSS Grid Layout Masterclass',
      description: 'Everything you need to know about CSS Grid',
      type: 'documents',
      author: 'css_expert',
      category: 'tutorial',
      tags: ['css', 'grid', 'layout', 'responsive'],
      createdAt: new Date('2024-02-28'),
      content: 'Create complex layouts with CSS Grid and learn best practices'
    },
    {
      id: '6',
      title: 'JavaScript Promises & Async/Await',
      description: 'Mastering asynchronous JavaScript programming',
      type: 'videos',
      author: 'js_ninja',
      category: 'intermediate',
      tags: ['javascript', 'async', 'promises', 'programming'],
      createdAt: new Date('2024-01-30'),
      content: 'Learn how to handle asynchronous operations in JavaScript effectively'
    },
    {
      id: '7',
      title: 'Tailwind CSS Components',
      description: 'Pre-built components using Tailwind CSS',
      type: 'images',
      author: 'ui_designer',
      category: 'design',
      tags: ['tailwind', 'css', 'components', 'design'],
      createdAt: new Date('2024-03-15'),
      content: 'Beautiful component designs built with Tailwind CSS utility classes'
    },
    {
      id: '8',
      title: 'Web Accessibility Guide',
      description: 'Making web applications accessible to everyone',
      type: 'documents',
      author: 'a11y_advocate',
      category: 'accessibility',
      tags: ['accessibility', 'a11y', 'web', 'inclusive'],
      createdAt: new Date('2024-02-15'),
      content: 'Learn WCAG guidelines and how to implement accessible web interfaces'
    },
    {
      id: '9',
      title: 'Database Design Patterns',
      description: 'Common patterns for database schema design',
      type: 'documents',
      author: 'db_architect',
      category: 'backend',
      tags: ['database', 'sql', 'design', 'patterns'],
      createdAt: new Date('2024-03-01'),
      content: 'Best practices for designing scalable and maintainable database schemas'
    },
    {
      id: '10',
      title: 'React Testing Strategies',
      description: 'Comprehensive testing approach for React applications',
      type: 'videos',
      author: 'test_guru',
      category: 'testing',
      tags: ['react', 'testing', 'jest', 'cypress'],
      createdAt: new Date('2024-02-20'),
      content: 'Learn unit testing, integration testing, and e2e testing for React apps'
    }
  ]

  const suggestions = [
    'react components',
    'typescript patterns',
    'tailwind css',
    'next.js routing',
    'javascript async',
    'css grid',
    'web accessibility',
    'database design',
    'testing strategies',
    'ui design'
  ]

  const searchFilters = [
    { key: 'documents', label: 'Documents', icon: <FileText className="w-3 h-3" /> },
    { key: 'images', label: 'Images', icon: <ImageIcon className="w-3 h-3" /> },
    { key: 'videos', label: 'Videos', icon: <Video className="w-3 h-3" /> },
    { key: 'users', label: 'Users', icon: <User className="w-3 h-3" /> },
    { key: 'tags', label: 'Tags', icon: <Tag className="w-3 h-3" /> },
    { key: 'recent', label: 'Recent', icon: <Calendar className="w-3 h-3" /> }
  ]

  const handleSearch = (query: string, filters: string[] = []) => {
    const timestamp = new Date().toLocaleTimeString()
    setLastSearchTime(timestamp)
    setSearchCount(prev => prev + 1)

    console.log('Search query:', query, 'Filters:', filters, 'at', timestamp)

    if (query.trim()) {
      let filteredResults = demoData

      // Filter by search query
      if (query.trim()) {
        const searchTerm = query.toLowerCase()
        filteredResults = filteredResults.filter(item =>
          item.title.toLowerCase().includes(searchTerm) ||
          item.description.toLowerCase().includes(searchTerm) ||
          item.content.toLowerCase().includes(searchTerm) ||
          item.author.toLowerCase().includes(searchTerm) ||
          item.category.toLowerCase().includes(searchTerm) ||
          item.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        )
      }

      // Apply active filters
      if (filters.length > 0) {
        filteredResults = filteredResults.filter(item => {
          return filters.some(filter => {
            // Handle type filters
            if (['documents', 'images', 'videos', 'users', 'tags'].includes(filter)) {
              return item.type === filter
            }

            // Handle recent filter (last 30 days)
            if (filter === 'recent') {
              const thirtyDaysAgo = new Date()
              thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
              return item.createdAt > thirtyDaysAgo
            }

            // Handle custom filter syntax like "author:john" or "type:document"
            if (filter.includes(':')) {
              const [filterType, filterValue] = filter.split(':')
              switch (filterType) {
                case 'author':
                  return item.author.toLowerCase().includes(filterValue.toLowerCase())
                case 'type':
                  return item.type === filterValue
                case 'category':
                  return item.category.toLowerCase().includes(filterValue.toLowerCase())
                case 'tag':
                  return item.tags.some(tag => tag.toLowerCase().includes(filterValue.toLowerCase()))
                default:
                  return false
              }
            }

            return false
          })
        })
      }

      setSearchResults(filteredResults)
    } else {
      setSearchResults([])
    }
  }

  const handleFilterChange = (filters: string[]) => {
    setActiveFilters(filters)
    console.log('Active filters changed:', filters)
  }

  const handleSuggestionSelect = (suggestion: string) => {
    setSelectedSuggestion(suggestion)
    console.log('Suggestion selected:', suggestion)
  }

  const resetDemo = () => {
    setSearchResults([])
    setSearchCount(0)
    setLastSearchTime('')
    setActiveFilters([])
    setSelectedSuggestion('')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Enhanced Smart Search Demo</h1>
          <p className="text-lg text-gray-600 mb-2">
            Powered by TanStack Pacer with Advanced Features
          </p>
          <p className="text-sm text-gray-500">
            Try search history, suggestions, filters, and keyboard navigation!
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">🚀 Enhanced Interactive Search</h2>

          <SmartSearch
            placeholder="Search with filters (try 'type:image' or 'author:john')..."
            debounceMs={300}
            onSearch={handleSearch}
            onFilterChange={handleFilterChange}
            onSuggestionSelect={handleSuggestionSelect}
            searchHistory={true}
            suggestions={suggestions}
            searchFilters={searchFilters}
            resultCount={searchResults.length}
            maxHistoryItems={8}
            className="mb-6"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <h3 className="font-medium text-blue-900">Search Executions</h3>
              <p className="text-2xl font-bold text-blue-600">{searchCount}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <h3 className="font-medium text-green-900">Last Search</h3>
              <p className="text-lg font-semibold text-green-600">
                {lastSearchTime || 'None yet'}
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <h3 className="font-medium text-purple-900">Results Found</h3>
              <p className="text-2xl font-bold text-purple-600">{searchResults.length}</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg text-center">
              <h3 className="font-medium text-orange-900">Active Filters</h3>
              <p className="text-2xl font-bold text-orange-600">{activeFilters.length}</p>
            </div>
          </div>

          {activeFilters.length > 0 && (
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <h3 className="font-medium text-blue-900 mb-2">Active Filters:</h3>
              <div className="flex flex-wrap gap-2">
                {activeFilters.map((filter, index) => (
                  <span key={index} className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-sm">
                    {filter}
                  </span>
                ))}
              </div>
            </div>
          )}

          {selectedSuggestion && (
            <div className="bg-green-50 p-4 rounded-lg mb-4">
              <h3 className="font-medium text-green-900 mb-1">Last Selected Suggestion:</h3>
              <p className="text-green-700 font-medium">{selectedSuggestion}</p>
            </div>
          )}

          {searchResults.length > 0 && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-3">Search Results ({searchResults.length} found):</h3>
              <div className="space-y-3">
                {searchResults.map((result, index) => (
                  <div key={result.id} className="bg-white rounded border p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-blue-600 font-medium">#{index + 1}</span>
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {result.type}
                        </span>
                        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                          {result.category}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">
                        {result.createdAt.toLocaleDateString()}
                      </span>
                    </div>

                    <h4 className="font-semibold text-gray-900 mb-1">{result.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{result.description}</p>
                    <p className="text-xs text-gray-500 mb-3">{result.content}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">By: {result.author}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {result.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span key={tagIndex} className="text-xs bg-green-100 text-green-600 px-1.5 py-0.5 rounded">
                            {tag}
                          </span>
                        ))}
                        {result.tags.length > 3 && (
                          <span className="text-xs text-gray-400">+{result.tags.length - 3} more</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={resetDemo}
            className="mt-4 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
          >
            Reset Demo
          </button>
        </div>

        {/* Enhanced Features Info */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">✨ Enhanced Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">🔍 Smart Search Features:</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Search History:</strong> Saves and shows recent searches</li>
                <li>• <strong>Auto-suggestions:</strong> Provides relevant search suggestions</li>
                <li>• <strong>Smart Filters:</strong> Click filter buttons or use syntax like &ldquo;type:image&rdquo;</li>
                <li>• <strong>Keyboard Navigation:</strong> Use arrow keys to navigate suggestions</li>
                <li>• <strong>Visual States:</strong> Loading, success, and error states</li>
                <li>• <strong>Results Count:</strong> Shows number of results in a badge</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">⌨️ Keyboard Shortcuts:</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Ctrl/Cmd + /:</strong> Focus search input</li>
                <li>• <strong>↑ ↓ Arrow Keys:</strong> Navigate suggestions</li>
                <li>• <strong>Enter:</strong> Select suggestion or search</li>
                <li>• <strong>Escape:</strong> Close suggestions dropdown</li>
                <li>• <strong>Clear Button:</strong> X button to clear search</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Testing Guide */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">🧪 Test the Search Functionality</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Try These Searches:</h3>
              <div className="space-y-2 text-sm">
                <div className="bg-gray-50 p-2 rounded">
                  <strong>Basic Search:</strong>
                  <ul className="mt-1 text-gray-600">
                    <li>• &ldquo;react&rdquo; - Find React-related content</li>
                    <li>• &ldquo;typescript&rdquo; - Find TypeScript resources</li>
                    <li>• &ldquo;css&rdquo; - Find CSS tutorials</li>
                    <li>• &ldquo;testing&rdquo; - Find testing guides</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <strong>Filter Syntax:</strong>
                  <ul className="mt-1 text-gray-600">
                    <li>• &ldquo;author:john_doe&rdquo; - Find content by John</li>
                    <li>• &ldquo;type:videos&rdquo; - Find only videos</li>
                    <li>• &ldquo;category:tutorial&rdquo; - Find tutorials</li>
                    <li>• &ldquo;tag:react&rdquo; - Find React tagged items</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Available Data:</h3>
              <div className="space-y-2 text-sm">
                <div className="bg-blue-50 p-2 rounded">
                  <strong>Content Types:</strong>
                  <p className="text-gray-600 mt-1">
                    {demoData.reduce((acc, item) => {
                      acc[item.type] = (acc[item.type] || 0) + 1
                      return acc
                    }, {} as Record<string, number>)
                      ? Object.entries(demoData.reduce((acc, item) => {
                        acc[item.type] = (acc[item.type] || 0) + 1
                        return acc
                      }, {} as Record<string, number>))
                        .map(([type, count]) => `${type}: ${count}`)
                        .join(', ')
                      : 'Loading...'}
                  </p>
                </div>
                <div className="bg-green-50 p-2 rounded">
                  <strong>Authors:</strong>
                  <p className="text-gray-600 mt-1">
                    {Array.from(new Set(demoData.map(item => item.author))).join(', ')}
                  </p>
                </div>
                <div className="bg-purple-50 p-2 rounded">
                  <strong>Categories:</strong>
                  <p className="text-gray-600 mt-1">
                    {Array.from(new Set(demoData.map(item => item.category))).join(', ')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Syntax Guide */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">🏷️ Filter Syntax Guide</h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700 mb-3">
              You can use special syntax in your search queries to activate filters automatically:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Filter Examples:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li><code className="bg-gray-200 px-1 rounded">type:image</code> - Search for images</li>
                  <li><code className="bg-gray-200 px-1 rounded">author:john</code> - Search by author</li>
                  <li><code className="bg-gray-200 px-1 rounded">category:docs</code> - Search in documents</li>
                  <li><code className="bg-gray-200 px-1 rounded">tag:urgent</code> - Search with tags</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Combined Search:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li><code className="bg-gray-200 px-1 rounded">react type:docs</code></li>
                  <li><code className="bg-gray-200 px-1 rounded">tutorial author:admin</code></li>
                  <li><code className="bg-gray-200 px-1 rounded">design tag:featured</code></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Details */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">🔧 Technical Implementation</h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              This enhanced search component demonstrates advanced patterns using <strong>TanStack Pacer</strong>
              with additional features for a production-ready search experience.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h3 className="font-medium mb-2">Key Technical Features:</h3>
              <ul className="space-y-1 text-sm">
                <li><strong>LocalStorage Integration:</strong> Persistent search history across sessions</li>
                <li><strong>Smart Filter Parsing:</strong> Automatic detection of filter syntax in queries</li>
                <li><strong>Keyboard Accessibility:</strong> Full keyboard navigation support</li>
                <li><strong>Click Outside Detection:</strong> Automatic dropdown closure</li>
                <li><strong>URL State Synchronization:</strong> Search state persists in URL</li>
                <li><strong>Visual Feedback:</strong> Loading states, result counts, and filter indicators</li>
              </ul>
            </div>
            <p className="text-sm text-gray-600">
              Perfect for implementing search functionality in dashboards, content management systems,
              and data-heavy applications that require advanced filtering and user-friendly search experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DemoPage
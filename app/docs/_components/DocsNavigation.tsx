'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PanelLeft, ChevronDown, ChevronRight, PanelRight } from "lucide-react"
import Image from 'next/image'
import { cn } from '@/lib/utils'
import DocsSearch from './DocsSearch'
import { ModeToggle } from '@/components/mode-toggle'

interface NavigationItem {
  title: string
  href: string
  items?: NavigationItem[]
}

const navigationItems: NavigationItem[] = [
  {
    title: 'Getting Started',
    href: '/docs/getting-started',
    items: [
      { title: 'Installation', href: '/docs/getting-started/installation' },
      { title: 'Usage', href: '/docs/getting-started/usage' },
    ]
  },
  {
    title: 'Components',
    href: '/docs/components',
    items: [
      { title: 'Location Picker', href: '/docs/components/location-picker' },
      { title: 'Infinite Scroll', href: '/docs/components/infinite-scroll' },
      { title: 'Currency Manager', href: '/docs/components/currency-manager' },
      { title: 'File Explorer', href: '/docs/components/file-explorer' },
      { title: 'Multi-Step Form Wrapper', href: '/docs/components/multi-step-form-wrapper' },
      { title: 'Password Strength Meter', href: '/docs/components/strength-meter' },
      { title: 'File Uploader', href: '/docs/components/file-uploader' },
    ]
  },
  {
    title: 'Hooks',
    href: '/docs/hooks',
    items: [
      { title: 'useToggle', href: '/docs/hooks/use-toggle' },
      { title: 'useLocalStorage', href: '/docs/hooks/use-local-storage' },
    ]
  },
  {
    title: 'Utilities',
    href: '/docs/utilities',
    items: [
      { title: 'Colors', href: '/docs/utilities/colors' },
      { title: 'Typography', href: '/docs/utilities/typography' },
    ]
  },
]

export function DocsNavigation({
  className,
  onToggleSidebar,
  collapsed = false,
  isMobile = false
}: {
  className?: string,
  onToggleSidebar?: () => void,
  collapsed?: boolean,
  isMobile?: boolean
}) {
  const pathname = usePathname()
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})
  const [isCommandPanelOpen, setIsCommandPanelOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault()
        setIsCommandPanelOpen(prev => !prev)
      }
      if (event.key === 'Escape' && isCommandPanelOpen) {
        setIsCommandPanelOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isCommandPanelOpen])

  const toggleSection = (href: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [href]: !prev[href]
    }))
  }

  const NavItem = ({ item }: { item: NavigationItem }) => {
    const isActive = pathname === item.href

    const manualExpansionState = expandedSections[item.href];
    const autoExpandCondition = item.items && item.items.length > 0 && pathname.startsWith(item.href);
    const isExpanded = manualExpansionState !== undefined ? manualExpansionState : autoExpandCondition;

    return (
      <div className="mb-2">
        <div className="flex items-center">
          {item.items && (
            <button
              onClick={() => toggleSection(item.href)}
              className="mr-1 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
            >
              {isExpanded ?
                <ChevronDown className="w-4 h-4" /> :
                <ChevronRight className="w-4 h-4" />
              }
            </button>
          )}
          <Link
            href={item.href}
            className={`flex-grow px-3 py-2 text-sm rounded-md transition-all ${isActive
              ? 'bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 font-medium dark:from-blue-900/20 dark:to-blue-800/20 dark:text-blue-300'
              : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-gray-100 dark:hover:bg-gray-800/50'
              }`}
          >
            {item.title}
          </Link>
        </div>
        {item.items && isExpanded && (
          <div className="ml-4 pl-2 border-l border-gray-200 dark:border-gray-700 mt-1 space-y-1">
            {item.items.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className={`block px-3 py-1.5 text-sm rounded-md transition-colors ${pathname === child.href
                  ? 'text-blue-600 font-medium dark:text-blue-400'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800/30'
                  }`}
              >
                {child.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <nav className={`p-4 bg-white dark:bg-background transition-colors duration-200 ${className} ${collapsed && !isMobile ? 'px-2' : ''}`}>
      <div className={`flex items-center ${collapsed && !isMobile ? 'justify-center flex-col space-y-4' : 'justify-between'} mb-4`}>
        <Link href="/" className="flex items-center">
          <span className={cn('p-2 rounded-md mr-2', collapsed && "mr-0")}>
            {collapsed ? <Image src="/short-logo.png" width={100} height={100} alt="Short Logo" /> :
              <Image src="/logo.png" alt="Logo" width={100} height={100} />
            }
          </span>
        </Link>
        <div className={`flex items-center ${collapsed && !isMobile ? 'flex-col space-y-4' : 'space-x-2'}`}>
          <div className='hidden md:block'>
            <ModeToggle />
          </div>
          {!isMobile && (
            <button
              onClick={onToggleSidebar}
              className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle sidebar"
            >
              {collapsed ? <PanelRight className="w-5 h-5" /> : <PanelLeft className="w-5 h-5" />}
            </button>
          )}
        </div>
      </div>
      <DocsSearch collapsed={collapsed && !isMobile} />


      {(!collapsed || isMobile) && (
        <div className="space-y-1">
          {navigationItems.map((item) => (
            <NavItem key={item.href} item={item} />
          ))}
        </div>
      )}
    </nav>
  )
}

import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className="fixed top-1.5 left-0 w-screen h-16 group bg-transparent z-50 flex gap-2 items-center justify-center">
      <div className="h-full w-[8vw] bg-white rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200" style={{
        boxShadow: "rgba(17, 12, 46, 0.15) 0px 40px 80px 0px"
      }}>
        <div className="w-8 h-8 flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-7 h-7 text-blue-600" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
      </div>

      <div className="h-full w-[80vw] bg-white rounded-lg flex items-center justify-center px-8" style={{
        boxShadow: "rgba(17, 12, 46, 0.15) 0px 40px 80px 0px"
      }}>
        <nav className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 group">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9,22 9,12 15,12 15,22" />
            </svg>
            <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">Home</span>
          </Link>

          <Link href="/docs" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 group">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14,2 14,8 20,8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10,9 9,9 8,9" />
            </svg>
            <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">Docs</span>
          </Link>

          <Link href="/docs/examples" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 group">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="M21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
            </svg>
            <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">Examples</span>
          </Link>

          <Link href="/docs/components" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 group">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">Components</span>
          </Link>
        </nav>
      </div>

      <div className="h-full w-[8vw] bg-white rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200" style={{
        boxShadow: "rgba(17, 12, 46, 0.15) 0px 40px 80px 0px"
      }}>
        <a href="#" className="w-8 h-8 flex items-center justify-center group">
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-gray-700 group-hover:text-black transition-colors" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default Sidebar
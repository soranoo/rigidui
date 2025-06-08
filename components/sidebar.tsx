import Link from 'next/link'
import React, { startTransition } from 'react'
import { useTheme } from "next-themes"
import localFont from 'next/font/local'
const navFont = localFont({ src: '../app/34.otf' })


const Sidebar = () => {
  const { setTheme, resolvedTheme } = useTheme()

  return (
    <div style={navFont.style} className="fixed top-1.5 left-0 w-screen h-16 bg-transparent z-50 flex gap-2 items-center justify-center">
      <div className="h-full w-[8vw] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 dark:from-blue-600 dark:via-purple-600 dark:to-pink-600 rounded-lg flex items-center justify-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl dark:shadow-gray-900/50 dark:hover:shadow-gray-900/70 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 dark:from-blue-300/30 dark:via-purple-300/30 dark:to-pink-300/30 animate-pulse"></div>
        <div className="w-8 h-8 flex items-center justify-center relative z-10">
          <svg viewBox="0 0 24 24" className="w-7 h-7 text-white drop-shadow-lg" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
      </div>

      <div className="h-full w-[80vw] bg-transparent backdrop-blur-lg rounded-lg flex items-center justify-center px-8 relative overflow-hidden shadow-light dark:shadow-none">
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 dark:from-blue-400/20 dark:via-transparent dark:to-purple-400/20"></div>
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 20">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gray-300 dark:text-gray-600" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <nav className="flex items-center lg:gap-6 relative z-10">
          <Link href="/" className="flex items-center lg:gap-3 gap-1.5 px-4 py-2.5 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200 group border border-transparent hover:border-blue-100 dark:hover:border-blue-800 hover:shadow-sm dark:hover:shadow-blue-900/20">
            <div className="p-1.5 rounded-md bg-blue-100 dark:bg-blue-900/50 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/60 transition-colors">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-blue-600 dark:text-blue-400 transition-colors" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9,22 9,12 15,12 15,22" />
              </svg>
            </div>
            <span className="lg:text-sm text-xs max-sm:hidden font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
              Home
            </span>
          </Link>

          <Link href="/docs" className="flex items-center lg:gap-3 gap-1.5 px-4 py-2.5 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-all duration-200 group border border-transparent hover:border-emerald-100 dark:hover:border-emerald-800 hover:shadow-sm dark:hover:shadow-emerald-900/20">
            <div className="p-1.5 rounded-md bg-emerald-100 dark:bg-emerald-900/50 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800/60 transition-colors">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-emerald-600 dark:text-emerald-400 transition-colors" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14,2 14,8 20,8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10,9 9,9 8,9" />
              </svg>
            </div>
            <span className="lg:text-sm text-xs max-sm:hidden font-medium text-gray-700 dark:text-gray-300 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
              Docs
            </span>
          </Link>

          <Link href="/docs/components" className="flex items-center lg:gap-3 gap-1.5 px-4 py-2.5 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all duration-200 group border border-transparent hover:border-purple-100 dark:hover:border-purple-800 hover:shadow-sm dark:hover:shadow-purple-900/20">
            <div className="p-1.5 rounded-md bg-purple-100 dark:bg-purple-900/50 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/60 transition-colors">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-purple-600 dark:text-purple-400 transition-colors" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <span className="lg:text-sm text-xs max-sm:hidden font-medium text-gray-700 dark:text-gray-300 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">
              Components
            </span>
          </Link>

          <div className="lg:ml-4 ml-2 lg:pl-4 pl-2 border-l border-gray-200 dark:border-gray-700">
            <button
              onClick={() => {
                startTransition(() => {
                  setTheme(resolvedTheme === "dark" ? "light" : "dark")
                })
              }
              }
              className="flex items-center lg:gap-3 gap-1.5 px-4 py-2.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200 group border border-transparent hover:border-slate-100 dark:hover:border-slate-700 hover:shadow-sm dark:hover:shadow-slate-900/20"
            >
              <div className="p-1.5 rounded-md bg-slate-100 dark:bg-slate-800/60 group-hover:bg-slate-200 dark:group-hover:bg-slate-700/80 transition-colors">
                <div className="relative w-4 h-4 overflow-hidden">
                  <svg
                    viewBox="0 0 24 24"
                    className={`absolute inset-0 w-4 h-4 text-amber-500 dark:text-amber-400 transition-all duration-500 ${resolvedTheme === "dark" ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                      }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                  </svg>

                  <svg
                    viewBox="0 0 24 24"
                    className={`absolute inset-0 w-4 h-4 text-slate-600 dark:text-slate-300 transition-all duration-500 ${resolvedTheme === "dark" ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                      }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                </div>
              </div>
              <span className="lg:text-sm text-xs max-sm:hidden font-medium text-gray-700 dark:text-gray-300 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
                {resolvedTheme === "dark" ? 'Light' : 'Dark'}
              </span>
            </button>
          </div>
        </nav>
      </div >

      <div className="h-full w-[8vw] dark:bg-transparent backdrop-blur-lg rounded-lg flex items-center justify-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl dark:shadow-black/50 dark:hover:shadow-black/70 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200/20 via-gray-200/20 to-gray-400/20 dark:from-gray-600/30 dark:via-gray-500/30 dark:to-gray-800/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <a href="#" className="w-8 h-8 flex items-center justify-center group relative z-10">
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-black dark:text-white transition-colors drop-shadow-lg" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
    </div >
  )
}

export default Sidebar
"use client"
import Link from "next/link"
import { ArrowRight, Code, Grid3X3 } from "lucide-react"

import localFont from 'next/font/local'
const titleFont = localFont({ src: './Nippo-Variable.ttf' })


const components = [
  {
    name: "location-picker",
    title: "Location Picker",
    description: "A location locator component with map integration",
    color: "from-blue-500/10 to-indigo-500/10",
    borderColor: "border-blue-500/20",
    hoverColor: "hover:border-blue-500/40",
    textColor: "text-blue-600",
    hoverTextColor: "group-hover:text-blue-500"
  },
  {
    name: "currency-manager",
    title: "Currency Manager",
    description: "A currency conversion and management component",
    color: "from-green-500/10 to-emerald-500/10",
    borderColor: "border-green-500/20",
    hoverColor: "hover:border-green-500/40",
    textColor: "text-green-600",
    hoverTextColor: "group-hover:text-green-500"
  },
  {
    name: "file-explorer",
    title: "File Explorer",
    description: "A file system explorer with code preview",
    color: "from-purple-500/10 to-violet-500/10",
    borderColor: "border-purple-500/20",
    hoverColor: "hover:border-purple-500/40",
    textColor: "text-purple-600",
    hoverTextColor: "group-hover:text-purple-500"
  },
  {
    name: "multi-step-form-wrapper",
    title: "Multi-Step Form",
    description: "A multi-step form wrapper with progress tracking",
    color: "from-orange-500/10 to-red-500/10",
    borderColor: "border-orange-500/20",
    hoverColor: "hover:border-orange-500/40",
    textColor: "text-orange-600",
    hoverTextColor: "group-hover:text-orange-500"
  },
  {
    name: "strength-meter",
    title: "Strength Meter",
    description: "A password strength meter component",
    color: "from-rose-500/10 to-pink-500/10",
    borderColor: "border-rose-500/20",
    hoverColor: "hover:border-rose-500/40",
    textColor: "text-rose-600",
    hoverTextColor: "group-hover:text-rose-500"
  },
  {
    name: "file-uploader",
    title: "File Uploader",
    description: "A file uploader with drag & drop and image cropping",
    color: "from-teal-500/10 to-cyan-500/10",
    borderColor: "border-teal-500/20",
    hoverColor: "hover:border-teal-500/40",
    textColor: "text-teal-600",
    hoverTextColor: "group-hover:text-teal-500"
  },
  {
    name: "infinite-scroll",
    title: "Infinite Scroll",
    description: "An infinite scroll component for large datasets",
    color: "from-indigo-500/10 to-blue-500/10",
    borderColor: "border-indigo-500/20",
    hoverColor: "hover:border-indigo-500/40",
    textColor: "text-indigo-600",
    hoverTextColor: "group-hover:text-indigo-500"
  },
  {
    name: "notification-center",
    title: "Notification Center",
    description: "A notification center with real-time updates",
    color: "from-yellow-500/10 to-amber-500/10",
    borderColor: "border-yellow-500/20",
    hoverColor: "hover:border-yellow-500/40",
    textColor: "text-yellow-600",
    hoverTextColor: "group-hover:text-yellow-500"
  },
  {
    name: "smart-form",
    title: "Smart Form",
    description: "An intelligent form component with validation",
    color: "from-emerald-500/10 to-green-500/10",
    borderColor: "border-emerald-500/20",
    hoverColor: "hover:border-emerald-500/40",
    textColor: "text-emerald-600",
    hoverTextColor: "group-hover:text-emerald-500"
  },
  {
    name: "smart-search",
    title: "Smart Search",
    description: "A smart search component with autocomplete",
    color: "from-sky-500/10 to-blue-500/10",
    borderColor: "border-sky-500/20",
    hoverColor: "hover:border-sky-500/40",
    textColor: "text-sky-600",
    hoverTextColor: "group-hover:text-sky-500"
  },
  {
    name: "draggable-dashboard",
    title: "Draggable Dashboard",
    description: "A draggable dashboard with customizable widgets",
    color: "from-violet-500/10 to-purple-500/10",
    borderColor: "border-violet-500/20",
    hoverColor: "hover:border-violet-500/40",
    textColor: "text-violet-600",
    hoverTextColor: "group-hover:text-violet-500"
  },
  {
    name: "image-loader",
    title: "Image Loader",
    description: "An advanced image loading component with effects",
    color: "from-pink-500/10 to-rose-500/10",
    borderColor: "border-pink-500/20",
    hoverColor: "hover:border-pink-500/40",
    textColor: "text-pink-600",
    hoverTextColor: "group-hover:text-pink-500"
  },
  {
    name: "guided-tour",
    title: "Guided Tour",
    description: "An interactive guided tour for user onboarding",
    color: "from-amber-500/10 to-orange-500/10",
    borderColor: "border-amber-500/20",
    hoverColor: "hover:border-amber-500/40",
    textColor: "text-amber-600",
    hoverTextColor: "group-hover:text-amber-500"
  }
]

export default function ExamplesHome() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed dark:hidden left-0 inset-0 rotate-45 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div>
      <div className="fixed dark:hidden left-0 inset-0 -rotate-45 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div>
      <div className="fixed hidden dark:block h-full w-full bg-black">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#50657036,#000)]"></div>
      </div>


      <main className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center sm:mb-16 mb-12">
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-gray-500 to-purple-500 dark:from-blue-400 dark:via-primary dark:to-violet-500 py-2 mx-auto text-center animate-gradient relative w-1/2" style={titleFont.style}>
            RigidUI
            <span className="relative inline-block">
              <span className="absolute inset-0 [-webkit-text-stroke:1.5px_rgba(0,0,0,0.5)] dark:[-webkit-text-stroke:1.5px_rgba(255,255,255,0.5)]">Examples</span>
              Examples
            </span>
            <span className="absolute -inset-1 blur-xl bg-gradient-to-r from-indigo-600/20 via-primary/20 to-purple-600/20 dark:from-blue-400/20 dark:via-primary/20 dark:to-violet-500/20 -z-10"></span>
          </h1>
          <p className="sm:text-xl text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed mt-4">
            Explore interactive examples of complex UI components built with shadcn/ui and React
          </p>
        </div>

        <div className="mb-12">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-primary dark:to-violet-500 py-2 relative" style={titleFont.style}>
              Components
            </h2>
            <p className="text-muted-foreground mt-px mb-3">
              Explore our collection of interactive UI components
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {components.map((component) => (
            <Link
              key={component.name}
              href={`/examples/${component.name}`}
              className="group"
            >
              <div className={`
                relative p-6 rounded-xl border transition-all duration-300
                bg-gradient-to-br ${component.color} ${component.borderColor} ${component.hoverColor}
                hover:shadow-lg hover:-translate-y-1 backdrop-blur-sm
              `}>
                <div className="flex items-start justify-between mb-4">
                  <div className={`
                    w-12 h-12 rounded-lg bg-gradient-to-r from-background/50 to-background/30
                    flex items-center justify-center border border-border/50
                  `}>
                    <Code className={`w-6 h-6 ${component.textColor}`} />
                  </div>
                  <div className={`
                    flex items-center gap-1 text-xs px-2 py-1 rounded-full
                    bg-background/50 backdrop-blur-sm border border-border/50
                    ${component.hoverTextColor} transition-colors
                  `}>
                    <span>View</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {component.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {component.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400 py-2 relative" style={titleFont.style}>
              Custom Hooks
            </h2>
            <p className="text-muted-foreground mt-px mb-3">
              Reusable React hooks for common functionality
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Link href="/examples/use-location" className="group">
              <div className="relative p-6 rounded-xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-green-500/10 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-background/50 to-background/30 flex items-center justify-center border border-border/50">
                    <Grid3X3 className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 group-hover:text-emerald-500 transition-colors">
                    <span>View</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">useLocation</h3>
                <p className="text-sm text-muted-foreground">A custom hook to manage location data</p>
              </div>
            </Link>

            <Link href="/examples/use-currency" className="group">
              <div className="relative p-6 rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-background/50 to-background/30 flex items-center justify-center border border-border/50">
                    <Grid3X3 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 group-hover:text-blue-500 transition-colors">
                    <span>View</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">useCurrency</h3>
                <p className="text-sm text-muted-foreground">A custom hook for currency management</p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
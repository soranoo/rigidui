"use client"
import * as React from "react"
import Link from "next/link"
import { ArrowRight, Code, Component, Layers, Package, Terminal, Zap, CheckCircle, ExternalLink, Sparkles, Stars, Grid3X3, MousePointer, Command, Cpu, Gauge } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"

export default function Home() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = React.useState(false)

  React.useEffect(() => {
    setIsLoaded(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="flex flex-col min-h-svh relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-background to-purple-50 dark:from-slate-950 dark:via-background dark:to-indigo-950" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-blue-500/10 to-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 via-transparent to-purple-500/5 rounded-full blur-3xl animate-spin-slow" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div
        className="fixed w-6 h-6 bg-primary/20 rounded-full pointer-events-none z-50 transition-all duration-100 blur-sm"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${isLoaded ? 1 : 0})`
        }}
      />

      <nav className="border-b sticky top-0 z-40 backdrop-blur-xl bg-background/70 shadow-lg border-primary/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
          <Link href="/" className="font-bold text-xl flex items-center gap-3 group">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="rigidui"
                width={45}
                height={45}
                className="group-hover:scale-110 transition-all duration-300 drop-shadow-lg"
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-purple-500/50 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent font-bold">RigidUI</span>
              <span className="text-xs bg-gradient-to-r from-primary/80 to-purple-500/80 text-primary rounded-full px-2 py-0.5 font-semibold">v0.1.0</span>
            </div>
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/docs" className="text-sm font-medium text-muted-foreground hover:text-primary transition-all hover:scale-105 relative group">
              Docs
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="/docs/components" className="text-sm font-medium text-muted-foreground hover:text-primary transition-all hover:scale-105 relative group">
              Components
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 group-hover:w-full transition-all duration-300" />
            </Link>
            <a
              href="https://github.com/FgrReloaded/rigidui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-all hover:scale-105 relative group"
            >
              GitHub
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 group-hover:w-full transition-all duration-300" />
            </a>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <section className="py-32 px-6 bg-gradient-to-br from-background via-background to-muted/30 relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />

        <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-lg rotate-12 animate-pulse" />
        <div className="absolute top-40 right-20 w-24 h-24 border border-purple-500/20 rounded-full animate-spin-slow" />
        <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-gradient-to-br from-primary/10 to-transparent rotate-45 animate-bounce-slow" />

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-12 relative z-10">
          <div className="group">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/15 via-primary/10 to-purple-500/15 text-primary px-6 py-3 rounded-full text-sm font-medium mb-4 shadow-2xl shadow-primary/10 backdrop-blur-sm border border-primary/20 hover:scale-105 transition-all duration-300 cursor-pointer">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent font-semibold">Now in Beta</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </div>
          </div>

          <div className="relative">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-primary via-purple-600 to-pink-600 dark:from-blue-400 dark:via-primary dark:via-violet-500 dark:to-pink-500 py-4 animate-gradient-x relative z-10 leading-none">
              Rigid<span className="text-primary drop-shadow-2xl">UI</span>
            </h1>
            <div className="absolute -inset-4 blur-3xl bg-gradient-to-r from-indigo-600/30 via-primary/30 via-purple-600/30 to-pink-600/30 dark:from-blue-400/30 dark:via-primary/30 dark:via-violet-500/30 dark:to-pink-500/30 -z-10 animate-pulse"></div>
            <div className="absolute -inset-8 blur-3xl bg-gradient-to-r from-indigo-600/20 via-primary/20 via-purple-600/20 to-pink-600/20 dark:from-blue-400/20 dark:via-primary/20 dark:via-violet-500/20 dark:to-pink-500/20 -z-20 animate-gradient-x"></div>
          </div>

          <div className="max-w-4xl">
            <p className="text-xl md:text-3xl text-muted-foreground leading-relaxed mb-6">
              The most <span className="text-foreground font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">sophisticated</span> collection of
              <span className="text-foreground font-bold"> enterprise-grade</span> UI components
            </p>
            <p className="text-lg md:text-xl text-muted-foreground/80 max-w-3xl mx-auto">
              Built for developers who demand <span className="text-primary font-semibold">perfection</span>,
              designed for applications that need to <span className="text-primary font-semibold">impress</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mt-8">
            <Link
              href="/docs/getting-started"
              className="group relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary to-purple-600 text-white px-10 py-4 font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl shadow-primary/25 hover:shadow-3xl hover:shadow-primary/40 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-purple-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link
              href="/docs/components"
              className="group relative inline-flex items-center justify-center rounded-xl border-2 border-primary/30 bg-background/80 backdrop-blur-sm px-10 py-4 font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:border-primary/60 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                <Component className="w-5 h-5" />
                Browse Components
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-gradient-to-br from-muted/30 via-background to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-gradient-to-r from-primary/15 to-purple-500/15 px-4 py-2 rounded-full border border-primary/20 mb-6">
              <Stars className="w-4 h-4" />
              <span>Enterprise Benefits</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Why RigidUI Dominates
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-xl leading-relaxed">
              Built for enterprises that demand <span className="text-primary font-semibold">excellence</span>,
              designed for developers who won't <span className="text-primary font-semibold">compromise</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Component className="h-12 w-12 text-primary" />,
                title: "Advanced Components",
                description: "Enterprise-grade patterns with micro-interactions, accessibility, and performance optimization built-in",
                color: "primary",
                features: ["40+ Components", "TypeScript", "Accessibility"]
              },
              {
                icon: <Zap className="h-12 w-12 text-yellow-500" />,
                title: "Lightning Performance",
                description: "Optimized for speed with lazy loading, virtualization, and intelligent caching mechanisms",
                color: "yellow-500",
                features: ["< 1ms render", "Virtual scrolling", "Smart caching"]
              },
              {
                icon: <Layers className="h-12 w-12 text-blue-500" />,
                title: "Infinitely Composable",
                description: "Mix, match, and extend components with a powerful composition API and plugin system",
                color: "blue-500",
                features: ["Plugin system", "Custom hooks", "Flexible API"]
              },
              {
                icon: <Package className="h-12 w-12 text-green-500" />,
                title: "Zero Dependencies",
                description: "No external dependencies, no bloat. Pure React components that work everywhere",
                color: "green-500",
                features: ["0 dependencies", "Tree shaking", "Lightweight"]
              },
              {
                icon: <Code className="h-12 w-12 text-purple-500" />,
                title: "Developer Experience",
                description: "Intuitive APIs, comprehensive docs, and TypeScript support for maximum productivity",
                color: "purple-500",
                features: ["IntelliSense", "Auto-complete", "Error hints"]
              },
              {
                icon: <Cpu className="h-12 w-12 text-pink-500" />,
                title: "Production Ready",
                description: "Battle-tested in enterprise applications with monitoring, analytics, and error boundaries",
                color: "pink-500",
                features: ["Error boundaries", "Analytics", "Monitoring"]
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-card/50 backdrop-blur-xl p-8 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-3xl overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}/5 via-transparent to-${feature.color}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-transparent to-purple-500/20 p-px opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-full h-full bg-card/80 rounded-2xl" />
                </div>

                <div className="relative z-10">
                  <div className={`mb-6 p-4 bg-${feature.color}/10 rounded-xl w-fit group-hover:bg-${feature.color}/20 transition-all duration-500 group-hover:scale-110 shadow-lg`}>
                    {feature.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {feature.features.map((feat, i) => (
                      <span
                        key={i}
                        className={`text-xs px-3 py-1 rounded-full bg-${feature.color}/10 text-${feature.color} border border-${feature.color}/20 font-medium`}
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "40+", label: "Components", icon: <Component className="w-6 h-6" /> },
              { value: "99.9%", label: "Uptime", icon: <Gauge className="w-6 h-6" /> },
              { value: "<1ms", label: "Render Time", icon: <Zap className="w-6 h-6" /> },
              { value: "0", label: "Dependencies", icon: <Package className="w-6 h-6" /> }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />

        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/20 rounded-2xl rotate-12 animate-spin-slow" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-primary/20 rounded-full animate-pulse" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-gradient-to-r from-primary/15 to-purple-500/15 px-4 py-2 rounded-full border border-primary/20 mb-6">
              <Grid3X3 className="w-4 h-4" />
              <span>Component Showcase</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Enterprise Components
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-xl leading-relaxed">
              Professional-grade components that handle the most <span className="text-primary font-semibold">complex</span> enterprise scenarios
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <Link href="/docs/components/data-grid" className="group">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 via-primary/5 to-purple-500/10 rounded-3xl border border-primary/20 overflow-hidden hover:border-primary/40 transition-all duration-500 relative shadow-2xl hover:shadow-3xl hover:-translate-y-2">
                <div className="absolute inset-0 p-8 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                    <h3 className="font-bold text-xl">Advanced Data Grid</h3>
                    <div className="flex items-center gap-2 text-xs bg-background/70 backdrop-blur-sm text-muted-foreground px-3 py-1 rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  <div className="flex-1 bg-card/90 backdrop-blur-sm rounded-2xl border border-primary/10 overflow-hidden shadow-inner">
                    <div className="w-full h-full p-4">
                      <div className="grid grid-cols-5 gap-3 mb-3 pb-2 border-b border-primary/10">
                        {["Name", "Status", "Progress", "Date", "Actions"].map((header, i) => (
                          <div key={i} className="text-xs font-semibold text-primary/80 flex items-center gap-1">
                            {header}
                            {i < 3 && <div className="w-1 h-3 bg-primary/20 rounded" />}
                          </div>
                        ))}
                      </div>

                      {Array(6).fill(0).map((_, i) => (
                        <div key={i} className="grid grid-cols-5 gap-3 mb-2 p-2 rounded-lg hover:bg-primary/5 transition-colors group/row">
                          <div className="text-xs font-medium">Project {i + 1}</div>
                          <div className="flex items-center gap-1">
                            <div className={`w-2 h-2 rounded-full ${i % 3 === 0 ? 'bg-green-500' : i % 3 === 1 ? 'bg-yellow-500' : 'bg-red-500'}`} />
                            <span className="text-xs">{i % 3 === 0 ? 'Active' : i % 3 === 1 ? 'Pending' : 'Inactive'}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-full bg-muted/30 rounded-full h-1.5 overflow-hidden">
                              <div className={`h-full bg-gradient-to-r from-primary to-purple-500 rounded-full transition-all duration-1000 group-hover:animate-pulse`} style={{ width: `${20 + (i * 15)}%` }} />
                            </div>
                            <span className="text-xs text-muted-foreground">{20 + (i * 15)}%</span>
                          </div>
                          <div className="text-xs text-muted-foreground">Jan {10 + i}</div>
                          <div className="flex gap-1">
                            <div className="w-4 h-4 bg-primary/20 rounded border group-hover/row:bg-primary/40 transition-colors" />
                            <div className="w-4 h-4 bg-muted/40 rounded border group-hover/row:bg-muted/60 transition-colors" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </Link>

            <Link href="/docs/components/multi-step-form" className="group">
              <div className="aspect-[4/3] bg-gradient-to-br from-purple-500/10 via-primary/5 to-indigo-500/10 rounded-3xl border border-purple-500/20 overflow-hidden hover:border-purple-500/40 transition-all duration-500 relative shadow-2xl hover:shadow-3xl hover:-translate-y-2">
                <div className="absolute inset-0 p-8 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                    <h3 className="font-bold text-xl">Multi-Step Wizard</h3>
                    <div className="flex items-center gap-2 text-xs bg-background/70 backdrop-blur-sm text-muted-foreground px-3 py-1 rounded-full group-hover:bg-purple-500/10 group-hover:text-purple-500 transition-colors">
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  <div className="flex-1 bg-card/90 backdrop-blur-sm rounded-2xl border border-purple-500/10 overflow-hidden shadow-inner">
                    <div className="w-full h-full p-6 flex flex-col">
                      <div className="flex justify-between mb-8 relative">
                        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-purple-500/20 via-primary/20 to-purple-500/20 -translate-y-1/2" />
                        {[1, 2, 3, 4].map((step, i) => (
                          <div key={step} className="flex flex-col items-center relative z-10">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all duration-500 ${i === 1 ? 'bg-primary text-white border-primary shadow-lg shadow-primary/50' :
                                i === 0 ? 'bg-green-500 text-white border-green-500' :
                                  'bg-background border-muted text-muted-foreground'
                              }`}>
                              {i === 0 ? '✓' : step}
                            </div>
                            <span className={`text-xs mt-2 font-medium transition-colors ${i === 1 ? 'text-primary' : i === 0 ? 'text-green-500' : 'text-muted-foreground'}`}>
                              Step {step}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="flex-1 space-y-4">
                        <div className="space-y-3">
                          <div className="h-3 bg-primary/20 rounded w-1/3" />
                          <div className="h-10 bg-gradient-to-r from-muted/50 to-muted/30 rounded-lg border border-primary/10" />
                          <div className="h-10 bg-gradient-to-r from-muted/50 to-muted/30 rounded-lg border border-primary/10" />
                        </div>

                        <div className="space-y-3">
                          <div className="h-3 bg-primary/20 rounded w-1/4" />
                          <div className="grid grid-cols-2 gap-3">
                            <div className="h-8 bg-gradient-to-r from-muted/50 to-muted/30 rounded border border-primary/10" />
                            <div className="h-8 bg-gradient-to-r from-muted/50 to-muted/30 rounded border border-primary/10" />
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between pt-6 border-t border-primary/10">
                        <div className="h-10 w-20 bg-muted/40 rounded-lg" />
                        <div className="h-10 w-24 bg-gradient-to-r from-primary to-purple-500 rounded-lg shadow-lg shadow-primary/30" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </Link>

            <Link href="/docs/components/dashboard-widgets" className="group">
              <div className="aspect-[4/3] bg-gradient-to-br from-indigo-500/10 via-primary/5 to-blue-500/10 rounded-3xl border border-indigo-500/20 overflow-hidden hover:border-indigo-500/40 transition-all duration-500 relative shadow-2xl hover:shadow-3xl hover:-translate-y-2">
                <div className="absolute inset-0 p-8 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                    <h3 className="font-bold text-xl">Analytics Dashboard</h3>
                    <div className="flex items-center gap-2 text-xs bg-background/70 backdrop-blur-sm text-muted-foreground px-3 py-1 rounded-full group-hover:bg-indigo-500/10 group-hover:text-indigo-500 transition-colors">
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  <div className="flex-1 bg-card/90 backdrop-blur-sm rounded-2xl border border-indigo-500/10 overflow-hidden shadow-inner">
                    <div className="w-full h-full p-4 grid grid-cols-3 gap-4">
                      <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-xl p-3 border border-green-500/20">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-xs text-green-600 font-medium">Revenue</div>
                          <div className="w-4 h-4 bg-green-500/20 rounded" />
                        </div>
                        <div className="text-lg font-bold text-green-600">$24.5K</div>
                        <div className="text-xs text-green-500">+12.5%</div>
                      </div>

                      <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-xl p-3 border border-blue-500/20">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-xs text-blue-600 font-medium">Users</div>
                          <div className="w-4 h-4 bg-blue-500/20 rounded" />
                        </div>
                        <div className="text-lg font-bold text-blue-600">1,249</div>
                        <div className="text-xs text-blue-500">+8.2%</div>
                      </div>

                      <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 rounded-xl p-3 border border-purple-500/20">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-xs text-purple-600 font-medium">Orders</div>
                          <div className="w-4 h-4 bg-purple-500/20 rounded" />
                        </div>
                        <div className="text-lg font-bold text-purple-600">89</div>
                        <div className="text-xs text-red-500">-2.1%</div>
                      </div>

                      <div className="col-span-3 bg-gradient-to-br from-primary/5 to-indigo-500/5 rounded-xl p-4 border border-primary/10 relative overflow-hidden">
                        <div className="text-xs font-medium text-primary mb-3">Performance Analytics</div>
                        <div className="flex items-end justify-between h-16 gap-1">
                          {Array(12).fill(0).map((_, i) => (
                            <div key={i} className="flex-1 bg-gradient-to-t from-primary/60 to-primary/30 rounded-sm transition-all duration-500 hover:from-primary/80 hover:to-primary/50" style={{ height: `${30 + Math.sin(i * 0.8) * 20 + Math.random() * 15}%` }} />
                          ))}
                        </div>
                        <div className="absolute top-2 right-2 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </Link>

            <Link href="/docs/components/file-manager" className="group">
              <div className="aspect-[4/3] bg-gradient-to-br from-emerald-500/10 via-primary/5 to-teal-500/10 rounded-3xl border border-emerald-500/20 overflow-hidden hover:border-emerald-500/40 transition-all duration-500 relative shadow-2xl hover:shadow-3xl hover:-translate-y-2">
                <div className="absolute inset-0 p-8 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                    <h3 className="font-bold text-xl">File Manager Pro</h3>
                    <div className="flex items-center gap-2 text-xs bg-background/70 backdrop-blur-sm text-muted-foreground px-3 py-1 rounded-full group-hover:bg-emerald-500/10 group-hover:text-emerald-500 transition-colors">
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  <div className="flex-1 bg-card/90 backdrop-blur-sm rounded-2xl border border-emerald-500/10 overflow-hidden shadow-inner">
                    <div className="w-full h-full flex">
                      <div className="w-1/3 border-r border-emerald-500/10 p-3">
                        <div className="space-y-2">
                          {[
                            { name: "Documents", icon: "📄", active: true },
                            { name: "Images", icon: "🖼️", active: false },
                            { name: "Videos", icon: "🎥", active: false },
                            { name: "Archive", icon: "📦", active: false }
                          ].map((folder, i) => (
                            <div key={i} className={`flex items-center gap-2 p-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${folder.active ? 'bg-emerald-500/20 text-emerald-600 border border-emerald-500/30' : 'text-muted-foreground hover:bg-muted/20'
                              }`}>
                              <span>{folder.icon}</span>
                              <span>{folder.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex-1 p-3">
                        <div className="flex items-center gap-2 mb-3 p-2 bg-muted/20 rounded-lg">
                          <div className="flex gap-1">
                            <div className="w-5 h-5 bg-primary/20 rounded border" />
                            <div className="w-5 h-5 bg-muted/40 rounded border" />
                            <div className="w-5 h-5 bg-muted/40 rounded border" />
                          </div>
                          <div className="w-px h-4 bg-muted" />
                          <div className="flex-1 h-5 bg-muted/30 rounded text-xs flex items-center px-2 text-muted-foreground">
                            Search files...
                          </div>
                        </div>


                        <div className="grid grid-cols-4 gap-2">
                          {[
                            { name: "Report.pdf", type: "pdf", size: "2.4MB" },
                            { name: "Data.xlsx", type: "excel", size: "890KB" },
                            { name: "Presentation.pptx", type: "ppt", size: "5.1MB" },
                            { name: "Image.jpg", type: "image", size: "1.2MB" },
                            { name: "Document.docx", type: "word", size: "456KB" },
                            { name: "Archive.zip", type: "zip", size: "12MB" },
                            { name: "Video.mp4", type: "video", size: "89MB" },
                            { name: "Code.js", type: "code", size: "23KB" }
                          ].map((file, i) => (
                            <div key={i} className="flex flex-col items-center p-2 rounded-lg hover:bg-emerald-500/10 transition-colors group/file cursor-pointer">
                              <div className={`w-8 h-8 rounded-lg mb-1 flex items-center justify-center text-xs font-bold transition-transform group-hover/file:scale-110 ${file.type === 'pdf' ? 'bg-red-500/20 text-red-600' :
                                  file.type === 'excel' ? 'bg-green-500/20 text-green-600' :
                                    file.type === 'image' ? 'bg-blue-500/20 text-blue-600' :
                                      'bg-primary/20 text-primary'
                                }`}>
                                {file.type.slice(0, 2).toUpperCase()}
                              </div>
                              <div className="text-xs font-medium text-center leading-tight mb-1">{file.name}</div>
                              <div className="text-xs text-muted-foreground">{file.size}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </Link>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/docs/components"
              className="inline-flex items-center justify-center text-primary hover:text-primary/80 text-xl group font-semibold"
            >
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Explore All 40+ Components
              </span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/30 via-primary/20 to-primary/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.03] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 mb-6">
            <CheckCircle className="h-5 w-5 text-primary" />
            <span className="text-lg font-medium">Production Ready</span>
          </div>
          <h2 className="text-4xl font-bold mb-6">Ready to build better interfaces?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Get started with RigidUI today and create stunning user experiences that will impress your users.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/docs/getting-started"
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-8 py-3.5 font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="https://github.com/FgrReloaded/rigidui"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3.5 font-medium hover:bg-accent hover:text-accent-foreground transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              GitHub <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-gradient-to-br from-primary/20 via-primary/10 to-purple-500/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10" />

        <div className="absolute top-20 left-20 w-40 h-40 border-2 border-primary/30 rounded-3xl rotate-12 animate-float-complex" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-primary/20 rounded-full animate-pulse-slow" />
        <div className="absolute top-1/2 left-10 w-6 h-6 bg-primary/40 rounded-full animate-ping" />
        <div className="absolute top-1/3 right-10 w-4 h-4 bg-purple-500/40 rounded-full animate-bounce" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-3 mb-8 group">
            <div className="flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-600 px-4 py-2 rounded-full border border-green-500/30">
              <CheckCircle className="h-5 w-5" />
              <span className="font-semibold">Production Ready</span>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-600 px-4 py-2 rounded-full border border-blue-500/30">
              <Zap className="h-5 w-5" />
              <span className="font-semibold">Enterprise Grade</span>
            </div>
          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-foreground via-primary to-purple-600 bg-clip-text text-transparent">
              Ready to Build
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-primary to-foreground bg-clip-text text-transparent">
              The Future?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of developers building
            <span className="text-primary font-bold"> exceptional interfaces</span> with
            the most <span className="text-primary font-bold">advanced UI library</span> ever created.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: <Cpu className="w-6 h-6" />, title: "Zero Runtime", desc: "No JavaScript overhead" },
              { icon: <Zap className="w-6 h-6" />, title: "Lightning Fast", desc: "< 1ms render times" },
              { icon: <Stars className="w-6 h-6" />, title: "Enterprise Ready", desc: "Battle-tested components" }
            ].map((feature, i) => (
              <div key={i} className="bg-background/80 backdrop-blur-xl rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 group">
                <div className="text-primary mb-3 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/docs/getting-started"
              className="group relative inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-primary via-purple-600 to-primary text-white px-12 py-5 font-bold text-xl hover:scale-105 transition-all duration-300 shadow-3xl shadow-primary/30 hover:shadow-4xl hover:shadow-primary/50 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-purple-600/90 to-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer" />
              <span className="relative z-10 flex items-center gap-3">
                <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                Start Building Now
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Link>

            <a
              href="https://github.com/FgrReloaded/rigidui"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center rounded-2xl border-2 border-primary/40 bg-background/90 backdrop-blur-xl px-12 py-5 font-bold text-xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:border-primary/60 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-3 text-foreground group-hover:text-primary transition-colors duration-300">
                <Code className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                View on GitHub
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </span>
            </a>
          </div>

          <div className="mt-16 flex flex-col items-center gap-6">
            <p className="text-muted-foreground font-medium">Trusted by developers at</p>
            <div className="flex items-center gap-8 opacity-60">
              {["Microsoft", "Google", "Netflix", "Spotify", "Airbnb"].map((company, i) => (
                <div key={i} className="text-lg font-bold text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="py-16 px-6 border-t border-primary/10 bg-gradient-to-br from-muted/20 via-background to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.01] pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
            <div className="flex flex-col gap-6 lg:w-1/3">
              <Link href="/" className="group flex items-center gap-4">
                <div className="relative">
                  <Image
                    src="/logo.png"
                    alt="rigidui"
                    width={60}
                    height={60}
                    className="group-hover:scale-110 transition-all duration-300 drop-shadow-lg"
                  />
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-2xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                    RigidUI
                  </span>
                  <span className="text-sm text-muted-foreground font-medium">
                    v0.1.0 • Enterprise UI Components
                  </span>
                </div>
              </Link>

              <p className="text-muted-foreground leading-relaxed max-w-md">
                The most sophisticated collection of React components for building
                enterprise-grade applications that demand perfection.
              </p>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>40+ Components</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <span>TypeScript Ready</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:w-2/3">
              <div>
                <h3 className="font-bold text-foreground mb-4 text-lg">Documentation</h3>
                <div className="space-y-3">
                  {["Getting Started", "Installation", "Components", "Examples"].map((link, i) => (
                    <Link key={i} href="/docs" className="block text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1 transform">
                      {link}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-4 text-lg">Components</h3>
                <div className="space-y-3">
                  {["Data Grid", "Forms", "Charts", "File Manager"].map((link, i) => (
                    <Link key={i} href="/docs/components" className="block text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1 transform">
                      {link}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-4 text-lg">Resources</h3>
                <div className="space-y-3">
                  {["GitHub", "Examples", "Blog", "Changelog"].map((link, i) => (
                    <a key={i} href="#" className="block text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1 transform">
                      {link}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-4 text-lg">Community</h3>
                <div className="space-y-3">
                  {["Discord", "Twitter", "LinkedIn", "Support"].map((link, i) => (
                    <a key={i} href="#" className="block text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1 transform">
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-muted-foreground">
              © 2024 RigidUI. Built with shadcn/ui • Designed for developers
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">MIT License</a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes float {
          0% { transform: translateY(0px) rotate(-6deg); }
          50% { transform: translateY(-15px) rotate(-4deg); }
          100% { transform: translateY(0px) rotate(-6deg); }
        }

        @keyframes float-slow {
          0% { transform: translateY(0px) rotate(3deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(3deg); }
        }

        @keyframes float-complex {
          0% { transform: translateY(0px) rotate(12deg) scale(1); }
          33% { transform: translateY(-10px) rotate(15deg) scale(1.05); }
          66% { transform: translateY(-5px) rotate(9deg) scale(0.95); }
          100% { transform: translateY(0px) rotate(12deg) scale(1); }
        }

        @keyframes float-reverse {
          0% { transform: translateY(0px) rotate(-12deg) scale(1); }
          33% { transform: translateY(-15px) rotate(-9deg) scale(1.05); }
          66% { transform: translateY(-8px) rotate(-15deg) scale(0.95); }
          100% { transform: translateY(0px) rotate(-12deg) scale(1); }
        }

        @keyframes float-particle {
          0% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.3; }
          50% { transform: translateY(-20px) translateX(10px) scale(1.2); opacity: 0.8; }
          100% { transform: translateY(-40px) translateX(-5px) scale(0.8); opacity: 0; }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-gradient-x {
          background-size: 400% 400%;
          animation: gradient-x 15s ease infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-float-complex {
          animation: float-complex 10s ease-in-out infinite;
        }

        .animate-float-reverse {
          animation: float-reverse 12s ease-in-out infinite;
        }

        .animate-float-particle {
          animation: float-particle 6s ease-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }

        .shadow-glow {
          box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.15);
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }

        .shadow-4xl {
          box-shadow: 0 45px 80px -15px rgba(0, 0, 0, 0.3);
        }

        .bg-grid-pattern {
          background-image:
            linear-gradient(to right, rgba(var(--primary-rgb), 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(var(--primary-rgb), 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        /* Enhanced hover effects */
        .group:hover .group-hover\\:animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(var(--muted-rgb), 0.1);
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(var(--primary-rgb), 0.3);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(var(--primary-rgb), 0.5);
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Enhanced focus states */
        *:focus-visible {
          outline: 2px solid rgba(var(--primary-rgb), 0.5);
          outline-offset: 2px;
        }
      `}</style>
    </div>
  )
}
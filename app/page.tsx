"use client"
import * as React from "react"
import Link from "next/link"
import { ArrowRight, Code, Component, Layers, Package, Terminal, Zap, CheckCircle, ExternalLink } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-svh relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <nav className="border-b sticky top-0 z-40 backdrop-blur-md bg-background/80 shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center py-3 px-4">
          <Link href="/" className="font-bold text-xl flex items-center gap-2">
            <Image src="/logo.png" alt="rigidui" width={100} height={100} className="hover:scale-105 transition-all" />
            <span className="text-xs bg-primary/10 text-primary rounded px-1.5 py-0.5 font-semibold">v0.1.0</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/docs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:scale-105">
              Docs
            </Link>
            <Link href="/docs/components" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:scale-105">
              Components
            </Link>
            <a
              href="https://github.com/FgrReloaded/rigidui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:scale-105"
            >
              GitHub
            </a>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <section className="py-28 px-4 bg-gradient-to-br from-background via-background to-muted relative overflow-hidden">
        {/* Decorative grid background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

        {/* Hero content */}
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-8 relative z-10">
          <div className="inline-block animate-pulse bg-primary/15 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-2 shadow-glow">
            Now in beta
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-primary via-primary to-primary/60 py-2 animate-gradient">
            RigidUI
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
            A collection of sophisticated, <span className="text-foreground font-medium">highly customizable</span> UI components built with shadcn
          </p>
          <div className="flex flex-col sm:flex-row gap-5 mt-6">
            <Link
              href="/docs/getting-started"
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-8 py-3.5 font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/docs/components"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3.5 font-medium hover:bg-accent hover:text-accent-foreground transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Browse Components
            </Link>
          </div>

          {/* Floating component examples */}
          <div className="relative mt-16 w-full max-w-4xl">
            <div className="absolute -top-6 -left-6 md:top-auto md:-left-16 md:-bottom-12 transform rotate-3 bg-background rounded-lg border shadow-lg w-32 h-32 md:w-48 md:h-48 flex items-center justify-center animate-float-slow z-10">
              <div className="w-5/6 h-5/6 rounded-md bg-gradient-to-br from-primary/5 to-primary/20 flex items-center justify-center">
                <Layers className="h-6 w-6 text-primary/70" />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 md:-right-14 md:-top-10 transform -rotate-6 bg-background rounded-lg border shadow-lg w-36 h-36 md:w-44 md:h-44 flex items-center justify-center animate-float z-10">
              <div className="w-5/6 h-5/6 rounded-md bg-gradient-to-br from-primary/5 to-primary/20 flex items-center justify-center">
                <Component className="h-6 w-6 text-primary/70" />
              </div>
            </div>
            <div className="p-5 md:p-6 rounded-xl bg-card/80 backdrop-blur-sm border shadow-xl overflow-hidden relative z-0">
              <div className="flex items-center bg-card rounded-t-md px-4 py-2 border-b">
                <div className="flex space-x-2 mr-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-sm font-mono text-muted-foreground">Installation</span>
              </div>
              <pre className="p-5 overflow-x-auto bg-card rounded-b-md text-sm font-mono">
                <code className="text-primary/90">npx</code>{" "}
                <code className="text-foreground">shadcn@latest add</code>{" "}
                <code className="text-primary">data-grid multi-step-form dashboard-widgets file-manager</code>
                <div className="mt-2 border-l-2 border-primary/30 pl-3 text-muted-foreground">
                  # Add advanced components to your project with one command
                </div>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-muted/20 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">Benefits</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Why RigidUI?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A thoughtfully designed component library for building polished interfaces with complex interactions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Component className="h-10 w-10 text-primary" />,
                title: "Advanced Components",
                description: "Complex UI patterns implemented with accessibility and performance in mind"
              },
              {
                icon: <Zap className="h-10 w-10 text-primary" />,
                title: "Type Safe",
                description: "Fully typed components with TypeScript for error-free development"
              },
              {
                icon: <Layers className="h-10 w-10 text-primary" />,
                title: "Composable",
                description: "Mix and match components to build exactly what you need"
              },
              {
                icon: <Package className="h-10 w-10 text-primary" />,
                title: "Lightweight",
                description: "Only import what you use with zero external dependencies"
              },
              {
                icon: <Code className="h-10 w-10 text-primary" />,
                title: "Customizable",
                description: "Designed to be styled with your project's design system"
              },
              {
                icon: <Terminal className="h-10 w-10 text-primary" />,
                title: "Developer Experience",
                description: "Intuitive APIs designed to make development a joy"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl border hover:shadow-xl transition-all hover:-translate-y-1 group"
              >
                <div className="mb-5 p-3 bg-primary/5 rounded-lg w-fit group-hover:bg-primary/10 transition-colors">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-background relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">Showcase</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Featured Components</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Explore our collection of advanced UI components
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/docs/components/data-grid" className="group">
              <div className="aspect-video bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border overflow-hidden hover:border-primary/40 transition-colors relative shadow-md hover:shadow-lg">
                <div className="absolute inset-0 p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg">Data Grid</h3>
                    <span className="text-xs bg-background/70 backdrop-blur-sm text-muted-foreground px-2 py-1 rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                      Explore <ArrowRight className="ml-1 h-3 w-3 inline" />
                    </span>
                  </div>
                  <div className="flex-1 bg-card/80 backdrop-blur-sm rounded-lg border flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full p-3">
                      <div className="w-full h-full border rounded bg-background p-2">
                        <div className="grid grid-cols-4 gap-2 mb-2">
                          {Array(4).fill(0).map((_, i) => (
                            <div key={i} className="h-4 bg-primary/10 rounded" />
                          ))}
                        </div>
                        {Array(5).fill(0).map((_, i) => (
                          <div key={i} className="grid grid-cols-4 gap-2 mb-2">
                            {Array(4).fill(0).map((_, j) => (
                              <div key={j} className="h-4 bg-muted rounded" />
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/docs/components/multi-step-form" className="group">
              <div className="aspect-video bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border overflow-hidden hover:border-primary/40 transition-colors relative shadow-md hover:shadow-lg">
                <div className="absolute inset-0 p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg">Multi-step Form</h3>
                    <span className="text-xs bg-background/70 backdrop-blur-sm text-muted-foreground px-2 py-1 rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                      Explore <ArrowRight className="ml-1 h-3 w-3 inline" />
                    </span>
                  </div>
                  <div className="flex-1 bg-card/80 backdrop-blur-sm rounded-lg border flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full p-3">
                      <div className="w-full h-full border rounded bg-background p-3 flex flex-col">
                        <div className="flex justify-between mb-4">
                          {[1, 2, 3].map((step) => (
                            <div key={step} className={`flex items-center ${step === 1 ? 'text-primary' : 'text-muted-foreground'}`}>
                              <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 text-xs ${step === 1 ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'}`}>
                                {step}
                              </div>
                              <span className="text-xs">Step {step}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex-1 space-y-3">
                          <div className="h-4 bg-muted rounded w-1/3" />
                          <div className="h-8 bg-muted rounded" />
                          <div className="h-8 bg-muted rounded" />
                        </div>
                        <div className="flex justify-end pt-3">
                          <div className="h-8 w-24 bg-primary/20 rounded" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/docs/components/dashboard-widgets" className="group">
              <div className="aspect-video bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border overflow-hidden hover:border-primary/40 transition-colors relative shadow-md hover:shadow-lg">
                <div className="absolute inset-0 p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg">Dashboard Widgets</h3>
                    <span className="text-xs bg-background/70 backdrop-blur-sm text-muted-foreground px-2 py-1 rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                      Explore <ArrowRight className="ml-1 h-3 w-3 inline" />
                    </span>
                  </div>
                  <div className="flex-1 bg-card/80 backdrop-blur-sm rounded-lg border flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full p-3">
                      <div className="w-full h-full border rounded bg-background p-2 grid grid-cols-2 gap-2">
                        <div className="border rounded p-2 bg-muted/20">
                          <div className="h-3 w-1/2 bg-muted rounded mb-2" />
                          <div className="h-5 w-1/3 bg-primary/20 rounded" />
                        </div>
                        <div className="border rounded p-2 bg-muted/20">
                          <div className="h-3 w-1/2 bg-muted rounded mb-2" />
                          <div className="h-5 w-1/3 bg-primary/20 rounded" />
                        </div>
                        <div className="border rounded p-2 col-span-2 bg-muted/20">
                          <div className="h-3 w-1/4 bg-muted rounded mb-2" />
                          <div className="h-12 bg-muted/30 rounded" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/docs/components/file-manager" className="group">
              <div className="aspect-video bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border overflow-hidden hover:border-primary/40 transition-colors relative shadow-md hover:shadow-lg">
                <div className="absolute inset-0 p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg">File Manager</h3>
                    <span className="text-xs bg-background/70 backdrop-blur-sm text-muted-foreground px-2 py-1 rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                      Explore <ArrowRight className="ml-1 h-3 w-3 inline" />
                    </span>
                  </div>
                  <div className="flex-1 bg-card/80 backdrop-blur-sm rounded-lg border flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full p-3">
                      <div className="w-full h-full border rounded bg-background p-2 flex">
                        <div className="w-1/3 border-r pr-2">
                          {[1, 2, 3].map((item) => (
                            <div key={item} className={`h-6 mb-2 rounded text-xs flex items-center px-2 ${item === 1 ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>
                              Folder {item}
                            </div>
                          ))}
                        </div>
                        <div className="flex-1 pl-2 grid grid-cols-3 gap-2">
                          {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div key={item} className="flex flex-col items-center">
                              <div className="w-8 h-8 bg-muted rounded-sm mb-1" />
                              <div className="text-xs text-muted-foreground">File {item}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/docs/components"
              className="inline-flex items-center justify-center text-primary hover:underline text-lg group"
            >
              View all components <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/30 via-primary/20 to-primary/5 relative overflow-hidden">
        {/* Decorative elements */}
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

      <footer className="py-12 px-4 border-t bg-muted/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Link href="/" className="hover:opacity-90 transition-opacity">
              <Image src="/logo.png" alt="rigidui" width={80} height={80} />
            </Link>
            <div className="flex flex-col">
              <span className="font-bold">RigidUI</span>
              <span className="text-xs text-muted-foreground">v0.1.0 • Advanced UI Components</span>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex items-center gap-6">
              <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Docs</Link>
              <Link href="/docs/components" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Components</Link>
              <a href="https://github.com/FgrReloaded/rigidui" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
            </div>
            <div className="text-sm text-muted-foreground">
              Built with shadcn/ui • Designed for developers
            </div>
          </div>
        </div>
      </footer>

      {/* Add CSS for custom animations and patterns */}
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }

        @keyframes float {
          0% { transform: translateY(0px) rotate(-6deg); }
          50% { transform: translateY(-10px) rotate(-4deg); }
          100% { transform: translateY(0px) rotate(-6deg); }
        }

        @keyframes float-slow {
          0% { transform: translateY(0px) rotate(3deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(3deg); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .shadow-glow {
          box-shadow: 0 0 15px rgba(var(--primary-rgb), 0.15);
        }

        .bg-grid-pattern {
          background-image:
            linear-gradient(to right, rgba(var(--primary-rgb), 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(var(--primary-rgb), 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  )
}
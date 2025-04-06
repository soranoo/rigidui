import * as React from "react"
import Link from "next/link"
import { ArrowRight, Code, Component, Layers, Package, Terminal, Zap } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-svh">
      <nav className="border-b sticky top-0 z-10 backdrop-blur-sm bg-background/80">
        <div className="max-w-5xl mx-auto flex justify-between items-center py-4 px-4">
          <Link href="/" className="font-bold text-xl flex items-center gap-2">
            <Image src="/logo.png" alt="rigidui" width={100} height={100} />
            <span className="text-xs bg-primary/10 text-primary rounded px-1.5 py-0.5">v0.1.0</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Docs
            </Link>
            <Link href="/docs/components" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Components
            </Link>
            <a
              href="https://github.com/FgrReloaded/rigidui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <section className="py-20 px-4 bg-gradient-to-br from-background to-muted">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-6">
          <div className="inline-block animate-pulse bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-2">
            Now in beta
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 py-2">
            RigidUI
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
            A collection of complex, customizable UI components built with shadcn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link
              href="/docs/getting-started"
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 font-medium hover:bg-primary/90 transition-colors"
            >
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/docs/components"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Browse Components
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="p-4 rounded-lg bg-muted border overflow-hidden shadow-xl">
            <div className="flex items-center bg-card rounded-t-md px-4 py-2 border-b">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-sm text-muted-foreground">Install RigidUI</span>
            </div>
            <pre className="p-4 overflow-x-auto bg-card rounded-b-md">
              npx shadcn@latest add ...
            </pre>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why RigidUI?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A thoughtfully designed component library for building polished interfaces with complex interactions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Component className="h-8 w-8 text-primary" />,
                title: "Advanced Components",
                description: "Complex UI patterns implemented with accessibility and performance in mind"
              },
              {
                icon: <Zap className="h-8 w-8 text-primary" />,
                title: "Type Safe",
                description: "Fully typed components with TypeScript for error-free development"
              },
              {
                icon: <Layers className="h-8 w-8 text-primary" />,
                title: "Composable",
                description: "Mix and match components to build exactly what you need"
              },
              {
                icon: <Package className="h-8 w-8 text-primary" />,
                title: "Lightweight",
                description: "Only import what you use with zero external dependencies"
              },
              {
                icon: <Code className="h-8 w-8 text-primary" />,
                title: "Customizable",
                description: "Designed to be styled with your project's design system"
              },
              {
                icon: <Terminal className="h-8 w-8 text-primary" />,
                title: "Developer Experience",
                description: "Intuitive APIs designed to make development a joy"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border hover:shadow-md transition-all">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Components</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of advanced UI components
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-video bg-gradient-to-br from-primary/5 to-primary/20 rounded-lg border flex items-center justify-center hover:border-primary/50 transition-colors cursor-pointer">
              <p className="font-medium">Data Grid</p>
            </div>
            <div className="aspect-video bg-gradient-to-br from-primary/5 to-primary/20 rounded-lg border flex items-center justify-center hover:border-primary/50 transition-colors cursor-pointer">
              <p className="font-medium">Multi-step Form</p>
            </div>
            <div className="aspect-video bg-gradient-to-br from-primary/5 to-primary/20 rounded-lg border flex items-center justify-center hover:border-primary/50 transition-colors cursor-pointer">
              <p className="font-medium">Dashboard Widgets</p>
            </div>
            <div className="aspect-video bg-gradient-to-br from-primary/5 to-primary/20 rounded-lg border flex items-center justify-center hover:border-primary/50 transition-colors cursor-pointer">
              <p className="font-medium">File Manager</p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/docs/components"
              className="inline-flex items-center justify-center text-primary hover:underline"
            >
              View all components <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to build better interfaces?</h2>
          <p className="text-muted-foreground mb-6">
            Get started with RigidUI today and create stunning user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/docs/getting-started"
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 font-medium hover:bg-primary/90 transition-colors"
            >
              Get Started
            </Link>
            <a
              href="https://github.com/FgrReloaded/rigidui"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="py-10 px-4 border-t">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold">RigidUI</span>
            <span className="text-xs bg-muted rounded px-1.5 py-0.5">v0.1.0</span>
          </div>
          <div className="text-sm text-muted-foreground">
            Built with shadcn/ui • Designed for developers
          </div>
        </div>
      </footer>
    </div>
  )
}
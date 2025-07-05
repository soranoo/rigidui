import Image from 'next/image'
import Link from 'next/link'
import { Star, Github, ExternalLink } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <header className="relative z-10 border-b border-border/40 bg-background/95 backdrop-blur-md">
      <div className="container mx-auto sm:px-6 px-3 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <div className="rounded-lg flex items-center justify-center">
              <Image src="/logo.png" width={80} height={40} alt="RigidUI Logo" className="object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="sm:text-xl text-sm font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Examples
              </span>
              <span className="text-xs text-muted-foreground hidden sm:block">
                Interactive Component Showcase
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              href="https://rigidui.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="hidden sm:inline">RigidUI</span>
            </Link>

            <Link
              href="https://github.com/fgrreloaded/rigidui"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg hover:from-primary/20 hover:to-primary/10 hover:border-primary/30 transition-all duration-200 hover:shadow-sm"
            >
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">GitHub</span>
              <div className="flex items-center gap-1 px-2 py-1 bg-primary/10 rounded-md border border-primary/20">
                <Star className="w-3 h-3 text-primary" />
                <span className="text-xs font-semibold text-primary">Star</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
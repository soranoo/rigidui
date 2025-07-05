import Link from 'next/link'
import { Github, ExternalLink, Star, Heart } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-border/40 bg-background/95 backdrop-blur-md mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              RigidUI Examples
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Interactive examples showcase for RigidUI components. Explore complex UI components built with shadcn/ui and React.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/fgrreloaded/rigidui"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg hover:from-primary/20 hover:to-primary/10 hover:border-primary/30 transition-all duration-200"
              >
                <Github className="w-4 h-4" />
                <span>Star on GitHub</span>
                <Star className="w-3 h-3 text-primary" />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Links</h4>
            <div className="space-y-2">
              <Link
                href="https://rigidui.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                RigidUI
              </Link>
              <Link
                href="https://rigidui.com/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                Documentation
              </Link>
              <Link
                href="https://github.com/fgrreloaded/rigidui/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-3 h-3" />
                Report Issues
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Popular Components</h4>
            <div className="space-y-2">
              <Link
                href="/examples/currency-manager"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Currency Manager
              </Link>
              <Link
                href="/examples/location-picker"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Location Picker
              </Link>
              <Link
                href="/examples/multi-step-form-wrapper"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Multi-Step Form
              </Link>
              <Link
                href="/examples/file-uploader"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                File Uploader
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border/40 pt-8 mt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2025 RigidUI Examples. Built with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>by</span>
              <Link
                href="https://devxnitish.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Nitish Singh
              </Link>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>Powered by Next.js & shadcn/ui</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
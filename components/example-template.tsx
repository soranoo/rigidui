import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ExampleTemplateProps {
  title: string
  description: string
  component: React.ComponentType<Record<string, unknown>>
  props?: Record<string, unknown>
  children?: React.ReactNode
  badges?: string[]
}

export default function ExampleTemplate({
  title,
  description,
  component: Component,
  props = {},
  children,
  badges = []
}: ExampleTemplateProps) {
  return (
    <div className="container mx-auto px-6 py-12 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
          {title}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
          {description}
        </p>
        {badges.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center">
            {badges.map((badge, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {badge}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* Example Content */}
      <div className="space-y-8">
        {/* Live Example */}
        <Card className="border-border/50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl">Live Example</CardTitle>
            <CardDescription>
              Interactive demonstration of the {title} component
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="flex items-center justify-center min-h-[400px] bg-gradient-to-br from-muted/30 to-muted/10 rounded-lg border border-border/50">
              <Component {...props} />
            </div>
          </CardContent>
        </Card>

        {/* Additional Content */}
        {children}

        {/* Coming Soon */}
        <Card className="border-border/50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl">More Examples Coming Soon</CardTitle>
            <CardDescription>
              We&apos;re working on adding more interactive examples, code snippets, and usage documentation.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🚧</span>
              </div>
              <p className="text-muted-foreground">
                Check back soon for additional examples and documentation!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
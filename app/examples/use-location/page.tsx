import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function UseLocationExample() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
          useLocation Hook
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
          A custom React hook for managing location data, geolocation, and location-based functionality.
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          <Badge variant="secondary" className="text-xs">React Hook</Badge>
          <Badge variant="secondary" className="text-xs">TypeScript</Badge>
          <Badge variant="secondary" className="text-xs">Geolocation</Badge>
        </div>
      </div>

      {/* Example Content */}
      <div className="space-y-8">
        {/* Hook Overview */}
        <Card className="border-border/50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl">Hook Overview</CardTitle>
            <CardDescription>
              Features and capabilities of the useLocation hook
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-emerald-600">Features</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Get current user location</li>
                  <li>• Location permission handling</li>
                  <li>• Error state management</li>
                  <li>• Loading states</li>
                  <li>• Location history tracking</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-emerald-600">Use Cases</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Location-based services</li>
                  <li>• Store locators</li>
                  <li>• Weather apps</li>
                  <li>• Delivery applications</li>
                  <li>• Social media check-ins</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Coming Soon */}
        <Card className="border-border/50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl">Interactive Demo Coming Soon</CardTitle>
            <CardDescription>
              We&apos;re working on adding interactive examples and code snippets for this hook.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🚧</span>
              </div>
              <p className="text-muted-foreground">
                Check back soon for interactive examples and usage documentation!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
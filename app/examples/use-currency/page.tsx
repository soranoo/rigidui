import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function UseCurrencyExample() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
          useCurrency Hook
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
          A custom React hook for managing currency operations, conversions, and formatting.
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          <Badge variant="secondary" className="text-xs">React Hook</Badge>
          <Badge variant="secondary" className="text-xs">TypeScript</Badge>
          <Badge variant="secondary" className="text-xs">Currency</Badge>
        </div>
      </div>

      {/* Example Content */}
      <div className="space-y-8">
        {/* Hook Overview */}
        <Card className="border-border/50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl">Hook Overview</CardTitle>
            <CardDescription>
              Features and capabilities of the useCurrency hook
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-blue-600">Features</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Currency conversion rates</li>
                  <li>• Format currency values</li>
                  <li>• Multi-currency support</li>
                  <li>• Real-time rate updates</li>
                  <li>• Error handling</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-blue-600">Use Cases</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• E-commerce platforms</li>
                  <li>• Financial applications</li>
                  <li>• Travel booking sites</li>
                  <li>• International businesses</li>
                  <li>• Expense tracking apps</li>
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
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto">
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
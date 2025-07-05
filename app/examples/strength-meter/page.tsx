import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function StrengthMeterExample() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
          Strength Meter
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
          A password strength meter component with real-time validation and visual feedback.
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          <Badge variant="secondary" className="text-xs">React</Badge>
          <Badge variant="secondary" className="text-xs">TypeScript</Badge>
          <Badge variant="secondary" className="text-xs">Validation</Badge>
          <Badge variant="secondary" className="text-xs">Security</Badge>
        </div>
      </div>

      {/* Example Content */}
      <div className="space-y-8">
        {/* Component Overview */}
        <Card className="border-border/50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl">Component Overview</CardTitle>
            <CardDescription>
              Features and capabilities of the Strength Meter component
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-rose-600">Features</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Real-time password strength analysis</li>
                  <li>• Visual strength indicators</li>
                  <li>• Customizable validation rules</li>
                  <li>• Accessibility support</li>
                  <li>• Color-coded feedback</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-rose-600">Use Cases</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• User registration forms</li>
                  <li>• Password reset flows</li>
                  <li>• Security dashboards</li>
                  <li>• Account settings</li>
                  <li>• Admin panels</li>
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
              We&apos;re working on adding interactive examples and code snippets for this component.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-rose-500/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🚧</span>
              </div>
              <p className="text-muted-foreground">
                Check back soon for interactive examples and usage documentation!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Back to Examples */}
      <div className="mt-12 flex justify-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Examples
        </Link>
      </div>
    </div>
  )
}
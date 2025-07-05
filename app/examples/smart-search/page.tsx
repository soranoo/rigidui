import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function SmartSearchExample() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
          Smart Search
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
          A smart search component with autocomplete, fuzzy matching, and advanced filtering capabilities.
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          <Badge variant="secondary" className="text-xs">React</Badge>
          <Badge variant="secondary" className="text-xs">TypeScript</Badge>
          <Badge variant="secondary" className="text-xs">Search</Badge>
          <Badge variant="secondary" className="text-xs">Autocomplete</Badge>
        </div>
      </div>

      {/* Example Content */}
      <div className="space-y-8">
        {/* Component Overview */}
        <Card className="border-border/50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl">Component Overview</CardTitle>
            <CardDescription>
              Features and capabilities of the Smart Search component
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-sky-600">Features</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Intelligent autocomplete</li>
                  <li>• Fuzzy search matching</li>
                  <li>• Advanced filtering options</li>
                  <li>• Keyboard navigation</li>
                  <li>• Custom result templates</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-sky-600">Use Cases</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Product search</li>
                  <li>• User directories</li>
                  <li>• Documentation search</li>
                  <li>• Command palettes</li>
                  <li>• Data exploration</li>
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
              <div className="w-16 h-16 bg-sky-500/10 rounded-full flex items-center justify-center mx-auto">
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
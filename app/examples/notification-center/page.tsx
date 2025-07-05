import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NotificationCenterExample() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
          Notification Center
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
          A comprehensive notification center with real-time updates, categorization, and management features.
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          <Badge variant="secondary" className="text-xs">React</Badge>
          <Badge variant="secondary" className="text-xs">TypeScript</Badge>
          <Badge variant="secondary" className="text-xs">Real-time</Badge>
          <Badge variant="secondary" className="text-xs">Notifications</Badge>
        </div>
      </div>

      {/* Example Content */}
      <div className="space-y-8">
        {/* Component Overview */}
        <Card className="border-border/50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl">Component Overview</CardTitle>
            <CardDescription>
              Features and capabilities of the Notification Center component
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-yellow-600">Features</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Real-time notifications</li>
                  <li>• Categorization and filtering</li>
                  <li>• Mark as read/unread</li>
                  <li>• Bulk actions</li>
                  <li>• Custom notification types</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-yellow-600">Use Cases</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• User dashboards</li>
                  <li>• Admin panels</li>
                  <li>• Team collaboration</li>
                  <li>• System alerts</li>
                  <li>• Social platforms</li>
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
              <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto">
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
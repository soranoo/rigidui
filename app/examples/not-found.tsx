import Link from "next/link"
import { ArrowLeft, Component, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="container mx-auto px-6 py-20 max-w-2xl text-center">
      <div className="space-y-6">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
          <Search className="w-10 h-10 text-primary" />
        </div>
        <h1 className="text-4xl font-bold">Example Not Found</h1>
        <p className="text-xl text-muted-foreground">
          The component example you&apos;re looking for doesn&apos;t exist yet or is currently being developed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Examples
          </Link>
          <Link
            href="https://rigidui.com"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-muted/50 transition-colors"
          >
            <Component className="w-4 h-4" />
            Visit Main Site
          </Link>
        </div>
      </div>
    </div>
  )
}
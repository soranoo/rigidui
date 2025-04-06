import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "../_components/CodeBlock";
import Link from "next/link";
import { ArrowRight, CheckCircle, Workflow, Paintbrush, Wrench } from "lucide-react";

export default function GettingStartedPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Getting Started
          </h1>
          <p className="text-xl text-muted-foreground">
            Install and configure RigidUI components in your project
          </p>
        </div>
      </div>

      <div className="mt-8 border-t pt-8">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <div className="overflow-hidden text-ellipsis whitespace-nowrap">
            A guide to installing and using RigidUI components in your project.
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-8">
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
              <span className="text-sm font-bold text-primary">1</span>
            </div>
            <h2 className="text-2xl font-bold">Prerequisites</h2>
          </div>

          <p className="text-muted-foreground">
            Before you start, make sure you have a Next.js project set up with Tailwind CSS.
          </p>

          <CodeBlock
            language="bash"
            code={`# Create a Next.js app with Tailwind CSS
npx create-next-app@latest my-app --typescript --tailwind --eslint`}
          />
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
              <span className="text-sm font-bold text-primary">2</span>
            </div>
            <h2 className="text-2xl font-bold">Install the shadcn CLI</h2>
          </div>

          <p className="text-muted-foreground">
            RigidUI components are installed using the shadcn CLI. First, install it globally:
          </p>

          <Tabs defaultValue="npm" className="mt-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="npm">npm</TabsTrigger>
              <TabsTrigger value="yarn">yarn</TabsTrigger>
              <TabsTrigger value="pnpm">pnpm</TabsTrigger>
            </TabsList>
            <TabsContent value="npm">
              <CodeBlock
                language="bash"
                code="npm install -g shadcn"
              />
            </TabsContent>
            <TabsContent value="yarn">
              <CodeBlock
                language="bash"
                code="yarn global add shadcn"
              />
            </TabsContent>
            <TabsContent value="pnpm">
              <CodeBlock
                language="bash"
                code="pnpm add -g shadcn"
              />
            </TabsContent>
          </Tabs>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
              <span className="text-sm font-bold text-primary">3</span>
            </div>
            <h2 className="text-2xl font-bold">Configure your project</h2>
          </div>

          <p className="text-muted-foreground">
            Initialize shadcn in your project and configure it to use the RigidUI registry:
          </p>

          <CodeBlock
            language="bash"
            code="npx shadcn init"
          />

          <p className="text-muted-foreground mt-4">
            During initialization, select your preferences for styling and components. When asked about a custom registry URL, use:
          </p>

          <CodeBlock
            language="bash"
            code="https://rigidui.yoursite.com"
          />
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
              <span className="text-sm font-bold text-primary">4</span>
            </div>
            <h2 className="text-2xl font-bold">Installing Components</h2>
          </div>

          <p className="text-muted-foreground">
            Now you can install components from the RigidUI registry using the shadcn CLI:
          </p>

          <CodeBlock
            language="bash"
            code="npx shadcn add button"
          />

          <p className="text-muted-foreground mt-4">
            To see all available components, you can run:
          </p>

          <CodeBlock
            language="bash"
            code="npx shadcn ls"
          />
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
              <span className="text-sm font-bold text-primary">5</span>
            </div>
            <h2 className="text-2xl font-bold">Using Components</h2>
          </div>

          <p className="text-muted-foreground">
            After installing a component, you can import and use it in your application:
          </p>

          <CodeBlock
            language="tsx"
            code={`import { Button } from "@/components/ui/button";

export default function MyComponent() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <Button variant="default">Click me</Button>
    </div>
  );
}`}
          />
        </section>

        <section className="space-y-4 mt-8">
          <h2 className="text-2xl font-bold">Features</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-2">
              <Paintbrush className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h3 className="font-medium">Style Customization</h3>
                <p className="text-sm text-muted-foreground">
                  Components use Tailwind CSS classes for easy customization
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h3 className="font-medium">TypeScript Support</h3>
                <p className="text-sm text-muted-foreground">
                  Full TypeScript definitions for all components
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Workflow className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h3 className="font-medium">Component Registry</h3>
                <p className="text-sm text-muted-foreground">
                  Install only the components you need
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Wrench className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h3 className="font-medium">Fully Customizable</h3>
                <p className="text-sm text-muted-foreground">
                  Source code is added to your project for complete control
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4 bg-primary/5 p-6 rounded-lg mt-6">
          <h2 className="text-2xl font-bold">Customizing Components</h2>
          <p className="text-muted-foreground">
            RigidUI components are installed directly into your project, giving you full control to modify them:
          </p>

          <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-2">
            <li>Components are added to your <code className="text-xs bg-muted px-1 py-0.5 rounded">components/ui</code> directory</li>
            <li>Modify the styles by editing the Tailwind classes</li>
            <li>Extend functionality by modifying the component code</li>
            <li>Configure theme variables in your <code className="text-xs bg-muted px-1 py-0.5 rounded">tailwind.config.js</code></li>
          </ul>

          <div className="mt-4">
            <CodeBlock
              language="js"
              code={`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Customize your color palette
        primary: {
          DEFAULT: "#0070f3",
          foreground: "#ffffff",
        },
      },
      // Add more customizations here
    },
  },
}`}
            />
          </div>
        </section>

        <section className="space-y-4 mt-6">
          <h2 className="text-2xl font-bold">Next Steps</h2>
          <p className="text-muted-foreground">
            Now that you have RigidUI set up, explore these resources:
          </p>
          <div className="grid gap-4 mt-4 sm:grid-cols-2">
            <Link
              href="/docs/components"
              className="flex items-center justify-between p-4 bg-card rounded-md border hover:border-primary transition-colors"
            >
              <div>
                <h3 className="font-medium">Browse Components</h3>
                <p className="text-sm text-muted-foreground">
                  Explore all available components
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground" />
            </Link>
            <Link
              href="/docs/customization"
              className="flex items-center justify-between p-4 bg-card rounded-md border hover:border-primary transition-colors"
            >
              <div>
                <h3 className="font-medium">Customization Guide</h3>
                <p className="text-sm text-muted-foreground">
                  Learn how to customize components
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground" />
            </Link>
          </div>
          <div className="mt-4">
            <a
              href="https://github.com/FgrReloaded/rigidui"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:underline"
            >
              View on GitHub <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

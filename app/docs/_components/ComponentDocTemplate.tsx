import React from 'react'
import { ComponentHeader } from './ComponentHeader'
import { CodeBlock } from './CodeBlock'
import { PropsTable } from './PropsTable'
import { Check, X, Code, Package, Layers, Zap } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import TerminalCommand from './TerminalCommand'

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface PropData {
  name: string;
  type: string;
  defaultValue?: string;
  description: string;
  required?: boolean;
}

export interface BestPractice {
  type: 'do' | 'dont';
  items: string[];
}

export interface ComponentDocProps {
  title: string;
  description: string;
  previewComponent: React.ReactNode;
  githubPath: string;
  usageCode: string;
  usageDescription?: string;
  codeFilename?: string;
  propsData: PropData[];
  features?: Feature[];
  bestPractices?: BestPractice[];
  showInstallation?: boolean;
  componentName?: string;
  additionalSections?: React.ReactNode;
  subComponents?: {
    name: string;
    description: string;
    propsData: PropData[];
  }[];
}

export default function ComponentDocTemplate({
  title,
  description,
  previewComponent,
  githubPath,
  usageCode,
  usageDescription = `The ${title} component provides an interface for users.`,
  codeFilename = "BasicUsage.jsx",
  propsData,
  features,
  bestPractices,
  showInstallation = true,
  componentName,
  additionalSections,
  subComponents,
}: ComponentDocProps) {
  return (
    <div className="max-w-5xl mx-auto space-y-20 px-6 py-10">
      <ComponentHeader
        title={title}
        description={description}
        previewComponent={previewComponent}
        githubPath={githubPath}
      />

      {showInstallation && (
        <section className="space-y-8">
          <div className="flex items-center space-x-3">
            <Package className="h-7 w-7 text-indigo-500 dark:text-indigo-400" />
            <h2 id="installation" className="text-3xl font-bold text-gray-900 dark:text-white">Installation</h2>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
            Install the {title} component using your preferred package manager.
          </p>

          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
            <Tabs defaultValue="npm" className="w-full p-1">
              <TabsList className="flex justify-start border-b border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-800/50">
                <TabsTrigger
                  value="npm"
                  className="px-6 py-1 text-sm font-medium data-[state=active]:bg-white dark:data-[state=active]:bg-gray-900 transition-all duration-200"
                >
                  npm
                </TabsTrigger>
                <TabsTrigger
                  value="pnpm"
                  className="px-6 py-1 text-sm font-medium data-[state=active]:bg-white dark:data-[state=active]:bg-gray-900 transition-all duration-200"
                >
                  pnpm
                </TabsTrigger>
                <TabsTrigger
                  value="bun"
                  className="px-6 py-1 text-sm font-medium data-[state=active]:bg-white dark:data-[state=active]:bg-gray-900 transition-all duration-200"
                >
                  bun
                </TabsTrigger>
              </TabsList>
              <div className="p-4">
                <TabsContent value="npm">
                  <TerminalCommand
                    packageManager='npx'
                    command="shadcn@latest add"
                    component={componentName || title.toLowerCase().replace(/\s+/g, '-')}
                    className="w-full"
                  />
                </TabsContent>
                <TabsContent value="pnpm">
                  <TerminalCommand
                    packageManager='pnpm dlx'
                    command="shadcn@latest add"
                    component={componentName || title.toLowerCase().replace(/\s+/g, '-')}
                    className='w-full'
                  />
                </TabsContent>
                <TabsContent value="bun">
                  <TerminalCommand
                    packageManager='bunx'
                    command="shadcn@latest add"
                    component={componentName || title.toLowerCase().replace(/\s+/g, '-')}
                    className='w-full'
                  />
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </section>
      )}

      <section className="space-y-8">
        <div className="flex items-center space-x-3">
          <Code className="h-7 w-7 text-indigo-500 dark:text-indigo-400" />
          <h2 id="usage" className="text-3xl font-bold text-gray-900 dark:text-white">Usage</h2>
        </div>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
          {usageDescription}
        </p>
        <div className="mt-8 p-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col justify-start">
          <div className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">Live Preview</div>
          {previewComponent}
        </div>

        <CodeBlock
          code={usageCode}
          language='jsx'
          filename={codeFilename}
        />
      </section>

      {features && features.length > 0 && (
        <section className="space-y-8">
          <div className="flex items-center space-x-3">
            <Layers className="h-7 w-7 text-indigo-500 dark:text-indigo-400" />
            <h2 id="features" className="text-3xl font-bold text-gray-900 dark:text-white">Features</h2>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
            The {title} component offers several features to enhance the user experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="rounded-full bg-indigo-100 dark:bg-indigo-900/30 w-12 h-12 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {subComponents && subComponents.length > 0 ? (
        <section className="space-y-8">
          <div className="flex items-center space-x-3">
            <Zap className="h-7 w-7 text-indigo-500 dark:text-indigo-400" />
            <h2 id="components" className="text-3xl font-bold text-gray-900 dark:text-white">Components</h2>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
            The {title} consists of the following components:
          </p>

          <div className="space-y-6">
            {subComponents.map((component, index) => (
              <div key={index} className="rounded-lg border border-gray-200 dark:border-gray-800 p-6">
                <h3 className="text-lg font-medium mb-3 dark:text-white">{component.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {component.description}
                </p>
                <h4 className="text-md font-medium mb-2 dark:text-white">Props</h4>
                <PropsTable props={component.propsData} />
              </div>
            ))}
          </div>
        </section>
      ) : (
        <section className="space-y-8">
          <div className="flex items-center space-x-3">
            <Zap className="h-7 w-7 text-indigo-500 dark:text-indigo-400" />
            <h2 id="api-reference" className="text-3xl font-bold text-gray-900 dark:text-white">API Reference</h2>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
            <PropsTable props={propsData} />
          </div>
        </section>
      )}

      {additionalSections}

      {bestPractices && bestPractices.length > 0 && (
        <section className="pt-8 mt-8 border-t border-gray-200 dark:border-gray-800 space-y-8">
          <h2 id="best-practices" className="text-3xl font-bold text-gray-900 dark:text-white">Best Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bestPractices.map((practice, index) => (
              practice.type === 'do' ? (
                <div key={index} className="rounded-xl border border-green-100 dark:border-green-900/30 bg-green-50/50 dark:bg-green-900/10 p-8 shadow-sm">
                  <h3 className="flex items-center text-lg font-semibold text-green-800 dark:text-green-400 mb-6">
                    <Check className="text-green-500 mr-3 h-6 w-6 bg-green-100 dark:bg-green-800/50 p-1 rounded-full" /> Do
                  </h3>
                  <ul className="space-y-4 ml-10 list-disc text-green-800 dark:text-green-400 text-base">
                    {practice.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div key={index} className="rounded-xl border border-red-100 dark:border-red-900/30 bg-red-50/50 dark:bg-red-900/10 p-8 shadow-sm">
                  <h3 className="flex items-center text-lg font-semibold text-red-800 dark:text-red-400 mb-6">
                    <X className="text-red-500 mr-3 h-6 w-6 bg-red-100 dark:bg-red-800/50 p-1 rounded-full" /> Don&apos;t
                  </h3>
                  <ul className="space-y-4 ml-10 list-disc text-red-800 dark:text-red-400 text-base">
                    {practice.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

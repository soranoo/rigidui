import React from 'react'
import { Button } from '@/components/ui/button'
import { CodeBlock } from '../../_components/CodeBlock'
import { ComponentDemo } from '../../_components/ComponentDemo'
import { ComponentHeader } from '../../_components/ComponentHeader'
import { PropsTable } from '../../_components/PropsTable'
import { Check, Mail, Plus, X } from 'lucide-react'

export default function ButtonPage() {
  const propsData = [
    {
      name: 'variant',
      type: "'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'",
      defaultValue: "'default'",
      description: 'Visual style of the button.'
    },
    {
      name: 'size',
      type: "'default' | 'sm' | 'lg' | 'icon'",
      defaultValue: "'default'",
      description: 'Size of the button.'
    },
    {
      name: 'asChild',
      type: 'boolean',
      defaultValue: 'false',
      description: 'When true, button behavior is applied to child element.'
    }
  ]

  return (
    <div className="max-w-full space-y-10">
      <ComponentHeader
        title="Button"
        description="A versatile button component with different variants and sizes."
        previewComponent={
          <div className="flex flex-wrap justify-center gap-3">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="destructive">Delete</Button>
          </div>
        }
      />
      <section className="space-y-6">
        <h2 id="usage" className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Usage</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Import the Button component and use it in your application to trigger actions.
        </p>

        <CodeBlock
          code={`import { Button } from "@/components/ui/button"

export default function Example() {
  return <Button>Click me</Button>
}`}
          filename="Button.tsx"
        />
      </section>

      <section className="space-y-6">
        <h2 id="variants" className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Variants</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Button comes with several variants to communicate different actions and importance levels.
        </p>

        <div className="space-y-6">
          <ComponentDemo
            title="Default"
            description="Primary action, high emphasis"
            preview={<Button>Default Button</Button>}
            code={`<Button>Default Button</Button>`}
          />

          <ComponentDemo
            title="Secondary"
            description="Alternative actions"
            preview={<Button variant="secondary">Secondary</Button>}
            code={`<Button variant="secondary">Secondary</Button>`}
          />

          <ComponentDemo
            title="Destructive"
            description="Dangerous or negative actions"
            preview={<Button variant="destructive">Delete</Button>}
            code={`<Button variant="destructive">Delete</Button>`}
          />

          <ComponentDemo
            title="Outline"
            description="Lower emphasis actions"
            preview={<Button variant="outline">Outline</Button>}
            code={`<Button variant="outline">Outline</Button>`}
          />

          <ComponentDemo
            title="Ghost"
            description="Minimal visual presence"
            preview={<Button variant="ghost">Ghost</Button>}
            code={`<Button variant="ghost">Ghost</Button>`}
          />

          <ComponentDemo
            title="Link"
            description="Looks like a hyperlink"
            preview={<Button variant="link">Link Style</Button>}
            code={`<Button variant="link">Link Style</Button>`}
          />
        </div>
      </section>

      <section className="space-y-6">
        <h2 id="sizes" className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Sizes</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Buttons are available in different sizes to fit your layout needs.
        </p>

        <div className="space-y-6">
          <ComponentDemo
            title="Small"
            description="Compact size for tight spaces"
            preview={<Button size="sm">Small Button</Button>}
            code={`<Button size="sm">Small Button</Button>`}
          />

          <ComponentDemo
            title="Default"
            description="Standard size for most cases"
            preview={<Button>Default Button</Button>}
            code={`<Button>Default Button</Button>`}
          />

          <ComponentDemo
            title="Large"
            description="Larger size for emphasis"
            preview={<Button size="lg">Large Button</Button>}
            code={`<Button size="lg">Large Button</Button>`}
          />

          <ComponentDemo
            title="Icon"
            description="Square button for icons"
            preview={<Button size="icon"><Plus /></Button>}
            code={`<Button size="icon"><Plus /></Button>`}
          />
        </div>
      </section>

      <section className="space-y-6">
        <h2 id="examples" className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Examples</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Common patterns and use cases for the Button component.
        </p>

        <div className="space-y-6">
          <ComponentDemo
            title="With Icon"
            description="Adding icons can enhance the meaning of a button"
            preview={
              <div className="flex flex-wrap gap-3">
                <Button><Mail className="mr-2" /> Email</Button>
                <Button variant="outline"><Plus className="mr-2" /> Add New</Button>
              </div>
            }
            code={`<Button><Mail className="mr-2" /> Email</Button>
<Button variant="outline"><Plus className="mr-2" /> Add New</Button>`}
          />

          <ComponentDemo
            title="Button Group"
            description="Grouped buttons for related actions"
            preview={
              <div className="inline-flex rounded-md shadow-sm">
                <Button className="rounded-r-none">First</Button>
                <Button className="rounded-none border-l-0 border-r-0">Middle</Button>
                <Button className="rounded-l-none">Last</Button>
              </div>
            }
            code={`<div className="inline-flex rounded-md shadow-sm">
  <Button className="rounded-r-none">First</Button>
  <Button className="rounded-none border-l-0 border-r-0">Middle</Button>
  <Button className="rounded-l-none">Last</Button>
</div>`}
          />
        </div>
      </section>

      <section className="space-y-6">
        <h2 id="api-reference" className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">API Reference</h2>
        <PropsTable props={propsData} />
      </section>

      <section className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-800 space-y-6">
        <h2 id="best-practices" className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Best Practices</h2>

        <div className="space-y-6">
          <div className="rounded-lg border border-green-100 dark:border-green-900/30 bg-green-50/50 dark:bg-green-900/10 p-6">
            <h3 className="flex items-center text-base font-medium text-green-800 dark:text-green-400 mb-4">
              <Check className="text-green-500 mr-2 h-5 w-5" /> Do
            </h3>
            <ul className="space-y-3 ml-7 list-disc text-green-800 dark:text-green-400 text-sm">
              <li>Use descriptive labels for buttons</li>
              <li>Choose the appropriate variant based on importance</li>
              <li>Keep button text concise</li>
              <li>Use icons to enhance clarity when appropriate</li>
            </ul>
          </div>

          <div className="rounded-lg border border-red-100 dark:border-red-900/30 bg-red-50/50 dark:bg-red-900/10 p-6">
            <h3 className="flex items-center text-base font-medium text-red-800 dark:text-red-400 mb-4">
              <X className="text-red-500 mr-2 h-5 w-5" /> Don&apos;t
            </h3>
            <ul className="space-y-3 ml-7 list-disc text-red-800 dark:text-red-400 text-sm">
              <li>Use buttons for navigation (use links instead)</li>
              <li>Place too many primary buttons in one section</li>
              <li>Use long text in buttons</li>
              <li>Use destructive variant for non-destructive actions</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

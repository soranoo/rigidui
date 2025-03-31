import React from 'react'
import { ComponentHeader } from '../../_components/ComponentHeader'
import { CodeBlock } from '../../_components/CodeBlock'
// import { ComponentDemo } from '../../_components/ComponentDemo'
import { PropsTable } from '../../_components/PropsTable'
import { Check, X } from 'lucide-react'

export default function LanguageSwitcherPage() {
  const propsData = [
    {
      name: 'defaultLanguage',
      type: 'string',
      defaultValue: "'en'",
      description: 'The default language to use',
    },
    {
      name: 'onLanguageChange',
      type: '(language: string) => void',
      description: 'Callback that fires when the language changes',
    },
    {
      name: 'availableLanguages',
      type: 'string[]',
      defaultValue: "['en', 'es', 'fr', 'de', 'ja']",
      description: 'List of available language codes',
    },
    {
      name: 'className',
      type: 'string',
      description: 'Additional CSS class for the language switcher',
    }
  ]

  return (
    <div className="max-w-full space-y-10">
      <ComponentHeader
        title="Language Switcher"
        description="A component for switching between different languages in your application."
        previewComponent={
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="rounded-md border border-gray-300 px-3 py-1 text-center text-sm">
              English (EN)
            </div>
          </div>
        }
        githubPath="registry/new-york/language-switcher/language-switcher.tsx"
      />

      <section className="space-y-6">
        <h2 id="usage" className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Usage</h2>
        <p className="text-gray-700 dark:text-gray-300">
          The Language Switcher component provides an interface for changing the language in your application.
        </p>

        <CodeBlock
          code={`import { LanguageSwitcher } from "@/components/ui/language-switcher"

export default function MyComponent() {
  const handleLanguageChange = (language) => {
    console.log("Selected language:", language)
    // Update your i18n configuration here
  }

  return (
    <LanguageSwitcher
      defaultLanguage="en"
      onLanguageChange={handleLanguageChange}
      availableLanguages={['en', 'es', 'fr', 'de', 'ja']}
    />
  )
}`}
          filename="LanguageSwitcherExample.tsx"
        />
      </section>

      <section className="space-y-6">
        <h2 id="features" className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Features</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          The Language Switcher component offers several features to enhance the multilingual experience.
        </p>

        <div className="space-y-6">
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="text-lg font-medium mb-3 dark:text-white">Language Selection</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Users can select from a dropdown of available languages.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="text-lg font-medium mb-3 dark:text-white">Language Detection</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Automatically detects the user&apos;s preferred language based on browser settings.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="text-lg font-medium mb-3 dark:text-white">Persistence</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Remembers the user&apos;s language preference across sessions.
            </p>
          </div>
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
              <li>Place the language switcher in a consistent location across pages</li>
              <li>Display language names in their native form (e.g., &quot;Español&quot; instead of &quot;Spanish&quot;)</li>
              <li>Consider using flags as supplementary visuals, not as the only identifier</li>
              <li>Test your application in right-to-left languages if you support them</li>
            </ul>
          </div>

          <div className="rounded-lg border border-red-100 dark:border-red-900/30 bg-red-50/50 dark:bg-red-900/10 p-6">
            <h3 className="flex items-center text-base font-medium text-red-800 dark:text-red-400 mb-4">
              <X className="text-red-500 mr-2 h-5 w-5" /> Don&apos;t
            </h3>
            <ul className="space-y-3 ml-7 list-disc text-red-800 dark:text-red-400 text-sm">
              <li>Use only flags to represent languages (flags represent countries, not languages)</li>
              <li>Automatically redirect users to a detected language without consent</li>
              <li>Hide or make the language switcher difficult to find</li>
              <li>Forget to translate all parts of your application</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

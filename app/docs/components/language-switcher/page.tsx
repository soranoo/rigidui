import React from 'react'
import ComponentDocTemplate from '../../_components/ComponentDocTemplate'
import { LanguageProvider, LanguageSwitcher, Translate } from '@/registry/new-york/language-switcher/language-switcher';

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

  const features = [
    {
      icon: (
        <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
      title: "Language Selection",
      description: "Users can select from a dropdown of available languages."
    },
    {
      icon: (
        <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 11.955 0 0112 2.944a11.955 11.955 11.955 0 01-8.618 3.04A12.02 12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Language Detection",
      description: "Automatically detects the user's preferred language based on browser settings."
    },
    {
      icon: (
        <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
      title: "Persistence",
      description: "Remembers the user's language preference across sessions."
    }
  ]

  type BestPractice = {
    type: 'do' | 'dont';
    items: string[];
  };

  const bestPractices: BestPractice[] = [
    {
      type: 'do',
      items: [
        'Place the language switcher in a consistent location across pages',
        'Display language names in their native form (e.g., "Español" instead of "Spanish")',
        'Consider using flags as supplementary visuals, not as the only identifier',
        'Test your application in right-to-left languages if you support them',
      ]
    },
    {
      type: 'dont',
      items: [
        'Use only flags to represent languages (flags represent countries, not languages)',
        'Automatically redirect users to a detected language without consent',
        'Hide or make the language switcher difficult to find',
        'Forget to translate all parts of your application',
      ]
    }
  ]

  const usageCode = `import { LanguageProvider, LanguageSwitcher, Translate } from "@/components/ui/language-switcher"

export default function MyApp() {
  const handleLanguageChange = (language) => {
    console.log("Language changed to:", language)
    // Any additional logic when language changes
  }

  return (
    <LanguageProvider>
      {/* Your app header */}
      <header className="flex justify-between items-center p-4 border-b">
        <h1 className="text-xl font-bold">
          <Translate
            translations={{
              en: "My Application",
              es: "Mi Aplicación",
              fr: "Mon Application",
              de: "Meine Anwendung"
            }}
          />
        </h1>

        <LanguageSwitcher
          type="select"
          showFlags={true}
          onLanguageChange={handleLanguageChange}
          availableLanguages={['en', 'es', 'fr', 'de']}
          className="w-40"
        />
      </header>

      {/* Your app content with translations */}
      <main className="p-4">
        <h2 className="text-2xl mb-4">
          <Translate
            translations={{
              en: "Welcome to our platform",
              es: "Bienvenido a nuestra plataforma",
              fr: "Bienvenue sur notre plateforme",
              de: "Willkommen auf unserer Plattform"
            }}
          />
        </h2>

        <p className="mb-6">
          <Translate
            translations={{
              en: "Choose your language preference above",
              es: "Elija su preferencia de idioma arriba",
              fr: "Choisissez votre préférence de langue ci-dessus",
              de: "Wählen Sie oben Ihre Spracheinstellung"
            }}
          />
        </p>

        <button className="px-4 py-2 bg-blue-600 text-white rounded">
          <Translate
            translations={{
              en: "Get Started",
              es: "Comenzar",
              fr: "Commencer",
              de: "Loslegen"
            }}
          />
        </button>
      </main>
    </LanguageProvider>
  )
}`

  const previewComponent = (
    <LanguageProvider>
      <div className="border rounded-lg shadow-sm overflow-hidden max-w-3xl mx-auto">
        <header className="flex justify-between items-center p-4 border-b bg-gray-50 dark:bg-gray-800/50">
          <h1 className="text-xl font-bold">
            <Translate
              translations={{
                en: "My Application",
                es: "Mi Aplicación",
                fr: "Mon Application",
                de: "Meine Anwendung"
              }}
            />
          </h1>

          <LanguageSwitcher
            type="select"
            showFlags={true}
            className="w-40"
          />
        </header>

        <main className="p-6 bg-white dark:bg-gray-950">
          <h2 className="text-2xl mb-4">
            <Translate
              translations={{
                en: "Welcome to our platform",
                es: "Bienvenido a nuestra plataforma",
                fr: "Bienvenue sur notre plateforme",
                de: "Willkommen auf unserer Plattform"
              }}
            />
          </h2>

          <p className="mb-6 text-gray-600 dark:text-gray-400">
            <Translate
              translations={{
                en: "Choose your language preference above",
                es: "Elija su preferencia de idioma arriba",
                fr: "Choisissez votre préférence de langue ci-dessus",
                de: "Wählen Sie oben Ihre Spracheinstellung"
              }}
            />
          </p>

          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            <Translate
              translations={{
                en: "Get Started",
                es: "Comenzar",
                fr: "Commencer",
                de: "Loslegen"
              }}
            />
          </button>
        </main>
      </div>
    </LanguageProvider>
  );

  return (
    <ComponentDocTemplate
      title="Language Switcher"
      description="A component for switching between different languages in your application."
      previewComponent={previewComponent}
      githubPath="registry/new-york/language-switcher/language-switcher.tsx"
      usageCode={usageCode}
      usageDescription="The Language Switcher component provides an interface for changing the language in your application. The example below demonstrates how it can translate an entire page."
      propsData={propsData}
      features={features}
      bestPractices={bestPractices}
      componentName="language-switcher"
    />
  )
}
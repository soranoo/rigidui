import React from 'react'
import ComponentDocTemplate from '../../_components/ComponentDocTemplate'
import { LanguageProvider, LanguageSwitcher, Translate } from '@/registry/new-york/language-switcher/language-switcher';

export default function LanguageSwitcherPage() {
  const providerPropsData = [
    {
      name: 'children',
      type: 'ReactNode',
      description: 'The content to wrap with the language provider',
      required: true,
    },
    {
      name: 'initialLanguage',
      type: 'string',
      defaultValue: "'en'",
      description: 'The initial language to use',
    },
    {
      name: 'supportedLanguages',
      type: 'Language[]',
      defaultValue: "[{ code: 'en', name: 'English', flag: '🇺🇸' }, ...]",
      description: 'List of supported languages with their codes, names, and optional flags',
    },
    {
      name: 'translations',
      type: 'TranslationMap',
      defaultValue: '{}',
      description: 'Map of translations for each language',
    },
    {
      name: 'persistLanguage',
      type: 'boolean',
      defaultValue: 'true',
      description: 'Whether to persist language selection in localStorage',
    },
    {
      name: 'storageKey',
      type: 'string',
      defaultValue: "'preferred-language'",
      description: 'Key to use for storing language preference in localStorage',
    },
    {
      name: 'detectBrowserLanguage',
      type: 'boolean',
      defaultValue: 'true',
      description: 'Whether to detect and use browser language on first load',
    }
  ]

  const switcherPropsData = [
    {
      name: 'type',
      type: "'dropdown' | 'select' | 'buttons'",
      defaultValue: "'dropdown'",
      description: 'The display type of the language switcher',
    },
    {
      name: 'showFlags',
      type: 'boolean',
      defaultValue: 'true',
      description: 'Whether to show flag emojis next to language names',
    },
    {
      name: 'className',
      type: 'string',
      defaultValue: "''",
      description: 'Additional CSS class for the language switcher',
    },
    {
      name: 'onLanguageChange',
      type: '(language: string) => void',
      description: 'Callback function triggered when language is changed',
    },
    {
      name: 'availableLanguages',
      type: 'string[]',
      description: 'Array of language codes to display in the switcher (defaults to all supported)',
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: 'false',
      description: 'Whether the language switcher is disabled',
    }
  ]

  const translatePropsData = [
    {
      name: 'translations',
      type: '{[languageCode: string]: string}',
      description: 'Object mapping language codes to translated strings',
      required: true,
    },
    {
      name: 'fallback',
      type: 'string',
      defaultValue: "''",
      description: 'Fallback text to display if no translation is found',
    },
    {
      name: 'className',
      type: 'string',
      defaultValue: "''",
      description: 'Additional CSS class for the translated text',
    },
    {
      name: 'variables',
      type: 'Record<string, string>',
      defaultValue: '{}',
      description: 'Variables to substitute in translation strings using {varName} syntax',
    }
  ]

  const propsData = [
    {
      name: 'LanguageProvider',
      description: 'Provides language context to child components',
      propsData: providerPropsData,
    },
    {
      name: 'LanguageSwitcher',
      description: 'UI component for switching between languages',
      propsData: switcherPropsData,
    },
    {
      name: 'Translate',
      description: 'Component for rendering translated text',
      propsData: translatePropsData,
    },
  ]


  const features = [
    {
      icon: (
        <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
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

        <main className="p-6 bg-white dark:bg-background">
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
      propsData={[]}
      features={features}
      bestPractices={bestPractices}
      componentName="https://rigidui.vercel.app/registry/language-switcher"
      subComponents={propsData}
    />
  )
}
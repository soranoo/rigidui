"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils";

export type Language = {
  code: string;
  name: string;
  flag?: string;
};

export type Translations = {
  [key: string]: string;
};

export type TranslationMap = {
  [languageCode: string]: Translations;
};

export interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (code: string) => void;
  languages: Language[];
  translate: (key: string) => string;
}

export interface TranslateProps {
  translations: {
    [languageCode: string]: string;
  };
  fallback?: string;
}

export interface LanguageSwitcherProps {
  type?: 'dropdown' | 'select' | 'buttons';
  showFlags?: boolean;
  className?: string;
}

const defaultLanguages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
];

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
  initialLanguage?: string;
  supportedLanguages?: Language[];
  translations?: TranslationMap;
}

export function LanguageProvider({
  children,
  initialLanguage = 'en',
  supportedLanguages = defaultLanguages,
  translations = {},
}: LanguageProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState<string>(initialLanguage);
  const [translationsMap,] = useState<TranslationMap>(translations);

  useEffect(() => {
    const savedLanguage = typeof window !== 'undefined'
      ? localStorage.getItem('preferredLanguage')
      : null;

    if (savedLanguage && supportedLanguages.some(lang => lang.code === savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    }
  }, [supportedLanguages]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferredLanguage', currentLanguage);
    }
  }, [currentLanguage]);

  const setLanguage = (code: string) => {
    if (supportedLanguages.some(lang => lang.code === code)) {
      setCurrentLanguage(code);
    } else {
      console.warn(`Language '${code}' is not supported`);
    }
  };

  const translate = (key: string): string => {
    if (
      translationsMap[currentLanguage] &&
      translationsMap[currentLanguage][key]
    ) {
      return translationsMap[currentLanguage][key];
    }

    if (
      currentLanguage !== initialLanguage &&
      translationsMap[initialLanguage] &&
      translationsMap[initialLanguage][key]
    ) {
      return translationsMap[initialLanguage][key];
    }

    return key;
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        setLanguage,
        languages: supportedLanguages,
        translate
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
}

export function Translate({ translations, fallback = '' }: TranslateProps) {
  const { currentLanguage } = useLanguage();

  const content = translations[currentLanguage] || translations['en'] || fallback;

  return <>{content}</>;
}

export function LanguageSwitcher({
  type = 'dropdown',
  showFlags = true,
  className = ''
}: LanguageSwitcherProps) {
  const { currentLanguage, languages, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguageObj = languages.find(lang => lang.code === currentLanguage);

  if (type === 'select') {
    return (
      <Select
        value={currentLanguage}
        onValueChange={(value) => setLanguage(value)}
      >
        <SelectTrigger className={cn("w-[180px] dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100", className)}>
          <SelectValue>
            {showFlags && currentLanguageObj?.flag ? `${currentLanguageObj.flag} ` : ''}
            {currentLanguageObj?.name || currentLanguage}
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="dark:bg-gray-900 dark:border-gray-700">
          {languages.map((language) => (
            <SelectItem
              key={language.code}
              value={language.code}
              className="dark:text-gray-100 dark:data-[highlighted]:bg-gray-800 dark:focus:bg-gray-800"
            >
              {showFlags && language.flag ? `${language.flag} ` : ''}
              {language.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  } else if (type === 'buttons') {
    return (
      <div className={cn("flex gap-2", className)}>
        {languages.map((language) => (
          <button
            key={language.code}
            onClick={() => setLanguage(language.code)}
            className={cn(
              "px-3 py-1 rounded-md text-sm transition-colors",
              currentLanguage === language.code
                ? "bg-primary text-primary-foreground dark:bg-gray-700 dark:text-white"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            )}
          >
            {showFlags && language.flag ? `${language.flag} ` : ''}
            {language.name}
          </button>
        ))}
      </div>
    );
  } else {
    return (
      <div className={cn("relative", className)}>
        <button
          className="flex items-center gap-2 px-3 py-2 rounded-md text-sm bg-background dark:bg-gray-800 border border-input dark:border-gray-700 hover:bg-accent dark:hover:bg-gray-700 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {showFlags && currentLanguageObj?.flag ? `${currentLanguageObj.flag} ` : ''}
          {currentLanguageObj?.name || currentLanguage}
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 mt-1 w-full bg-background dark:bg-gray-900 rounded-md border border-input dark:border-gray-700 shadow-md z-10">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => {
                  setLanguage(language.code);
                  setIsOpen(false);
                }}
                className={cn(
                  "w-full text-left px-3 py-2 text-sm hover:bg-accent dark:hover:bg-gray-800 transition-colors",
                  currentLanguage === language.code && "bg-accent/50 dark:bg-gray-800/90 font-medium"
                )}
              >
                {showFlags && language.flag ? `${language.flag} ` : ''}
                {language.name}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }
}
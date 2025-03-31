"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

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
  const [translationsMap, ] = useState<TranslationMap>(translations);

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
      <select
        value={currentLanguage}
        onChange={(e) => setLanguage(e.target.value)}
        className={`language-selector ${className}`}
      >
        {languages.map((language) => (
          <option key={language.code} value={language.code}>
            {showFlags && language.flag ? `${language.flag} ` : ''}
            {language.name}
          </option>
        ))}
      </select>
    );
  } else if (type === 'buttons') {
    return (
      <div className={`language-buttons ${className}`}>
        {languages.map((language) => (
          <button
            key={language.code}
            onClick={() => setLanguage(language.code)}
            className={`language-button ${currentLanguage === language.code ? 'active' : ''}`}
          >
            {showFlags && language.flag ? `${language.flag} ` : ''}
            {language.name}
          </button>
        ))}
      </div>
    );
  } else {
    return (
      <div className={`language-dropdown ${className}`}>
        <button
          className="dropdown-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          {showFlags && currentLanguageObj?.flag ? `${currentLanguageObj.flag} ` : ''}
          {currentLanguageObj?.name || currentLanguage}
        </button>

        {isOpen && (
          <div className="dropdown-menu">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => {
                  setLanguage(language.code);
                  setIsOpen(false);
                }}
                className={`dropdown-item ${currentLanguage === language.code ? 'active' : ''}`}
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
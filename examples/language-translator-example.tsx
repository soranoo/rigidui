"use client";

import React from "react";
import {
  LanguageProvider,
  LanguageSwitcher,
  Translate
} from "@/registry/new-york/language-switcher/language-switcher";

export function LanguageTranslatorExamples() {
  return (
    <LanguageProvider>
      <div className="w-full max-w-md mx-auto space-y-8">
        <h1 className="text-2xl font-bold">Language Translator</h1>

        <div className="space-y-2">
          <h2 className="text-lg font-medium">Dropdown Style (with flags)</h2>
          <LanguageSwitcher type="dropdown" showFlags={false} className="w-full max-w-xs" />
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-medium">Select Style</h2>
          <LanguageSwitcher type="select" showFlags={false} className="w-full max-w-xs" />
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-medium">Button Style</h2>
          <LanguageSwitcher type="buttons" className="flex gap-2" />
        </div>

        <div className="space-y-4 border rounded-md p-4">
          <h2 className="text-lg font-medium">Translated Content Examples</h2>

          <div className="space-y-2">
            <p className="font-medium">Greeting:</p>
            <p className="text-xl">
              <Translate
                translations={{
                  en: "Hello, welcome to our website!",
                  es: "¡Hola, bienvenido a nuestro sitio web!",
                  fr: "Bonjour, bienvenue sur notre site web!",
                  de: "Hallo, willkommen auf unserer Website!"
                }}
              />
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-medium">Call to action:</p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
              <Translate
                translations={{
                  en: "Get Started",
                  es: "Comenzar",
                  fr: "Commencer",
                  de: "Loslegen"
                }}
              />
            </button>
          </div>

          <div className="space-y-2">
            <p className="font-medium">Date format example:</p>
            <p>
              <Translate
                translations={{
                  en: "Today is Monday, January 1st",
                  es: "Hoy es lunes, 1 de enero",
                  fr: "Aujourd'hui c'est lundi 1er janvier",
                  de: "Heute ist Montag, 1. Januar"
                }}
              />
            </p>
          </div>
        </div>
      </div>
    </LanguageProvider>
  );
}

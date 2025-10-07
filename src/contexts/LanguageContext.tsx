"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language } from '@/lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('sr'); // Default to Serbian

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem('bros-code-language') as Language;
    if (savedLanguage && (savedLanguage === 'sr' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('bros-code-language', lang);
  };

  const t = (path: string): string => {
    const keys = path.split('.');
    let value: unknown = translations[language];
    
    for (const key of keys) {
      value = (value as Record<string, unknown>)?.[key];
    }
    
    return (value as string) || path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
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
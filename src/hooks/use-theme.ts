'use client';

import {useCallback, useEffect, useMemo, useState} from 'react';

type Theme = 'light' | 'dark';

interface Variables {
  'primary': string;
  'highlight': string;
  'buffered': string;
  'background-primary': string;
  'background-highlight': string;
  'black': string;
  'gray': string;
  'dark-gray': string;
  'border-primary': string;
  'shadow-opacity': string;
  'shadow-opacity-light': string;
}

export const light: Variables = {
  'primary': '#25272a',
  // primary: '#F5F7F9',
  'highlight': '#1E8FD1',
  'buffered': '#E9F0F4',
  'background-primary': '#72757b',
  'background-highlight': '#a6a6b1',
  'black': '#2A2E35',
  'gray': '#9A9D9F',
  'dark-gray': '#A0A2A5',
  'border-primary': '#D6D6D6',
  'shadow-opacity': 'rgba(0, 0, 0, 0.1)',
  'shadow-opacity-light': 'rgba(0, 0, 0, 0.12)',
};

export const dark: Variables = {
  'primary': '#a7abb0',
  'highlight': '#63BCF8',
  'buffered': '#1c262c',
  'background-primary': '#242930',
  'background-highlight': '#2F353E',
  'black': '#1F2329',
  'gray': '#76797C',
  'dark-gray': '#5f6064',
  'border-primary': '#343434',
  'shadow-opacity': 'rgba(0, 0, 0, 0.25)',
  'shadow-opacity-light': 'rgba(0, 0, 0, 0.12)',
};

const inject = (newTheme: Theme) => {
  const vars = newTheme === 'light' ? light : dark;
  for (const k in vars) {
    document.documentElement.style.setProperty(`--theme-${k}`, vars[k]);
  }
};

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('dark');
  const isLightTheme = useMemo(() => theme === 'light', [theme]);
  const isDarkTheme = useMemo(() => theme === 'dark', [theme]);

  useEffect(() => {
    const selector = '(prefers-color-scheme: dark)';
    const isDark = window.matchMedia(selector).matches;

    if (isDark) {
      return;
    }

    inject('light');
    setTheme('light');
  }, []);

  const toggle = useCallback(() => {
    setTheme((t) => {
      if (t === 'dark') {
        inject('light');
        return 'light';
      }

      inject('dark');
      return 'dark';
    });
  }, []);

  return {
    theme,
    toggle,
    isLightTheme,
    isDarkTheme,
  };
}

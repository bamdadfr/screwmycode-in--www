'use client';

import {useCallback, useEffect, useMemo, useState} from 'react';

type Theme = 'light' | 'dark';

interface Variables {
  primary: string;
  highlight: string;
  buffered: string;
  backgroundPrimary: string;
  backgroundHighlight: string;
  black: string;
  gray: string;
  darkGray: string;
  borderPrimary: string;
  shadowOpacity: string;
  shadowOpacityLight: string;
}

export const light: Variables = {
  primary: '#25272a',
  // primary: '#F5F7F9',
  highlight: '#1E8FD1',
  buffered: '#E9F0F4',
  backgroundPrimary: '#72757b',
  backgroundHighlight: '#a6a6b1',
  black: '#2A2E35',
  gray: '#9A9D9F',
  darkGray: '#A0A2A5',
  borderPrimary: '#D6D6D6',
  shadowOpacity: 'rgba(0, 0, 0, 0.1)',
  shadowOpacityLight: 'rgba(0, 0, 0, 0.12)',
};

export const dark: Variables = {
  primary: '#a7abb0',
  highlight: '#63BCF8',
  buffered: '#1c262c',
  backgroundPrimary: '#242930',
  backgroundHighlight: '#2F353E',
  black: '#1F2329',
  gray: '#76797C',
  darkGray: '#5f6064',
  borderPrimary: '#343434',
  shadowOpacity: 'rgba(0, 0, 0, 0.25)',
  shadowOpacityLight: 'rgba(0, 0, 0, 0.12)',
};

const inject = (newTheme: Theme) => {
  const vars = newTheme === 'light' ? light : dark;
  for (const k in vars) {
    document.documentElement.style.setProperty(`--c-${k}`, vars[k]);
  }
};

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('dark');
  const isLight = useMemo(() => theme === 'light', [theme]);

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
    isLight,
  };
}

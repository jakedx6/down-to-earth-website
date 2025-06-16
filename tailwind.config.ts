import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          'light-green': '#b1e565',
          'dark-green': '#205248',
          'brown': '#896a59',
          'dark-brown': '#2b180d',
          'accent-blue': '#2ad8ff',
        },
        // High contrast text utilities
        contrast: {
          'high-light': '#111827',     // gray-900 for light backgrounds
          'high-dark': '#ffffff',      // white for dark backgrounds  
          'medium-light': '#374151',   // gray-700 for light backgrounds
          'medium-dark': '#f3f4f6',    // gray-100 for dark backgrounds
          'low-light': '#4b5563',      // gray-600 for light backgrounds
          'low-dark': '#e5e7eb',       // gray-200 for dark backgrounds
        },
        primary: {
          50: '#f0fde4',
          100: '#dcfcc8',
          200: '#bef664', // light-green
          300: '#9ef01a',
          400: '#84cc16',
          500: '#65a30d',
          600: '#4d7c0f',
          700: '#365314',
          800: '#1a2e05',
          900: '#0f1419',
        },
        secondary: {
          50: '#f0fdfd',
          100: '#ccfbfc',
          200: '#99f6fa',
          300: '#66d9ee',
          400: '#2ad8ff', // accent-blue
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        earth: {
          50: '#faf9f7',
          100: '#f2f0ec',
          200: '#e8e3db',
          300: '#d6cfc4',
          400: '#c0b5a7',
          500: '#896a59', // brown
          600: '#735a4b',
          700: '#5f4a3d',
          800: '#4f3e33',
          900: '#2b180d', // dark-brown
        },
        forest: {
          50: '#f0f9f6',
          100: '#dcf2e9',
          200: '#bae6d3',
          300: '#86d5b3',
          400: '#4abe8d',
          500: '#22a56b',
          600: '#16875a',
          700: '#205248', // dark-green from logo
          800: '#1a443c', // darker green for text
          900: '#0f2922',
        }
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'SFMono-Regular'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config;
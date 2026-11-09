/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'canvas-cream': '#faf9f7',
        'canvas-light': '#f8f9fc',
        'canvas-dark': '#0a0f1d',
        'surface-ivory': '#fbfaf7',
        'pure-white': '#ffffff',
        'ink-charcoal': '#121722',
        'ink-deep': '#0d1321',
        'electric-cobalt': '#0068f9',
        'deep-cobalt': '#024bb1',
        'dark-navy': '#0b1938',
        'dark-card': '#0f172a',
        'dark-card-border': '#1e293b',
        'cerulean': '#0074dd',
        'vivid-violet': '#6736eb',
        'forest': '#046645',
        'slate-gray': '#777c86',
        'hairline': '#efefef',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Cairo"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        arabic: ['"Cairo"', '"Plus Jakarta Sans"', 'ui-sans-serif', 'sans-serif'],
      },
      borderRadius: {
        'card': '16px',
        'pill': '48px',
        'icon': '60px',
        'orb': '100px',
      },
      boxShadow: {
        'dock-subtle': 'rgba(0, 0, 0, 0.07) 0px 1px 1px 0px, rgba(0, 0, 0, 0.04) 0px -1px 1px 0px inset, rgba(0, 0, 0, 0.14) 0px 0px 0px 0.5px inset',
        'dock-lg': 'rgba(0, 0, 0, 0.04) 0px 20px 20px -8px',
        'cobalt-glow': '0 0 35px -5px rgba(0, 104, 249, 0.45)',
        'cobalt-sm': '0 0 15px -2px rgba(0, 104, 249, 0.35)',
      },
      maxWidth: {
        'dock': '1240px',
      }
    },
  },
  plugins: [],
};

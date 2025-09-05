/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Mapeadas para CSS vars (RGB) compatíveis com /<alpha-value>
        'e-bg':      'rgb(var(--e-bg) / <alpha-value>)',
        'e-panel':   'rgb(var(--e-panel) / <alpha-value>)',
        'e-stroke':  'rgb(var(--e-stroke) / <alpha-value>)',
        'e-primary': 'rgb(var(--e-primary) / <alpha-value>)',
        'e-accent':  'rgb(var(--e-accent) / <alpha-value>)',
        // NOVA: texto reativo ao tema
        'e-text':    'rgb(var(--e-text) / <alpha-value>)',
      },
      boxShadow: {
        'e-md': '0 8px 24px rgba(0,0,0,.24)',
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
      },
    },
  },
  plugins: [],
}

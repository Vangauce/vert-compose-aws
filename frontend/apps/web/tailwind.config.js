/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Habilitar modo oscuro usando una clase
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/forms/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/messages/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        // Modo claro
        light: {
          primary: '#0096c7',
          secondary: '#007f5f',
          background: '#f0f0f0',
          surface: '#ffffff',
          accent: '#f77f00',
          error: '#c8102e',
          textPrimary: '#000000',
          textSecondary: '#4a4a4a',
        },
        // Modo oscuro
        dark: {
          primary: '#00b4d8',
          secondary: '#52b788',
          background: '#121212',
          surface: '#1e1e1e',
          accent: '#ffba08',
          error: '#ff4d4d',
          textPrimary: '#ffffff',
          textSecondary: '#b0b0b0',
        }
      }
    }
  },
  plugins: []
}
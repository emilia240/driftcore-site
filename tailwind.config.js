/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F9F9F9',
        navy: '#213345',
        'blue-light': '#DBE7FF',
        'blue-muted': '#4A5D87',
        'blue-soft': '#7F8CBF',
        cyan: '#54C9EB',
      },
      fontFamily: {
        heading: ['Inter Tight', 'sans-serif', 'medium'],
        body: ['Inter Tight', 'sans-serif'],
      },
      fontSize: {
        'body': 'clamp(1rem, 0.95rem + 0.25vw, 1.125rem)',
        'body-footer': 'clamp(0.875rem, 0.8rem + 0.15vw, 1rem)',
        'h5': 'clamp(1.125rem, 0.375vw, 1.375rem)',
        'h4': 'clamp(1.25rem, 1.15rem + 0.5vw, 1.625rem)',
        'h3': 'clamp(1.5rem, 1.35rem + 0.75vw, 2rem)',
        'h2': 'clamp(1.875rem, 1.65rem + 1.2vw, 2.625rem)',
        'h1': 'clamp(2.25rem, 1.85rem + 2vw, 3.75rem)',
      },
      lineHeight: {
        'hero-copy': '1.1',
        'card-title': '1',
        'card-copy': '0.8',
      },
      borderRadius: {
        'xl': '25px',
      }
    },
  },
}
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
        'blue-light': '#E4ECFC',
        'blue-muted': '#4A5D87',
        cyan: '#54C9EB',
      },
      fontFamily: {
        heading: ['Bricolage Grotesque', 'sans-serif'],
        body: ['Inter Tight', 'sans-serif'],
      },
      fontSize: {
        'body': 'clamp(1rem, 0.95rem + 0.25vw, 1.125rem)',
        'body-footer': 'clamp(0.875rem, 0.8rem + 0.15vw, 1rem)',
        'h5': 'clamp(1.125rem, 1.05rem + 0.375vw, 1.375rem)',
        'h4': 'clamp(1.25rem, 1.15rem + 0.5vw, 1.625rem)',
        'h3': 'clamp(1.5rem, 1.35rem + 0.75vw, 2rem)',
        'h2': 'clamp(1.875rem, 1.65rem + 1.125vw, 2.625rem)',
        'h1': 'clamp(2.25rem, 1.85rem + 2vw, 3.75rem)',
      },
      borderRadius: {
        'xl': '25px',
      }
    },
  },
}
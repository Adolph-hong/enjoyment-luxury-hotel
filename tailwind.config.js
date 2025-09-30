/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        brand: 'var(--font-family-brand)',
      },
      backgroundImage: {
        'hero': 'var(--bg-image-hero)',
        'about': 'var(--bg-image-about)',
        'auth': 'var(--bg-image-auth)',
        'rooms-deco': 'var(--bg-image-rooms-deco)',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        brand: ['Noto Serif TC', 'sans-serif'],
      },
      backgroundImage: {
        'image-hero': "url('./assets/home/hero.png')",
        'image-about': "url('./assets/home/about.png')",
        'image-auth': "url('./assets/auth/bg.jpg')",
        'image-rooms-deco': "url('./assets/home/decos/rooms-2.png')",
        'image-account': "url('./assets/account/bg.jpg')",
      },
    },
  },
  plugins: [],
}

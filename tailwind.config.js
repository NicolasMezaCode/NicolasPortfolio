/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'primary':'#0A0B0C',
        'letter':'#fff'
      },
      transitionProperty: {
        colorings: 'opacity 0.85s ease-in-out',
        line: 'all 0.85s ease-in-out',
      },
      backgroundImage: {
        'hero-pattern': "url('./src/assets/composition-book-cover-black-and-white-background-abstract-wallpaper-texture-or-pattern-grain-or-noise-marble-pattern-fabric-and-surface-wrapping-paper-flat-de.jpg')",
        'secondary-pattern': "url('./src/assets/png-transparent-blue-lined-white-paper-desktop-notebook-notepad-mobile-phones-page-miscellaneous-angle-text.png')",
        'tertiary-pattern': "url('./src/assets/2.png')",
      }
    },

  },
  plugins: [],
}


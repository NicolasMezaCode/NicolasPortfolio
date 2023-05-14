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
        'hand':['Just Another Hand','cursive']
      },
      colors: {
        'primary':'#0A0B0C',
        'letter':'#fff',
        'yellowPostit':'#FCCE14',
        'bluePostit':'#77E5D7',
      },
      transitionProperty: {
        colorings: 'opacity 0.85s ease-in-out',
        line: 'all 0.85s ease-in-out',
      },
      backgroundImage: {
        'hero-pattern': "url('./src/assets/composition-book-cover-black-and-white-background-abstract-wallpaper-texture-or-pattern-grain-or-noise-marble-pattern-fabric-and-surface-wrapping-paper-flat-de.jpg')",
        'secondary-pattern': "url('./src/assets/output-onlinepngtools.png')",
        'tertiary-pattern': "url('./src/assets/2.png')",
        'postit':"url('./src/assets/post-it-yellow.png')",
      },
      letterSpacing:{
        'thewidest':'0.3rem'
      },
      
    },

  },
  plugins: [],
}


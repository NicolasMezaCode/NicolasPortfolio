/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    patterns: {
      opacities: {
          100: "1",
          80: ".80",
          60: ".60",
          40: ".40",
          20: ".20",
          10: ".10",
          5: ".05",
      },
      sizes: {
          1: "0.25rem",
          2: "0.5rem",
          4: "1rem",
          6: "1.5rem",
          8: "2rem",
          16: "4rem",
          20: "5rem",
          24: "6rem",
          32: "8rem",
      }
    },
    extend: {
      fontFamily: {
        'hand':['Just Another Hand','cursive']
      },
      colors: {
        'primary':'#0A0B0C',
        'letter':'#fff',
        'letters':'#ffffffbf',
        'background':'#1A1C20',
        'yellowPostit':'#FCCE14',
        'bluePostit':'#77E5D7',
        'redPostit':'#fad5d4',
        'greenPostit':'#C9F0C3',
      },
      transitionProperty: {
        colorings: 'opacity 0.85s ease-in-out',
        line: 'all 0.85s ease-in-out',
      },
      backgroundImage: {
        'hero-pattern': "url('./src/assets/composition-book-cover-black-and-white-background-abstract-wallpaper-texture-or-pattern-grain-or-noise-marble-pattern-fabric-and-surface-wrapping-paper-flat-de.webp')",
        'secondary-pattern': "url('./src/assets/output-onlinepngtools.png')",
        'tertiary-pattern': "url('./src/assets/2.png')",
      },
      letterSpacing:{
        'thewidest':'0.3rem'
      },
      //change the scale to 115% when hover
      scale: {
        '110': '1.05',
      },
      
    },

  },
  plugins: [
    require('tailwindcss-bg-patterns'),
  ],
}


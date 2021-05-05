module.exports = {
  purge: [],
  darkMode: 'media',
  theme: {
    extend: {
      minWidth: {
        '1/2': '50%',
        '350': '350px'
      },
      fontFamily: {
        'sans': [ '-apple-system', 'BlinkMacSystemFont', '"Inter"', 'sans-serif']
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      },
      animation: {
        'fade': 'fadeIn 500ms ease'
      },
      textColor: {
        'keybase': '#FF6F21',
        'email': '#d43434',
        'spotify': '#1DB954',
        'blog': '#2181ff',
        'youtube': '#FF0000',
        'discord': '#7289DA',
        'uwutube': '#fe71dc',
        'black': '#202020',
        'inherit': 'inherit'
      },
      backgroundColor: {
        'black': '#202020'
      },
      fontWeight: {
        350: 350,
        400: 400,
        650: 650,
        700: 700
      },
      colors: {
        'dove-gray': {
          DEFAULT: '#6E6E6E',
          '50': '#E0E0E0',
          '100': '#D4D4D4',
          '200': '#BABABA',
          '300': '#A1A1A1',
          '400': '#878787',
          '500': '#6E6E6E',
          '600': '#545454',
          '700': '#3B3B3B',
          '800': '#202020',
          '900': '#080808'
        }
      },
      padding: {
        'safe': 'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)',
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-right': 'env(safe-area-inset-right)',
        'safe-left': 'env(safe-area-inset-left)'
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

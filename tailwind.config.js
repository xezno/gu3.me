module.exports = {
  purge: [],
  darkMode: 'media',
  theme: {
    extend: {
      minWidth: {
        '1/2': '50%',
        '1/3': '33%',
        '350': '350px'
      },
      maxWidth: {
        '1/2': '50%',
        '1/3': '33%'
      },
      fontFamily: {
        'sans': [ '-apple-system', 'BlinkMacSystemFont', '"Inter"', 'sans-serif']
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        pushDown: {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          // HACK: delay animation between loops
          '50%': { opacity: 0, transform: 'translateY(-10px)' },
          '75%': { opacity: 1, transform: 'translateY(0px)' },
          '100%': { opacity: 0, transform: 'translateY(10px)' }
        }
      },
      animation: {
        'fade': 'fadeIn 500ms ease',
        'push-down': 'pushDown 1500ms linear infinite'
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
        'default': {
          DEFAULT: '#564F7D',
          '50': '#E0DEEA',
          '100': '#D0CDDF',
          '200': '#AFABCA',
          '300': '#8F88B4',
          '400': '#6E669E',
          '500': '#564F7D',
          '600': '#403B5E',
          '700': '#2B283E',
          '800': '#15141F',
          '900': '#000000'
        }
      },
      padding: {
        'safe': 'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)',
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-right': 'env(safe-area-inset-right)',
        'safe-left': 'env(safe-area-inset-left)'
      },
      backgroundImage: theme => ({
        'main-image': 'url("/robot.png")'
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

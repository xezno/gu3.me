module.exports = {
  purge: [],
  darkMode: 'media',
  theme: {
    screens: {
      'md': '1280px',
    },
    extend: {
      zIndex: {
        '-10': '-10'
      },
      boxShadow: {
        'glow': '0 0 25px #D7FF2E'
      },
      minWidth: {
        '1/2': '50%',
        '1/3': '33%',
        '350': '350px',
        '200': '200px'
      },
      minHeight :{
        'hero': '500px'
      },
      maxWidth: {
        '1/2': '50%',
        '1/3': '33%'
      },
      width: {
        'card1/3': 'calc(33% - 1.5em)'
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
        },
        in: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0px)' }
        }
      },
      animation: {
        'fade': 'fadeIn 500ms ease',
        'push-down': 'pushDown 1500ms linear infinite',
        'in': 'in 250ms ease 500ms running both'
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
        "default": {
          '50': '#8ABDFF',
          '100': '#7AB4FF',
          '200': '#5CA3FF',
          '300': '#3D91FF',
          '400': '#1F80FF',
          '500': '#006EFF',
          '600': '#005BD1',
          '700': '#0047A3',
          '800': '#003375',
          '900': '#001F47'
        },
        "accent": {
          'DEFAULT': '#D7FF2E',
          '500': '#D7FF2E'
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
    extend: {
      scale: ['group-hover']
    },
  },
  plugins: [],
}

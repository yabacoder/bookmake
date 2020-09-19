module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {        
        softblue: '#7D8DE3',
        grayblue: '#9194A1',
        darkblue: '#252B46',
        bkred: '#FA5757'
      },
      margin: {
                '-72': '-18rem',
                '-80': '-22rem',
                }
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus','active']
  },
  plugins: [],
}
 
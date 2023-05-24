module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'bg1': "url('./assets/serv1.jpg')",
        'bg2': "url('./assets/bg3.jpg')",
        'bg3': "url('./assets/serv3.jpg')",
        'bg4': "url('./assets/serv4.jpg')",
        'bg5': "url('./assets/bg3.jpg')"
      }
    }
  },
  plugins: [],
};

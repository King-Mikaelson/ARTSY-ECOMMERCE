/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontSize: {
            sm: '0.8rem',
            base: '1rem',
            xl: '1.25rem',
            size: '2rem',
            ten:"0.714rem",
            twelve:"0.875rem",
            fourteen:"1rem",
            seventeen:"1.214rem",
            twenty:"1.429rem",
            twentyfour:"1.714rem",
            twentynine:"2.071rem",
            thirtyfive:"2.500rem",
            fortytwo:"3rem",
     },

     lineHeight: {
        'extra-loose': '2.5',
        '12': '5.625rem',
      },

      fontFamily: {
        'clashDisplay': ['Clash Display', 'sans-serif'] ,
        'Satoshi': [ 'Satoshi', 'sans-serif'],  
        'Baskervville':['Baskervville', 'serif'], 
        'Rubik':['Rubik', 'sans-serif'], 
        'Bellefair':['Bellefair', 'serif'],
        'STIX': ['STIX Two Text', 'serif'],  
        'Poppins': ['Poppins', 'sans-serif'],
        'Inter': ['Inter', 'sans-serif']
      },

      keyframes: {
        wave: {
          '0%': { "background-image": "url('/Rectangle299(3).png')" },
          '50%': { "background-image": "url('/Rectangle300.png')" },
          '100%': { "background-image": "url('/Rectangle301.png')" },
        },
        shake: {
          '0%': { "background-image": "url('/Female.png')" },
          '50%': { "background-image": "url('/Rectangle300.png')" },
          '100%': { "background-image": "url('/Rectangle301.png')" },
        },
      },

      animation: {
        'waving-hand': 'wave 10s infinite ease-in-out',
        'shaking-hand': 'shake 10s infinite ease-in-out',

      },
      
      },
      
    },
    plugins: [
      require('@tailwindcss/line-clamp'),
      // ...
    ],
  }
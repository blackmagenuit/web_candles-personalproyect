/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: { 
        sans: ["Source Sans Pro", "ui-sans-serif", "system-ui"],
        title: ["Playfair Display", "serif"],
        elegant: ["Cormorant Garamond", "serif"]
      },
      colors: {
        rosatierra: {
          50:  "#f5f5f5", // Blanco grisáceo
          100: "#ebd6d1", // Rosa pálido
          200: "#d7c6b3", // Beige suave
          300: "#d9b4ac", // Rosa viejo
          400: "#c8988f", 
          500: "#b67c72",
          600: "#a56055",
          700: "#934438",
          800: "#82281b",
          900: "#700c00"
        },
        tierra: {
          50:  "#f5f5f5",
          100: "#ebd6d1",
          200: "#d7c6b3", 
          300: "#d9b4ac", 
          400: "#c8a195",
          500: "#b88a7e",
          600: "#a77367",
          700: "#965c50",
          800: "#854539",
          900: "#742e22"
        }
      },
      // Agregar transiciones personalizadas
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      // Animaciones personalizadas
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    // Plugin para formularios mejorados
    require('@tailwindcss/forms'),
    // Plugin para typography
    require('@tailwindcss/typography'),
  ],
}
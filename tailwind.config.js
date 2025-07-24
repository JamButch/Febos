// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    // Agrega cualquier otra carpeta donde uses clases de Tailwind, por ejemplo:
    // `./src/templates/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      // Aquí puedes extender el tema por defecto de Tailwind.
      // Por ejemplo, añadir tus propias fuentes, colores, etc.
      // colors: {
      //   'custom-blue': '#243c5a',
      // },
      // fontFamily: {
      //   sans: ['Inter', 'sans-serif'], // Si quieres usar la fuente Inter
      // },
    },
  },
  plugins: [
    // Aquí puedes añadir plugins de Tailwind CSS si los necesitas
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
  ],
};
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      textUnderlineOffset: {
        32: '32px',
      },
      screen: {
        xs: '808px',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}


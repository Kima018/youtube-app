/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    theme:{
      fontFamily:{
        serif:['Roboto','sans-serif']
      },


    },
    extend: {
      backgroundColor:{
        'yt-dark':'#0f0f0f',
        'menu-grey':'#282828',
      },
    },
  },
  plugins: [
      require('flowbite/plugin'),
  ],
}


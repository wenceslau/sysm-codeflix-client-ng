/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('vidstack/tailwind.cjs')({
      prefix: 'media',
      webComponents: true,
    }),
  ],
}


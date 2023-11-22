/** @type {import('tailwindcss').Config} */

const {
  gray,
  grayDark,
  blue,
  blueDark,
  red,
  redDark,
  green,
  mauve,
  mauveDark } = require('@radix-ui/colors');


module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/_components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ...gray,
        ...blue,
        ...red,
        ...mauve,
        ...green,
      },
      gridTemplateColumns: {
        'imageGrid': "repeat(auto-fit, minmax(150px, auto))",
      }
    },
  },
  plugins: [],
}

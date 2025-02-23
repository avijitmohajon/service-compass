const withMT = require('@material-tailwind/react/utils/withMT'); 
import daisyui from 'daisyui'; 

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', 
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        avi: ["Lilita One", "serif"],
        avi2: ["Oleo Script", "serif"],
        
      },
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: ['light', 'black', 'cupcake', 'retro', 'dark'], // Available DaisyUI themes
  },
});

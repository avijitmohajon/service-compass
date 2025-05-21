import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', 
    // ❌ Removed Material Tailwind paths
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
    themes: ['light', 'black', 'cupcake', 'retro', 'dark'],
  },
};

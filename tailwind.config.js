/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0B6E4F',
        surface: '#FAFAFF',
        onSurface: '#050517',
        onSurfaceVariant: '#363645'
      },
      fontFamily: {
        workSans: ['Work Sans', 'sans-serif'],
        merriweather: ['Merriweather', 'serif']
      }
    }
  },
  plugins: []
};

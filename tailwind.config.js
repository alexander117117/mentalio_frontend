/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      unbounded: ['Unbounded', 'serif'],
    },
    screens: {
      xxs: '320px',
      xs: '576px',
      sm: '768px',
      md: '1024px',
      lg: '1280px',
      xl: '1536px',
      '2xl': '1920px',
    },
    extend: {
      colors: {
        bgDark: '#212121',
        regButton: '#24AC18E5',
        siderGray: '#868585',
        primary: '#24AC18',
        directoryFolder: '#001E02',
        userFolder: '#BDFF9DE5',
        colorHover: '#0F460A',
      },
    },
  },
  plugins: [],
}

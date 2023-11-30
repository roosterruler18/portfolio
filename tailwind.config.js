/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '12px',
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        '2xl': '1536px'
      },
    },
    extend: {
      colors: {
        textdark: "#391400",
        textdarkaccent: "#EF6D58",
        textdarkgray: "rgba(57, 20, 0, 0.64)",
        textlightgray: "rgba(255, 255, 255, 0.64)",
        'F3D1BF': '#F3D1BF',
        'F6D021': '#F6D021',
        '391400': '#391400',
        '3A3C56': '#3A3C56',
        '5C2000': '#5C2000',
        'EF6C57': '#EF6C57',
        'F5DED1': '#F5DED1',
        'FFE4DF': '#FFE4DF',
        'D8D8D8': '#D8D8D8',
        'E7C4B2': '#E7C4B2',
        'F7CC47': '#F7CC47',
        '9B9B9B': '#9B9B9B',
        'B550F8': '#B550F8',
        'light': 'rgba(255, 255, 255, 0.3)',
        'DFE0E9': '#DFE0E9',
        'FDF0E9': '#FDF0E9',
        '8082A5': '#8082A5',
        'F6DACA': '#F6DACA',
        'F9E5DA': '#F9E5DA',
        '28293E': '#28293E',
        '4E4F6E': '#4E4F6E',
        'FFD5CE': '#FFD5CE',
        '32334C': '#32334C',
        '494A69': '#494A69',
        '570B00': '#570B00',
        '6A6C8E': '#6A6C8E',
        'AAAAAA': '#AAAAAA',
        'B4ABBA': '#B4ABBA',
        'B550F6': '#B550F6',
        'F094E3': '#F094E3',
        'F38472': '#F38472',
        'F4E4FF': '#F4E4FF',
        'F7CB47': '#F7CB47',
        'light-gray': 'rgba(255, 255, 255, 0.5)'
      },
      fontFamily: {
        body: ['Epilogue'],
      },
    },
  },
  plugins: [],
}


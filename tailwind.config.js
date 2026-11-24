/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#07080c',
          900: '#0b0d13',
          850: '#11141d',
          800: '#171b26',
          700: '#212738',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        accent: {
          DEFAULT: '#bef264', // Electric lime
          neon: '#bef264',
          bright: '#ccff00',
          muted: '#84cc16',
          dim: 'rgba(190, 242, 100, 0.12)',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};

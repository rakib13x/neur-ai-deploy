/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        foreground: '#fafafa',
        muted_foreground: '#737373',
      },
      backgroundColor: {
        primary: '#0a0a0a',
        muted: '#f5f5f5', 
      },
      animation: {
        'gradient-cubic': 'gradient-cubic 8s cubic-bezier(0.25, 0.1, 0.25, 1) infinite',
      },
      keyframes: {
        'gradient-cubic': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
};

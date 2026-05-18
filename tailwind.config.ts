import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'kashmir-accent': '#1F6E3F',
        'kashmir-soft': '#E3F0E8',
        'bali-accent': '#D97706',
        'bali-soft': '#FEF3C7',
        'brand-cta': '#E85A1F',
        'brand-navy': '#0E2A47',
        'cream': '#FAF6F0',
        'muted': '#5A6B7A',
        'border-soft': '#E5DCD0',
      },
      fontFamily: {
        fraunces: ['var(--font-fraunces)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'slide-up': 'slideUp 0.2s ease-out',
        'fade-in': 'fadeIn 0.4s ease-out',
      },
      keyframes: {
        slideUp: { '0%': { transform: 'translateY(100%)' }, '100%': { transform: 'translateY(0)' } },
        fadeIn: { '0%': { opacity: '0', transform: 'translateY(12px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      }
    },
  },
  plugins: [],
}
export default config

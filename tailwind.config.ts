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
        'cream': '#FFFBF5',
        'muted': '#5A6B7A',
        'border-soft': '#E5DCD0',
        // Vibrant Tropical Palette (Singapore)
        'light-blue': '#E6F4FF',
        'sky-light': '#F0F9FF',
        'teal-primary': '#0D9488',
        'teal-bright': '#06B6D4',
        'teal-light': '#CCFBF1',
        'teal-accent': '#14B8A6',
        'coral': '#FF6B6B',
        'sunny-yellow': '#FFB84D',
        'ocean-blue': '#0369A1',
        'soft-gold': '#F59E0B',
        'emerald': '#10B981',
        'dark-text': '#1F2937',
        'medium-text': '#4B5563',
        'light-divider': '#E5E7EB',
        // Andaman palette (custom)
        'andaman-primary': '#0E7490',
        'andaman-gold': '#C9A84C',
        'andaman-deep-navy': '#0A1628',
        'andaman-pearl-white': '#F5F0E8',
        'andaman-coral': '#E07B5A',
      },
      fontFamily: {
        fraunces: ['var(--font-fraunces)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'slide-up': 'slideUp 0.2s ease-out',
        'fade-in': 'fadeIn 0.4s ease-out',
        'shimmer': 'shimmer 1.5s infinite linear',
      },
      keyframes: {
        slideUp: { '0%': { transform: 'translateY(100%)' }, '100%': { transform: 'translateY(0)' } },
        fadeIn: { '0%': { opacity: '0', transform: 'translateY(12px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        shimmer: { '100%': { transform: 'translateX(100%)' } },
      },
    },
  },
  plugins: [],
}
export default config

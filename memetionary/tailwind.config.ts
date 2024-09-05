import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        192: '48rem', // 768px
      },
      colors: {
        primary: {
          50: '#F4EFFA',
          100: '#DED1F1',
          200: '#BDA2E3',
          300: '#9B74D4',
          400: '#7A45C6',
          500: '#5917B8',
          600: '#471293',
          700: '#350E6E',
          800: '#24094A',
          900: '#120525',
        },
        danger: {
          50: '#FEECF0',
          100: '#FCD4DE',
          200: '#F799B1',
          300: '#F36689',
          400: '#EF3E5E',
          500: '#EB003B',
          600: '#D50136',
          700: '#8D0023',
          800: '#5E0018',
          900: '#2F000C',
        },
        warning: {
          50: '#FFF8E9',
          100: '#FFEAC1',
          200: '#FFE2A7',
          300: '#FFD47C',
          400: '#FFC550',
          500: '#FFB724',
          600: '#98690A',
          700: '#66490E',
          800: '#4D370B',
          900: '#332507',
        },
        success: {
          50: '#EEF7F0',
          100: '#CEE9D4',
          200: '#B2DCBB',
          300: '#8CCA99',
          400: '#33A14B',
          500: '#008A1E',
          600: '#006E18',
          700: '#005312',
          800: '#00370C',
          900: '#002207',
        },
        information: {
          50: '#E9F0FF',
          100: '#D4E1FF',
          200: '#A9C3FF',
          300: '#7DA4FF',
          400: '#5286FF',
          500: '#2768FF',
          600: '#1F53CC',
          700: '#173E99',
          800: '#0C1F4D',
          900: '#040A1A',
        },
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeOutDown: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-10px)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.35s ease-in-out',
        fadeOutDown: 'fadeOutDown 0.35s ease-in-out',
      },
    },
  },
  plugins: [],
};
export default config;

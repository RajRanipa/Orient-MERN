const plugin = require('tailwindcss/plugin');
const withOpacity = (variable) => {
  return ({ opacityValue }) =>
    opacityValue === undefined
      ? `rgb(var(${variable}))`
      : `rgb(var(${variable}) / ${opacityValue})`;
};

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // === Backgrounds ===
        'ui-light': withOpacity('--ui-bg-light'),
        'ui-medium': withOpacity('--ui-bg-medium'),
        'ui-dark': withOpacity('--ui-bg-dark'),

        // === Texts ===
        'ui-strong': withOpacity('--ui-text-strong'),
        'ui-regular': withOpacity('--ui-text-regular'),
        'ui-muted': withOpacity('--ui-text-muted'),
        'ui-signature': withOpacity('--ui-text-signature'),
        'ui-hover': withOpacity('--ui-text-hover'),

        // === Borders ===
        'ui-light': withOpacity('--ui-border-light'),
        'ui-dark': withOpacity('--ui-border-dark'),

        // === Primary / Secondary / CTA ===
        'ui-primary-main': withOpacity('--ui-primary-main'),
        'ui-primary-hover': withOpacity('--ui-primary-hover'),
        'ui-secondary-main': withOpacity('--ui-secondary-main'),
        'ui-secondary-hover': withOpacity('--ui-secondary-hover'),
        'ui-cta-main': withOpacity('--ui-cta-main'),
        'ui-cta-hover': withOpacity('--ui-cta-hover'),

        // === Alerts ===
        'ui-success': withOpacity('--ui-alert-success'),
        'ui-error': withOpacity('--ui-alert-error'),
        'ui-info': withOpacity('--ui-alert-info'),

        // === Brand Highlights ===
        'ui-brand-highlight': withOpacity('--ui-brand-highlight'),
      },
      boxShadow: {
        card: '0 2px 10px rgba(0, 0, 0, 0.06)',
        nav: '0 1px 4px rgba(0, 0, 0, 0.05)',

        // Border & Shadow
        'ui-sm': 'var(--ui-shadow-sm)',
        'ui-md': 'var(--ui-shadow-md)',
        'ui-lg': 'var(--ui-shadow-lg)',
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1800px', // optional
        'max-xs': { max: '479px' },
        'max-sm': { max: '639px' },
        'max-md': { max: '767px' },
      },
      spacing: {
        2.5: '10px',
        3.75: '15px',
        5: '20px',
        6.25: '25px',
        7.5: '30px',
      },
      maxWidth: {
        container: '100%',
        xs: '475px',
        sm: '640px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
        '2xl': '1400px',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out forwards',
        slideUp: 'slideUp 0.4s ease-out forwards',
      },
      fontFamily: {
        sangbleu: ['SangbleuOGSans', 'sans-serif'], // now you can use font-sangbleu
        montser: ['Montserrat', 'sans-serif'], // now you can use font-sangbleu
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('touch-portrait', '@media (pointer: coarse) and (orientation: portrait)');
    }),
  ]
}

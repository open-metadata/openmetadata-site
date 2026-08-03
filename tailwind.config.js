/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        "primary": '0px 4px 44px 0px rgba(0, 0, 0, 0.12)',
        "secondary": '0px 0px 28px 0px rgba(0, 0, 0, 0.08)',
        "card": '0px 4px 12px 0px rgba(0, 0, 0, 0.12)',
        'summit-logo': '0 12px 16px -4px rgba(10, 13, 18, 0.08), 0 4px 6px -2px rgba(10, 13, 18, 0.03), 0 2px 2px -1px rgba(10, 13, 18, 0.04)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  safelist: ['sm:grid-cols-1', 'sm:grid-cols-2', 'sm:grid-cols-3'],
  plugins: [],
}

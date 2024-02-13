import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        ocean: {
          '50': '#f5f7fa',
          '100': '#eaeff4',
          '200': '#d1dde6',
          '300': '#a8bfd1',
          '400': '#799db7',
          '500': '#58819f',
          '600': '#446784',
          '700': '#38546c',
          '800': '#31475b',
          '900': '#2d3d4d',
          '950': '#1e2933',
        },
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;

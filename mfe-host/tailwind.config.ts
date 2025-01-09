import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
    '../mfe-client-a/src/**/*.{html,js,ts,jsx,tsx}',
    '../mfe-client-b/src/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;

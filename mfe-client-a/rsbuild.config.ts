import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'mfe_client_a',
      exposes: {
        './routes': './src/routes.tsx',
      },
      shared: {
        react: {
          singleton: true,
        },
        'react-dom': {
          singleton: true,
        },
        'react-router': {
          singleton: true,
        },
      },
    }),
  ],
  tools: {
    postcss: (opts, { addPlugins }) => {
      addPlugins(require('@tailwindcss/postcss'));
    },
  },
  server: {
    port: 3001,
  },
});

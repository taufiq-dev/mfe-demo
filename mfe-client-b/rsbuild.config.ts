import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'mfe_client_b',
      exposes: {
        './routes': './src/routes.tsx',
      },
      remotes: {
        mfe_host: 'mfe_host@http://localhost:3000/mf-manifest.json',
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
        tailwindcss: { singleton: true },
        postcss: { singleton: true },
      },
    }),
  ],
  tools: {
    postcss: (opts, { addPlugins }) => {
      addPlugins(require('tailwindcss'));
    },
  },
  server: {
    port: 3002,
  },
});

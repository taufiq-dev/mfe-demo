import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'mfe_host',
      remotes: {
        mfe_client_a: 'mfe_client_a@http://localhost:3001/mf-manifest.json',
        mfe_client_b: 'mfe_client_b@http://localhost:3002/mf-manifest.json',
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
});

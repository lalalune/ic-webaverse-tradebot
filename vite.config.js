import { defineConfig } from 'vite'
import path from "path"
import react from '@vitejs/plugin-react'
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
import nodePolyfills from 'vite-plugin-node-stdlib-browser'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import tailwindcss from 'tailwindcss';

import inject from '@rollup/plugin-inject'

import inlineImage from "esbuild-plugin-inline-image"

// https://vitejs.dev/config/
const config = defineConfig({
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.svg'],
  plugins: [react(),tailwindcss()],
  build: {
    rollupOptions: {
        plugins: [inject({ Buffer: ['buffer', 'Buffer'] })],
    },
    minify: false
},
  optimizeDeps: {
    esbuildOptions: {
        define: {
            global: "globalThis",
        },
        plugins: [
          inlineImage(),
          NodeModulesPolyfillPlugin(),
          NodeGlobalsPolyfillPlugin({
                process: true,
                buffer: true,
            }),
        ],
    },
},
resolve: {
    alias: {
        process: "process/browser",
        stream: "stream-browserify",
        zlib: "browserify-zlib",
        util: "util",
    },
},
})

// if --component flag is passed, we are building a component
if (process.env.COMPONENT) {
  config.build = {
      rollupOptions: {
          plugins: [tailwindcss(), inject({ Buffer: ['buffer', 'Buffer'] })],
            external: ['react', 'react-dom'],
            output: {
              globals: {
                react: 'React',
                'react-dom': 'ReactDOM'
              },
            },
      },
    assetsInlineLimit: 10000000,
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, 'src/App.jsx'),
      name: 'Trade',
      formats: ['es'],
      fileName: () => `Trade.js`,
    }
  }
}

export default config;
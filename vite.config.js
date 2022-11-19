import { defineConfig } from 'vite'
import path from "path"
import react from '@vitejs/plugin-react'
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
import nodePolyfills from 'vite-plugin-node-stdlib-browser'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'

import inject from '@rollup/plugin-inject'

import inlineImage from "esbuild-plugin-inline-image"

// https://vitejs.dev/config/
const config = defineConfig({
  assetsInclude: ['**/*.png'],
  plugins: [react()],
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
          plugins: [inject({ Buffer: ['buffer', 'Buffer'] })],
      },
    assetsInlineLimit: 100000,
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
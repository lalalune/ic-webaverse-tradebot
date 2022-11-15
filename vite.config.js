import { defineConfig } from 'vite'
import path from "path"
import react from '@vitejs/plugin-react'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import nodePolyfills from 'rollup-plugin-polyfill-node';

import inject from '@rollup/plugin-inject'

import inlineImage from "esbuild-plugin-inline-image"

// https://vitejs.dev/config/
const config = defineConfig({
  assetsInclude: ['**/*.png'],
  plugins: [react(), nodePolyfills({ include: ['buffer']})],
  optimizeDeps: {
    rollupOptions: {
      plugins: [inject({ Buffer: ['Buffer', 'Buffer'], process: 'process' })],
  },
    esbuildOptions: {
        // Node.js global to browser globalThis
        define: {
            global: 'globalThis'
        },
        // Enable esbuild polyfill plugins
        plugins: [
            NodeGlobalsPolyfillPlugin({
                buffer: true
            })
        ]
    }
}
})

// if --component flag is passed, we are building a component
if (process.env.COMPONENT) {
  config.build = {
    assetsInlineLimit: 100000,
    
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, 'src/App.jsx'),
      name: 'Trade',
      formats: ['es'],
      fileName: () => `Trade.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
      },
    },
  }
}

export default config;
import { defineConfig } from 'vite'
import path from "path"
import react from '@vitejs/plugin-react'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'

// https://vitejs.dev/config/
const config = defineConfig({
  plugins: [react()],
  optimizeDeps: {
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
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, 'src/App.jsx'),
      name: 'TradeConsole',
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
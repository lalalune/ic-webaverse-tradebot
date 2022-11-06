import { defineConfig } from 'vite'
import path from "path"
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
const config = defineConfig({
  plugins: [react()]
})

// if --component flag is passed, we are building a component
if (process.env.COMPONENT) {
  config.build = {
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, 'src/Inventory.jsx'),
      name: 'TradeConsole',
      formats: ['es'],
      fileName: () => `Inventory.js`,
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
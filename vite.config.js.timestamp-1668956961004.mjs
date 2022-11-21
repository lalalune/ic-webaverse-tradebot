// vite.config.js
import { defineConfig } from "file:///home/beast/Documents/GitHub/trade-console/node_modules/vite/dist/node/index.js";
import path from "path";
import react from "file:///home/beast/Documents/GitHub/trade-console/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { NodeGlobalsPolyfillPlugin } from "file:///home/beast/Documents/GitHub/trade-console/node_modules/@esbuild-plugins/node-globals-polyfill/dist/index.js";
import nodePolyfills from "file:///home/beast/Documents/GitHub/trade-console/node_modules/vite-plugin-node-stdlib-browser/index.cjs";
import { NodeModulesPolyfillPlugin } from "file:///home/beast/Documents/GitHub/trade-console/node_modules/@esbuild-plugins/node-modules-polyfill/dist/index.js";
import tailwindcss from "file:///home/beast/Documents/GitHub/trade-console/node_modules/tailwindcss/lib/index.js";
import inject from "file:///home/beast/Documents/GitHub/trade-console/node_modules/@rollup/plugin-inject/dist/es/index.js";
import inlineImage from "file:///home/beast/Documents/GitHub/trade-console/node_modules/esbuild-plugin-inline-image/index.js";
var __vite_injected_original_dirname = "/home/beast/Documents/GitHub/trade-console";
var config = defineConfig({
  assetsInclude: ["**/*.png", "**/*.jpg", "**/*.svg"],
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      plugins: [inject({ Buffer: ["buffer", "Buffer"] })]
    },
    minify: false
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis"
      },
      plugins: [
        inlineImage(),
        NodeModulesPolyfillPlugin(),
        NodeGlobalsPolyfillPlugin({
          process: true,
          buffer: true
        })
      ]
    }
  },
  resolve: {
    alias: {
      process: "process/browser",
      stream: "stream-browserify",
      zlib: "browserify-zlib",
      util: "util"
    }
  }
});
if (process.env.COMPONENT) {
  config.build = {
    rollupOptions: {
      plugins: [tailwindcss(), inject({ Buffer: ["buffer", "Buffer"] })],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    },
    assetsInlineLimit: 1e7,
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "src/App.jsx"),
      name: "Trade",
      formats: ["es"],
      fileName: () => `Trade.js`
    }
  };
}
var vite_config_default = config;
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9iZWFzdC9Eb2N1bWVudHMvR2l0SHViL3RyYWRlLWNvbnNvbGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL2JlYXN0L0RvY3VtZW50cy9HaXRIdWIvdHJhZGUtY29uc29sZS92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9iZWFzdC9Eb2N1bWVudHMvR2l0SHViL3RyYWRlLWNvbnNvbGUvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIlxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IHsgTm9kZUdsb2JhbHNQb2x5ZmlsbFBsdWdpbiB9IGZyb20gXCJAZXNidWlsZC1wbHVnaW5zL25vZGUtZ2xvYmFscy1wb2x5ZmlsbFwiO1xuaW1wb3J0IG5vZGVQb2x5ZmlsbHMgZnJvbSAndml0ZS1wbHVnaW4tbm9kZS1zdGRsaWItYnJvd3NlcidcbmltcG9ydCB7IE5vZGVNb2R1bGVzUG9seWZpbGxQbHVnaW4gfSBmcm9tICdAZXNidWlsZC1wbHVnaW5zL25vZGUtbW9kdWxlcy1wb2x5ZmlsbCdcbmltcG9ydCB0YWlsd2luZGNzcyBmcm9tICd0YWlsd2luZGNzcyc7XG5cbmltcG9ydCBpbmplY3QgZnJvbSAnQHJvbGx1cC9wbHVnaW4taW5qZWN0J1xuXG5pbXBvcnQgaW5saW5lSW1hZ2UgZnJvbSBcImVzYnVpbGQtcGx1Z2luLWlubGluZS1pbWFnZVwiXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5jb25zdCBjb25maWcgPSBkZWZpbmVDb25maWcoe1xuICBhc3NldHNJbmNsdWRlOiBbJyoqLyoucG5nJywgJyoqLyouanBnJywgJyoqLyouc3ZnJ10sXG4gIHBsdWdpbnM6IFtyZWFjdCgpLHRhaWx3aW5kY3NzKCldLFxuICBidWlsZDoge1xuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgcGx1Z2luczogW2luamVjdCh7IEJ1ZmZlcjogWydidWZmZXInLCAnQnVmZmVyJ10gfSldLFxuICAgIH0sXG4gICAgbWluaWZ5OiBmYWxzZVxufSxcbiAgb3B0aW1pemVEZXBzOiB7XG4gICAgZXNidWlsZE9wdGlvbnM6IHtcbiAgICAgICAgZGVmaW5lOiB7XG4gICAgICAgICAgICBnbG9iYWw6IFwiZ2xvYmFsVGhpc1wiLFxuICAgICAgICB9LFxuICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgaW5saW5lSW1hZ2UoKSxcbiAgICAgICAgICBOb2RlTW9kdWxlc1BvbHlmaWxsUGx1Z2luKCksXG4gICAgICAgICAgTm9kZUdsb2JhbHNQb2x5ZmlsbFBsdWdpbih7XG4gICAgICAgICAgICAgICAgcHJvY2VzczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBidWZmZXI6IHRydWUsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICB9LFxufSxcbnJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgICBwcm9jZXNzOiBcInByb2Nlc3MvYnJvd3NlclwiLFxuICAgICAgICBzdHJlYW06IFwic3RyZWFtLWJyb3dzZXJpZnlcIixcbiAgICAgICAgemxpYjogXCJicm93c2VyaWZ5LXpsaWJcIixcbiAgICAgICAgdXRpbDogXCJ1dGlsXCIsXG4gICAgfSxcbn0sXG59KVxuXG4vLyBpZiAtLWNvbXBvbmVudCBmbGFnIGlzIHBhc3NlZCwgd2UgYXJlIGJ1aWxkaW5nIGEgY29tcG9uZW50XG5pZiAocHJvY2Vzcy5lbnYuQ09NUE9ORU5UKSB7XG4gIGNvbmZpZy5idWlsZCA9IHtcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgICBwbHVnaW5zOiBbdGFpbHdpbmRjc3MoKSwgaW5qZWN0KHsgQnVmZmVyOiBbJ2J1ZmZlcicsICdCdWZmZXInXSB9KV0sXG4gICAgICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgICAgICAgIHJlYWN0OiAnUmVhY3QnLFxuICAgICAgICAgICAgICAgICdyZWFjdC1kb20nOiAnUmVhY3RET00nXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgfSxcbiAgICBhc3NldHNJbmxpbmVMaW1pdDogMTAwMDAwMDAsXG4gICAgZW1wdHlPdXREaXI6IGZhbHNlLFxuICAgIGxpYjoge1xuICAgICAgZW50cnk6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvQXBwLmpzeCcpLFxuICAgICAgbmFtZTogJ1RyYWRlJyxcbiAgICAgIGZvcm1hdHM6IFsnZXMnXSxcbiAgICAgIGZpbGVOYW1lOiAoKSA9PiBgVHJhZGUuanNgLFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25maWc7Il0sCiAgIm1hcHBpbmdzIjogIjtBQUFnVCxTQUFTLG9CQUFvQjtBQUM3VSxPQUFPLFVBQVU7QUFDakIsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsaUNBQWlDO0FBQzFDLE9BQU8sbUJBQW1CO0FBQzFCLFNBQVMsaUNBQWlDO0FBQzFDLE9BQU8saUJBQWlCO0FBRXhCLE9BQU8sWUFBWTtBQUVuQixPQUFPLGlCQUFpQjtBQVZ4QixJQUFNLG1DQUFtQztBQWF6QyxJQUFNLFNBQVMsYUFBYTtBQUFBLEVBQzFCLGVBQWUsQ0FBQyxZQUFZLFlBQVksVUFBVTtBQUFBLEVBQ2xELFNBQVMsQ0FBQyxNQUFNLEdBQUUsWUFBWSxDQUFDO0FBQUEsRUFDL0IsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLE1BQ1gsU0FBUyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsVUFBVSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBQUEsSUFDdEQ7QUFBQSxJQUNBLFFBQVE7QUFBQSxFQUNaO0FBQUEsRUFDRSxjQUFjO0FBQUEsSUFDWixnQkFBZ0I7QUFBQSxNQUNaLFFBQVE7QUFBQSxRQUNKLFFBQVE7QUFBQSxNQUNaO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUCxZQUFZO0FBQUEsUUFDWiwwQkFBMEI7QUFBQSxRQUMxQiwwQkFBMEI7QUFBQSxVQUNwQixTQUFTO0FBQUEsVUFDVCxRQUFRO0FBQUEsUUFDWixDQUFDO0FBQUEsTUFDTDtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDTCxPQUFPO0FBQUEsTUFDSCxTQUFTO0FBQUEsTUFDVCxRQUFRO0FBQUEsTUFDUixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDVjtBQUFBLEVBQ0o7QUFDQSxDQUFDO0FBR0QsSUFBSSxRQUFRLElBQUksV0FBVztBQUN6QixTQUFPLFFBQVE7QUFBQSxJQUNYLGVBQWU7QUFBQSxNQUNYLFNBQVMsQ0FBQyxZQUFZLEdBQUcsT0FBTyxFQUFFLFFBQVEsQ0FBQyxVQUFVLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFBQSxNQUMvRCxRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsVUFDUCxPQUFPO0FBQUEsVUFDUCxhQUFhO0FBQUEsUUFDZjtBQUFBLE1BQ0Y7QUFBQSxJQUNOO0FBQUEsSUFDRixtQkFBbUI7QUFBQSxJQUNuQixhQUFhO0FBQUEsSUFDYixLQUFLO0FBQUEsTUFDSCxPQUFPLEtBQUssUUFBUSxrQ0FBVyxhQUFhO0FBQUEsTUFDNUMsTUFBTTtBQUFBLE1BQ04sU0FBUyxDQUFDLElBQUk7QUFBQSxNQUNkLFVBQVUsTUFBTTtBQUFBLElBQ2xCO0FBQUEsRUFDRjtBQUNGO0FBRUEsSUFBTyxzQkFBUTsiLAogICJuYW1lcyI6IFtdCn0K

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import { resolve } from "path";
// import envCompat from "vite-plugin-env-compatible";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), envCompat()],
//   resolve: {
//     alias: {
//       "@pages": resolve(__dirname, "./src/pages"),
//       "@components": resolve(__dirname, "./src/components"),
//       // "@__mocks__": resolve(__dirname, "./__mocks__"),
//     },
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "mui-vendor": ["@mui/material", "@mui/icons-material"],
        },
      },
    },
  },
});

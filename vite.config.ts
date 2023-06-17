import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa"; // Vite progressive Web App

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: false,
      },
    }),
  ],
  build: {
    chunkSizeWarningLimit: 100000,
    assetsDir:"static",
    cssMinify: true,
    cssCodeSplit: true,
    sourcemap: true,
    minify: true,
    ssrManifest: true,
    modulePreload: true
  },
});

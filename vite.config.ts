import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa"; // Vite progressive Web App

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: false
      },
    }),
  ],
  build: {
    chunkSizeWarningLimit: 100000,
    outDir: "StoreManagement",
    assetsDir:"static",
    cssMinify: true,
    cssCodeSplit: true,
    sourcemap: true,
    minify: true,
    ssrManifest: true,
    modulePreload: true,
    ssrEmitAssets: true,
    target: "es2015",
    assetsInlineLimit: 1024,
    copyPublicDir: true,
    cssTarget: "es2015",
    emptyOutDir: true,
    manifest: true
  },
});

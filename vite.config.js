import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const manifestForPlugin = {
  registerType: "prompt",
  includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"], // Fixed typo in 'includeAssets'
  manifest: {
    name: "Virtual Queue App",
    short_name: "VQ App",
    icons: [
      {
        src: "/pwa-vq/pwa-192x192.png", // Added base path
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/pwa-vq/pwa-512x512.png", // Added base path
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/pwa-vq/pwa-maskable-192x192.png", // Added base path
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/pwa-vq/pwa-maskable-512x512.png", // Added base path
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    theme_color: "#171717",
    background_color: "#f0e7db",
    display: "standalone",
    scope: "/pwa-vq/", // Updated to match base path
    start_url: "/pwa-vq/", // Updated to match base path
    orientation: "portrait",
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)],
  base: "/pwa-vq/",
});

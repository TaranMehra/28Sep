import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import basicSsl from "@vitejs/plugin-basic-ssl";

// https://vite.dev/config/
export default defineConfig({
  // plugins: [react()],
  plugins: [react(), tailwindcss()], // basicSsl()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    headers: {
      "Cross-origin-Opener-Policy": "same-origin",
      "Cross-Origin-Embedder-Policy": "require-corp",
    },
    // host: true,
    // https: { key: "sep-privateKey.key", cert: "sep.crt" },
  },
});

// import { defineConfig } from 'vite';

// export default defineConfig({
//   plugins: [
//     basicSsl()
//   ],
//   server: {
//     https: true
//   }
// });

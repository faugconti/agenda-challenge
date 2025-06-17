import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default ({ mode = "development" }) => {
  const env = loadEnv(mode, process.cwd(), ["VITE_"]);

  // console.log(env)

  return defineConfig({
    plugins: [react()],
    server: {
      port: parseInt(env.VITE_FRONTEND_PORT || 5173),
      host: true,
      proxy: {
        "/api": {
          target: env.VITE_API_URL,
          changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/api/, ""),  // no uso rewrite?
        },
      },
    },
  });
};
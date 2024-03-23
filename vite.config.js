// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                home: resolve(__dirname, "./pages/home.html"),
                shop: resolve(__dirname, "./pages/shop.html"),
                detail: resolve(__dirname, "./pages/detail.html"),
                cart: resolve(__dirname, "./pages/cart.html"),
                pay: resolve(__dirname, "./pages/pay.html"),
            },
        },
    },
});

import { resolve } from "path";
import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
export default defineConfig({
    root: "./src",
    build: {
        outDir: "../dist",
        rollupOptions: {
            input: {
                home: resolve(__dirname, "src/index.html"),
                email: resolve(__dirname, "src/email.html"),
            },
        },
    },
    server: {
        open: true,
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: "modern-compiler",
            },
        },
    },
    plugins: [
        createHtmlPlugin({
            minify: true,
        }),
    ],
});

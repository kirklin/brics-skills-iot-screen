import { resolve } from "path";
import type { UserConfig } from "vite";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// https://github.com/element-plus/unplugin-element-plus/blob/HEAD/README.zh-CN.md
import ElementPlus from "unplugin-element-plus/vite";
export default defineConfig((): UserConfig => {
  // const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [vue(),
      AutoImport({
        imports: [
          "vue",
          "vue-router",
          "vue-i18n",
          "vue/macros",
          "@vueuse/head",
          "@vueuse/core",
        ],
        dts: "types/auto-imports.d.ts",
        dirs: [
          "src/composables",
          "src/store",
        ],
        vueTemplate: true,
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        extensions: ["vue"],
        include: [/\.vue$/, /\.vue\?vue/],
        dts: "types/components.d.ts",
        exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
        resolvers: [ElementPlusResolver()],
      }),
      ElementPlus({
      // useSource: true
      }),
    ],
    publicDir: "public",
    base: "./",
    server: {
      host: "0.0.0.0",
      port: 8112,
      open: false,
      strictPort: false,
      // proxy: {}
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
        "components": resolve(__dirname, "./src/components"),
        "api": resolve(__dirname, "./src/api"),
      },
    },
    css: {
      // css预处理器
      preprocessorOptions: {
        scss: {
          // charset: false,
          additionalData: "@use \"./src/assets/css/variable.scss\" as *;",
        },
      },
    },
    build: {
      outDir: "dist",
    },
  };
});

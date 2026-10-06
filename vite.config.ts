import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/fattoush-editorial-delight/",
  },
  tanstackStart: {
    server: {
      entry: "server",
    },
  },
});

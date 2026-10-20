import { defineConfig } from "vite";
import { readFileSync } from "node:fs";

const { version } = JSON.parse(
  readFileSync(new URL("./package.json", import.meta.url), "utf8"),
);
const versionMatch = version.match(/^(\d+)\.(\d+)\.\d+/);

if (!versionMatch) {
  throw new Error(`Expected a semantic package version, received "${version}".`);
}

const versionDirectory = `v${versionMatch[1]}.${versionMatch[2]}`;

export default defineConfig({
  base: "./",
  build: {
    emptyOutDir: false,
    rollupOptions: {
      output: {
        entryFileNames: `${versionDirectory}/umd-libraries-components.js`,
        chunkFileNames: `${versionDirectory}/assets/[name].js`,
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith(".css")) {
            return `${versionDirectory}/umd-libraries-components.css`;
          }

          return `${versionDirectory}/assets/[name][extname]`;
        },
      },
    },
  },
});

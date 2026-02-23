// // @ts-check
// import { defineConfig } from "astro/config";
// import tailwindcss from "@tailwindcss/vite";

// // https://astro.build/config
// export default defineConfig({
//   vite: {
//     plugins: [tailwindcss()],
//   },
// });

// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Получаем имя репозитория для base
const repoName = "/resume/"; // <- поменяй на имя репозитория на GitHub Pages

export default defineConfig({
  base: repoName,
  vite: {
    plugins: [tailwindcss()],
  },
});

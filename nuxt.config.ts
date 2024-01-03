export default defineNuxtConfig({
  extends: ["@nuxt-themes/docus"],
  components: [{ path: "~/components", pathPrefix: false }],
  content: {
    sources: {
      github: {
        prefix: "/remote",
        driver: "github",
        repo: "oneminch/notes",
        branch: "main",
        dir: "",
        token: process.env.GH_TOKEN
      }
    },
    highlight: {
      theme: "github-dark",
      preload: ["py"]
    },
    ignores: [
      "/.vscode/",
      "\\.canvas$",
      "\\.code-workspace$",
      "\\.gitignore$",
      "\\.jpg$",
      "\\.pdf$",
      "\\.png$",
      "\\.svg$",
      "\\.webp$"
    ],
    markdown: {
      toc: { depth: 2, searchDepth: 2 }
    }
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    viewer: false
  }
});

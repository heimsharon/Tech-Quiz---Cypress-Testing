import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    specPattern: "cypress/component/**/*.tsx",
  },

  e2e: {
    baseUrl: "http://localhost:3001",
    setupNodeEvents(on, config) {

    },
  },
});

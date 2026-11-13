import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  ...nextVitals,
  {
    rules: {
      // Export statique : next/image n'optimise rien (images.unoptimized).
      // Les images sont pré-optimisées par scripts/optimize-images.mjs et servies avec srcset.
      "@next/next/no-img-element": "off",
    },
  },
  globalIgnores([".next/**", "out/**"]),
]);

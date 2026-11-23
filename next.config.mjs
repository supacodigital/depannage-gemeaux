/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export statique : une page HTML complète par URL, déployable sur l'Apache d'OVH.
  output: "export",
  // URLs sans slash final (/tarifs), identiques à celles déjà connues de Google.
  trailingSlash: false,
  // Pas de serveur d'optimisation d'images en export statique : les images sont optimisées à l'avance.
  images: { unoptimized: true },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;

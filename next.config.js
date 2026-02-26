/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  /**
   * 🚀 OPTIMIZACIÓN PARA DOCKER / CLOUD RUN
   * Esta línea es la más importante. Crea una versión mínima de la app 
   * en .next/standalone que incluye solo los archivos necesarios para 
   * ejecutarse en el servidor, reduciendo el tamaño de la imagen de ~1GB a ~150MB.
   */
  output: 'standalone',

  // Desactivar indicador de desarrollo en prod
  devIndicators: {
    buildActivity: false,
  },

  publicRuntimeConfig: {
    env: {
      channel_id: process.env.CHANNEL_ID,
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      seoName: process.env.SEO_NAME,
      location: process.env.LOCATION,
    },
  },
  
  trailingSlash: false,
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: [
      "mega.nz",
      "i.picsum.photos",
      "scontent.cdninstagram.com",
      "www.instagram.com",
      "res.cloudinary.com",
      "lh3.googleusercontent.com", // Agregado para compatibilidad con perfiles de Google
    ],
    formats: ["image/webp"],
    dangerouslyAllowSVG: true,
  },

  // Si decides habilitar SASS en el futuro en el contenedor:
  // sassOptions: {
  //   includePaths: [path.join(__dirname, "styles")],
  //   prependData: `@import "settings.module.scss";`,
  // },
};

module.exports = nextConfig;
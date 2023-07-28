/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    experimental: {
      appDir: true,
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
      config.module.rules.push({
        test: /\.(mp3)$/,
          loader: 'file-loader',
          // options: {
          //   name: '[name].[ext]',
          //   // publicPath: './public/audios',
          // },
      });
      return config;
    },
    images: {
      domains: ["happygs.garbhsanskarguru.com","192.168.29.162", 'images.unsplash.com'],
      formats: ["image/avif", "image/webp"],
    },
    
  };
  
  module.exports = nextConfig;
  
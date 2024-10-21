/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  output: 'standalone',
  transpilePackages: ['@frontend/types', '@frontend/ui'],
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000, // Verifica cambios cada segundo
      aggregateTimeout: 300, // Retrasa la reconstrucción después del primer cambio
    };
    return config;
  }
};

module.exports = nextConfig;
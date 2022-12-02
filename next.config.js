const withPlugins = require('next-compose-plugins');
const transpileModules = require('next-transpile-modules');
const bundleAnalyzer = require('@next/bundle-analyzer');

// Modules
// const withTranspileModules = transpileModules(['@alfalab/core-components']);
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: process.env.ANALYZE === 'true',
});

// Config
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: [
      'pages',
      'components',
      'pages-content',
      'shared',
      'store',
      'styles',
      'types',
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = withPlugins(
  // [withTranspileModules, withBundleAnalyzer],
  [withBundleAnalyzer],
  nextConfig
);

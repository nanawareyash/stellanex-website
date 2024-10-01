/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer }) {
    // Add support for SVG files
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            // Options for @svgr/webpack can be specified here
            icon: true,
          },
        },
      ],
    });

    return config; // Return the modified config
  },
};

export default nextConfig;

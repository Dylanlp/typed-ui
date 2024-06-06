import withMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {};

const mdxConfig = withMDX({
  extension: /\.mdx?$/
});

export default {
  ...mdxConfig,
  ...nextConfig,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
};
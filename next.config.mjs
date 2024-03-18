/** @type {import('next').NextConfig} */

import createMDX from "@next/mdx";

const nextConfig = {
    reactStrictMode: true,
    pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
    extension: /\.mdx?$/,
});

export default withMDX(nextConfig);

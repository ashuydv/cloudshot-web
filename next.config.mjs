/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        domains: ['dummyimage.com', "assets.aceternity.com", "images.unsplash.com", "ai-saas-template-aceternity.vercel.app", "avatar.vercel.sh"],
        unoptimized: true,
    },
};

export default nextConfig;
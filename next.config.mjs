/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'logos-world.net',
            },
            {
                protocol: 'https',
                hostname: 'images.olx.com.pk',
            },
            {
                protocol: 'https',
                hostname: 'www.olx.com.pk',
            },
            {
                protocol: 'https',
                hostname: 'fakestoreapi.com',
            },
        ]
    }
  };
  
  export default nextConfig;

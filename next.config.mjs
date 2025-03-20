/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'wudatitqhquqzultlogd.supabase.co',
                port: '',
                pathname: '/storage/v1/object/public/cabin-images/**',
                search: '',
            },
        ],
    },
    //output: "export" // To do SSG
};

export default nextConfig;

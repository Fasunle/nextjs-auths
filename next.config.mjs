/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
       remotePatterns: [
       // this register all external servers for images
         {
            hostname: 'lh3.googleusercontent.com',
         }
       ]
    }
};

export default nextConfig;

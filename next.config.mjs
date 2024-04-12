/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY // Asegúrate de que esta variable esté configurada en tu entorno
    },
};

export default nextConfig;

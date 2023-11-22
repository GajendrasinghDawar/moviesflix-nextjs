/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/movie/:id',
                headers: [
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: 'https://www.youtube.com/embed/:id',
                    },

                ],
            },
        ]
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
                port: '',
                pathname: '/t/p/**',
            },
        ],
    },

}

module.exports = nextConfig

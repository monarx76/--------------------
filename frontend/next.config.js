/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{ protocol: 'https', hostname: 'larian.com' },
			{ protocol: 'https', hostname: 'cmsapi.larian.com' },
		],
	},
}

module.exports = nextConfig

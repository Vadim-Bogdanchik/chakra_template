/** @type {import('next').NextConfig} */
const withVideos = require('next-videos')

module.exports = {
	reactStrictMode: true,
	images: {
		unoptimized: true,
	},
}

module.exports = withVideos()

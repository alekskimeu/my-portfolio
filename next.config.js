const withPWA = require("next-pwa");

module.exports = withPWA({
	pwa: {
		dest: "public",
		register: true,
		skipWaiting: true,
	},
	reactStrictMode: true,
	images: {
		domains: [
			"raw.githubusercontent.com",
			"reactnative.dev",
			"avatars.githubusercontent.com",
			"pbs.twimg.com",
		],
	},
});

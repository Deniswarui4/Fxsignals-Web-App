const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {
			fontFamily: {
				poppins: "'Poppins', sans-serif",
			},
		},
	},
	plugins: [],
};

module.exports = config;

const colors = require("tailwindcss/colors");

module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./features/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			black: colors.black,
			white: colors.white,
			gray: colors.gray,
			emerald: colors.emerald,
			indigo: colors.indigo,
			yellow: colors.yellow,
			purple: colors.purple,
			blue: colors.blue,
		},
		fontFamily: {
			sans: ["Manrope", "sans-serif"],
		},
		extend: {},
	},
	plugins: [],
};

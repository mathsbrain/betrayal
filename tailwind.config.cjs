/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				draculaGreen: "#8AF168",
				draculaBlue: "#73FFEA",
				draculaBlueDark: "#73DCFF",
				draculaOrange: "#F89E42",
				draculaPink: "#E274BF",
				draculaBlack: "#0B0A10",
				draculaWhite: "#F8F8F2",
				draculaPurple: "#22212C",
				draculaPurpleDark: "#151320",
				draculaYellow: "#F1FF80",
			},
			fontFamily: {
				pop: ["Poppins", "sans-serif"],
				roboto: ["Roboto", "sans-serif"],
			},
		},
	},
	plugins: [],
};

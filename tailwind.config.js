/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				roboto: ["Roboto", "sans-serif"],
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["light", "dark", "cupcake"],
		base: true,
	},
};

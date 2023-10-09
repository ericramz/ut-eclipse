/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
        		sans: ["'1883-Sans'", 'sans-serif'],
        		serif: ["'GT-Sectra'", 'serif'],
		},
	},
},
	plugins: [],
}


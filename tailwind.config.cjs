/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
        '1883-Sans': ["'1883-Sans'", 'sans-serif'],
        'GT-Sectra': ["'GT-Sectra'", 'serif'],
		},
	},
	plugins: [],
}

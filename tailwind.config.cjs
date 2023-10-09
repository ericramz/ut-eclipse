/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
        		sans: ["'1883-Sans'", 'sans-serif'],
        		serif: ["'GT-Sectra'", 'serif'],
		},
	},
	colors: {
		transparent: 'transparent',
		current: 'currentColor',
		white: '#ffffff',
		burntorange: '#bf5700',
		'burntorange-dark': '#9d4700',
		'burntorange-dark-s10': '#ae4f00',
		'burntorange-dark-s20': '#9f4700',
		charcoal: '#333f48',
		'charcoal-dark': '#1f262b',
		'charcoal-80': '#5C656D',
		limestone: '#d6d2c4',
		'limestone-t20': '#FBFBF9',
		'limestone-t40': '#F2F1ED',
		'limestone-light': '#f2f1ed',
		gray: '#F4F6F7',
		disabled: '#e6ebed',
		grey: '#5e686e',
		black: '#000',
		'ut-shade': '#9CADB7',
		'ut-shade-t40': '#D7DEE2',
	},
},
	plugins: [],
}


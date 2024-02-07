/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	safelist: [
		{
		  pattern: /^\-?m(\w?)-/,
		},
		{
		  pattern: /^p(\w?)-/,
		},
		{
		  pattern: /^h-/,
		},
		{
		  pattern: /^text-/,
		  variants: ['hover'],
		},
		'all-small-caps',
	  ],
	theme: {
		extend: {
			colors: {
				burntorange: '#bf5700',
				'burntorange-dark': '#9d4700',
				charcoal: '#333f48',
				'charcoal-dark': '#1f262b',
				limestone: '#d6d2c4',
				'limestone-light': '#f2f1ed',
				'ut-turquoise-t30':'#B3E5E9',
				tangerine: '#F8971F',
				gray: '#F4F6F7',
			  },
			  backgroundImage: {
				'sunburst': "url('/images/sunburst-dark.jpg')"
			  },
			fontFamily: {
        		sans: ["'1883-Sans'", 'sans-serif'],
        		serif: ["'GT-Sectra'", 'serif'],
		},
	},
},
	plugins: [],
};
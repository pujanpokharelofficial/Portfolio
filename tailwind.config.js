/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'black-light': '#595959',
				'black-medium': '#2B2B2B',
				'blue-dark': '#004994',
				'blue-medium': '#3771C8',
				'blue-light': '#3D8EE2',
				gray: '#656565',
				'gray-light': '#E9E9E9',
				'gray-dark': '#9E9E9E',
				orange: '#FF543E'
			},
			spacing: {
				standard: '20px',
				block: '50px',
				section: '100px',
				small: '10px',
				'v-small': '5px'
			}
		}
	},
	plugins: []
};

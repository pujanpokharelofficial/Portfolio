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
				'blue-extra-light': 'rgb(61, 142, 226, 0.2)',
				gray: '#656565',
				'gray-light': '#E9E9E9',
				'gray-dark': '#9E9E9E',
				'gray-extra-light': '#F4F4F4',
				orange: '#FF543E'
			},
			spacing: {
				standard: '20px',
				block: '50px',
				section: '100px',
				small: '10px',
				'v-small': '5px'
			},
			fontSize: {
				important: '64px',
				heading: '48px',
				title: '24px',
				'sub-title': '18px',
				para: '16px',
				info: '14px',
				'sub-info': '12px'
			}
		}
	},
	plugins: []
};

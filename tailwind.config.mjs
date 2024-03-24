/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-headings': 'currentColor',
            '--tw-prose-counters': 'currentColor',
            '--tw-prose-bullets': 'currentColor',
            '--tw-prose-bold': 'currentColor',
            color: 'currentColor',
            lineHeight: '1.5',
            maxWidth: 'none',
          }
        }
      })
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
    require('@tailwind-plugin/expose-colors')({
      extract: ['green', 'blue', 'red'],
    }),
	],
}

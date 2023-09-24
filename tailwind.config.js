/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    fontFamily: {
      'heading': ['Inter', 'sans-serif'],
      'body': ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        surface: "#111827",
        "surface-subdued": "#1e1e23",
        heading: "#e7e7f1",
        text: "#b0b0bc",
        "text-strong": "#e7e7f1",
        "text-subdued": "#85858e",
        border: "#373737",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "currentColor",
            a: {
              color: 'currentColor',
              '&:hover': {
                color: 'currentColor',
              },
            },
            h2: {
              color: 'white',
            },
            strong: {
              color: 'white',
            },
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography")({
      className: "wysiwyg",
    }),
  ],
};

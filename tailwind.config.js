/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    fontFamily: {
      heading: ["Inter", "sans-serif"],
      body: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        dark: {
          border: "#373737",
          heading: "rgb(237, 238, 240)",
          body: "rgba(241, 247, 254, 0.71)",
          surface: "rgb(30, 41, 59)",
        },
        light: {
          heading: "rgb(15, 23, 42)",
          body: "rgb(51, 65, 85)",
          surface: "#fff"
        },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.dark.body"),
            "--tw-prose-headings": theme("colors.dark.heading"),
            maxWidth: "none",
            a: {
              color: "currentColor",
              "&:hover": {
                color: "currentColor",
              },
            },
            h2: {
              fontFamily: '"Inter", sans-serif',
            },
          },
        },
        light: {
          css: {
            "--tw-prose-body": theme("colors.light.body"),
            "--tw-prose-headings": theme("colors.light.heading"),
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography")({
      className: "wysiwyg",
    }),
  ],
};

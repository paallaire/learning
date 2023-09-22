/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
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
            color: "#b0b0bc"
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

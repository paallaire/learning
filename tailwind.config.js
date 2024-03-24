/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "system-ui"],
    },
    screens: {
      xxs: '360px',
      xs: '460px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1920px',
    },
    colors: {
        transparent: "transparent",
        white: "#fff",
        black: "#000",
        primary: "#38bdf8",
        secondary: "#818CF8",
        accent: "#F471B5",
        neutral: "#1E293B",
        "base-100": "#0F172A",
        info: "#0CA5E9",
        "info-content": "#000000",
        success: "#2DD4BF",
        warning: "#F4BF50",
        error: "#FB7085",
    },
    lineHeight: {
      none: '1',
      tight: '1.1',
      snug: '1.25',
      normal: '1.5'
    },
    borderRadius: {
      none: '0',
      sm: '8px',
      base: '16px',
      md: '32px',
      full: '9999px'
    },
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-headings": "currentColor",
            "--tw-prose-counters": "currentColor",
            "--tw-prose-bullets": "currentColor",
            "--tw-prose-bold": "currentColor",
            color: "currentColor",
            lineHeight: "1.7",
            maxWidth: "none",
          },
        },
      }),
    },
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography"),
  ],
  daisyui: {
    themes: ["light", "dark", "synthwave"], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  }
};

/* eslint-disable global-require */
module.exports = {
  content: [
    './assets/**/*.js',
    './templates/**/*.{twig,html}',
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '500px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1920px',
    },
    lineHeight: {
      none: '1',
      tight: '1.2',
      snug: '1.3',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    fill: {
      current: 'currentColor',
      transparent: 'transparent',
    },
    extend: {
      zIndex: {
        '-1': '-1',
        1: 1,
        10: 10,
        20: 20,
        30: 30,
        40: 40,
        50: 50,
        60: 60,
        70: 70,
        80: 80,
        90: 90,
        100: 100,
        overlay: 200,
        modal: 201,
        navmobile: 202,
      },
      transitionDuration: {
        fast: '200ms',
        medium: '400ms',
        slow: '600ms',
      },
    },
  },
  plugins: [],
};

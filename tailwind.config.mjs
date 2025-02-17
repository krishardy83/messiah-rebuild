import theme, { fontFamily, colors } from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";
import containerQueries from "@tailwindcss/container-queries";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,mdx,ts,tsx}"],
  safelist: [
    'text-lg',
    'text-xl',
    'text-2xl',
    'text-3xl',
    'text-4xl',
    'text-5xl',
    'text-6xl',
    'text-7xl',
    'text-8xl',
    '!text-lg',
    '!text-xl',
    '!text-2xl',
    '!text-3xl',
    '!text-4xl',
    '!text-5xl',
    '!text-6xl',
    '!text-7xl',
    '!text-8xl',
    'py-6',
    'py-12',
    'py-24',
    'py-36',
    'py-48',
    'py-60',
    'py-72',
    'pt-6',
    'pt-12',
    'pt-24',
    'pt-36',
    'pt-48',
    'pt-60',
    'pt-72',
    'pb-6',
    'pb-12',
    'pb-24',
    'pb-36',
    'pb-48',
    'pb-60',
    'pb-72',
    'wrapper-sm',
    'wrapper-md',
    'object-bottom',
    'object-left',
    'object-left-bottom',
    'object-left-top',
    'object-right',
    'object-right-bottom',
    'object-right-top',
    'object-top'
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            a: {
              fontWeight: 600,

              "&:is([class*=btn-])": {
                color: "white",
                textDecoration: "none",
              },

              "&:is(.btn-primary, .btn-secondary):hover": {
                color: "white",
              },

              "&:is(.btn-tertiary):hover": {
                color: "#273d5e",
              },

              "&:is(.btn-quaternary)": {
                color: "#273d5e",

                "&:hover": {
                  color: "#273d5e",
                },
              },
            },
          },
        },
      },
      fontFamily: {
        title: ["priori-sans", ...fontFamily.serif],
        sans: ["noto-sans", ...fontFamily.sans],
      },
      colors: {
        primary: {
          50: "#f4f6fb",
          100: "#e8ecf6",
          200: "#ccd8eb",
          300: "#9fb8da",
          400: "#6c93c4",
          500: "#4976ae",
          600: "#375c92",
          700: "#2e4b76",
          800: "#273d5e",
          900: "#263754",
          950: "#1a2437",
        },
        secondary: {
          50: "#f9f7fd",
          100: "#f1edfa",
          200: "#e4def6",
          300: "#d0c4ee",
          400: "#b39fe1",
          500: "#9679d3",
          600: "#7e5cc1",
          700: "#6948a8",
          800: "#614495",
          900: "#4a346f",
          950: "#2f1c4f",
        },
        tertiary: {
          50: "#f4f8fb",
          100: "#e7f0f7",
          200: "#cadfed",
          300: "#9cc3dd",
          400: "#75adcf",
          500: "#4389b4",
          600: "#316e98",
          700: "#29587b",
          800: "#254b67",
          900: "#244056",
          950: "#182a39",
        },
        button: {
          from: "#6697B8",
          to: "#5a9ecc",
        },
      },
    },
  },
  plugins: [typography, containerQueries],
};

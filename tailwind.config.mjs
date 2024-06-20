import { fontFamily } from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";
import containerQueries from "@tailwindcss/container-queries";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,mdx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Priori Sans", ...fontFamily.serif],
        sans: ["Aptifer Sans", ...fontFamily.sans],
        serif: ["ITC Mendoza Roman", ...fontFamily.serif],
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
      },
    },
  },
  plugins: [typography, containerQueries],
};

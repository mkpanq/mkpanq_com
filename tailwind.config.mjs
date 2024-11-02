import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#212A37",
      },
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

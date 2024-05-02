import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // @ts-ignore
      typography: ({ theme }) => ({
        california: {
          css: {
            "--tw-prose-body": theme("colors.slate[200]"),
            "--tw-prose-headings": theme("colors.slate[200]"),
            "--tw-prose-lead": theme("colors.slate[200]"),
            "--tw-prose-links": theme("colors.california[900]"),
            "--tw-prose-bold": theme("colors.slate[200]"),
            "--tw-prose-counters": theme("colors.slate[200]"),
            "--tw-prose-bullets": theme("colors.california[100]"),
            "--tw-prose-hr": theme("colors.california[100]"),
            "--tw-prose-quotes": theme("colors.california[900]"),
            "--tw-prose-quote-borders": theme("colors.slate[200]"),
            "--tw-prose-captions": theme("colors.slate[200]"),
            "--tw-prose-code": theme("colors.slate[200]"),
            "--tw-prose-pre-code": theme("colors.slate[200]"),
            "--tw-prose-pre-bg": theme("colors.slate[900]"),
            "--tw-prose-th-borders": theme("colors.slate[200]"),
            "--tw-prose-td-borders": theme("colors.slate[200]"),
          },
        },
      }),
      colors: {
        california: {
          100: "#FDC449",
          900: "#FDB10D",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;

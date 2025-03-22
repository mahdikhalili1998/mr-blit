import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        iranSans: ["IRANSansXFaNum"],
      },
      colors: { blue: "#0f84fa" },
      fontSize: {
        sd: "10px",
        15: "15px",
      },
      screens: {
        600: "600px",
        1023: "1023px",
      },
    },
  },
  plugins: [],
} satisfies Config;

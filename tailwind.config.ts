import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        glow: {
          "0%, 100%": {
            boxShadow:
              "0 0 15px rgba(0,191,255,0.7), 0 0 30px rgba(255,255,255,0.3)",
          },
          "50%": {
            boxShadow:
              "0 0 25px rgba(0,191,255,1), 0 0 45px rgba(255,255,255,0.5)",
          },
        },
      },
      animation: {
        glow: "glow 2s ease-in-out infinite",
      },
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
        1055: "1055px",
        1090: "1090px",
        1120: "1120px",
        1140: "1140px",
        1155: "1155px",
        1200: "1200px",
        1230: "1230px",
        1250: "1250px",
        1292: "1292px",
        1315: "1315px",
        1350: "1350px",
        1368: "1368px",
        1400: "1400px",
        1420: "1420px",
        1450: "1450px",
        1510: "1510px",
      },
    },
  },
  plugins: [],
} satisfies Config;

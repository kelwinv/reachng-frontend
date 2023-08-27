import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        ligth: "#FFE0E0",
        default: "#FF5671",
        "dark-soft": "#892C39",
        dark: "#4D1A22",
      },
      white: "#FAF7FC",
      secondary: { default: "#1E1E24" },
    },
    backgroundImage: {
      "white-linear": "linear-gradient(0deg, #FFF4F6 0%, #FFFAFA 100%)",
    },
    extend: {
      fontFamily: {
        montserrat: "var(--font-montserrat)",
        poppins: "var(--font-poppins)",
      },
    },
  },
  plugins: [],
};
export default config;

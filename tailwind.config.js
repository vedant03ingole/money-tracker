/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#ededed",
        forestgreen: "#0f8e2b",
        slateblue: "#7061c9",
        black: "#000",
        cornflowerblue: "#2593e8",
        aliceblue: "#ecf3f7",
        gainsboro: "#d9d9d9",
        lightslategray: "rgba(130, 139, 147, 0.36)",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "3xs": "10px",
        "4xs": "9px",
      },
    },
    fontSize: {
      xs: "0.75rem",
      base: "1rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};

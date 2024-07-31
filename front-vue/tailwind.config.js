/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    backgroundColor: (theme) => ({
      ...theme.colors,
      primary: "#8200ff",
    }),
    extend: {},
  },
  plugins: [],
};

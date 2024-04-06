/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      neutral: {
        25: "var(--neutral-25)",
        100: "var(--neutral-100)",
        600: "var(--neutral-600)",
        800: "var(--neutral-800)",
      },
      primary: {
        700: "var(--primary-700)",
      },
    },
    fontFamily: {
      sans: ["var(--sans)"],
      serif: ["var(--serif)"],
    },
    screens: {
      sm: "22.5rem",
      md: "45rem",
      lg: "72rem",
    },
    extend: {},
  },
  plugins: [],
};

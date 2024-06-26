import catppuccin from '@catppuccin/tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Karla: "Karla"
    }
  },
  plugins: [catppuccin],
}

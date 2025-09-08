module.exports = {
  darkMode: "class", // 'media'로 설정하면 시스템 설정에 따릅니다.
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#171717",
      },
    },
  },
  plugins: [],
};

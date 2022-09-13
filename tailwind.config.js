/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}", // pages하위 **모든폴더 *모든파일 js,jsx,ts,tsx인 확장자
    "./components/**/*.{js,jsx,ts,tsx}", // components하위 **모든폴더 *모든파일 js,jsx,ts,tsx인 확장자
  ],

  theme: {
    extend: {},
  },
  //darkMode: "media", // 브라우저 테마 모드 따라감
  darkMode: "class", // 커스텀
  plugins: [],
};

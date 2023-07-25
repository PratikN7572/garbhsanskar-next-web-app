module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
    "./public/*",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        "primary-pink": "#e44672",
        "primary-white": "#ffffff",
        "light-gray": "#666666",
        "dark-gray": "#333333",
        "primary-green": "#48ac48",
        "primary-red": "#FF0000",
        "primary-red": "#FF0000",
        success: "#1d8036",
        error: "#CC0000",
        "goodies-water-blue": "#3BA4C4",
        "goodies-aum-orange": "#F2780B",
        "goodies-pregnancy-brown": "#C89079",
        "goodies-baby-pink": "#DE756F",
        "goodies-step-brown": "#BE766A",
        "goodies-photo-pink": "#DF80E0",
      },
      screens: {
        xxs: "280px",
        xs: "320px",
        sm: "425px",
        md: "640px",
        lg: "768px",
        xl: "1024px",
        xxl: "1440px",
      },
      boxShadow: {
        base: "2px 2px 8px 1px rgb(10 99 169 / 16%), 5px 3px 11px -2px rgb(0 0 0 / 20%)",
        dark: "2px 2px 8px 1px rgb(10 99 169 / 16%), 0px 0px 3px 3px rgb(255 255 255 / 70%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

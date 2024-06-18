/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./components/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#212529",
        danger: "#D04848",
        slate: "#374151",
        primary: "#059212",
        secondary: "#1794CE",
      },
      fontFamily: {
        "outfit-thin": "Outfit_100Thin",
        "outfit-extraLight": "Outfit_200ExtraLight",
        "outfit-light": "Outfit_300Light",
        "outfit-regular": "Outfit_400Regular",
        "outfit-medium": "Outfit_500Medium",
        "outfit-semiBold": "Outfit_600SemiBold",
        "outfit-bold": "Outfit_700Bold",
        "outfit-extraBold": "Outfit_800ExtraBold",
        "outfit-black": "Outfit_900Black",
        "roboto-thin": "Roboto_100Thin",
        "roboto-thin-italic": "Roboto_100Thin-italic",
        "roboto-light": "Roboto_300Light",
        "roboto-light-italic": "Roboto_300Light-italic",
        "roboto-regular": "Roboto_400Regular",
        "roboto-regular-italic": "Roboto_400Regular-italic",
        "roboto-medium": "Roboto_500Medium",
        "roboto-medium-italic": "Roboto_500Medium-italic",
        "roboto-bold": "Roboto_700Bold",
        "roboto-bold-italic": "Roboto_700Bold-italic",
        "roboto-black": "Roboto_900Black",
        "roboto-black-italic": "Roboto_900Black-italic",
      },
    },
  },
  plugins: [],
};

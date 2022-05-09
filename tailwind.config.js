module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "purple-tonic": "#7c35d7",
        "indigo": {
          "25": "#f6f8ff"
        }
      },
      "fontFamily": {
        "inter": "Inter"
      },
    },
  },
  plugins: [],
}

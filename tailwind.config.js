module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
       "green": "#107d0d",
       "blue": "#175b88",
       "turquoise": "#088e8e",
       "grey": "#f4f4f4",
       "grey_2": "#eef0f4",
       "grey_white": "#fafafa",
       "dark-blue": "#0f3c58"
      },
      "fontSize": {
       "4xs": "0.6875rem",
       "3xs": "0.875rem",
       "2xs": "0.9375rem",
       "xs": "1rem",
       "sm": "1.375rem",
       "base": "1.5rem",
       "lg": "1.5625rem",
       "xl": "1.875rem",
       "2xl": "2.1875rem",
       "3xl": "2.8125rem",
       "4xl": "3.125rem",
       "5xl": "4.0625rem",
       "6xl": "5.3125rem",
       "7xl": "6.875rem"
      },
      "fontFamily": {
       "impact": "Impact",
       "open-sans": "Open Sans"
      },
     }
     
  },
  plugins: [],
}

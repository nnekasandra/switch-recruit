/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    extend: {
      colors: {
        grey:' #9B9B9B',
        yellow: '#f5d268',
        'text-color': '#7a7a7a',
        'border-color': '#0000001f'
      }
    },
  },
  plugins: [],
};

// extend: {
//       colors: {
//         sky: "#75B1A9",
//         sunglow: "#D9B44A",
//         mountain: "#4F6457",
//         mist: "#ACD0C0",
//         "blue-black": "#021C1E",
//         "cadet-blue": "#004445",
//         rain: "#2C7873",
//         greenery: "#6FB98F",
//         "dim-white": "#ccc",
//         border: "#DBDBDC",
//       },
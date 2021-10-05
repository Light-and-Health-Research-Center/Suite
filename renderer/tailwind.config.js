const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        barbiePink: {
          100: "#DC298D",
          80: "#E354A4",
          60: "#EA7FBB",
          20: "#F8D4E8",
          10: "#FCEAF4",
        },
        vividCerulean: {
          100: "#06ABEB",
          80: "#38BCEF",
          60: "#6ACDF3",
        },
        stPatricksBlue: {
          100: "#212070",
          80: "#4D4D8D",
          60: "#7A79A9",
        },
        cetaceanBlue: {
          100: "#00002D",
          80: "#333357",
          60: "#666681",
        },
        white: {
          100: "#FFFFFF",
          off: "#F6F8FA",
        },
        black: {
          100: "#000000",
          90: "#1A1A1A",
          85: "#222222",
          80: "#333333",
          60: "#666666",
          40: "#999999",
          20: "#CCCCCC",
          10: "#E6E6E6",
        },
        programs: {
          plant: {
            100: "#51DB24",
            80: "#74e250",
            60: "#97e97c",
          },
          energy: {
            100: "#24acdb",
            80: "#50bde2",
            60: "#7ccde9",
          },
          human: {
            100: "#ae24db",
            80: "#be50e2",
            60: "#ce7ce9",
            10: "#f7e9fb",
          },
          transportation: {
            100: "#DB5324",
            80: "#e27550",
            60: "#e9987c",
          },
        },
        rose: colors.rose,
        pink: colors.pink,
        fuchsia: colors.fuchsia,
        purple: colors.purple,
        violet: colors.violet,
        indigo: colors.indigo,
        blue: colors.blue,
        sky: colors.sky,
        cyan: colors.cyan,
        teal: colors.teal,
        emerald: colors.emerald,
        green: colors.green,
        lime: colors.lime,
        yellow: colors.yellow,
        amber: colors.amber,
        red: colors.red,
        gray: colors.gray,
        blueGray: colors.blueGray,
      },
      boxShadow: {
        blueGrayRight: "2px 0 10px 0 rgba(15, 23, 42, 0.15)",
      },
      spacing: {
        "1/1-4gap": "calc(100% - 1rem)",
        "1/2-4gap": "calc(50% - 1rem)",
        "1/3-4gap": "calc(33.33333% - 1rem)",
        "1/4-4gap": "calc(25% - 1rem)",
        "1/5-4gap": "calc(20% - 1rem)",
        "1/6-4gap": "calc(16.66667% - 1rem)",
        "1/12-4gap": "calc(8.33333% - 1rem)",
        "1/1-8gap": "calc(100% - 2rem)",
        "1/2-8gap": "calc(50% - 2rem)",
        "1/3-8gap": "calc(33.33333% - 2rem)",
        "1/4-8gap": "calc(25% - 2rem)",
        "1/5-8gap": "calc(20% - 2rem)",
        "1/6-8gap": "calc(16.66667% - 2rem)",
        "1/12-8gap": "calc(8.33333% - 2rem)",
      },
      scale: {
        101: "1.01",
        102: "1.02",
      },
      screens: {
        _hover: { raw: "(hover: hover)" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

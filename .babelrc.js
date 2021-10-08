module.exports = {
  presets: [
    "next/babel",
    "@babel/plugin-transform-runtime",
    "@babel/preset-env",
    {
      targets: {
        esmodules: true,
      },
    },
  ],
};

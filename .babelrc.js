module.exports = {
  plugins: ["@babel/plugin-transform-runtime"],
  presets: [
    "next/babel",
    [
      "@babel/preset-env",
      {
        targets: {
          esmodules: true,
        },
      },
    ],
  ],
};

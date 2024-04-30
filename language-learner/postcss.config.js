export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-preset-env": {
      stage: 1,
    },
    postcss: {
      plugins: [
        require("postcss-import"),
        require("tailwindcss"),
        require("autoprefixer"),
        require("postcss-nested"),
        require("postcss-simple-vars"),
        require("postcss-flexbugs-fixes"),
        require("postcss-preset-env")({
          stage: 3,
        }),
        require("autoprefixer"),
        require("sass")({}),
      ],
    },
  },
};

import autoprefixer from "autoprefixer";
import postcssFlexbugsFixes from "postcss-flexbugs-fixes";
import postcssImport from "postcss-import";
import postcssNested from "postcss-nested";
import postcssPresetEnv from "postcss-preset-env";
import postcssSimpleVars from "postcss-simple-vars";
import tailwindcss from "tailwindcss";

export default {
  plugins: {
    tailwindcss,
    autoprefixer,
    "postcss-preset-env": {
      stage: 1,
    },
    postcss: {
      plugins: [
        postcssImport,
        tailwindcss,
        autoprefixer,
        postcssNested,
        postcssSimpleVars,
        postcssFlexbugsFixes,
        postcssPresetEnv({
          stage: 3,
        }),
        autoprefixer,
      ],
    },
  },
};

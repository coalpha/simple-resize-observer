const typescript = require("rollup-plugin-typescript2");
const { terser } = require("rollup-plugin-terser");

const formats = {
   cjs: "cjs",
   es: "mjs",
   iife: "iife.js",
   umd: "umd.js",
}

module.exports = Object.entries(formats).map(([format, ext]) => ({
   input: "src/lib.ts",
   output: {
      file: `dist/lib.${ext}`,
      name: "SimpleResizeObserver",
      format,
      strict: true,
   },
   plugins: [typescript(), terser()],
}));

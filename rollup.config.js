import babel from "@rollup/plugin-babel";

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/zibarr.js',
    format: 'umd',
    name: 'zibarr'
  },
  plugins: [
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**'
    })
  ]
}
import postcss from 'rollup-plugin-postcss'
import cssnano from 'cssnano'
import uglify from 'rollup-plugin-uglify'

import {dependencies} from './package.json'
const external = Object.keys(dependencies)

export default {
  entry: 'src/jqmath.js',
  dest: 'dist/jqmath.js',
  format: 'cjs',
  external,
  plugins: [
    postcss({
      plugins: [cssnano()]
    }),
    uglify({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: false
    })
  ]
}
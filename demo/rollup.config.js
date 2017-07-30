import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'

export default {
  entry: 'main.js',
  dest: 'main-build.js',
  format: 'iife',
  moduleName: 'MyModule',
  plugins:
    [
      postcss({
          plugins: [autoprefixer()]
      }),
      nodeResolve({jsnext: true, main: true}),
      commonjs(),
      serve(),
      livereload()
    ]
}

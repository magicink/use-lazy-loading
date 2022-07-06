import { babel } from '@rollup/plugin-babel'
import babelConfig from './.babelrc.json'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import path from 'path'
import { terser } from 'rollup-plugin-terser'

export default [
  {
    external: [/@babel\/runtime/, 'react'],
    input: `${path.resolve(__dirname, 'src/index.js')}`,
    output: {
      exports: 'named',
      file: `${path.resolve(__dirname, 'dist/bundle.js')}`,
      format: 'cjs'
    },
    plugins: [
      nodeResolve(),
      babel({
        babelHelpers: 'runtime',
        babelrc: false,
        presets: babelConfig.presets,
        plugins: babelConfig.plugins
      }),
      terser()
    ]
  }
]

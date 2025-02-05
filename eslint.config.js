import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginTs from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginTs.configs.recommended,
  pluginReact.configs.flat.recommended,
]

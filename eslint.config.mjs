import coreWebVitals from "eslint-config-next/core-web-vitals"
import typescript from "eslint-config-next/typescript"

// Next.js 16 ships native ESLint flat-config arrays; spread them directly.
const eslintConfig = [
  { ignores: [".next/**", "node_modules/**", "out/**", "build/**"] },
  ...coreWebVitals,
  ...typescript,
]

export default eslintConfig

// while flatten if key gets 'abc' then add xyz in array and move to the next value.

// returns css variables as string value for different theme
import { DesignSystem } from '../tokenDefinition.js'

// Recursively process tokens
// output array having key value pair.
/*
      intution: 
          1.if the "value" is an object then we again need to open it(value) into key-value pair using loop.
          2.so we are using recursion.

      parent key: 
          we are updating it each time as the value of tokenName becomes new parent key.
          we are updating it using parameters of recurrsion. 
       */
function flattenTokens(
  obj: object,
  parentKey: string = ''
): Array<[string, string | number]> {
  // store
  const result: Array<[string, string | number]> = []

  Object.entries(obj).forEach(([key, value]) => {
    const tokenName = parentKey ? `${parentKey}-${key}` : key

    if (value === null || value === undefined) {
      return
    } else if (key === 'fontSmoothing' && value == true) {
      result.push(['-webkit-font-smoothing', 'antialiased'])
      result.push(['-moz-osx-font-smoothing', 'grayscale'])
      return
    }
    // If value is an object (nested), recurse
    if (typeof value === 'object' && !Array.isArray(value)) {
      result.push(...flattenTokens(value, tokenName))
    }
    // If value is a primitive (string/number), add to result
    else if (typeof value === 'string' || typeof value === 'number') {
      result.push([tokenName, value])
    }
  })

  return result
}

// providing the css in string type for both light and dark modes
export default function cssGenerator(
  designToken: DesignSystem,
  themeName: string
): string {
  let lightCss = `:root[data-theme-name="${themeName}"][data-mode="light"] {\n`
  let darkCss = `:root[data-theme-name="${themeName}"][data-mode="dark"] {\n`
  let globalCss = `:root[data-theme-name="${themeName}"]{\n`
  const commonVal = designToken.global
  // both modes must exists.
  const lightVal = designToken.modes.light
  const darkVal = designToken.modes.dark

  const lightTokens = flattenTokens(lightVal)
  const darkTokens = flattenTokens(darkVal)
  const globalTokens = flattenTokens(commonVal)

  // reverting the back output into json object.
  lightTokens.forEach(([tokenName, tokenValue]) => {
    lightCss += `  --${tokenName}: ${tokenValue};\n`
  })
  darkTokens.forEach(([tokenName, tokenValue]) => {
    const prefix = tokenName.startsWith('-') ? '' : '--'
    darkCss += `  ${prefix}${tokenName}: ${tokenValue};\n`
  })
  globalTokens.forEach(([tokenName, tokenValue]) => {
    globalCss += `  --${tokenName}: ${tokenValue};\n`
  })

  lightCss += '}\n'
  darkCss += '}\n'
  globalCss += `}\n`

  const stringCss = globalCss + lightCss + darkCss
  return stringCss
}

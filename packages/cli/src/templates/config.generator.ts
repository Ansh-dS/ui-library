// there could be too many themes but:
// user choose more than one theme which leads us in building a dynamic config.

interface configTemplate {
  theme: Record<string, boolean>
  version: string
}
export function configGenerator(ans: string[]): configTemplate {
  let themeRecord: Record<string, boolean> = {}
  ans.map((theme) => {
    themeRecord[theme] = true
  })
  return {
    theme: themeRecord,
    version: '1.0.0',
  }
}

import fs from 'fs-extra'
import path from 'path'
import { configGenerator } from '../../templates/config.generator.js'
// Importing all strings cleanly to keep this file purely logical
import {
  globalCss,
  layoutHtml,
  nextInjectionScript,
  viteInjectionScript,
  providersTemplate,
} from './strings.js'

export async function writeConfig(cwd: string, selectedThemes: string[]) {
  const config = configGenerator(selectedThemes)
  await fs.writeJson(path.join(cwd, 'ui-lib.config.json'), config, {
    spaces: 2,
  })
}

export async function updateCss(
  targetDir: string,
  cssFileName: string,
  selectedThemes: string[]
) {
  const cssPath = path.join(targetDir, cssFileName)

  const requiredImports = [
    "@import 'tailwindcss';",
    ...selectedThemes.map((t) => `@import 'components/${t}.css';`),
    "@source '../../node_modules/components/dist/ui.js';",
    "@import 'components/global.css';",
  ]

  if (await fs.pathExists(cssPath)) {
    let existingCss = await fs.readFile(cssPath, 'utf8')

    const missingImports = requiredImports.filter(
      (imp) => !existingCss.includes(imp)
    )

    if (missingImports.length > 0) {
      existingCss = `${missingImports.join('\n')}\n\n${existingCss}`
    }

    if (!existingCss.includes('::view-transition-old(root)')) {
      existingCss = `${existingCss}\n\n${globalCss}`
    }

    await fs.writeFile(cssPath, existingCss)
    return { created: false, file: cssFileName }
  } else {
    await fs.writeFile(cssPath, `${requiredImports.join('\n')}\n\n${globalCss}`)
    return { created: true, file: cssFileName }
  }
}

export async function writeProviders(
  targetDir: string,
  isNext: boolean,
  defaultTheme: string
) {
  const providersContent = providersTemplate(isNext, defaultTheme)
  await fs.writeFile(path.join(targetDir, 'providers.tsx'), providersContent)
}

export async function injectNoBlink(
  targetDir: string,
  isNext: boolean,
  defaultTheme: string
) {
  const cwd = process.cwd()
  const nextLayoutContent = layoutHtml(defaultTheme)

  if (isNext) {
    const layoutCandidates = [
      'layout.tsx',
      'layout.jsx',
      'layout.ts',
      'layout.js',
    ]
    for (const name of layoutCandidates) {
      const p = path.join(targetDir, name)
      if (await fs.pathExists(p)) {
        let content = await fs.readFile(p, 'utf8')

        if (
          content.includes('data-theme-name') ||
          content.includes('NO-BLINK')
        ) {
          return { injected: false, file: p }
        }

        const headOpen = content.indexOf('<head>')
        if (headOpen !== -1) {
          const insertAt = headOpen + '<head>'.length
          const script = nextInjectionScript(defaultTheme) // Using the clean import

          content =
            content.slice(0, insertAt) + script + content.slice(insertAt)
          await fs.writeFile(p, content)
          return { injected: true, file: p }
        }
      }
    }

    const layoutPath = path.join(targetDir, 'layout.tsx')
    await fs.writeFile(layoutPath, nextLayoutContent)
    return { injected: true, file: layoutPath, created: true }
  }

  // For non-next (Vite/react) insert into index.html
  const htmlCandidates = [
    path.join(cwd, 'index.html'),
    path.join(cwd, 'public', 'index.html'),
  ]
  for (const p of htmlCandidates) {
    if (await fs.pathExists(p)) {
      let content = await fs.readFile(p, 'utf8')

      if (content.includes('data-theme-name') || content.includes('NO-BLINK'))
        continue

      const headOpen = content.indexOf('<head>')
      if (headOpen !== -1) {
        const insertAt = headOpen + '<head>'.length
        const script = viteInjectionScript(defaultTheme) // Using the clean import

        content = content.slice(0, insertAt) + script + content.slice(insertAt)
        await fs.writeFile(p, content)
        return { injected: true, file: p }
      }
    }
  }

  return { injected: false }
}

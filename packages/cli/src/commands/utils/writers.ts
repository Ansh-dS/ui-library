import fs from 'fs-extra'
import path from 'path'
import { configGenerator } from '../../templates/config.generator.js'
// Importing all strings cleanly to keep this file purely logical
import {
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

export async function writeInitFiles(
  componentsBaseDir: string, // Now points to src/components/
  targetDir: string,
  userCssFileName: string,
  apiFiles: { name: string, content: string }[]
) {
  // 1. Write ALL files dynamically based on what the server requested
  for (const file of apiFiles) {
    // This perfectly creates src/components/core/... OR src/components/ui/Utils/...
    const fullPath = path.join(componentsBaseDir, file.name);
    await fs.ensureDir(path.dirname(fullPath));
    await fs.writeFile(fullPath, file.content);
  }

  // 2. Inject CSS safely (Now targeting core/styles/index.css)
  const userCssPath = path.join(targetDir, userCssFileName);
  const relativePathToStyles = path.relative(targetDir, path.join(componentsBaseDir, 'core/styles/index.css'));
  const importStatement = `@import '${relativePathToStyles.split(path.sep).join('/')}';`;

  if (await fs.pathExists(userCssPath)) {
    let existingCss = await fs.readFile(userCssPath, 'utf8');
    if (!existingCss.includes(importStatement)) {
      await fs.writeFile(userCssPath, `${importStatement}\n\n${existingCss}`);
    }
    return { created: false, file: userCssFileName };
  } else {
    await fs.writeFile(userCssPath, `${importStatement}\n`);
    return { created: true, file: userCssFileName };
  }
}

export async function writeProviders(
  componentsDir: string,
  isNext: boolean,
  defaultTheme: string
) {
  const providersContent = providersTemplate(isNext, defaultTheme)
  await fs.writeFile(
    path.join(componentsDir, 'providers.tsx'),
    providersContent
  )
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

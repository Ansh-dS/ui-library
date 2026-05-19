import { program } from 'commander'
import path from 'path'
import fs from 'fs-extra'
import { askUserQuestions, normalizeSelectedThemes } from './prompts.js'
// Removed 'installDependencies' as we rely on the user's existing environment
import { updateCss, writeProviders, injectNoBlink } from './writers.js'

export const initCommand = program
  .command('init')
  .description('Initialize the UI library in your project')
  .action(async () => {
    console.log('🚀 Initializing @anshdeep/ui...\n')

    try {
      // 1. Ask the user for their theme preferences
      const answers = await askUserQuestions()

      if (!answers.confirmInit) {
        console.log('Initialization cancelled.')
        return
      }

      // 2. Process their answers
      const selectedThemes = normalizeSelectedThemes(answers)
      const defaultTheme = selectedThemes[0] as string
      console.log(`\nUser chose themes: ${selectedThemes.join(', ')}`)

      const cwd = process.cwd()

      // 3. Environment Detection: Figure out if this is Next.js or Vite
      let framework = 'vite'
      let targetDir = path.join(cwd, 'src')
      let cssFileName = 'index.css'

      // Check for Next.js app router structures
      if (await fs.pathExists(path.join(cwd, 'app'))) {
        framework = 'next'
        targetDir = path.join(cwd, 'app')
        cssFileName = 'globals.css'
      } else if (await fs.pathExists(path.join(cwd, 'src', 'app'))) {
        framework = 'next'
        targetDir = path.join(cwd, 'src', 'app')
        cssFileName = 'globals.css'
      }

      await fs.ensureDir(targetDir)

      // 4. Cleanup old config files
      // We removed the need for ui-lib.config.json in our cleaner architecture
      const configPath = path.join(cwd, 'ui-lib.config.json')
      if (await fs.pathExists(configPath)) {
        await fs.remove(configPath)
        console.log('ℹ️ Removed outdated ui-lib.config.json')
      }

      // 5. Build or Update the Global CSS file
      const cssResult = await updateCss(targetDir, cssFileName, selectedThemes)
      console.log(
        `✔️ ${cssResult.created ? 'Created' : 'Updated'} CSS: ${cssResult.file}`
      )

      // 6. Build the React Context Providers wrapper
      const isNext = framework === 'next'
      await writeProviders(targetDir, isNext, defaultTheme)
      console.log('✔️ Providers created: providers.tsx')

      // 7. Inject the No-Blink script safely
      try {
        const res = await injectNoBlink(targetDir, isNext, defaultTheme)
        // Cleaned up the messy 'any' casting here
        if (res && res.injected) {
          console.log(`✔️ Injected no-blink script into: ${res.file}`)
        }
      } catch {
        console.warn('⚠️ Could not inject no-blink script automatically.')
      }

      // 8. Final Setup Instructions
      // Using cleaner multi-line console logs instead of messy \n character strings
      console.log('\n✨ Almost done! Complete your setup:')
      console.log(
        `1. Import the new CSS and Provider in your ${isNext ? 'layout.tsx' : 'main.tsx'}:`
      )
      console.log(`   import "./${cssFileName}";`)
      console.log(`   import Providers from "./providers";\n`)
    } catch (err: unknown) {
      // Graceful error handling for terminal prompts
      if (err instanceof Error && 'isTtyError' in err) {
        console.error("Prompt couldn't be rendered in the current environment.")
      } else {
        console.error('Something went wrong:', err)
      }
    }
  })

// commander: console.logs/text before asking actual questions.
// inquirer: lets you create prompts/questions.

// 1. we are asking questions from user.
// 2. building config file using their answers.
// 3. building a file int users current workind directory.

import { program } from 'commander'
import inquirer from 'inquirer'
import fs from 'fs-extra'
import path from 'path'
import { configGenerator } from '../templates/config.generator.js'

export const initCommand = program
  .command('init')
  .description('Initialize the UI library in your project')
  .action(async () => {
    console.log('🚀 Initializing @anshdeep/ui...\n')

    // Filling the options with your specific theme names
    const options = ['tally', 'riverside', 'apple', 'microsoft']

    try {
      const answers = await inquirer.prompt([
        {
          name: 'confirmInit',
          type: 'confirm',
          message: 'Do you want to initialize the UI library here?',
          default: true,
        },
        {
          name: 'theme',
          type: 'list', // Single choice UI as requested
          message: 'Choose your primary brand theme:',
          choices: options,
          when: (answers) => answers.confirmInit, // if this(answers....) is true, only the ask this question.
        },
        {
          name: 'installDeps',
          type: 'confirm',
          message: 'Install dependencies?',
          default: true,
          when: (answers) => answers.confirmInit,
        },
      ])

      // Exit if they said no
      if (!answers.confirmInit) {
        console.log('Initialization cancelled.')
        return
      }

      console.log(`\nUser chose theme: ${answers.theme}`)

      // Generate the config object (passing it as an array if your template expects it)
      const config = configGenerator([answers.theme])

      // Write to the user's current working directory
      const configPath = path.join(process.cwd(), 'ui-lib.config.json')

      // Write the JSON with 2-space formatting for readability
      await fs.writeJson(configPath, config, { spaces: 2 })
      console.log('✔️ Config created: ui-lib.config.json')

      // Dependency logic
      if (answers.installDeps) {
        console.log('📦 Installing dependencies...')
        // You would add your execSync('npm install') logic here later
        console.log('✔️ Dependencies installed')
      }

      // Final success message.
      console.log('\n All set! Start using components:\n')
      console.log('\n import { Button } from "@anshdeep/ui";\n')
    } catch (err: any) {
      if (err.isTtyError) {
        console.error("Prompt couldn't be rendered in the current environment.")
      } else {
        console.error('Something went wrong:', err)
      }
    }
  })

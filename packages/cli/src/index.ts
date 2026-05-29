// connecting keywords with typescript file
// this file contains questions to ask etc etc.

import { Command } from 'commander'
import { addCommand as add } from './commands/add/index.js'
import { setupCommand as setup } from './commands/setup.js'
const program = new Command()

// when user types  'pnpm ui-lib --help:'
// this name displays.
program
  .name('aura')
  .description('CLI for initializing and managing your UI library')
  .version('1.0.0')

// adding new command 'init'
program.addCommand(setup)
program.addCommand(add)

// process.argv: captures everthing user writes.
// program.parse: keywords with above registor commmands
program.parse(process.argv)

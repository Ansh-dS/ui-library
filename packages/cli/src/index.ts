// connecting keywords with typescript file
// this file contains questions to ask etc etc.

import { Command } from 'commander'
import { initCommand as init } from './commands/init.js'
const program = new Command()

// when user types  'pnpm ui-lib --help:'
// this name displays.
program
  .name('ui-lib')
  .description('CLI for initializing and managing your UI library')
  .version('1.0.0')

// adding new command 'init'
program.addCommand(init)

// process.argv: captures everthing user writes.
// program.parse: keywords with above registor commmands
program.parse(process.argv)

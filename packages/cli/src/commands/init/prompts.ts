import inquirer from 'inquirer'

// ==========================================================================
//   TYPE DEFINITIONS
// ==========================================================================
// Clean, minimal types tracking only the initialization confirmation and
// the array of selected theme strings.
export type Answers = {
  confirmInit: boolean
  selectedThemes?: string[] | undefined
}

const options = ['tally', 'riverside']

// ==========================================================================
//   THE CLI INTERVIEWER (STREAMLINED)
// ==========================================================================
// Instead of forcing multiple sequential routing questions (Single vs. Multiple),
// a single multi-select checkbox is used. Since we only have two options,
// checking one acts as single-theme mode, and checking both sets up multi-theme mode.
export async function askUserQuestions(): Promise<Answers> {
  return inquirer.prompt<Answers>([
    {
      name: 'confirmInit',
      type: 'confirm',
      message: 'Do you want to initialize the UI library here?',
      default: true,
    },
    {
      name: 'selectedThemes',
      type: 'checkbox',
      message:
        'Select the themes you want to include (Space to select, Enter to confirm):',
      choices: options,
      default: ['tally'], // Pre-check tally by default for friction-free setups
      when: (answers) => answers.confirmInit,
      validate: (answer: string[]) =>
        answer.length > 0 ? true : 'You must choose at least one theme.',
    },
  ])
}

// ==========================================================================
//   DATA CLEANER (STREAMLINED)
// ==========================================================================
// Replaces complex step-by-step branching logic. It maps out whatever collection
// of themes the user checked directly to our downstream CSS and provider writers.
export function normalizeSelectedThemes(answers: Answers): string[] {
  if (answers.selectedThemes && answers.selectedThemes.length > 0) {
    return answers.selectedThemes
  }

  // Safe absolute fallback to maintain system stability
  return ['tally']
}

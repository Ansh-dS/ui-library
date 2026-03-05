import path from 'path'
import fs from 'fs'
//default themes.
import TallyTheme from '../tokens/tallyTheme.js'
import cssGenerator from '../generators/cssStringGenerator.js'
import RiversideTheme from '../tokens/riversideTheme.js'

async function generateAllThemes(): Promise<void> {
  const themeData =
    cssGenerator(TallyTheme, 'tally') +
    cssGenerator(RiversideTheme, 'riverside')

  // generating a path using "path" and "join".
  const outputPath = path.join('../../', 'token.css')
  // writing into theme.css
  // writeFile is asnc where as writeFileSync is synchronous.
  fs.writeFile(outputPath, themeData, (err) => {
    if (err != null) {
      console.log(
        './packages/src/styles/themtoString.ts',
        "Can't write into file",
        err
      )
      process.exit(1)
    } else {
      console.log('Created successfully ./token.css')
    }
  })
}

generateAllThemes()

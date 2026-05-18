import path from 'path'
import { readdir, access, constants, writeFile, mkdir } from 'fs/promises'
import stringCss from './stringCss.js'
import { DesignSystem } from '../tokenDefinition.js'
import { pathToFileURL } from 'url'

async function createCssFile(
  designToken: DesignSystem,
  themeName: string
): Promise<void> {
  const cwd = process.cwd()
  //  file saves with a .css extension
  const createCssHere = path.join(cwd, `../ui/src/styles/${themeName}.css`)

  const token = stringCss(designToken, themeName)

  try {
    //  Ensuring the directory exists before trying to write to it
    await mkdir(path.dirname(createCssHere), { recursive: true })

    // writeFile is async where as writeFileSync is synchronous.
    await writeFile(createCssHere, token, 'utf-8')
    console.log(`Created successfully ${createCssHere}`)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

async function processTokensFolder(
  folderPath: string,
  allowTs: boolean = false
) {
  try {
    // readdir: Read all entries in the folder. output=> array.
    // { withFileTypes: true }: provides metadata, so we can directly check whether it’s a file, directory, symbolic link
    const entries = await readdir(folderPath, { withFileTypes: true })

    // Filter only files (skip directories) and ignore TypeScript declaration files
    const files = entries.filter(
      (entry) => entry.isFile() && !entry.name.endsWith('.d.ts')
    )

    // Process all files in parallel
    await Promise.all(
      files.map(async (file) => {
        const fullPath = path.join(folderPath, file.name)
        const ext = path.extname(file.name)

        // extname: figures out extension

        // Accept compiled JS tokens (when running from dist) or JS source tokens.
        if (ext === '.js' || (ext === '.ts' && allowTs)) {
          try {
            const tokenModule = await import(pathToFileURL(fullPath).href)
            const jsonToken = tokenModule?.default ?? tokenModule
            const themeName = path.basename(file.name, ext)

            if (jsonToken) {
              await createCssFile(jsonToken, themeName)
            }
          } catch (e) {
            // Log and skip files that cannot be imported (e.g. .d.ts or other unexpected files)
            console.warn(`Skipping file due to import error: ${file.name}`, e)
          }
        }
      })
    )

    console.log('processFolder: All files processed successfully')
  } catch (err) {
    console.error('Error processing folder:', err)
  }
}

async function generateCssFiles() {
  const cwd = process.cwd()

  const distTokensPath = path.join(cwd, 'dist/src/tokens')
  const srcTokensPath = path.join(cwd, 'src/tokens')

  let selectedPath: string | null = null
  let allowTs = false

  try {
    // access and contants: checks does the file exists or not.
    await access(distTokensPath, constants.F_OK)
    selectedPath = distTokensPath
    allowTs = true // compiled dist may contain .js and .d.ts; allow both .js and .ts if using ESM loader
    console.log('Using tokens from dist:', distTokensPath)
  } catch {
    try {
      console.log('not taking dist path')
      await access(srcTokensPath, constants.F_OK)
      selectedPath = srcTokensPath
      allowTs = false // when running Node directly against source, only .js imports are supported
      console.log(
        'Using tokens from src (only .js files will be imported):',
        srcTokensPath
      )
    } catch {
      console.error('No tokens folder found in dist or src')
      console.log(
        'Build the package (tsc -b) first so tokens are compiled to dist/src/tokens'
      )
      process.exit(1)
    }
  }

  await processTokensFolder(selectedPath, allowTs)
}

generateCssFiles()

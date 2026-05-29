import path from 'path'
import { readdir, access, constants, writeFile } from 'fs/promises'
import stringCss from './stringCss.js'
import { DesignSystem } from '../tokenDefinition.js'
import { pathToFileURL } from 'url'
import { mkdirSync } from 'fs'

const packageRoot = process.cwd()
const workspaceRoot = path.resolve(packageRoot, '..', '..') // resolve: takes sequence of path and return absolute path. 

async function createCssFile(
  designToken: DesignSystem,
  themeName: string
): Promise<void> {
  //  file saves with a .css extension
  const createCssHere = path.join(
    workspaceRoot,
    'apps/registry-server/themes',
    `${themeName}.css`
  )

  const token = stringCss(designToken, themeName)

  try {
    //  Ensuring the directory exists before trying to write to it
    mkdirSync(path.dirname(createCssHere), { recursive: true })

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

    // Build a map of normalized theme names -> chosen file
    // Normalization: strip a trailing `Theme` suffix (case-insensitive).
    // When both `foo.js` and `fooTheme.js` exist, prefer the base `foo.js` file.
    const fileMap = new Map<
      string,
      { fullPath: string; origName: string; isThemeSuffix: boolean }
    >()

    files.forEach((file) => {
      const fullPath = path.join(folderPath, file.name)
      const ext = path.extname(file.name)
      const base = path.basename(file.name, ext)
      const normalized = base.replace(/Theme$/i, '')
      const isTheme = /Theme$/i.test(base)

      const existing = fileMap.get(normalized)

      // Streamlined Logic: Prefer the non-Theme file over a Theme-suffixed file
      if (!existing || (existing.isThemeSuffix && !isTheme)) {
        fileMap.set(normalized, {
          fullPath,
          origName: file.name,
          isThemeSuffix: isTheme,
        })
      }
    })

    // Process the selected unique files
    await Promise.all(
      Array.from(fileMap.values()).map(async (entry) => {
        const fullPath = entry.fullPath
        const ext = path.extname(fullPath)

        if (ext === '.js' || (ext === '.ts' && allowTs)) {
          try {
            const tokenModule = await import(pathToFileURL(fullPath).href)
            const jsonToken = tokenModule?.default ?? tokenModule
            const themeName = path
              .basename(entry.origName, ext)
              .replace(/Theme$/i, '')

            if (jsonToken) {
              await createCssFile(jsonToken, themeName)
            }
          } catch (e) {
            console.warn(
              `Skipping file due to import error: ${entry.origName}`,
              e
            )
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
  const distTokensPath = path.join(packageRoot, 'dist/src/tokens')
  const srcTokensPath = path.join(packageRoot, 'src/tokens')

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

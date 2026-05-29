import fs from 'fs/promises'
import path from 'path'
import { NextResponse } from 'next/server.js'
import registryIndex from '@registry'

function toPascalCase(componentName: string) {
  return componentName
    .trim()
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ component: string }> }
) {
  const resolvedParams = await params
  const componentName = resolvedParams.component.toLowerCase()
  const folderName = toPascalCase(componentName)
  const meta = registryIndex[componentName]

  if (!meta) {
    return NextResponse.json(
      { error: `Component '${componentName}' not found in registry.` },
      { status: 404 }
    )
  }

  try {
    const componentPath = path.join(process.cwd(), 'components', folderName)
    const files = []

    const entries = await fs.readdir(componentPath, { withFileTypes: true })

    for (const entry of entries) {
      if (entry.isFile()) {
        const filePath = path.join(componentPath, entry.name)
        const content = await fs.readFile(filePath, 'utf8')

        files.push({
          path: path.join(folderName, entry.name), // e.g., "Button/Button.tsx"
          name: entry.name,
          content,
        })
      }
    }

    // Return the specific files AND the instructions on what other internal components are required
    return NextResponse.json({
      name: componentName,
      dependencies: meta.dependencies,
      registryDependencies: meta.registryDependencies || [], // Hand relationship tracking down to CLI
      files,
    })
  } catch (error) {
    console.error(`Registry engine error for ${folderName}:`, error)
    return NextResponse.json(
      { error: `Failed to assemble assets for ${folderName}.` },
      { status: 500 }
    )
  }
}

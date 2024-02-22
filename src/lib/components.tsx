import fs from 'fs'
import path from 'path'

const componentsPath = path.join(
  process.cwd(),
  'src/app/(components)/playground',
)

export async function getComponents() {
  const folderNames = fs
    .readdirSync(componentsPath)
    .filter((file) =>
      fs.statSync(path.join(componentsPath, file)).isDirectory(),
    )

  return folderNames
}

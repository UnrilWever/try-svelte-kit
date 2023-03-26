import fs from 'fs'
import path from 'path'

const htmlFilePaths = []

function readDir(dir) {
  const files = fs.readdirSync(dir)
  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      readDir(filePath)
    } else if (path.extname(file) === '.html') {
      htmlFilePaths.push(filePath)
    }
  }
}

function modifyHtml(content) {
  //修改内容
  const regex = /<link[^>]*href="[^"]*\.js"[^>]*>/gi
  const newHtml = content.replace(regex, '')
  return content
}

readDir('./build')

for (const filePath of htmlFilePaths) {
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const modifyContent = modifyHtml(fileContent)
  fs.writeFileSync(filePath, modifiedContent)
}

import fs from 'fs'
import path from 'path'
import { binRun } from './utils.js'

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
  return newHtml
}

readDir('./build')

for (const filePath of htmlFilePaths) {
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const modifiedContent = modifyHtml(fileContent)
  fs.writeFileSync(filePath, modifiedContent)
  //最后顺便格式化一下代码
  try {
    await binRun('pnpm', ['prettier', '--write', filePath])
  } catch (error) {
    console.error('格式化失败,错误信息:', error)
  }
}

const Handlebars                     = require('handlebars')
const assert                         = require('assert')
const { join }                       = require('path')
const { readFileSync, existsSync }   = require('fs')
const { outputFileSync, removeSync } = require('fs-extra')

function getTemplate(name) {
  console.log('process.cwd()', process.cwd())
  const filePath = join(__dirname, `./boilerplates/${name}.handlebars`)
  
  assert(existsSync(filePath), `getTemplate: file ${name} not fould`)
  
  const source = readFileSync(filePath, 'utf-8')
  return Handlebars.compile(source)
}

function readFile(filePath) {
  return readFileSync(filePath, 'utf-8')
}

function writeFile(filePath, source) {
  outputFileSync(filePath, source, 'utf-8')
}

function removeFile(filePath) {
  removeSync(filePath)
}

function upperCase(str) {
  return str[0].toLocaleUpperCase() + str.substr(1)
}

module.exports = {
  getTemplate,
  readFile,
  writeFile,
  removeFile,
  upperCase
}


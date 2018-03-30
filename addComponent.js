const { existsSync }             = require('fs')
const { join }                   = require('path')
const { getTemplate, writeFile } = require('./utils')

function createComponent({ model_name, component_name }) {
//  assert(payload.namespace, 'api/models/create: payload should have namespace')
  const template = getTemplate('components.create')
  console.log(template)
  const source   = template({ model_name, component_name })
  const filePath = join(process.cwd(), `./src/routes/${component_name}/index.js`)
//  assert(!existsSync(filePath), 'api/models/create: file exists')
  writeFile(filePath, source)
  
  // Add model to entry
//  if (payload.entry && payload.modelPath) {
//    addModel({
//      sourcePath: payload.sourcePath,
//      filePath  : payload.entry,
//      modelPath : payload.modelPath
//    })
//  }
}

module.exports = createComponent
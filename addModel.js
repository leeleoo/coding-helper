const { existsSync }             = require('fs')
const { join }                   = require('path')
const { getTemplate, writeFile } = require('./utils')

function createModel(payload) {
  assert(payload.namespace, 'api/models/create: payload should have namespace')
  const template = getTemplate('models.create')
  const source   = template(payload)
  const filePath = join(process.cwd(), `src/models`,`${payload.namespace}.js`)
  console.log('filePath',filePath)
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

module.exports = createModel
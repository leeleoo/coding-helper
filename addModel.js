const { existsSync }             = require('fs')
const { join }                   = require('path')
const { getTemplate, writeFile } = require('./utils')

function create(payload) {
//  assert(payload.namespace, 'api/models/create: payload should have namespace')
  const template = getTemplate('models.create')
  console.log(template)
  const source   = template(payload)
  const filePath = join(process.cwd(), 'test.js')
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

module.exports = create
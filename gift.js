#!/usr/bin/env node
const addRouter       = require('./addRouter')
const addModel        = require('./addModel')
const addComponent    = require('./addComponent')
const { upperCase }   = require('./utils')
const chalk           = require('chalk')
const { argv, alias } = require('yargs')
    .option('route_name', {
      describe: 'model route name',
      demand  : false,
      alias   : 'r'
    })
    .option('a', {
      alias   : 'action',
      demand  : true,
      default : 'tom',
      describe: 'your name',
      type    : 'string'
    })
//    .demand(['action']) // 是否必须
//    .default({ a: 'tom', n: 'new_model' }) // 默认
//    .describe({ a: 'action', n: 'name' })// 提示
function error(message) {
  console.error(chalk.red(message))
}

const [action]                              = argv._
const { model_name, route_name, namespace } = argv
switch ( action ) {
  case 'model':
    addModel({ namespace: model_name, route_name })
//    addRouter()
//    addModel()
//    addComponent()
    break
  case 'router':
    addRouter({ model_name: model_name })
    break
  case 'component':
    addComponent({ model_name, component_name: model_name })
    break
  case 'all':
    addModel({ namespace, route_name })
    addRouter({ model_name })
    addComponent({ model_name, component_name: upperCase(model_name) })
  default :
    error('must be one of "model" "router" "component" "all"')
}

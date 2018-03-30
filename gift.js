#!/usr/bin/env node
const addRouter       = require('./addRouter')
const addModel        = require('./addModel')
const addComponent = require('./addComponent')
const { argv, alias } = require('yargs')
    .demand(['action']) // 是否必须
    .default({ a: 'tom', n: 'new_model' }) // 默认
    .describe({ a: 'action', n: 'name' })// 提示
    .option('a', {
      alias   : 'action',
      demand  : true,
      default : 'tom',
      describe: 'your name',
      type    : 'string'
    })

alias('a', 'action')

console.log('argv', argv)
const [action, model_name] = argv._
//console.log('action',action)
switch ( action ) {
  case 'model':
    addModel({ namespace: model_name, routename: 'routename' })
//    addRouter()
//    addModel()
//    addComponent()
    break
  case 'router':
    addRouter({ model_name: model_name })
    break
  case 'component':
    addComponent({model_name,component_name:model_name})
    break;
}
console.log(action)
console.log(argv._)
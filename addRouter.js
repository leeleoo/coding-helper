const j                = require('jscodeshift')
const { readFileSync } = require('fs')
const { writeFile }    = require('./utils.js')

function addRouter({ model_name }) {
  const path = './src/Router.js'
  const root = j(readFileSync(path, 'utf-8'))
  root
      .find(j.ObjectExpression)
      .filter(path => {
        if (path.parentPath &&
            path.parentPath.parentPath &&
            path.parentPath.parentPath.parentPath &&
            path.parentPath.parentPath.parentPath.value &&
            path.parentPath.parentPath.parentPath.value.id
        ) {
          
          return path.parentPath.parentPath.parentPath.value.id.name === 'routes'
        }
      })
      .forEach(path => {
        if (path.name === path.parent.value.elements.length - 1) {
          j(path).insertAfter(
              j(`
          var a =
          {
            path: '/${model_name}',
            models   : () => [import('./models/${model_name}')],
            component: () => import('./routes/${model_name}/')
          }`)
                  .find(j.ObjectExpression).__paths[0].value
          )
        }
      })
  
  const processed = root.toSource({ quote: 'single' })
  writeFile('./src/Router.js', processed)
  console.log('processed:', processed)
}

//writeFile(path, processed)

module.exports = addRouter

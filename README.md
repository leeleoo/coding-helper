# coding-helper
CodeSmith for react dva stack

## Getting Started

Install, start.

```bash
# Install
$ npm install coding-helper -g


gift all --route_name={your route_name} --namespace={your namespace} --model_name={your model_name}
```


and your project changed
```bash
.
├── src                    # Source directory
    ├── models             # Dva models
       └── {your model}.js     #  new model
    ├── router.js          #  add a new route
    ├── routes             # Route components
       └── {your route}     # new route dir
          └── index.js     # new route  component 

```
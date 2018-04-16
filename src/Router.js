const routes = [
  {},
  {},
  {models:()=>import('./routes/'),component:()=>import('./routes/begin/')},
  {models:()=>import('./routes/'),component:()=>import('./routes/begin/')},
  {models:()=>import('./routes/'),component:()=>import('./routes/begin/')},
  {
    path: '/12',
    models   : () => [import('./models/12')],
    component: () => import('./routes/12/')
  },
  {
    path: '/test1',
    models   : () => [import('./models/test1')],
    component: () => import('./routes/test1/')
  },
  {
    path: '/undefined',
    models   : () => [import('./models/undefined')],
    component: () => import('./routes/undefined/')
  },
  {
    path: '/123',
    models   : () => [import('./models/123')],
    component: () => import('./routes/123/')
  },
  {
    path: '/123',
    models   : () => [import('./models/123')],
    component: () => import('./routes/123/')
  },
  {
    path: '/test_model_name',
    models   : () => [import('./models/test_model_name')],
    component: () => import('./routes/test_model_name/')
  },
  {
    path: '/test_model_name',
    models   : () => [import('./models/test_model_name')],
    component: () => import('./routes/test_model_name/')
  },
  {
    path: '/test_model_name',
    models   : () => [import('./models/test_model_name')],
    component: () => import('./routes/test_model_name/')
  },
  {
    path: '/undefined',
    models   : () => [import('./models/undefined')],
    component: () => import('./routes/undefined/')
  },
  {
    path: '/coding',
    models   : () => [import('./models/coding')],
    component: () => import('./routes/coding/')
  },
  {
    path: '/coding',
    models   : () => [import('./models/coding')],
    component: () => import('./routes/coding/')
  },
  {
    path: '/test1',
    models   : () => [import('./models/test1')],
    component: () => import('./routes/test1/')
  },
  {
    path: '/test1',
    models   : () => [import('./models/test1')],
    component: () => import('./routes/test1/')
  },
  {
    path: '/test1',
    models   : () => [import('./models/test1')],
    component: () => import('./routes/test1/')
  },
  {
    path: '/test1',
    models   : () => [import('./models/test1')],
    component: () => import('./routes/test1/')
  },
  {
    path: '/test1',
    models   : () => [import('./models/test1')],
    component: () => import('./routes/test1/')
  },
  {
    path: '/test1',
    models   : () => [import('./models/test1')],
    component: () => import('./routes/test1/')
  },
  {
    path: '/test1',
    models   : () => [import('./models/test1')],
    component: () => import('./routes/test1/')
  },
  {
    path: '/test1',
    models   : () => [import('./models/test1')],
    component: () => import('./routes/test1/')
  },
  {
    path: '/test1',
    models   : () => [import('./models/test1')],
    component: () => import('./routes/test1/')
  },
  {
    path: '/test1',
    models   : () => [import('./models/test1')],
    component: () => import('./routes/test1/')
  },
  {
    path: '/test1',
    models   : () => [import('./models/test1')],
    component: () => import('./routes/test1/')
  },
  {
    path: '/test1',
    models   : () => [import('./models/test1')],
    component: () => import('./routes/test1/')
  },
  {
    path: '/test1',
    models   : () => [import('./models/test1')],
    component: () => import('./routes/test1/')
  },
  {
    path: '/true',
    models   : () => [import('./models/true')],
    component: () => import('./routes/true/')
  },
  {
    path: '/model_nam',
    models   : () => [import('./models/model_nam')],
    component: () => import('./routes/model_nam/')
  },
  {
    path: '/model_nam',
    models   : () => [import('./models/model_nam')],
    component: () => import('./routes/model_nam/')
  },
  {
    path: '/model_nam',
    models   : () => [import('./models/model_nam')],
    component: () => import('./routes/Model_nam/')
  }
]



//var a = {models:()=>import('./router/qwe'),component:()=>import('./routes/begin/')}
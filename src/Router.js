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
  }
]



//var a = {models:()=>import('./router/qwe'),component:()=>import('./routes/begin/')}
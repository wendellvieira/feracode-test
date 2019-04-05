
const routes = [
  { path: '/', component: () => import('pages/home') },

  { path: '/restrict', component: () => import('layouts/restrict'), children: [
    { path: '', component: () => import('pages/dashboard') }
  ] },
]


export default routes

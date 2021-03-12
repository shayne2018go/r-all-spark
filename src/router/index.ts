import Register from '@pages/auth/register'
import BaseLayout from '@layout/Base'
import Home from '@pages/home/index'
import Draw from '@pages/draw/index'
export const routes = [
  {
    path: '/register',
    meta: {
      title: 'register',
      name: '注册',
      icon: 'home',
      hideInMenu: true,
    },
    component: Register,
  },
  {
    path: '/',
    meta: {
      title: 'home',
      name: '首页',
      icon: 'home',
    },
    component: BaseLayout,
    children: [
      {
        path: '/home',
        exact: true,
        meta: {
          title: 'home',
          name: '首页',
          icon: 'home_light',
        },
        component: Home,
      },
      {
        path: '/draw',
        exact: true,
        meta: {
          title: '画板',
          name: '画板',
        },
        component: Draw,
      },
    ],
  },
]

import { useUserStore } from '@/stores'
import { createRouter, createWebHistory, type RouteConfig } from 'vue-router'
const routes: arrery<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    redirect: 'homePage',
    meta: {
      title: '后台页面'
    },
    component: () => import('@/layout/layout.vue'),
    children: [
      {
        path: 'homePage',
        name: 'homePage',
        meta: {
          title: '数据看板'
        },
        component: () => import('@/views/homePage/data.vue')
      },
      {
        path: 'Identity',
        name: 'Identity',
        meta: {
          title: '实名认证'
        },
        component: () => import('@/views/business/Identity .vue')
      },
      {
        path: 'classification',
        name: 'classification',
        meta: {
          title: '商品分类'
        },
        component: () => import('@/views/goods/classification.vue')
      },
      {
        path: 'release',
        name: 'release',
        meta: {
          title: '发布商品'
        },
        component: () => import('@/views/goods/release.vue')
      },
      {
        path: 'goodSList',
        name: 'goodSList',
        meta: {
          title: '商品列表'
        },
        component: () => import('@/views/goods/goodSList.vue')
      },
      {
        path: 'orderList',
        name: 'orderList',
        meta: {
          title: '订单列表'
        },
        component: () => import('@/views/order/orderList.vue')
      },
      {
        path: 'orderFaild',
        name: 'orderFaild',
        meta: {
          title: '退回列表'
        },
        component: () => import('@/views/order/orderFaild.vue')
      },
      {
        path: 'power',
        name: 'power',
        meta: {
          title: '权限管理'
        },
        component: () => import('@/views/system/power.vue')
      },
      {
        path: 'userInfo',
        name: 'userInfo',
        meta: {
          title: '用户信息'
        },
        component: () => import('@/views/user/userInfo.vue')
      },
      {
        path: 'userList',
        name: 'userList',
        meta: {
          title: '用户列表'
        },
        component: () => import('@/views/user/userList.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () => import('@/views/Login/index.vue')
  },

  {
    path: '/:pathMatch(.*)',
    name: '404',
    component: () => import('@/views/error/index.vue')
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
router.beforeEach((to) => {
  const store = useUserStore()
  const whiteList = ['/login']
  if (store.user?.token) {
    if (to.path === '/login') {
      return '/'
    } else {
      return
    }
  } else {
    if (whiteList.includes(to.path)) {
      return
    } else {
      return '/login'
    }
  }
})

export default router

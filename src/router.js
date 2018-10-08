import Vue from 'vue'
import Router from 'vue-router'
import Learn from './views/LearnPython'
import Layout from './components/Layout'
import notFound from './views/404'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/learn/python',
          name: 'learnPython',
          component: Learn
        },
        {
          path: '/memberManagement',
          name: 'memberManagement',
          component: () => import('./views/Member/MemberManagement.vue')
        },
        {
          path: '/memberManagement/details',
          name: 'memberManagementDetails',
          component: () => import('./views/Member/MemberDetails.vue'),
          meta: {
            keepAlive: false,
            name: '详情',
            breadcrumbs: [
              { name: '会员管理', path: '/authorityManagement' }
            ]
          }
        }
      ]
    },
    {
      path: '*',
      component: notFound
    }
  ]
})

// router.beforeEach((to, from, next) => {
// if (User.loggedIn()) {
//   if (to.path === '/login') {
//     return next('/home')
//   }
//   next()
// } else {
//   if (to.path !== '/login') {
//     return next('/login')
//   }
//   next()
// }
// })

export default router

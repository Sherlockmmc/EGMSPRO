import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import defaultPage from '@/layout/default'
import index from '@/components/mainpage/index'
import familymanage from '@/components/mainpage/familymanage'
import member from '@/components/mainpage/member'
import userinfo from '@/components/mainpage/userinfo'
import basiclook from '@/components/mainpage/basiclook'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: defaultPage,
      redirect: '/login',
      children: [{
        path: '/login',
        name: 'login',
        component: login
      }, {
        path: '/index', // 模板路由
        name: 'index',
        component: index,
        redirect: '/userinfo',
        children: [{
          path: '/familymanage',
          name: 'familymanage',
          component: familymanage
        }, {
          path: '/member',
          name: 'member',
          component: member
        }, {
          path: '/userinfo',
          name: 'userinfo',
          component: userinfo
        }, {
          path: '/basiclook',
          name: 'basiclook',
          component: basiclook
        }]
      }]
    }
  ]
})

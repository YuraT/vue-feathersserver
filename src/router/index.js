import Vue from 'vue'
import Router from 'vue-router'
import Messages from '@/components/home/Messages'
import Login from '@/components/home/Login'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/messages',
      name: 'Messages',
      component: Messages
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
  ]
})

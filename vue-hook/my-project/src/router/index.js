import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Father from '@/components/FatherComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/test',
      name: 'test',
      component: Father
    }
  ]
})

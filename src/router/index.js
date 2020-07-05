import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import FileManage from '@/views/FileManage'
import UserManage from '@/views/UserManage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/file',
      name: 'FileManage',
      component: FileManage
    }, {
      path: '/user',
      name: 'UserManage',
      component: UserManage
    }
  ]
})

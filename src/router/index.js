import Vue from 'vue'
import Router from 'vue-router'
import check from '@/components/check'
import checkSuccess from '@/components/checkSuccess'
import checkBoard from '@/components/checkBoard'
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'check',
      component: check
    },
    {
      path:'/checkSuccess',
      name:'checkSuccess',
      component:checkSuccess
    },
    {
      path:'/checkBoard',
      name:'checkBoard',
      component:checkBoard
    }
  ]
})

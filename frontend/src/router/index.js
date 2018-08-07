import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main.vue'
import Bible from '@/components/bible'
import BibleContentCard from '@/components/bible/bible-content-card'
import DailyLife from '@/components/dailyLife'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/bible',
      name: 'Bible',
      component: Bible
    },
    {
      path: '/bible/:id',
      name: 'BibleContentCard',
      component: BibleContentCard
    },
    {
      path: '/dailylife',
      name: 'DailyLife',
      component: DailyLife
    }
  ]
})

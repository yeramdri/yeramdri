import Vue from 'vue'
import Router from 'vue-router'
import Consulting from '@/components/Consulting.vue'
import Introduce from '@/components/Introduce.vue'
import Main from '@/components/Main.vue'
import Retreat from '@/components/Retreat.vue'
import Column from '@/components/YeramdriColumn.vue'
import Media from '@/components/YeramdriMedia.vue'

import Bible from '@/components/bible'
import BibleList from '@/components/bible/all/list/index.vue' // bible 밑에 nested 하게 바꾸어야함
import BibleContent from '@/components/bible/all/content/index.vue'

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
      path: '/consulting',
      name: 'Consulting',
      component: Consulting
    },
    {
      path: '/introduce',
      name: 'Introduce',
      component: Introduce
    },
    {
      path: '/retreat',
      name: 'Retreat',
      component: Retreat
    },
    {
      path: '/column',
      name: 'Column',
      component: Column
    },
    {
      path: '/media',
      name: 'Media',
      component: Media
    },
    {
      path: '/bible',
      name: 'Bible',
      component: Bible
    },
    {
      path: '/bible/list/:bibleId',
      name: 'BibleList',
      component: BibleList
    },
    {
      path: '/bible/list/:bibleId/content/:contentId',
      name: 'BibleContent',
      component: BibleContent
    },
    {
      path: '/dailylife',
      name: 'DailyLife',
      component: DailyLife
    }
  ]
})

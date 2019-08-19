import Vue from 'vue'
import Router from 'vue-router'

import Index from '../views/Index.vue'
import Article from '../views/ArticleDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Article',
      name: 'Article',
      component: Article
    },
  ]
})

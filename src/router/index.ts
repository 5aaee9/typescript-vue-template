import Router from 'vue-router'
import IndexPage from '@/route/Index.vue'
import Vue from 'vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        name: 'IndexPage',
        path: '/',
        component: IndexPage,
    }],
})

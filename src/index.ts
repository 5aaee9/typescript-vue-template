import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './global.scss'

const app = new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>',
})


export default app

import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/auth'
import persistedstate from './persistedstate'

Vue.use(Vuex)


const store = new Vuex.Store({
    modules: {
        auth: Auth,
    },
    plugins: [ persistedstate() ],
})

// @ts-ignore
window.$store = store
export default store

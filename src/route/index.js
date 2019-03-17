import VueRouter from 'vue-router'
import Subpage from '../module/subPage.vue'

export default function createRouter (Vue) {
    Vue.use(VueRouter)
    let routerObj = {
        routes: [{
          path: '/', component: Subpage 
        }]
    }
    if (typeof window !== 'undifined') {
      routerObj.mode = 'history'
    }
    return new VueRouter(routerObj)
}
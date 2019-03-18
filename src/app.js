import Vue from 'vue'
import Page from './module/page.vue'
import createRouter from './route'
import createStore from './store'
import './template/global.less'

// 导出一个工厂函数，用于创建新的
// 应用程序、router 和 store 实例
export function createApp () {
  const router = createRouter(Vue)
  const store = createStore(Vue)
  const app = new Vue({
    // 根实例简单的渲染应用程序组件。
    render: h => h(Page),
    router,
    store
  })
  return { app }
}
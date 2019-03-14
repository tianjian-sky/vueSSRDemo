import app from './module/app.vue'
import Vue from 'vue'

new Vue({
    el: '#app',
    components: {
        app
    },
    template: '<div><app/></div>',
    data: {
      message: 'Hello Vue!'
    }
})

<template>
    <div id="subPage">
        More please visit: <a :href="$store.state.link">{{$store.state.link}}</a>
    </div>
</template>

<style lang="less" scoped>

</style>

<script>
import apis from '../lib/api.js'
import subPage from './subPage.vue'


export default {
    name: 'subPage',
    data() {
        return {
        }
    },
    created () {
        if (!this.isInNode() && !window.__INITIAL_STATE__) { // 首屏数据已经取过并ssr了，所以客户端代码执行时就不用再去取了
            this.$store.dispatch('fetchData')
        }
    },
    asyncData ({ store, route }) {
        console.log(0, store.dispatch('fetchData'))
        return store.dispatch('fetchData')
    },
    methods: {
        getData() {
            console.log(apis)
            apis.getLink()
            .then(link => {
                this.$store.commit('setLink', link)
            })
        },
        isInNode () {
            return (typeof window === 'undefined')
        }
    }
    
}
</script>

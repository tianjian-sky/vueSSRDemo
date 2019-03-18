<template>
    <div id="subPage">
        <div id="box1">
            More please visit: <a @click="changePage">{{$store.state.link}}</a>
        </div>
        <div id="box2" v-if="showDetail">
            <iframe :src="$store.state.link" noframeborder></iframe>

        </div>
    </div>
</template>

<style lang="less" scoped>
#subPage{
    display: flex;
    width: 100%;
    height: 80vh;
    flex-direction:column;
    #box1{
        flex: 0;
        a {
            color: blue;
            cursor: pointer;
        }
    }
    #box2 {
        flex: 1;
        iframe{
            width: 100%;
            height: 100%;
        }
    }
}
</style>

<script>
import apis from '../lib/api.js'
import subPage from './subPage.vue'


export default {
    name: 'subPage',
    data() {
        return {
            showDetail: false
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
        },
        changePage () {
            this.showDetail = true
        }
    }
    
}
</script>

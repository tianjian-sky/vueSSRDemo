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
        this.getData()
        this.$store.dispatch('fetchData')
    },
    methods: {
        asyncData () {
            return this.$store.dispatch('fetchData')
        },
        getData() {
            console.log(apis)
            apis.getLink()
            .then(link => {
                this.$store.commit('setLink', link)
            })
        }
    }
    
}
</script>

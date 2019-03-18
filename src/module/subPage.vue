<template>
    <div id="subPage">
        <div id="box1">
            More please visit: <a @click="changePage">https://ssr.vuejs.org/zh/guide/#%E5%AE%89%E8%A3%85</a>
        </div>
        <div id="box2" v-if="showDetail">
            <iframe src="https://ssr.vuejs.org/zh/guide/#%E5%AE%89%E8%A3%85" noframeborder></iframe>

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

export default {
    name: 'subPage',
    data() {
        return {
            showDetail: false
        }
    },
    created () {
    },
    methods: {
    }
    
}
</script>

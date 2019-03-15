<template>
    <div id="page">
        <h1>Hello, I'm vue ssr!</h1>
        <subPage/>
    </div>
</template>

<style lang="less" scoped>
#page {
    box-shadow: 1px 1px #ccc;
}
h1 {
    font-size: 24px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>

<script>
import subPage from './subPage.vue'
export default {
    name: 'page',
    components: {
        subPage
    },
    created () {
        console.log('component mounted!')
    }
}
</script>

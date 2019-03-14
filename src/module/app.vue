<template>
    <div id="app">
        <h1>Hello, I'm vue ssr!</h1>
    </div>
</template>

<style lang="less" scoped>
#app {
    box-shadow: 1px 1px #ccc;
}
h1 {
    font-size: 24px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>

<script>
export default {
    name: 'app',
    created () {
        console.log('component mounted!')
    }
}
</script>

export default {
    getLink () {
        return new Promise((res, rej) => {
            let link = ''
            setTimeout(() => {
                link = 'https://ssr.vuejs.org/zh/guide/#%E5%AE%89%E8%A3%85'
                res(link)
            }, 1000)
        })
    }
}

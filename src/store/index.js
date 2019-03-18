import apis from '../lib/api'
import Vuex from 'vuex'

export default function createStore (Vue) {
    Vue.use(Vuex)
    return new Vuex.Store({
        state: {
            link: 'Please wait ......'
        },
        mutations: {
            setLink (state, link) {
                state.link = link
            }
        },
        actions: {
            fetchData (context) {
                return new Promise((resolve, reject) => {
                    apis.getLink()
                    .then(link => {
                        context.commit('setLink', link)
                        console.log('a')
                        resolve()
                    })
                    .catch(reject)
                })
            }
        },
    })
}
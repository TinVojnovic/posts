import Vuex from "vuex"

import axios from "axios"

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return axios.get("http://localhost:3333/fetch")
                .then(res => {
                    vuexContext.commit('setPosts', res.data.posts)
                })
                .catch(e => context.error(e))
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            }
        }
    })
}

export default createStore
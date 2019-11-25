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
            },
            createPost(state, newPost) {
                state.loadedPosts.push(newPost)
            },
            editPost(state, editedPost) {
                const postId = state.loadedPosts.findIndex(post => post.id === editedPost.id)
                state.loadedPosts[postId] = editedPost
            },
            deletePost(state, selectedPost) {
                const postId = state.loadedPosts.findIndex(post => post.id === selectedPost.id)
                state.loadedPosts.splice(postId)
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return axios.get("http://localhost:3333/api/post/fetch")
                    .then(res => {
                        vuexContext.commit('setPosts', res.data.posts)
                    })
                    .catch(e => context.error(e))
            },
            createPost(vuexContext, newPost) {
                return axios.post("http://localhost:3333/api/post/create", newPost)
                    .then(res => {
                        vuexContext.commit('createPost', res.data.post)
                    })
                    .catch(e => console.log(e))
            },
            editPost(vuexContext, editedPost) {
                return axios
                    .put("http://localhost:3333/api/post/edit/" + editedPost.id, editedPost)
                    .then(res => {
                        vuexContext.commit('editPost', editedPost)
                    })
                    .catch(e => console.log(e));
            },
            deletePost(vuexContext, post) {
                return axios.delete("http://localhost:3333/api/post/delete/" + post.id)
                    .then(res => {
                        vuexContext.commit('deletePost', post)
                    })
                    .catch(e => console.log(e))
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
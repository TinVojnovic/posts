'use strict'

const Post = use("App/Models/Post")
const {validate} = use('Validator')

class PostController {
    async fetchAll({ response }){
        const posts = await Post.query().fetch()

        response.ok({ posts })
    }

    async fetchSingle({ response, params }){
        const post = await Post.findOrFail(params.id)

        response.ok({ post })
    }

    async create({ request, response }){
        const allParams = request.post()

        const validation = await validate(allParams, {
            title: 'required|string',
            thumbnail: 'string',
            content: 'required|string'
        })

        if(validation.fails()) return response.badRequest(validation.messages()) 

        const post = Post.create({
            title: allParams.title,
            thumbnail: allParams.thumbnail,
            content: allParams.content
        })

        response.ok({ post })
    }

    async edit({ request, response, params }){
        const post = await Post.findOrFail(params.id)

        const allParams = request.post()

        const validation = await validate(allParams, {
            title: 'required|string',
            thumbnail: 'string',
            content: 'required|string'
        })

        if(validation.fails()) return response.badRequest(validation.messages())

        post.merge({
            title: allParams.title,
            thumbnail: allParams.thumbnail,
            content: allParams.content
        })

        await post.save()

        response.ok({post})
    }

    async delete({ params }){
        const post = await Post.findOrFail(params.id)

        await post.delete()
    }
}

module.exports = PostController

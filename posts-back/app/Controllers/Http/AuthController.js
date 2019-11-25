'use strict'

const User = use("App/Models/User")
const query = use("Database").table('users')
const Hash = use('Hash')
const { validate, sanitize } = use('Validator')

class AuthController {
    async register({ request, response }) {
        const allParams = sanitize(request.post(), {
            email: 'normalize_email'
        })
        const validation = await validate(allParams, {
            username: 'required',
            email: 'required|email|unique:users,email',
            password: 'string|required'
        })
        if (validation.fails()) return response.badRequest(validation.messages())

        const user = await User.create({
            username: allParams.username,
            email: allParams.email,
            password: allParams.password
        })

        response.ok({ user })
    }

    async login({ request, response, auth}) {
        const allParams = sanitize(request.post(), {
            email: 'normalize_email'
        })
        const validation = await validate(allParams, {
            email: 'required|email',
            password: 'string|required',
        })
        if (validation.fails()) return response.badRequest(validation.messages())
        const user = await User.findBy('email', allParams.email)

        if (!user) return response.badRequest('auth.invalidPasswordOrEmail')

        const validPass = await Hash.verify(allParams.password, user.password)

        if (!validPass) return response.badRequest('auth.invalidPasswordOrEmail')

        const token = await this._generateUserTokens(auth, user)

        response.ok({
            user,
            token: token.token,
            refreshToken: token.refreshToken
        })
    }

    async _generateUserTokens(auth, user, customPayload) {

        return await auth
            .withRefreshToken()
            .generate(user, customPayload)
    }

    async me({user, response}){
        response.ok(user)
    }
}

module.exports = AuthController

'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

_requireRoutes('Post').prefix('api/post')
_requireRoutes('Auth').prefix('api/auth')

function _requireRoutes(group) {
  return require(`../app/Routes/${group}`)
}

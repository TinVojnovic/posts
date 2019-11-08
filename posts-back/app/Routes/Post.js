'use strict'

const Route = use('Route');

module.exports = Route.group(() => {

    Route.post('create','PostController.create')

    Route.get('fetch/:id','PostController.fetchSingle')

    Route.get('fetch','PostController.fetchAll')

    Route.put('edit/:id','PostController.edit')

    Route.delete('delete/:id','PostController.delete')
})
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

// routes to the front-end client
Route.post('/register', 'UserController.register')
Route.post('/login', 'UserController.login')

// routes to the client's front-end admin
Route.get('/admin/list-users', 'UserController.list')
Route.delete('admin/delete-user/:id', 'UserController.deleteUser')
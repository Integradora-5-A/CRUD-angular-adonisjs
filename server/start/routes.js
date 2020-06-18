'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.post('login', 'UserController.login')
  Route.post('register', 'UserController.register')
  Route.get('getusers/:id', 'UserController.show')
}).prefix('users')

//
Route.get('api/tasks', 'TaskController.index')
Route.post('api/task', 'TaskController.store')
Route.get('api/task', 'TaskController.index')
Route.get('api/task/:id', 'TaskController.show')
Route.put('api/task/:id', 'TaskController.update')
Route.delete('api/task/:id', 'TaskController.delete')

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
  Route.get('getusers/:id', 'UserController.show').middleware('auth')
}).prefix('users')

//
Route.get('api/tasks', 'TaskController.index').middleware('auth')
Route.post('api/task', 'TaskController.store').middleware('auth')
Route.get('api/task', 'TaskController.index').middleware('auth')
Route.get('api/task/:id', 'TaskController.show').middleware('auth')
Route.put('api/task/:id', 'TaskController.update').middleware('auth')
Route.delete('api/task/:id', 'TaskController.delete').middleware('auth')

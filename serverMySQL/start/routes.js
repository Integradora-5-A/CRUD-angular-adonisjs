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

Route.get('/', () => {
  return {greeting: 'Hello world in JSON'}
})

Route.post('emp/login', 'UserController.login')
Route.post('emp/register', 'UserController.register')
Route.get('emp/getuser/:id', 'UserController.show').middleware('auth')


Route.group(() => {
  Route.get('employees', 'EmployeeController.index')
  Route.post('employees', 'EmployeeController.store')
  Route.get('employees/:id', 'EmployeeController.show')
  Route.put('employees/:id', 'EmployeeController.update')
  Route.delete('employees/:id', 'EmployeeController.delete')
}).prefix('api').middleware('auth')

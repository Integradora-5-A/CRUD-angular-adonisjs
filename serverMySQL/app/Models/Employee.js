'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Employee extends Model {

  static get table() {
    return 'Employees';
  }

  static get primaryKey(){
    return 'id'
  }
}

module.exports = Employee

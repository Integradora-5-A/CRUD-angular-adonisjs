'use strict'

const Employee = use('App/Models/Employee')

class EmployeeController {

  async index({response}) {
    let employees = await Employee.all()
    return response.json(employees)
  }

  async store({request, response}) {
    const employeeinfo = request.only(['first_name', 'Last_name', 'Position'])
    const employee = new Employee()
    employee.first_name = employeeinfo.first_name
    employee.Last_name = employeeinfo.Last_name
    employee.Position = employeeinfo.Position
    await employee.save()
    return response.status(201).json(employee)
  }

  async show({params, response}) {
    const employee = await Employee.find(params.id)
    return response.json(employee)
  }

  async update({params, request, response}) {
    const employeeinfo = request.only(['first_name', 'Last_name', 'Position'])
    const employee = await Employee.find(params.id)
    if (!employee) {
      return response.status(404).json({data: 'Data not found'})
    }
    employee.first_name = employeeinfo.first_name
    employee.Last_name = employeeinfo.Last_name
    employee.Position = employeeinfo.Position
    await employee.save()
    return response.status(200).json(employee)
  }

  async delete({params, response}) {
    const employee = await Employee.find(params.id)
    if (!employee) {
      return response.status(404).json({data: 'Data not found'})
    }
    await employee.delete()
    return response.status(204).json({status: 'Employee deleted'})
  }
}

module.exports = EmployeeController

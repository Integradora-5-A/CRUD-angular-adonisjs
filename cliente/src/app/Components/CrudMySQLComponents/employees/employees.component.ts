import {Component, OnInit} from '@angular/core';
import {EmployeeService, Employee} from '../../../services/employee.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {
  employees: Employee[];
  editEmployee: Employee;

  constructor(private employeeService: EmployeeService, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(employees => (this.employees = employees));
  }

  add(first_name: string, Last_name: string, Position: string): void {
    this.editEmployee = undefined;
    first_name = first_name.trim();
    Last_name = Last_name.trim();
    Position = Position.trim();
    if (!first_name && !Last_name && !Position) {
      return;
    }
    const newEmployee: Employee = {first_name, Last_name, Position} as Employee;
    this.employeeService.addEmployee(newEmployee).subscribe(employee => this.employees.push(employee));
  }

  delete(employee: Employee): void {
    this.employees = this.employees.filter(h => h !== employee);
    this.employeeService
      .deleteEmployee(employee.id)
      .subscribe(() => console.log('Deleted'));
  }

  edit(employee) {
    this.editEmployee = employee;
  }

  update() {
    if (this.editEmployee) {
      this.employeeService.updateEmployee(this.editEmployee).subscribe(employee => {
        const ix = employee ? this.employees.findIndex(h => h.id === employee.id) : -1;
        if (ix > -1) {
          this.employees[ix] = employee;
        }
      });
      this.editEmployee = undefined;
    }
  }
}

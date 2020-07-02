import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('api/employees');
  }

  addEmployee(employee: Employee): Observable<Employee> {
    console.log(employee);
    return this.http.post<Employee>('api/employees', employee);
  }

  deleteEmployee(id: number): Observable<{}> {
    const url = `api/employees/${id}`;
    return this.http.delete(url);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    const url = `api/employees/${employee.id}`;
    return this.http.put<Employee>(url, employee);
  }
}

export interface Employee {
  id: number;
  first_name: string;
  Last_name: string;
  Position: string;
}

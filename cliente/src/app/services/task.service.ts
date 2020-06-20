import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {observable, Observable} from 'rxjs';
import {Task} from '../Components/CrudComponents/tasks/tasks.component';
import {catchError} from 'rxjs/operators';

@Injectable()
export class TaskService {
  constructor(private http: HttpClient) {
  }

  getTask(): Observable<Task[]> {
    return this.http
      .get<Task[]>('api/tasks');
  }

  addTask(task: Task): Observable<Task> {
    console.log(task);
    return this.http.post<Task>('api/task', task);
  }

  deleteTask(id: number): Observable<{}> {
    const url = `api/task/${id}`;

    return this.http.delete(url);
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`api/task/${task._id}`, task);
  }
}

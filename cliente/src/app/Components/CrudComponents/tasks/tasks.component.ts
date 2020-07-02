import {Component, OnInit} from '@angular/core';
import {TaskService} from '../../../services/task.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  providers: [TaskService],
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  editTask: Task;

  constructor(private taskService: TaskService, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTask().subscribe(tasks => (this.tasks = tasks));
  }

  add(task_name: string): void {
    this.editTask = undefined;
    task_name = task_name.trim();
    if (!task_name) {
      return;
    }

    const newTask: Task = {task_name} as Task;
    this.taskService.addTask(newTask).subscribe(task => this.tasks.push(task));
  }

  delete(task: Task): void {
    this.tasks = this.tasks.filter(h => h !== task);
    this.taskService
      .deleteTask(task._id)
      .subscribe(() => console.log('Task deleted'));
  }

  edit(task) {
    this.editTask = task;
  }

  update() {
    if (this.editTask) {
      this.taskService.updateTask(this.editTask).subscribe(task => {
        const ix = task ? this.tasks.findIndex(h => h._id === task._id) : -1;
        if (ix > -1) {
          this.tasks[ix] = task;
        }
      });
      this.editTask = undefined;
    }
  }
}

export interface Task {
  _id: number;
  task_name: string;
}

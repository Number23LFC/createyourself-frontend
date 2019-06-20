import { Component, OnInit } from '@angular/core';
import {Task} from '../model/Task';
import {Router} from '@angular/router';
import {TaskService} from '../service/task.service';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  tasks: Task[];
  categories: string[];
  editedTask: Task = { id: null, name: '', category: '', isDone: false };


  constructor(private  router: Router, private tasksService: TaskService) { }

  ngOnInit() {
    this.tasksService.getTasks().subscribe( data => {
      console.log(data);
      this.tasks = data;
      }
    );
    this.categories = ['Kariera', 'Zdrowie i wygląd', 'Finanse', 'Rodzina i relacje', 'Fun', 'Dom', 'Inne'];
  }

  addTask(category: string) {
    const newTask: Task = { id: this.editedTask.id, name: this.editedTask.name, isDone: this.editedTask.isDone, category: category };
    console.log('Dodaje TODO' + newTask.category  + ' ' + newTask.name);
    this.tasks.push(newTask);
    console.log('TODO list: ' + this.tasks);
    this.categories = this.categories;
  }

  toggleTaskComplete(task: Task) {
    console.log('TASK done: ' + task.name);
    task.isDone = true;
  }

  removeTodo(task: Task) {
    this.tasks.splice(task.id);
  }

  saveMonthPlan(): void {
    for (const task of this.tasks) {
      console.log('ZAPIS TASKA: ' + task.name);
      this.tasksService.createTask(task)
        .subscribe(data => {
          console.log('ZAPISUJE CEL:' + task.id + ' ' + task.name);
          console.log('DATA: ' + data.id);
        });
      this.router.navigate(['settings']);
    }
  }
}

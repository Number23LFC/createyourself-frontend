import { Component, OnInit } from '@angular/core';
import {Task} from '../model/Task';
import {Router} from '@angular/router';
import {TaskService} from '../service/task.service';
import {forEach} from '@angular/router/src/utils/collection';
import {MatCheckboxChange} from '@angular/material';

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
    this.editedTask.name = '';
    this.categories = this.categories;
  }

  toggleTaskComplete(task: Task, event: MatCheckboxChange) {
    console.log('TASK done: ' + task.name + ' ' + event.checked);
    task.isDone = event.checked;
  }

  removeTodo(task: Task) {
    console.log('remove task: ' + task.id + ' ' + task.name);
    this.tasksService.deleteTask(task.id).subscribe(
      data => {
        console.log('After remove: ' + data)
       this.tasksService.getTasks().subscribe( tasks => {
         this.tasks = tasks;
       },
         error1 => console.log(error1));
    },
    error => console.log(error));
    this.tasks.splice(task.id);
  }

  saveMonthPlan(): void {
    for (const task of this.tasks) {
      console.log('ZAPIS TASKA: ' + task.name + ' ' + task.isDone);
      this.tasksService.createTask(task)
        .subscribe(data => {
          console.log('DATA: ' + data.id);
        });
      this.router.navigate(['settings']);
    }
  }

  clearMonthPlan(): void {
    for (const task of this.tasks) {
      this.tasksService.deleteTask(task.id).subscribe(data =>
       console.log('SKASOWANO: ' + data)
      );
    }
      this.tasksService.getTasks().subscribe( tasks => {
          this.tasks = tasks;
        },
        error1 => console.log(error1));
    this.router.navigate(['settings']);
  }
}

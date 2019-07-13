import {Component, Injectable, OnInit} from '@angular/core';
import {Category} from '../model/Category';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../service/category.service';
import {Objective} from '../model/Objective';
import {ObjectiveService} from '../service/objective.service';
import {MatCheckboxChange, MatDatepickerInputEvent} from '@angular/material';
import {Todo} from '../model/Todo';
import {Task} from '../model/Task';

/**
 * Node for to-do item
 */
export class TodoItemNode {
  children: TodoItemNode[];
  item: string;
}

/** Flat to-do item node with expandable and level information */
export class TodoItemFlatNode {
  item: string;
  level: number;
  expandable: boolean;
}

/**
 * The Json object for to-do list data.
 */
const TREE_DATA = {
  Reminders: [
    'Cook dinner',
    'Read the Material Design spec',
    'Upgrade Application to Angular'
  ]
};

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}


@Component({
  selector: 'app-add-update-objective',
  templateUrl: './add-update-objective.component.html',
  styleUrls: ['./add-update-objective.component.css']
})
export class AddUpdateObjectiveComponent implements OnInit {

  categories: Category[];

  objective: Objective = {
    description: '',
    name: '',
    category: { id: null, name: '', description: '', objectives: null},
    todos: [],
    id: null,
    isDone: false,
    eventDate: new Date(),
  };

  editedTodo: Todo = { id: null, name: '', isDone: false };
  objectiveId: number;
  idStr: string;
  selectedFiles: FileList;
  currentFileUpload: File;

  constructor(private router: Router, private objectiveService: ObjectiveService, private  categoryService: CategoryService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.categoryService.getCategories()
      .subscribe( data => {
        console.log(data);
        console.log(typeof data);
        this.categories = data;
      });

    this.idStr =  this.activeRoute.snapshot.paramMap.get('id');
    if (this.idStr != null) {
      this.objectiveId = Number(this.activeRoute.snapshot.paramMap.get('id'));
      console.log('HR23: Edytuje date o id: ' + this.activeRoute.snapshot.paramMap.get('id'));
      this.objectiveService.getObjectiveById(this.objectiveId).subscribe(data => {
          this.objective = data;
        }
      );
    }
  }

  createObjective(): void {
    this.objectiveService.createObjective(this.objective)
      .subscribe( data => {
        console.log('ZAPISUJE CEL:' + this.objective.id + 'data: ' +  this.objective.eventDate);
        console.log('DATA: ' + data.id);
        if (this.selectedFiles != null) {
        this.currentFileUpload = this.selectedFiles.item(0);
        this.objectiveService.uploadImage(data.id, this.currentFileUpload).subscribe(
          (res) => {
            this.router.navigate(['objectives']);
          },
          (err) => {
            this.router.navigate(['objectives']);
          });
        }
        this.router.navigate(['objectives']);
      });
  }

  categoryChange() {
     console.log('CAT CHANGE NAME: ' + this.objective.category.name);
  }

  updateDate(event: MatDatepickerInputEvent<Date>) {
    this.objective.eventDate = event.value;
  }

  processFile(objective: Objective, event: any) {
    this.selectedFiles = event.target.files;
    console.log('processFile id: ' + objective.id);
    console.log('processFile foto: ' + event.target.files);
  }

  addTodo() {
    const newTodo: Todo = { id: this.editedTodo.id, name: this.editedTodo.name, isDone: this.editedTodo.isDone};
    console.log('Dodaje TODO' + newTodo);
    this.objective.todos.push(newTodo);
    console.log('TODO list: ' + this.objective.todos[0].name);
    this.editedTodo.name = '';
  }

  toggleTodoComplete(todo: Todo, event: MatCheckboxChange) {
    console.log('TODO done: ' + todo.name + ' ' + event.checked);
    todo.isDone = event.checked;
  }

  removeTodo(todo: Todo) {
    console.log('REMOVE todo: ' + todo.id + ' ' + todo.name + ' ' + todo.isDone);
    this.objective.todos = this.objective.todos.filter(function( obj ) {
      return obj.name !== todo.name;
    });
  }
}

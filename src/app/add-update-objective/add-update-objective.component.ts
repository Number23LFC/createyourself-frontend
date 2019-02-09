import {Component, Injectable, OnInit} from '@angular/core';
import {Category} from '../model/Category';
import {Router} from '@angular/router';
import {CategoryService} from '../service/category.service';
import {Objective} from '../model/Objective';
import {ObjectiveService} from '../service/objective.service';

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
    todos: null,
    id: null,
    isDone: false,
    eventDate: new Date(),
  };

  constructor(private router: Router, private objectiveService: ObjectiveService, private  categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories()
      .subscribe( data => {
        console.log(data);
        console.log(typeof data);
        this.categories = data;
      });
  }

  createObjective(): void {
    this.objectiveService.createObjective(this.objective)
      .subscribe( data => {
        alert('Objective created successfully.');
      });
    this.router.navigate(['objectives']);
  }

  categoryChange() {
     console.log('CAT CHANGE NAME: ' + this.objective.category.name);
  }
}

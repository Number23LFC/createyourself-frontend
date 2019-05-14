import {Component, Injectable, OnInit} from '@angular/core';
import {Category} from '../model/Category';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../service/category.service';
import {Objective} from '../model/Objective';
import {ObjectiveService} from '../service/objective.service';
import {MatDatepickerInputEvent} from '@angular/material';

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
    todos: null,
    id: null,
    isDone: false,
    eventDate: new Date(),
  };

  objectiveId: number;
  idStr: string;
  selectedFile: ImageSnippet;


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
      });
    this.router.navigate(['objectives']);
  }

  categoryChange() {
     console.log('CAT CHANGE NAME: ' + this.objective.category.name);
  }

  updateDate(event: MatDatepickerInputEvent<Date>) {
    this.objective.eventDate = event.value;
  }

  processFile(id: number, imageInput: any) {
    console.log('id: ' + id);
  }
}

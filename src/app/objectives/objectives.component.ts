import { Component, OnInit } from '@angular/core';
import {Category} from '../model/Category';
import {Router} from '@angular/router';
import {CategoryService} from '../service/category.service';
import {Objective} from '../model/Objective';
import {ObjectiveService} from '../service/objective.service';

@Component({
  selector: 'app-objectives',
  templateUrl: './objectives.component.html',
  styleUrls: ['./objectives.component.css']
})
export class ObjectivesComponent implements OnInit {

  objectives: Objective[];
  categories: Category[];
  selected: String;
  editedObjective: Objective;

  constructor(private router: Router, private objectiveService: ObjectiveService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.objectiveService.getObjectives()
      .subscribe( data => {
        console.log(data);
        console.log(typeof data);
        this.objectives = data;
      });
    this.categoryService.getCategories().subscribe(
      categories => {
        console.log(categories);
        this.categories = categories;
      }
    );
  }

  categoryChange() {
    if (this.selected === 'all') {
      this.objectiveService.getObjectives()
        .subscribe( data => {
          console.log(data);
          console.log(typeof data);
          this.objectives = data;
        });
    } else {
    this.objectiveService.getObjectivesByCategoryName(this.selected)
      .subscribe( data => {
        console.log('CATEGORY: ' + this.selected);
        console.log(typeof data);
        this.objectives = data;
      });
    }
  }

  markObjectiveAsDone(id: number) {
    this.objectiveService.markObjectiveAsDone(id).subscribe( objective => {
        this.editedObjective = objective;
      console.log('ZROBIONE!: ' + this.editedObjective.name);
      console.log('ZROBIONE!: ' + this.editedObjective.isDone);
      console.log('ZROBIONE!: ' + typeof this.editedObjective.isDone);
    });
  }


  editObjective(id: number) {
    this.router.navigate(['objective-add-update/' + id]);
  }

  calculateProgress(objective: Objective): number {
    const allTodos = objective.todos.length;
    const done = objective.todos.filter(p => p.isDone).length;
    console.log('HR23: Wszystkich: ' + allTodos + ', zrobione: ' + done + 'Zrobione%: ' + (done / allTodos));
    if ((done / allTodos) === 1) {
       this.markObjectiveAsDone(objective.id);
    }
    return (done / allTodos) * 100;
  }
}

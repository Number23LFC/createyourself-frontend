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
  selected: Category;

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
    this.objectiveService.getObjectivesByCategoryName(this.selected.name)
      .subscribe( data => {
        console.log(data);
        console.log(typeof data);
        this.objectives = data;
      });
  }

}

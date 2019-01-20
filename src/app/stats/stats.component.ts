import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ObjectiveService} from '../service/objective.service';
import {CategoryService} from '../service/category.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  color = 'primary';
  mode = 'determinate';
  value = 50;
  all = 0;
  todo = 0;
  done = 0;
  constructor(private router: Router, private objectiveService: ObjectiveService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.objectiveService.getDoneObjectivesCount().subscribe( data => {
      console.log(data);
      this.value = data;
    });

    this.objectiveService.getAllObjectivesCount().subscribe( data => {
      console.log(data);
      this.all = data;
      this.done = this.all - this.todo;
    });

    this.objectiveService.getTodoObjectivesCount().subscribe( data => {
      console.log(data);
      this.todo = data;
      this.done = this.all - this.todo;
    });
  }
}

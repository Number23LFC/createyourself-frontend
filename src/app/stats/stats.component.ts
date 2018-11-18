import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  color = 'primary';
  mode = 'determinate';
  value = 50;
  constructor() { }

  ngOnInit() {
  }

}

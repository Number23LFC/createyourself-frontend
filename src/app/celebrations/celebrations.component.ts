import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CelebrationService} from '../service/celebration.service';
import {Celebration} from '../model/Celebration';

@Component({
  selector: 'app-celebrations',
  templateUrl: './celebrations.component.html',
  styleUrls: ['./celebrations.component.css']
})
export class CelebrationsComponent implements OnInit {

  celebrations: Celebration[];

  constructor(private router: Router, private celebrationService: CelebrationService) { }

  ngOnInit() {
    this.celebrationService.getCelebrations()
      .subscribe( data => {
        console.log(data);
        console.log(typeof data);
        this.celebrations = data;
      });
  }

}

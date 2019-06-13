import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CelebrationService} from '../service/celebration.service';
import {Celebration} from '../model/Celebration';
import {CategoryService} from '../service/category.service';

@Component({
  selector: 'app-add-update-celebration',
  templateUrl: './add-update-celebration.component.html',
  styleUrls: ['./add-update-celebration.component.css']
})
export class AddUpdateCelebrationComponent implements OnInit {
  celebration: Celebration = {
    description: '',
    date: null,
    id: null,
    isDone: false
  };
  celebrationId: number;
  idStr: string;

  constructor(private router: Router, private celebrationService: CelebrationService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.idStr =  this.activeRoute.snapshot.paramMap.get('id');
    if (this.idStr != null) {
      this.celebrationId = Number(this.activeRoute.snapshot.paramMap.get('id'));
      console.log('HR23: Edytuje date o id: ' + this.activeRoute.snapshot.paramMap.get('id'));
      this.celebrationService.findCelebrationById(this.celebrationId).subscribe(data => {
          this.celebration = data;
        }
      );
    }
  }

  createCelebration(): void {
    this.celebrationService.createCelebration(this.celebration)
      .subscribe( data => {
        console.log('ZAPISUJE DATE: ' + this.celebration.id);
      });
    this.router.navigate(['celebrations']);
  }
}

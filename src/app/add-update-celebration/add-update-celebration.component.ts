import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CelebrationService} from '../service/celebration.service';
import {Celebration} from '../model/Celebration';

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
  };

  constructor(private router: Router, private celebrationService: CelebrationService) { }

  ngOnInit() {
  }

  createCelebration(): void {
    this.celebrationService.createCelebration(this.celebration)
      .subscribe( data => {
        alert('Celebration created successfully.');
      });
    this.router.navigate(['celebrations']);
  }
}

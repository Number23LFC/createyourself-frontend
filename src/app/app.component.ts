import { Component } from '@angular/core';
import {DateAdapter} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'create-yourself';

  constructor(private adapter: DateAdapter<any>) {
    this.adapter.setLocale('pl');
  }
}



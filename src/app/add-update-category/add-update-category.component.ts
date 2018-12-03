import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Category} from '../model/Category';
import {CategoryService} from '../service/category.service';

@Component({
  selector: 'app-add-update-category',
  templateUrl: './add-update-category.component.html',
  styleUrls: ['./add-update-category.component.css']
})
export class AddUpdateCategoryComponent implements OnInit {
  category: Category = {
    description: '',
    name: '',
    id: null,
    objectives: null
  };

  constructor(private router: Router, private categoryService: CategoryService) { }

  ngOnInit() {
  }

  createCelebration(): void {
    this.categoryService.createCategory(this.category)
      .subscribe( data => {
        alert('Category created successfully.');
      });
    this.router.navigate(['categories']);
  }
}

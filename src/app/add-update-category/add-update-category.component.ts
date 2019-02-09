import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
  categoryId: number;
  idStr: string;

  constructor(private router: Router, private categoryService: CategoryService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.idStr =  this.activeRoute.snapshot.paramMap.get('id');
    if (this.idStr != null) {
      this.categoryId = Number(this.activeRoute.snapshot.paramMap.get('id'));
      console.log('HR23: Edytuje kategorie o id: ' + this.activeRoute.snapshot.paramMap.get('id'));
      this.categoryService.findCategoryById(this.categoryId).subscribe(data => {
          this.category = data;
        }
      );
    }
  }
  createCategory(): void {
    this.categoryService.createCategory(this.category)
      .subscribe( data => {
        alert('Category created successfully.');
      });
    this.router.navigate(['categories']);
  }
}

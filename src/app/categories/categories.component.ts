import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Category} from '../model/Category';
import {CategoryService} from '../service/category.service';
import {Celebration} from "../model/Celebration";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];

  constructor(private router: Router, private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories()
      .subscribe( data => {
        console.log(data);
        console.log(typeof data);
        this.categories = data;
      });
  }
  editCategory(id: number) {
    this.router.navigate(['categories-add-update/' + id]);
  }

  deleteCategory(category: Category) {
    this.categoryService.deleteCategory(category.id)
      .subscribe(
        data => {
          console.log(data);
          this.categoryService.getCategories().subscribe( cats => {
              this.categories = cats;
            },
            error1 => console.log(error1));
        },
        error => console.log(error));
  }

}

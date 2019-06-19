import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { StatsComponent } from './stats/stats.component';
import { CategoriesComponent } from './categories/categories.component';
import { SettingsComponent } from './settings/settings.component';
import { ObjectivesComponent } from './objectives/objectives.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateUpdateCategoryComponent } from './create-update-category/create-update-category.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDatepickerModule, MatDividerModule, MatGridListModule,
  MatIconModule,
  MatInputModule, MatListModule,
  MatMenuModule,
  MatNativeDateModule, MatProgressBarModule,
  MatSelectModule, MatTreeModule
} from '@angular/material';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import {CelebrationService} from './service/celebration.service';
import {HttpClientModule} from '@angular/common/http';
import { AddUpdateCelebrationComponent } from './add-update-celebration/add-update-celebration.component';
import {FormsModule} from '@angular/forms';
import {CategoryService} from './service/category.service';
import {ObjectiveService} from './service/objective.service';
import { AddUpdateObjectiveComponent } from './add-update-objective/add-update-objective.component';
import { AddUpdateCategoryComponent } from './add-update-category/add-update-category.component';
import {ArraySortPipe} from './pipe/sort-pipe';
import {TaskService} from './service/task.service';
import {FilterPipe} from './pipe/filter-pipe';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    StatsComponent,
    CategoriesComponent,
    SettingsComponent,
    ObjectivesComponent,
    CreateUpdateCategoryComponent,
    CelebrationsComponent,
    AddUpdateCelebrationComponent,
    AddUpdateObjectiveComponent,
    AddUpdateCategoryComponent,
    ArraySortPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatIconModule,
    MatMenuModule,
    MatCheckboxModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    MatProgressBarModule,
    MatTreeModule
  ],
  providers: [CelebrationService, CategoryService, ObjectiveService,  MatDatepickerModule, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }

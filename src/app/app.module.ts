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



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    StatsComponent,
    CategoriesComponent,
    SettingsComponent,
    ObjectivesComponent,
    CreateUpdateCategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

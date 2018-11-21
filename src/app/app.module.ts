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
import { MatCheckboxModule, MatIconModule, MatMenuModule, MatSelectModule} from '@angular/material';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import {CelebrationService} from './service/celebration.service';
import {HttpClientModule} from '@angular/common/http';



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
    HttpClientModule
  ],
  providers: [CelebrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

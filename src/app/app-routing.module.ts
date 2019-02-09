import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SettingsComponent} from "./settings/settings.component";
import {CategoriesComponent} from "./categories/categories.component";
import {StatsComponent} from './stats/stats.component';
import {ObjectivesComponent} from './objectives/objectives.component';
import {CelebrationsComponent} from './celebrations/celebrations.component';
import {AddUpdateCelebrationComponent} from './add-update-celebration/add-update-celebration.component';
import {AddUpdateObjectiveComponent} from './add-update-objective/add-update-objective.component';
import {AddUpdateCategoryComponent} from './add-update-category/add-update-category.component';
const appRoutes: Routes = [
  {path: 'objectives', component: ObjectivesComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'celebrations', component: CelebrationsComponent},
  {path: 'celebrations-add-update', component: AddUpdateCelebrationComponent},
  {path: 'celebrations-add-update/:id', component: AddUpdateCelebrationComponent},
  {path: 'objective-add-update', component: AddUpdateObjectiveComponent},
  {path: 'objective-add-update/:id', component: AddUpdateObjectiveComponent},
  {path: 'categories-add-update', component: AddUpdateCategoryComponent},
  {path: 'categories-add-update/:id', component: AddUpdateCategoryComponent},
  {path: 'stats', component: StatsComponent, pathMatch: 'full'},
  {path: '', component: StatsComponent, pathMatch: 'full'},
  //{path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

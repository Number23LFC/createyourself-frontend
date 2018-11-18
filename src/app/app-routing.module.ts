import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SettingsComponent} from "./settings/settings.component";
import {CategoriesComponent} from "./categories/categories.component";
import {StatsComponent} from './stats/stats.component';
import {ObjectivesComponent} from './objectives/objectives.component';
const appRoutes: Routes = [
  {path: 'objectives', component: ObjectivesComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'stats', component: StatsComponent, pathMatch: 'full'},
  {path: '', component: StatsComponent, pathMatch: 'full'},
  //{path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

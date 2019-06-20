import { Pipe, PipeTransform } from '@angular/core';
import {Objective} from '../model/Objective';
import {Category} from '../model/Category';

@Pipe({
  name: 'sortByCategory'
})
export class SortByCategoryPipe  implements PipeTransform {
  transform(objectives: Objective[], category: Category): any[] {
    objectives.sort((a: Objective, b: Objective) => {
      if (a.category.name < b.category.name) {
        return 1;
      } else if (a.category.name > b.category.name) {
        return -1;
      } else {
        return 0;
      }
    });
    return objectives;
  }
}

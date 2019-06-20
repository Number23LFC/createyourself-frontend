import { Pipe, PipeTransform } from '@angular/core';
import {Task} from '../model/Task';
import {takeWhile} from 'rxjs/internal/operators';

@Pipe({
  name: 'filter',
  pure: false
})

export class FilterPipe implements PipeTransform {
  transform(allTasks: Task[], category: string) {
    console.log('FILTER BY CATEGORY: ' + category);
    const tasksByCategory = [];
    for (const task of allTasks) {
      console.log(typeof task.category + ' ' + typeof category);
      console.log(typeof task.category.length + ' ' + category.length);
      if (task.category === category) {
        tasksByCategory.push(task);
      }
    }
    console.log('FILTER RESULT: ' + tasksByCategory);
    return tasksByCategory;
  }
}

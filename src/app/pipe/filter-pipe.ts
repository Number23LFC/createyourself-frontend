import { Pipe, PipeTransform } from '@angular/core';
import {Task} from '../model/Task';
import {takeWhile} from 'rxjs/internal/operators';

@Pipe({
  name: 'filter',
  pure: false
})

export class FilterPipe implements PipeTransform {
  transform(allTasks: Task[], category: string) {
    const tasksByCategory = [];
    for (const task of allTasks) {
      if (task.category === category) {
        tasksByCategory.push(task);
      }
    }
    return tasksByCategory;
  }
}

import {Category} from './Category';
import {Todo} from './Todo';

export interface Objective {
  id: number;
  description: string;
  name: string;
  category: Category;
  todos: Todo[];
}

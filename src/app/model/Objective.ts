import {Category} from './Category';

export interface Objective {
  id: number;
  description: string;
  name: string;
  category: Category;
}

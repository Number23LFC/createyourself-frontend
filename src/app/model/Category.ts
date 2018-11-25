import {Objective} from './Objective';

export interface Category {
  id: number;
  description: string;
  name: string;
  objectives: Objective[];
}

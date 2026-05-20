import { Category } from '../enum/category';

export interface IRecipe {
  id: number;
  name: string;
  category: Category;
  image?: string;
  description?: string;
  ingredients: string[];
  serving?: number;
  prepareTime: number;
  rating?: number;
  isFavourite?: boolean;
}

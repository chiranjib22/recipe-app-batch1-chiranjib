import { Component } from '@angular/core';
import { RecipeCard } from '../recipe-card/recipe-card';
import { IRecipe } from '../models/recipe.model';
import { RecipeService } from '../services/recipe-service';
import { Category } from '../enum/category';

@Component({
  selector: 'recipe-app-home',
  imports: [RecipeCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  recipes!: IRecipe[];
  selectedCategory: string = '';
  categories: any;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
    this.categories = Object.values(Category);
  }

  filterByCategory() {
    return this.selectedCategory == ''
      ? this.recipes.slice()
      : this.recipes.filter((item: IRecipe) => item.category == this.selectedCategory);
  }

  AddToFavourite(recipe: IRecipe) {
    this.recipeService.addToFavourites(recipe);
  }
}

import { Injectable } from '@angular/core';
import { IRecipe } from '../models/recipe.model';
import { Category } from '../enum/category';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipes: IRecipe[] = [
    {
      id: 1,
      name: 'Classic Pancakes',
      category: Category.Breakfast,
      image: 'photo-classic-pancakes.webp',
      description: 'Fluffy and delicious classic pancakes served with maple syrup.',
      ingredients: ['Flour', 'Milk', 'Eggs', 'Sugar', 'Baking Powder', 'Butter'],
      serving: 2,
      prepareTime: 20,
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Avocado Toast',
      category: Category.Breakfast,
      image: 'photo-avocado-toast.avif',
      description: 'Healthy and quick avocado toast with a hint of lemon and chili flakes.',
      ingredients: ['Bread', 'Avocado', 'Lemon Juice', 'Chili Flakes', 'Salt', 'Pepper'],
      serving: 1,
      prepareTime: 10,
      rating: 4.8,
    },
    {
      id: 3,
      name: 'Grilled Chicken Salad',
      category: Category.Lunch,
      image: 'photo-grilled-chicken-salad.avif',
      description: 'A fresh mixed greens salad topped with juicy grilled chicken breast.',
      ingredients: [
        'Chicken Breast',
        'Mixed Greens',
        'Cherry Tomatoes',
        'Cucumber',
        'Olive Oil',
        'Balsamic Vinegar',
      ],
      serving: 2,
      prepareTime: 25,
      rating: 4.2,
    },
    {
      id: 4,
      name: 'Spaghetti Bolognese',
      category: Category.Dinner,
      image: 'photo-spaghetti-bolognese.avif',
      description: 'Rich and hearty traditional Italian pasta dish.',
      ingredients: [
        'Spaghetti',
        'Ground Beef',
        'Tomato Sauce',
        'Onion',
        'Garlic',
        'Parmesan Cheese',
      ],
      serving: 4,
      prepareTime: 45,
      rating: 4.7,
    },
    {
      id: 5,
      name: 'Beef Stir-Fry',
      category: Category.Dinner,
      image: 'photo-beef-stir-fry.avif',
      description: 'Quick and flavorful beef stir-fry with mixed vegetables.',
      ingredients: ['Beef Strips', 'Broccoli', 'Bell Peppers', 'Soy Sauce', 'Ginger', 'Garlic'],
      serving: 3,
      prepareTime: 30,
      rating: 4.4,
    },
    {
      id: 6,
      name: 'Chocolate Lava Cake',
      category: Category.Dessert,
      image: 'photo-chocolate-lava-cake.avif',
      description: 'Decadent chocolate cake with a gooey, molten center.',
      ingredients: ['Dark Chocolate', 'Butter', 'Eggs', 'Sugar', 'Flour'],
      serving: 2,
      prepareTime: 25,
      rating: 4.9,
    },
    {
      id: 7,
      name: 'Fruit Smoothie',
      category: Category.Snacks,
      image: 'photo-fruit-smoothie.avif',
      description: 'Refreshing mixed berry and banana smoothie.',
      ingredients: ['Mixed Berries', 'Banana', 'Greek Yogurt', 'Honey', 'Almond Milk'],
      serving: 1,
      prepareTime: 5,
      rating: 4.6,
    },
    {
      id: 8,
      name: 'Caprese Sandwich',
      category: Category.Lunch,
      image: 'photo-caprese-Sandwich.avif',
      description: 'Classic Italian sandwich with fresh mozzarella, tomatoes, and basil.',
      ingredients: [
        'Ciabatta Bread',
        'Fresh Mozzarella',
        'Tomatoes',
        'Fresh Basil',
        'Balsamic Glaze',
      ],
      serving: 1,
      prepareTime: 15,
      rating: 4.3,
    },
    {
      id: 9,
      name: 'Nachos Supreme',
      category: Category.Snacks,
      image: 'photo-fruit-smoothie.avif',
      description: 'Loaded nachos with cheese, jalapeños, beans, and salsa.',
      ingredients: [
        'Tortilla Chips',
        'Cheddar Cheese',
        'Jalapeños',
        'Black Beans',
        'Salsa',
        'Sour Cream',
      ],
      serving: 4,
      prepareTime: 15,
      rating: 4.5,
    },
    {
      id: 10,
      name: 'Cheesecake',
      category: Category.Dessert,
      image: 'photo-cheesecake.avif',
      description: 'Creamy New York style cheesecake with a graham cracker crust.',
      ingredients: [
        'Cream Cheese',
        'Graham Crackers',
        'Sugar',
        'Butter',
        'Eggs',
        'Vanilla Extract',
      ],
      serving: 8,
      prepareTime: 60,
      rating: 4.8,
    },
  ];
  Favourites: IRecipe[] = [];
  getRecipes(): IRecipe[] {
    return this.recipes;
  }
  // getRecipeById(id: number): IRecipe | undefined { }
  addToFavourites(recipe: IRecipe): void {
    this.Favourites.push(recipe);
    console.log(this.Favourites);
  }
  getFavourites(): IRecipe[] {
    return this.Favourites;
  }
  // isInFavourites(id: number): boolean { }
}

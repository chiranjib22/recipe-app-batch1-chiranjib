import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IRecipe } from '../models/recipe.model';

@Component({
  selector: 'recipe-app-recipe-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-card.html',
  styleUrl: './recipe-card.scss',
})
export class RecipeCard {
  starsArray: any;
  imgError = false;
  @Input({ required: true }) recipe!: IRecipe;
  @Output() AddToFavourite = new EventEmitter<IRecipe>();

  toggleFavourite(recipe: IRecipe) {
    recipe.isFavourite = true;
    this.AddToFavourite.emit(recipe);
  }

  onImgError() {
    this.imgError = true;
  }
}

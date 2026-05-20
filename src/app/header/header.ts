import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RecipeService } from '../services/recipe-service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'recipe-app-header',
  imports: [RouterLink, RouterLinkActive, NgIf],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  constructor(private recipeService: RecipeService) {}

  get favouriteCount(): number {
    return this.recipeService.getFavourites().length;
  }
}

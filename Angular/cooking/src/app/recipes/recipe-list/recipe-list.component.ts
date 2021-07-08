import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Mouse Cake',
      'Chocolate cake shaped like a mouse',
      'https://thesoccermomblog.com/wp-content/uploads/2016/05/Minnie-Mouse-Birthday-Cake-4-2.jpg'
    ),
    new Recipe(
      'Mouse Cake',
      'Chocolate cake shaped like a mouse',
      'https://thesoccermomblog.com/wp-content/uploads/2016/05/Minnie-Mouse-Birthday-Cake-4-2.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}

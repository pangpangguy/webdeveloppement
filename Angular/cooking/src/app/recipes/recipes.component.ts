import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    //Listen to any changes to the recipeSelected event in the service,
    //which will be emitted by recipe-item component when a recipe is
    //clicked
  }
}

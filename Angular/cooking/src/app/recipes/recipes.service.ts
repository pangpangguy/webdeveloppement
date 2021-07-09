import { Recipe } from './recipe.model';
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Mouse Cake',
      'Chocolate cake shaped like a mouse',
      'https://thesoccermomblog.com/wp-content/uploads/2016/05/Minnie-Mouse-Birthday-Cake-4-2.jpg'
    ),
    new Recipe(
      'Dungeon Cake',
      'Dungeon-like chocolate cake shaped like a mouse, but spicier and butter!',
      'https://thesoccermomblog.com/wp-content/uploads/2016/05/Minnie-Mouse-Birthday-Cake-4-2.jpg'
    ),
  ];

  getRecipes() {
    //Returns a copy of the recipes (therefore wont be modified)
    return this.recipes.slice();
  }
}

import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Creamy Rocher Chocolate Cake',
      'Creamy and buttery chocolate cake, filled with ferroro rocher fillings, topped with almond nuts for that crunchy flavor',
      'https://cac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcac.2F2018.2F09.2F25.2Fdd531877-15aa-451b-888d-25cfbb2d89a7.2Ejpeg/750x562/quality/80/crop-from/center/cr/wqkgU3lsIGQgQUIvU3VjcsOpIHNhbMOpIC8gQ3Vpc2luZSBBY3R1ZWxsZQ%3D%3D/american-chocolate-cake.jpeg',
      [new Ingredient('Milk', 5), new Ingredient('Almond nuts', 3)]
    ),
    new Recipe(
      'Southern Pimento Cheese',
      'Tangy, creamy, and with a hint of spice. Serve it with crackers for dipping, or smear on toast points for a fancier presentation',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2016%2F10%2F24%2Fsouthern-pimento-cheese-photo-by-holiday-baker-645301.jpg',
      [
        new Ingredient('Cream Cheese', 8),
        new Ingredient('Cheddar Cheese', 4),
        new Ingredient('Mayonnaise', 5),
        new Ingredient('Pimento', 6),
      ]
    ),
  ];
  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    //Returns a copy of the recipes (therefore wont be modified)
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }
}

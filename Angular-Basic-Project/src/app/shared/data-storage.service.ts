import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import 'rxjs/add/operator/map';

@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipeService) { }

  storeRecipes() {
    return this.http.put('https://angular-udemy-course.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  getRecipes() {
    // when we delete all ingredients and save the recipe to the firebase
    // the ingredient field will be empty
    // this will cause errors when try to add ingredients again when the recipe
    // is retrieved again, so we used map to transform the data to get new array for recipe[ingredient]
    return this.http.get('https://angular-udemy-course.firebaseio.com/recipes.json')
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      ).
      subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
    );
  }

}

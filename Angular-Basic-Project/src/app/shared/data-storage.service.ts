import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import 'rxjs/add/operator/map';
import {AuthService} from '../auth/auth.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataStorageService {

  constructor(private httpClient: HttpClient, private recipeService: RecipeService, private authService: AuthService) { }

  storeRecipes() {
    const token = this.authService.getToken();

    return this.httpClient.put('https://angular-udemy-course.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
  }

  getRecipes() {
    const token = this.authService.getToken();

    // when we delete all ingredients and save the recipe to the firebase
    // the ingredient field will be empty
    // this will cause errors when try to add ingredients again when the recipe
    // is retrieved again, so we used map to transform the data to get new array for recipe[ingredient]
    return this.httpClient.get<Recipe[]>('https://angular-udemy-course.firebaseio.com/recipes.json?auth=' + token)
      .map(
        (recipes) => {
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

import { Injectable } from '@angular/core';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';

@Injectable()
export class DataStorageService {

  constructor(private httpClient: HttpClient, private recipeService: RecipeService) { }

  storeRecipes() {
    // just an example of how to set the header
    // const header = new HttpHeaders().set('Authorization', 'Bearer asdqwdqwd');

    // return this.httpClient.put('https://angular-udemy-course.firebaseio.com/recipes.json',
    //   this.recipeService.getRecipes(),
    //   {observe: 'body', params: new HttpParams().set('auth', token)});

    // to add a header
    // {observe: 'body', headers: header});

    // only this kind of request can be used to see the progress of a request
    const request = new HttpRequest('PUT', 'https://angular-udemy-course.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(),
      {reportProgress: true});

    return this.httpClient.request(request);
  }

  getRecipes() {

    // when we delete all ingredients and save the recipe to the firebase
    // the ingredient field will be empty
    // this will cause errors when try to add ingredients again when the recipe
    // is retrieved again, so we used map to transform the data to get new array for recipe[ingredient]
    // this.httpClient.get<Recipe[]>('https://angular-udemy-course.firebaseio.com/recipes.json?auth=' + token)
    this.httpClient.get<Recipe[]>('https://angular-udemy-course.firebaseio.com/recipes.json', {
      observe: 'body',
      responseType: 'json'
    })
      .map(
        (recipes) => {
          console.log(recipes);
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

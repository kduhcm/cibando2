import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RECIPES } from '../mocks/recipes.mock';
import { find, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  apiBaseUrl = 'api/recipes';

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    //return of (RECIPES);  // of sarebbe come dire mock<RECIPES>

    return this.http.get<Recipe[]>(`${this.apiBaseUrl}/`);
  }

  getRecipe(id: number): Observable<Recipe>
  {
    const recipe = RECIPES.find(r => r._id === id);

    const ofRecipe = of(recipe); // of lo trasforma in Observable<Recipe>

    return ofRecipe;
  }
}

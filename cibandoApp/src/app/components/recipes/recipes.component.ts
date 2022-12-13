import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  ricette: Recipe[];

  // viene eseguito prima dell'onInit. Ci vanno i servizi
constructor(private rs: RecipeService){
  //console.log('questo è il costruttore');
}

// istruzioni da eseguire quando viene instanziato il componente
ngOnInit(): void {
  //console.log('questo è OnInit');

  this.rs.getRecipes().subscribe({
    next: (res) => {
      this.ricette = res;
    },
    error: (errore) => {
      console.log(errore);
    }
  }); // mi sottoscrivo al metodo osservabile


}
}

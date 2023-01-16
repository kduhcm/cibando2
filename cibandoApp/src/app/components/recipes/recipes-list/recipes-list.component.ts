import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit{

  ricette: Recipe[];

  messaggioRicevuto: string;

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

  riceviMsg(e: any) {
    //console.log(e);
    if(e === this.messaggioRicevuto)
    {
      // toggle
      this.messaggioRicevuto='';
    }
    else {
      this.messaggioRicevuto=e;
    }

  }
}

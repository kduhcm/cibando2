import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  ricette: Recipe[];

  //images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  evidenziato = false;
  onEvidenziato() {
    this.evidenziato = !this.evidenziato;
  }

  constructor(private recipeService : RecipeService) {}

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(
      {
        next: (res) => {
          this.ricette = res;
          this.ricette = this.ricette.sort((a,b) => b._id - a._id).slice(0,4); // ordina per id descending e prendo 4 ricette
        },
        error: (e) => {
          console.log(e);
        }
      }
    )
  }
}

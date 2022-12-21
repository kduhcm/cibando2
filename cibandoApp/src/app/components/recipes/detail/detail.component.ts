import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  ricetta: Recipe;
  percorsoStelline = "../../../../assets/images/difficolta-";

  constructor(private recipeService: RecipeService,
              private activatedRouted: ActivatedRoute,
              private router: Router){}

  ngOnInit(): void {
    this.onGetRecipe();
    //this.onGetRecipe2();
  }

  // metodo che recuper l'id dall'url
  onGetRecipe(): void {
    const id = this.activatedRouted.snapshot.paramMap.get('_id');  // _id e' definito in app-routing
    const idNumber = Number(id);

    if (idNumber) {
      this.recipeService.getRecipe(idNumber).subscribe({
        next: (res)  => {
          this.ricetta = res;
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
  }

  // altro metodo che recuper l'id dall'url in un modo alternativo
  onGetRecipe2(): void {
    this.activatedRouted.params.subscribe(
      (urlparams) => {
        const id = urlparams['_id'];
        const idNumber = Number(id);

        this.recipeService.getRecipe(id).subscribe({
          next: (res)  => {
            this.ricetta = res;
          },
          error: (err) => {
            console.log(err);
          }
        })
      }
    )
  }
}

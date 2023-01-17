import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent {
  page=1;
  ricettePerPagina=4;

 @Input() recipes: Recipe[];
 @Input() pag: string;

 @Output() messaggio = new EventEmitter();

 inviaMessaggio(titolo: string){
  this.messaggio.emit(titolo);
 }

 paginate(event){
  event.page = event.page+1;
  this.page=event.page;
 }
}

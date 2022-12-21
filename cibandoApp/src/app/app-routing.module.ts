import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { DetailComponent } from './components/recipes/detail/detail.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // default
  { path: 'home', component: HomeComponent },
  { path: 'ricette', component: RecipesComponent, children: [
    { path: '', pathMatch: 'full', component: RecipesListComponent },
    { path: 'dettaglio/:title/:_id', component: DetailComponent }
  ] },
  { path: '**', redirectTo: 'home' }  // pagina non trovata

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule {}

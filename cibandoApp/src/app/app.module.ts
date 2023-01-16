import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from "primeng/divider";

import { AppComponent } from './app.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { RecipeCardComponent } from './shared/recipe-card/recipe-card.component';
import { DetailComponent } from './components/recipes/detail/detail.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RegistrationComponent } from './components/user/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    RecipesComponent,
    HeaderComponent,
    HomeComponent,
    RecipeCardComponent,
    DetailComponent,
    RecipesListComponent,
    FooterComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    PasswordModule,
    DividerModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
